describe('User can check their Bmi', () => {
  
  before(() => {
    cy.visit('http://localhost:3001')
  });

  it('is expected to show main header off the app', () => {
    cy.get('h1').should('contain.text', 'BMI Calculator')
  });

  describe('user can enter weight and height', () => {
  
    before(() => {
      cy.get('#weightInKg').type('92')
      cy.get('#heightInCm').type('197')
      cy.get('#calculate').click()
    });

    it('displays a BMI value of 23.7', () => {
      cy.get('#results').should('contain.text', '23.7')
    });
    it('displays a message of what class you are in', () => {
      cy.get('#results').should('contain.text', 'Normalweight')
    });
  });
}); 