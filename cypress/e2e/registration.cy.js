describe('Funcionalidade: Cadastro de Usuário', () => {
  const massa = require('../fixtures/usuarios.json');

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
  });

  massa.usuarios.forEach((usuario) => {
    it(`Deve cadastrar com sucesso o usuário: ${usuario.nome}`, () => {
      const timestamp = new Date().getTime();
      const emailUnico = `${usuario.email.split('@')[0]}_${timestamp}@${usuario.email.split('@')[1]}`;
      
      cy.visit('https://automationexercise.com/login', {
        timeout: 120000,
        failOnStatusCode: false
      });

      cy.get('[data-qa="signup-name"]', { timeout: 30000 }).should('be.visible');
      cy.get('[data-qa="signup-email"]', { timeout: 30000 }).should('be.visible');

      cy.get('[data-qa="signup-name"]').type(usuario.nome);
      cy.get('[data-qa="signup-email"]').type(emailUnico);
      
      cy.get('[data-qa="signup-button"]').click();

      cy.url({ timeout: 30000 }).should('include', '/signup');
      cy.contains('Enter Account Information', { timeout: 30000 }).should('be.visible');
    });
  });
});
