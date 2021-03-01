describe('Row', () => {
  beforeEach(() => {
    cy.visitComponent('Row');
  });

  it('should have all Text with in Rows', () => {
    cy.contains('A');
    cy.contains('B');
    cy.contains('C');
  });

  it('should have all 2 Row with in Rows', () => {
    cy.get('.row').should('have.length', 27);
  });

  it('should have all 6 Col with in Rows', () => {
    cy.get('.col').should('have.length', 84);
  });
});
