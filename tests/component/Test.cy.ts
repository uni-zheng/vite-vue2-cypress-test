import { Test } from '../../src'

describe('Component', () => {
  it('Test', () => {
    cy.mount(Test)

    cy
    .get('.test-root')
    .contains('test')
  })
})
