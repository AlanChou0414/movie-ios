import { AUTH_TOKEN, HOST, VERSION } from "@env"
import axios from "axios"
import QueryString from "qs"

const URL = `${HOST}/${VERSION}/`

const useApi = () => {

  const useFetchData = async (url: string, params?: string, page?: number) => {
    const query = QueryString.stringify(
      { language: 'zh-TW', include_adult: true, query: params, page },
      { addQueryPrefix: true, }
    )

    const data = await axios(url + query, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    }).then(res => res.data)
    return data
  }

  return {
    useFetchSearch: (params: string) => useFetchData(`${URL}search/multi`, params),
    useFetchPopular: (page: number) => useFetchData(`${URL}movie/popular`, undefined, page)
  }
}

export default useApi