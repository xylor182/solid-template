import { A } from "solid-start";
import Wrapper from "~/components/wrapper";

export default function NotFound() {
	return (
		<Wrapper>
			<div class="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 class="text-3xl font-thin tracking-tight text-white sm:text-[5rem]">
					Not Found
				</h1>
				<p class="my-4">
					<A href="/" class="text-white hover:underline">
						Home
					</A>
					<span class="px-3 text-[#39b398]">•</span>
					<A href="/about" class="text-white hover:underline">
						About Page
					</A>
				</p>
			</div>
		</Wrapper>
	);
}
