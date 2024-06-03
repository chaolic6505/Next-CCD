"use client";
import { Authenticated, Unauthenticated } from "convex/react";

import FormFields from "./FormFields";
import FormDetails from "./FormDetails";
import FormResponses from "./FormResponses";

export default function Page({ params }: { params: { id: string } }) {
	return (
		<>
			<Unauthenticated>Please sign in.</Unauthenticated>
			<Authenticated>
				<FormDetails id={params.id} />
				<hr />
				<FormFields id={params.id} />
				<hr />
				<h2>Responses</h2>
				<FormResponses id={params.id} />
			</Authenticated>
		</>
	);
}
