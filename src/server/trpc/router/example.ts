import { z } from "zod";
import { procedure, router } from "../utils";

export default router({
	hello: procedure.input(z.object({ name: z.string() })).query(({ input }) => {
		return `Hello ${input.name}`;
	}),

	random: router({
		get: procedure
			.query(() => {
				return ~~(Math.random() * 100);
			}),
		post: procedure
			.input(z.object({ num: z.number() }))
			.mutation(({ input }) => {
				return ~~(Math.floor(Math.random() * 100) / input.num);
			}),
	}),
});
