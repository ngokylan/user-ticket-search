describe('Heading', () => {
  beforeEach(() => {
    cy.visitComponent('Heading');
  });

  it('should have all Heading with different sizes', () => {
    cy.contains('Title Extra Large');
    cy.contains('Title Large');
    cy.contains('Title Regular');
    cy.contains('Title Small');
    cy.contains('Title Extra Small');
    cy.contains('Title Micro');
  });

  it('should have all Heading with different type', () => {
    cy.contains('Title Type');
    cy.contains('Heading Type');
  });

  it('should have all Heading with different alignment', () => {
    cy.contains('Title - left');
    cy.contains('Title - Center');
    cy.contains('Title - Right');
    cy.contains('Title - Justify');
  });

  it('should have all Heading with different Decoration', () => {
    cy.contains('Title - Overline');
    cy.contains('Title - Line Through');
    cy.contains('Title - Underline');
  });

  // Note: Cypress can not detect css transform, we will test this in
  // Visual regression test
  it('should have all Heading with different Transform', () => {
    cy.contains('Title - Lowercase');
    cy.contains('Title - Uppercase');
    cy.contains('Title - Capitalize');
  });

  it('should have all Heading with different Bold, Italic  ', () => {
    cy.contains('Title - Bold');
    cy.contains('Title - Italic');
  });

  it('should have all Heading with different Colour  ', () => {
    cy.contains('Title Primary');
    cy.contains('Title Secondary');
    cy.contains('Title Information');
    cy.contains('Title Warning');
    cy.contains('Title Success');
    cy.contains('Title Danger');
  });

  it('should have data-testid', () => {
    cy.get('[data-testid="-typography-default"]');
  });
});
