// @refresh reload
import "./core.css";
import { Suspense } from "solid-js";
import {
	Body,
	ErrorBoundary,
	Head,
	Html,
	Meta,
	Navigate,
	Route,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import { trpc, queryClient, client } from "~/utils/trpc";
import Home from "./routes/home";
import About from "./routes/about";
import NotFound from "./routes/[...404]";

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
							<Routes>
								<Route path="/home" component={Home} />
								<Route path="/about" component={About} />
								<Route path="/" element={<Navigate href="/home" />} />
								<Route path="*" component={NotFound} />
							</Routes>
						</ErrorBoundary>
					</Suspense>
				</trpc.Provider>
				<Scripts />
			</Body>
		</Html>
	);
}
