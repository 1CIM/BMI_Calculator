describe('User can check their Bmi', () => {
  it('user can enter weight and height', () => {
    cy.visit('http://localhost:3001')
    cy.contains('BMI Calculator')
    cy.get('#weight').type('92')
    cy.get('#height').type('197')
    cy.get('#calculate').click()
  })

  it('displays a BMI value of 23.71', () => {
    cy.get('#results').should('contain', '23.71')
  })
})