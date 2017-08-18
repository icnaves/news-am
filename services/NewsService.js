import Conf from '../config'
import { getLang } from '../store'

export const getNews = () => fetch(Conf.baseUrl + '/?lang=' + getLang())
    .then(data => {
        return data.json()
    })

export const getNewById = id => fetch(Conf.baseUrl + '/?lang=' + getLang() + '&id=' + id)
    .then(data => {
        return data.json()
    })