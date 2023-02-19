describe('register user and login', () => {

  beforeEach(() => {
    cy.viewport('iphone-8')
    cy.contains('E-mail ou senha incorretos!').should('not.exist')
  })

  it('Register user', () => {
    cy.visit("http://localhost:3000/cadastrar")

    cy.fixture('adminUserData').then((userData) => {

      cy.get('[placeholder="Nome"]').type(userData.name)
      cy.get('[placeholder="E-mail"]').type(userData.email)
      cy.get('[placeholder="Senha"]').type(userData.password)
      cy.get('[placeholder="Digite a senha novamente"]').type(userData.password)
    })

    //cy.intercept('POST', 'http://localhost:8080/users').as('postRegister')
    cy.get('form > button').click()
    //cy.wait('@postRegister').its('response.statusCode').should('eq', 500)
  })

  it('testing reject fake login', () => {
    cy.visit("http://localhost:3000")
    cy.fixture('adminUserData').then((userData) => {

      cy.get('.LoginPage_inputBox1__nr67z').type(userData.email)
      cy.get('[placeholder="Senha"]').type(userData.definitelyNotPassword)
    })

    cy.intercept('POST', 'http://localhost:8080/login').as('postLoginFalse')
    cy.get('form > button').click()
    cy.wait('@postLoginFalse').its('response.statusCode').should('eq', 403)

    cy.contains('E-mail ou senha incorretos!').should('exist')
  })

  it('testing login', () => {

    cy.visit("http://localhost:3000")
    cy.fixture('adminUserData').then((userData) => {

      cy.get('.LoginPage_inputBox1__nr67z').type(userData.email)
      cy.get('[placeholder="Senha"]').type(userData.password)
    })

    cy.intercept('POST', 'http://localhost:8080/login').as('postLogin')
    cy.get('.LoginPage_form__vD6-s > button').click()
    cy.wait('@postLogin').its('response.statusCode').should('eq', 200)
  })

})