import { AdditionPayload } from "./types";
const loader = require("assemblyscript/lib/loader");
const wasmmodule = loader.instantiate(wasmprogram);

export async function handleRequest(request: Request): Promise<Response> {

	if (request.method === "POST") {
		return await addNumbers(await request.json());
	} 
	
	return new Response(`request method: ${request.method}`)
}

async function addNumbers({ numberOne, numberTwo } : AdditionPayload) {

	if (typeof numberOne !== "number") {
		return new Response("numberOne is not a number", {status: 400 })
	}

	if (typeof numberTwo !== "number") {
		return new Response("numberTwo is not a number", {status: 400 })
	}

	const result: number = wasmmodule.add(numberOne, numberTwo)
	const returnPayload = JSON.stringify({result});

	return new Response(returnPayload, {
		headers: {
			'content-type': 'application/json;charset=UTF-8',
		},
	});

}
