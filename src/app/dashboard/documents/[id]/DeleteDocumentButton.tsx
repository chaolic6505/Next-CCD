"use client";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";

import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/LoadingButton";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { btnIconStyles, btnStyles } from "@/styles/styles";

export function DeleteDocumentButton({
  documentId,
}: {
  documentId: Id<"documents">;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const deleteDocument = useMutation(api.documents.deleteDocument);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <AlertDialogTrigger>
        <Button variant="destructive" className={btnStyles}>
          <TrashIcon className={btnIconStyles} /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this document?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your document can not be recovered after it's been deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <LoadingButton
            onClick={() => {
              setIsLoading(true);
              deleteDocument({
                documentId,
              })
                .then(() => {
                  router.push("/");
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
            isLoading={isLoading}
            loadingText="Deleting..."
          >
            Delete
          </LoadingButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
