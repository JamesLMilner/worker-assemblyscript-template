// set up global namespace for worker environment
//@ts-ignore
import * as makeServiceWorkerEnv from 'service-worker-mock'
import { readFileSync } from 'fs'
declare var global: any
Object.assign(global, makeServiceWorkerEnv())
global.wasmprogram = new WebAssembly.Module(readFileSync(__dirname + '/../../worker/module.wasm'));