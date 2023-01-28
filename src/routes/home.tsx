import type { VoidComponent } from "solid-js";
import Wrapper from "~/components/wrapper";
import { trpc } from "../utils/trpc";

const Home: VoidComponent = () => {
	const hello = trpc.example.hello.useQuery(() => ({ name: "from tRPC" }));

	return (
		<Wrapper>
			<div class="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
					{hello.data ?? "Loading tRPC query"}
				</h1>
			</div>
		</Wrapper>
	)
}

export default Home;