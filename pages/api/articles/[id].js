import {articles} from '../../../data'

// go to api/articles. u will get all the articles bellow
export default function handler({query:{id}},res){
    const filterred = articles.filter(article=> article.id === id)

    if (filterred.length > 0){
        res.status(200).json(filterred[0])
    } else {
        res.status(404).json({message: `article with the id of ${id} is not found`})
    }
}

// in this doc, we get specific path (id).
// we filter the list of arritcle, find and retun what matches the url id
// thats why we return the first element.
// dont forget to add 404 response as well

// now we can use this API set up. in our data. 
// real world woudl be just connecting to db here, set routes that your app need and use them