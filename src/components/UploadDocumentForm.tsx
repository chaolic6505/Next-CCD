"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/LoadingButton";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z.string().min(1).max(250),
  file: z.instanceof(File),
});

export default function UploadDocumentForm({
  onUpload,
}: {
  onUpload: () => void;
}) {
  const organization = useOrganization();
  const createDocument = useMutation(api.documents.createDocument);
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = await generateUploadUrl();

    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": values.file.type },
      body: values.file,
    });
    const { storageId } = await result.json();

    await createDocument({
      title: values.title,
      fileId: storageId as Id<"_storage">,
      orgId: organization.organization?.id,
    });
    onUpload();
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Expense Report" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept=".txt,.xml,.doc"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          loadingText="Uploading..."
          isLoading={form.formState.isSubmitting}
        >
          Upload
        </LoadingButton>
      </form>
    </Form>
  );
}
