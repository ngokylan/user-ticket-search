describe('Text', () => {
  beforeEach(() => {
    cy.visitComponent('Text');
  });

  it('should have proper html tags', () => {
    cy.get('span');
    cy.get('strong');
    cy.get('small');
  });

  it('should have all Text with different tags', () => {
    cy.contains('Text - Span');
    cy.contains('Text - Strong');
    cy.contains('Text - Small');
  });

  it('should have all Text with different sizes', () => {
    cy.contains('Text - Large');
    cy.contains('Text - Default');
    cy.contains('Text - Small');
    cy.contains('Text - Extra Small');
    cy.contains('Text - Button');
    cy.contains('Text - status');
  });

  it('should have data-testid', () => {
    cy.get('[data-testid="typography-default"]');
  });
});
