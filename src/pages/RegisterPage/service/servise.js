import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"

export const postRegister = (data) => {
    return openApi(BASE_URL).post('/register', data);
}