// "use client";

// import { Input } from "@/components/ui/input";
// import { api } from "../../../../../convex/_generated/api";
// import { Id } from "../../../../../convex/_generated/dataModel";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useAction } from "convex/react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { LoadingButton } from "@/components/LoadingButton";

// const formSchema = z.object({
//   text: z.string().min(1).max(250),
// });

// export function QuestionForm({ documentId }: { documentId: Id<"documents"> }) {
//   const askQuestion = useAction(api.documents.askQuestion);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       text: "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     await askQuestion({ question: values.text, documentId });
//     form.reset();
//   }

//   return (
//     <Form {...form}>
//       <form
//         className="flex flex-1 gap-2"
//         onSubmit={form.handleSubmit(onSubmit)}
//       >
//         <FormField
//           name="text"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem className="flex-1">
//               <FormControl>
//                 <Input
//                   placeholder="Ask any question over this document"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <LoadingButton
//           loadingText="Submitting..."
//           isLoading={form.formState.isSubmitting}
//         >
//           Submit
//         </LoadingButton>
//       </form>
//     </Form>
//   );
// }
