// @refresh reload
import "./core.css";
import { Suspense } from "solid-js";
import {
	Body,
	ErrorBoundary,
	Head,
	Html,
	Meta,
	Scripts,
	Title,
} from "solid-start";
import { trpc, queryClient, client } from "~/utils/trpc";
import Router from "./routes/router";

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>Create Solid + tRPC</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body>
				<trpc.Provider client={client} queryClient={queryClient}>
					<Suspense>
						<ErrorBoundary>
							<Router />
						</ErrorBoundary>
					</Suspense>
				</trpc.Provider>
				<Scripts />
			</Body>
		</Html>
	);
}
