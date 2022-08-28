import {articles} from '../../../data'

// go to api/articles. u will get all the articles bellow
export default function handler(req,res){
    res.status(200).json(articles)
}

// we can import whatever databse here, and pass it on to show the
// for our api requests 