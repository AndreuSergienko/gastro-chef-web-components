import { Database } from "../Database";
import { APP_COLLECTIONS } from '../../constants'

class ArticleService {
    constructor() {
        this.database = Database.getInstance()
    }

    addArticle(body) {
        return this.database.create(APP_COLLECTIONS.articles, body)
    }

    getArticles() {
        return this.database.read(APP_COLLECTIONS.articles)
    }

    getArticle(id) {
        return this.database.readDoc(APP_COLLECTIONS.articles, id)
    }
}

export const articleService = new ArticleService();