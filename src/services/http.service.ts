import Axios from 'axios'
// import { router } from '@/router'

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api/'
  : '//localhost:3031/api/'


const axios = Axios.create({
  withCredentials: true
})

export const httpService = {
  get<DataType>(endpoint: string, data: DataType | null = null) {
    return ajax<DataType>(endpoint, 'GET', data)
  },
  post<DataType>(endpoint: string, data: DataType | null = null) {
    return ajax<DataType>(endpoint, 'POST', data)
  },
  put<DataType>(endpoint: string, data: DataType | null = null) {
    return ajax<DataType>(endpoint, 'PUT', data)
  },
  delete<DataType>(endpoint: string, data: DataType | null = null) {
    return ajax<DataType>(endpoint, 'DELETE', data)
  }
}

async function ajax<DataType>(endpoint: string, method = 'GET', data: DataType | null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: (method === 'GET') ? data : null
    })
    return res.data
  } catch (err: any) {
    console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data)
    console.dir(err)
    if (err.response && err.response.status === 401) {
      // Depends on routing startegy - hash or history
      window.location.assign('/#/login')
      // window.location.assign('/login')
      // router.push('/login')
    }
    throw err
  }
}