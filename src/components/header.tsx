import { A, useLocation } from "solid-start";

export default function Header() {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname ? "border-[#026d56]" : "border-transparent hover:border-[#026d56]";

	return (
		<header class="bg-zinc-800 flex justify-center fixed min-w-full">
			<nav class="container">
				<ul class="flex items-center p-3 text-gray-200">
					<li class={`border-b-2 ${active("/home")} mx-1.5 sm:mx-6 transition-colors`}>
						<A href="/home">Home</A>
					</li>
					<li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6 transition-colors`}>
						<A href="/about">About</A>
					</li>
				</ul>
			</nav>
		</header>
	);
}
