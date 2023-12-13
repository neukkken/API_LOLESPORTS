import News from '../models/LolEsports.model.news.js'


export const getAllNews = async (req, res) => {
    try {
        const foundNews = await News.find()
        res.status(200).json({ foundNews })
    } catch (error) {
        res.send(error)
    }
}

export const postNews = async (req, res) => {
    try {
        const {title, img} = req.body

        const newNews = News({
            title,
            img
        })
        const savedNews = await newNews.save()

        res.status(200).json({ message: "NEWS SAVED", savedNews })
    } catch (error) {
        res.status(400).json({ message: `SERVER ERROR! ${error}` })
    }

}



