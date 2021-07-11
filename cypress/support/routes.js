class Routes {

    as = {
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticlesTitle',
        getArticlesTitleComments: 'getArticlesTitleComments',
        postUsers: 'postUsers',
        getTags: 'getTags',
        getFeed: 'getFeed'


    }

    init(){
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles)
        cy.intercept('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle)
        cy.intercept('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments)
        cy.intercept('POST', '**/api/users').as(this.as.postUsers)
        cy.intercept('GET', '**/api/tags').as(this.as.getTags)
        cy.intercept('GET', '**/api/articles/feed**').as(this.as.getFeed)

    }
}

export default new Routes()