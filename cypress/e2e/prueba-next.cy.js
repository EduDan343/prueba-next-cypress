describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.Home_description__Qwq1f > h2')
      .should('be.visible')
      .then($data => {
        console.log('data :', $data[0].innerText)
        expect($data[0].innerText).to.have.length.greaterThan(20)
      })
      cy.get('h3').should('be.visible').contains("NOMBRE")
  })
})