import { AUTH_TOKEN, HOST, VERSION } from "@env"
import axios from "axios"
import QueryString from "qs"
import useSWR from "swr"

const API_URL = `${HOST}/${VERSION}/`

const axiosGetWithAuth = (url: string) => (
  axios(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
  }).then(res => console.log(res.data))
)

const useApi = () => {

  const useFetchData = (fetcher: any, url: string, params: string) => {
    const query = QueryString.stringify(
      { language: 'zh-TW', include_adult: true, query: params },
      { addQueryPrefix: true, }
    )

    const { data, mutate } = useSWR(fetcher(url + query))

    return { data, refresh: mutate }
  }

  return {
    useFetchSearch: (params: string) => useFetchData(axiosGetWithAuth, `${API_URL}search/multi`, params),
  }
}

export default useApi