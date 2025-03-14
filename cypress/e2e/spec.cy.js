describe('check if website is running at localhost', () => {
  it('check the h2 element', () => {
    cy.visit('http://localhost:5080');
    cy.get('h2').should('exist');
    cy.get('h2').should('contain.text', 'Bli medlem');
  });
});