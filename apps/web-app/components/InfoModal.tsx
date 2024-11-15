"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { IconInfoCircle, IconX } from "@tabler/icons-react";
import type React from "react";
import LinkButton from "./ui/LinkButton";

const InfoModal: React.FC = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<IconInfoCircle className="hover:-translate-y-[1px] hover:cursor-pointer active:translate-y-4 duration-200 ease-out" />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed bg-white/40 z-59 backdrop-blur-sm data-[state=open]:animate-overlayShow inset-0" />
				<Dialog.Content
					className="bg-fg-1 p-32 rounded-[24px] border border-stroke-1 z-50 backdrop-blur-3xl data-[state=open]:animate-contentShow
        flex flex-col gap-12
      fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
				>
					<div className="flex w-full justify-between">
						<Dialog.Title className="h3 font-medium">
							About Bibleio
						</Dialog.Title>
						<Dialog.Close asChild>
							<button
								type="button"
								className="hover:-translate-y-[1px] hover:cursor-pointer active:translate-y-4 hover:text-red-400 duration-200 ease-out"
								aria-label="Close"
							>
								<IconX />
							</button>
						</Dialog.Close>
					</div>

					<Dialog.Description className="flex flex-col gap-12">
						<p className="body">
							Bibleio is a minimalist, open-source, simple Bible viewing app.
							<br />
							Bibleio currently only supports English.
						</p>

						<div className="flex flex-wrap gap-12">
							<LinkButton text="Made by dukc" link="https://dukc.dev" />
							<LinkButton
								text="Uses scripture.api.bible"
								link="https://scripture.api.bible/"
							/>
							<LinkButton
								text="GitHub"
								link="https://github.com/bibleio/bibleio"
							/>
						</div>
						<p className="sub">Version 1.1 - Licensed under GPL-3</p>
					</Dialog.Description>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default InfoModal;
