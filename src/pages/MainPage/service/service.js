import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"

export const getListHomes = () => {
    return openApi(BASE_URL).get('/homes')
}