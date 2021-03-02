describe('Col', () => {
  beforeEach(() => {
    cy.visitComponent('Col');
  });

  it('should have all Text with in containers', () => {
    cy.contains('A');
    cy.contains('B');
    cy.contains('C');
  });

  it('should have all 2 Row with in containers', () => {
    cy.get('.row').should('have.length', 12);
  });

  it('should have all 6 Col with in containers', () => {
    cy.get('.col').should('have.length', 39);
  });
});
