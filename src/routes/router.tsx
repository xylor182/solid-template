import {
	Navigate,
	Route,
	Routes,
} from "solid-start";
import Home from "./home";
import About from "./about";
import NotFound from "./[...404]";

export default function Router() {
	return (
		<Routes>
			<Route path="/home" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/" element={<Navigate href="/home" />} />
			<Route path="*" component={NotFound} />
		</Routes>
	)
}
