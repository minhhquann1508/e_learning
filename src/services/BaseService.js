import axios from "axios"
import { DOMAIN, GROUP_ID, TOKEN } from "../util/constant/constant"
import { ACCESS_TOKEN } from "../redux/types/Constant"
const userAccessToken = localStorage.getItem(ACCESS_TOKEN);
export class BaseService {
    get(url) {
        return axios({
            method: 'GET',
            url: `${DOMAIN}${url}&MaNhom=${GROUP_ID}`,
            headers: {
                TokenCyberSoft: TOKEN,
                Authorization: `Bearer ${userAccessToken !== null ? userAccessToken.replace(/"/g, "") : userAccessToken}`
            }
        })
    }
    post = (url, model) => {
        console.log();
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: {
                TokenCyberSoft: TOKEN,
                Authorization: `Bearer ${userAccessToken !== null ? userAccessToken.replace(/"/g, "") : userAccessToken}`
            }
        })
    }
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: {
                TokenCyberSoft: TOKEN,
                Authorization: `Bearer ${userAccessToken !== null ? userAccessToken.replace(/"/g, "") : userAccessToken}`
            }
        })
    }
    delete = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: {
                TokenCyberSoft: TOKEN,
                Authorization: `Bearer ${userAccessToken !== null ? userAccessToken.replace(/"/g, "") : userAccessToken}`
            }
        })
    }
}
