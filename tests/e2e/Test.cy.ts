describe('e2e', () => {
  it('Test', () => {
    cy.visit('https://ff-dev.bilibili.com/?_port_=2200')

    cy
    .get('.test-root')
    .contains('test')
  })
})
