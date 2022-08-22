var faker = require('faker')

export default {
    login: function() {
        var dataLogin = {
            user: '',
            senha: ''
        }
        return dataLogin
    },
    
    project: function() {
        var name = faker.random.uuid()
        var descricaoProject = faker.lorem.paragraph(3)
        var titleIssue = faker.random.uuid()
        var descricaoIssue = faker.lorem.paragraph(3)

        var data = {
            name: `${name}`,
            descricaoProject: `${descricaoProject}`,
            titleIssue: `${titleIssue}`,
            descricaoIssue: `${descricaoIssue}`
        }
        return data
    }
}