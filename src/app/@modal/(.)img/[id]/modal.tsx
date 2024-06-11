"use client";

import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<"dialog">>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	return createPortal(
		<dialog
			ref={dialogRef}
			onClose={onDismiss}
			className="absolute h-screen w-screen bg-black/90"
		>
			{children}
			{/* <button onClick={onDismiss} className="close-button" /> */}
		</dialog>,
		document.getElementById("modal-root")!,
	);
}
