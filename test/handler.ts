import { expect } from 'chai'
import { handleRequest } from '../src/handler'

describe('handler returns response with request method for none POST requests', () => {
  const methods = [
    'GET',
    'HEAD',
    'PUT',
    'DELETE',
    'CONNECT',
    'OPTIONS',
    'TRACE',
    'PATCH',
  ]
  methods.forEach(method => {
    it(method, async () => {
      const result = await handleRequest(new Request('/', { method }))
      const text = await result.text()
      expect(text).to.include(method)
    })
  })
})

describe('returns two numbers for POST requests', () => {
    it('POST', async () => {
      const result = await handleRequest(new Request('/', { 
        method: "POST",
        body: JSON.stringify({ numberOne: 2, numberTwo: 2 })
      }))

      expect(result.status).to.equal(200);
      const json = await result.json();
      expect(json).to.include({ result: 4 });
    })
})