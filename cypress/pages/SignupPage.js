class SignupPage {
    logar(login) {
        cy.visit('/')

        cy.get('input[data-qa-selector="login_field"]').type(login.user)
        cy.get('input[data-qa-selector="password_field"]').type(login.senha)
        cy.get('input[data-qa-selector="sign_in_button"]').click()
    }

    criarDeletarProjetoeIssue(project){
        //Criar projeto
        cy.get('#js-onboarding-new-project-link').click()
        cy.get('.qa-global-new-project-link').click()

        cy.get('#project_name').type(project.name)
        cy.get('#project_description').type(project.descricaoProject)
        cy.get('#project_visibility_level_0').click()
        cy.get('#project_initialize_with_readme').click()
        cy.contains('Create project').click()
        
        //Verifica se o projeto foi criado com sucesso
        cy.contains("Project '"+project.name+"' was successfully created.").should('be.visible')
        cy.contains('#tree-slider', 'README.md').should('be.visible')

        //Criar Issue
        cy.get("#js-onboarding-issues-link").click()
        cy.get("#new_issue_link").click()

        cy.get('#issue_title').type(project.titleIssue)
        cy.get('#issue_description').type(project.descricaoIssue)
        cy.get('#issue_confidential').click()
        cy.contains('Assign to me').click()
        cy.contains('Submit issue').click()

        //Verifica se Issue foi criada com sucesso
        cy.contains('.title-container', project.titleIssue).should('be.visible')

        //Deletar projeto
        cy.get('#js-onboarding-settings-link').click()
        cy.get('#js-project-advanced-settings').click()
        cy.contains('input', 'Remove project').click()
        cy.get('#confirm_name_input').type(project.name)
        cy.contains('input', 'Confirm').click()
        cy.contains("Project 'Janaina / "+project.name+"' is in the process of being deleted.").should('be.visible')
    }
}

export default new SignupPage;