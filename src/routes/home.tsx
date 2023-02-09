import type { VoidComponent } from "solid-js";
import Wrapper from "~/components/wrapper";
import { trpc } from "../utils/trpc";

const Home: VoidComponent = () => {
	const hello = trpc.example.hello.useQuery(() => ({ name: "from tRPC" }));
	const randomGet = trpc.example.random.get.useQuery();
	const randomPost = trpc.example.random.post.useMutation();

	const handleChange = () => {
		randomPost.mutate({ num: 2 })
	}

	return (
		<Wrapper>
			<div class="container flex flex-col items-center justify-center gap-6 px-4 py-16 ">
				<h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
					{hello.data ?? "Loading tRPC query"}
				</h1>
				<div class="flex flex-col items-center gap-2">
					<span class="text-white font-bold">{randomPost.data ?? 0}</span>
					<button
						class="text-l px-8 py-3 font-bold bg-white text-[#026d56] rounded"
						onClick={(evt) => {
							evt.stopPropagation();
							handleChange();
						}}>
						Randomize rees
					</button>
					<span class="text-white">Press to get a random number using POST</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<span class="text-white font-bold">{randomGet.data ?? 2}</span>
					<button
						class="text-l px-8 py-3 font-bold bg-white text-[#026d56] rounded"
						onClick={() => {
							randomGet.refetch();
						}}>
						Randomize
					</button>
					<span class="text-white">Press to get a random number using GET</span>
				</div>
			</div>
		</Wrapper>
	)
}

export default Home;