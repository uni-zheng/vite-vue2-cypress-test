describe('empty spec', () => {
  it('BFS 图片', () => {
    cy.visit('https://ff-dev.bilibili.com/?_port_=2200')

    cy
    .get('.test-root')
    .contains('test')
  })
})
