import axios from "../services/axios";

class ArticleService{

    async getArticles(){
        const response = await axios.get("/articles");
        return response.data;
    }
}

export default new ArticleService();