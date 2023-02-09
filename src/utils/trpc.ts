import { QueryClient } from "@tanstack/solid-query";
import type { IAppRouter } from "~/server/trpc/router/_app";
import { createTRPCSolid } from "solid-trpc";
import { httpBatchLink } from "@trpc/client";

const getBaseUrl = () => {
	if (typeof window !== "undefined") return "";
	return "http://127.0.0.1:5173";
};

export const trpc = createTRPCSolid<IAppRouter>();

export const client = trpc.createClient({
	links: [
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`,
		}),
	],
});

export const queryClient = new QueryClient();