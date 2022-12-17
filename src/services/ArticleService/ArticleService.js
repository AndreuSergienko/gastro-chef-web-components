import { Database } from "../Database";
import { APP_COLLECTIONS } from '../../constants'

class ArticleService {
    constructor() {
        this._database = Database.getInstance()
    }

    addArticle(body) {
        return this._database.create(APP_COLLECTIONS.articles, body)
    }

    getArticles() {
        return this._database.read(APP_COLLECTIONS.articles)
    }

    getArticle(id) {
        return this._database.readDoc(APP_COLLECTIONS.articles, id)
    }
}

export const articleService = new ArticleService();