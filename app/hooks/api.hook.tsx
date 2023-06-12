import { AUTH_TOKEN, HOST, VERSION } from "@env"
import axios from "axios"
import QueryString from "qs"

const URL = `${HOST}/${VERSION}/`

const useApi = () => {

  const useFetchData = async (url: string, params?: string, page?: number) => {
    const query = QueryString.stringify(
      { language: 'zh-TW', include_adult: false, query: params, page },
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
    useFetchPopular: () => useFetchData(`${URL}movie/popular`, undefined),
    useFetchSearchAll: () => useFetchData(`${URL}trending/all/week`),
    useFetchNowPlaying: () => useFetchData(`${URL}movie/now_playing`),
    useFetchUpcoming: () => useFetchData(`${URL}movie/upcoming`),
    useFetchTopRated: () => useFetchData(`${URL}movie/top_rated`),
    useFetchTvToday: () => useFetchData(`${URL}tv/airing_today`),
    useFetchTvAir: () => useFetchData(`${URL}tv/on_the_air`),
    useFetchTvTop: () => useFetchData(`${URL}tv/top_rated`),
    useFetchTvPopular: () => useFetchData(`${URL}tv/popular`),
  }
}

export default useApi