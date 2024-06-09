"use client";

import Image from "next/image";
import { useQuery } from "convex/react";
import { useOrganization } from "@clerk/nextjs";

import { api } from "../../../../convex/_generated/api";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DocumentCard } from "@/components/DocumentCard";
import CreateDocumentButton from "@/components/UploadDocumentButton";

export default function Home() {
  const organization = useOrganization();

  const documents = useQuery(api.documents.getDocuments, {
    orgId: organization.organization?.id,
  });

  return (
    <view className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Documents</h1>
        <CreateDocumentButton />
      </div>

      {!documents && (
        <div className="grid grid-cols-3 gap-8">
          {new Array(8).fill("").map((_, i) => (
            <Card
              key={i}
              className="h-[200px] p-6 flex flex-col justify-between"
            >
              <Skeleton className="h-[20px] rounded" />
              <Skeleton className="h-[20px] rounded" />
              <Skeleton className="h-[20px] rounded" />
              <Skeleton className="w-[80px] h-[40px] rounded" />
            </Card>
          ))}
        </div>
      )}

      {documents && documents.length === 0 && (
        <div className="py-12 flex flex-col justify-center items-center gap-8">
          <Image
            width="200"
            height="200"
            src="/documents.svg"
            alt="a picture of a girl holding documents"
          />
          <h2 className="text-2xl">You have no documents</h2>
          <CreateDocumentButton />
        </div>
      )}

      {documents && documents.length > 0 && (
        <div className="grid grid-cols-3 gap-8">
          {documents?.map((doc) => <DocumentCard document={doc} />)}
        </div>
      )}
    </view>
  );
}
