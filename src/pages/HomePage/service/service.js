import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"

export const getHomeById = (id) => {
    return openApi(BASE_URL).get(`/homes/${id}`)
}