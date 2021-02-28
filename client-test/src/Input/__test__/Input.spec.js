describe('Input', () => {
  beforeEach(() => {
    cy.visitComponent('Input');
  });

  it('should have all Inputs', () => {
    cy.get('input').should('have.length', 6);
  });

  it('should have data-testid', () => {
    cy.get('[data-testid="input-default"]').should('have.length', 1);
    cy.get('[data-testid="input-default-input"]').should('have.length', 1);
    cy.get('[data-testid="input-warning-input"]').should('have.length', 1);
    cy.get('[data-testid="input-error-input"]').should('have.length', 1);
    cy.get('[data-testid="input-success-input"]').should('have.length', 1);
    cy.get('[data-testid="input-disabled-input"]').should(
      'have.length',
      1
    );
  });

  it('should be able to click on default input', () => {
    cy.get('[data-testid="input-default-input"]').click();
    cy.contains('Clicking on Input: default');
  });

  it('should be able to click on default input and type inside it', () => {
    cy.get('[data-testid="input-default-input"]')
      .clear()
      .type('what is a ui component', { force: true })
      .should('have.value', 'what is a ui component');

    cy.contains('Text entered into Input: what is a ui component');
  });

  it('should be able to click on warning input', () => {
    cy.get('[data-testid="input-warning-input"]').click();
    cy.contains('Clicking on Input: warning status');
  });

  it('should be able to click on warning input and type inside it', () => {
    cy.get('[data-testid="input-warning-input"]')
      .clear()
      .type('what is a ui component', { force: true })
      .should('have.value', 'what is a ui component');

    cy.contains('Text entered into Input: what is a ui component');
  });

  it('should be able to click on warning input', () => {
    cy.get('[data-testid="input-warning-input"]').click();
    cy.contains('Clicking on Input: warning status');
  });

  it('should be able to click on warning input and type inside it', () => {
    cy.get('[data-testid="input-warning-input"]')
      .clear()
      .type('what is a ui component', { force: true })
      .should('have.value', 'what is a ui component');

    cy.contains('Text entered into Input: what is a ui component');
  });

  it('should be able to click on error input', () => {
    cy.get('[data-testid="input-error-input"]').click();
    cy.contains('Clicking on Input: error status');
  });

  it('should be able to click on error input and type inside it', () => {
    cy.get('[data-testid="input-error-input"]')
      .clear()
      .type('what is a ui component', { force: true })
      .should('have.value', 'what is a ui component');

    cy.contains('Text entered into Input: what is a ui component');
  });

  it('should be able to click on success input', () => {
    cy.get('[data-testid="input-success-input"]').click();
    cy.contains('Clicking on Input: success status');
  });

  it('should be able to click on success input and type inside it', () => {
    cy.get('[data-testid="input-success-input"]')
      .clear()
      .type('what is a ui component', { force: true })
      .should('have.value', 'what is a ui component');

    cy.contains('Text entered into Input: what is a ui component');
  });

  it('should have a disabled input to be disabled', () => {
    cy.get('[data-testid="input-disabled-input"]').should('be.disabled');
  });
});
