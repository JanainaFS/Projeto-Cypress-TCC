/// <reference types = "Cypress"/>
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('GitLab', () => {

    beforeEach(() => {
        var login = signupFactory.login()
        signup.logar(login)
    })

    it('Verificar login no GitLab', function(){
        cy.contains('h2[data-qa-selector="welcome_title_content"]', 'Welcome to GitLab').should('be.visible')
    })

    it('Criar projeto, criar issue e deletar projeto', function() {
        var project = signupFactory.project()
    
        signup.criarDeletarProjetoeIssue(project)        
    })
})