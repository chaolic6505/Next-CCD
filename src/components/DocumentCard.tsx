import Link from "next/link";
import { Eye, Loader2 } from "lucide-react";
import {
  Card,
  CardTitle,
  CardFooter,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Doc } from "../../convex/_generated/dataModel";
export function DocumentCard({ document }: { document: Doc<"documents"> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          {!document.description ? (
            <div className="flex justify-center">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            document.description
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="flex items-center gap-2">
          <Link href={`/dashboard/documents/${document._id}`}>
            <Eye className="w-4 h-4" /> View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
