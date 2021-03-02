const { getComponentUrl } = require('../../scripts/util/test');

Cypress.Commands.add('visitComponent', name => {
  cy.visit(getComponentUrl(name));
});
