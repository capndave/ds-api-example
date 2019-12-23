import rootController from '../../src/controllers/rootController'
import { createRequest, createResponse } from 'node-mocks-http'
import { EventEmitter } from 'events' // to mock response

describe('the rootController function', () => {

  it('successfully returns response', () => {
    let request = createRequest()
    let response = createResponse({ eventEmitter: EventEmitter })
    response.on('end', () => {
      expect(response.statusCode).toBe(200)
    })
    rootController(request, response)
  })

  // TODO: Test for response content

})
