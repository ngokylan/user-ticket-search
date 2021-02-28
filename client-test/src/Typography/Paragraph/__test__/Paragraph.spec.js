describe('Paragraph', () => {
  beforeEach(() => {
    cy.visitComponent('Paragraph');
  });

  it('should have all Paragraph with different sizes', () => {
    cy.contains('Large Paragraph');
    cy.contains('Regular Paragraph');
    cy.contains('Small Paragraph');
    cy.contains('Extra Small Paragraph');
  });

  it('should have data-testid', () => {
    cy.get('[data-testid="typography-default"]');
  });
});
