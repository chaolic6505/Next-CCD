import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function ImageSkeleton() {
  return new Array(16).fill("").map((_, i) => (
    <div key={i} className="grid gap-4 w-full max-w-1xl mx-auto p-4">
      <Card key={i} className="h-[500px] p-6 flex flex-col justify-between">
        <Skeleton className="h-[60px] rounded" />
        <Skeleton className="h-[40px] rounded" />
        <Skeleton className="h-[20px] rounded" />
        <Skeleton className="w-[150px] h-[50px] rounded" />
      </Card>
    </div>
  ));
}

export default ImageSkeleton;
