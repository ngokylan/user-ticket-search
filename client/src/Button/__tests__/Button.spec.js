/**
 * Docs:
 * - https://docs.cypress.io/guides/references/assertions.html#Chai
 */
describe('Button', () => {
  beforeEach(() => {
    cy.visitComponent('Button');
  });

  it('should have all Buttons', () => {
    cy.contains('Implicit Default Button');
    cy.contains('Explicit Default Button');
    cy.contains('Primary Button');
    cy.contains('Danger Button');
  });

  it('should be able to click on implicit default button and see correct message', () => {
    cy.contains('Implicit Default Button').click();
    cy.contains('Clicking on Button: implicit default');
  });

  it('should be able to click on explicit default button and see correct message', () => {
    cy.contains('Explicit Default Button').click();
    cy.contains('Clicking on Button: explicit default');
  });

  it('should be able to click on primary button and see correct message', () => {
    cy.contains('Primary Button').click();
    cy.contains('Clicking on Button: primary');
  });

  it('should be able to click on danger button and see correct message', () => {
    cy.contains('Danger Button').click();
    cy.contains('Clicking on Button: danger');
  });

  it('should not be able to click on disabled default button', () => {
    cy.contains('Disabled Default Button').should('be.disabled');
    cy.contains('Disabled Default Button').click({ force: true });
    cy.contains('Clicking on Button: disabled default').should(
      'have.length',
      0
    );
  });

  it('should not be able to click on disabled primary button', () => {
    cy.contains('Disabled Primary Button').should('be.disabled');
    cy.contains('Disabled Primary Button').click({ force: true });
    cy.contains('Clicking on Button: disabled primary').should(
      'have.length',
      0
    );
  });

  it('should not be able to click on disabled danger button', () => {
    cy.contains('Disabled Danger Button').should('be.disabled');
    cy.contains('Disabled Danger Button').click({ force: true });
    cy.contains('Clicking on Button: disabled danger').should('have.length', 0);
  });

  it('should have data-testid', () => {
    cy.get('[data-testid="btn-default"]');
  });
});
