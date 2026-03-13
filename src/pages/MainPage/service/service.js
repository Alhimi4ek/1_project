import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"

export const getListHomes = () => {
    return openApi(BASE_URL).get('/homes')
}

export const sendHomeData = (payload) => {
    return openApi(BASE_URL).post('/homes', payload)
}