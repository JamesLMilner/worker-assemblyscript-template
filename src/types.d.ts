import { KVNamespace } from '@cloudflare/workers-types'

declare global {
  const wasmprogram: {
	  add: (numberOne: number, numberTwo: number) => number;
  };
  const myKVNamespace: KVNamespace
}

interface AdditionPayload { 
	numberOne: number,
	numberTwo: number 
}