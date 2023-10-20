import axios, { AxiosInstance } from 'axios'

const isAuthenticated = () => false

const environmentIsDev =
  window.location.href.includes('develop') || window.location.href.includes('localhost')

let baseURL: any = environmentIsDev
  ? import.meta.env.VITE_APP_API
  : import.meta.env.VITE_APP_API_PROD

const getTokenData = (): string | null => {
  return sessionStorage.getItem('ezeteraToken')
}
const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: '',
}

const SERVICE = (): AxiosInstance => axios.create({ baseURL, headers })

const AUTHSERVICE = (): AxiosInstance => {
  if (!isAuthenticated()) window.location.href = '/'

  const token = getTokenData()
  let authHeaders = headers
  if (token !== null) {
    authHeaders = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    }
  }
  return axios.create({ baseURL, headers: authHeaders })
}

const AUTHSERVICERECOVERY = (token: string): AxiosInstance => {
  let authHeaders = headers
  if (token !== null) {
    authHeaders = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    }
  }
  return axios.create({ baseURL, headers: authHeaders })
}

const AUTHSERVICE_FORMDATA = (): AxiosInstance => {
  if (!isAuthenticated()) window.location.href = '/'

  const token = getTokenData()
  let authHeaders = headers
  if (token !== null) {
    authHeaders = {
      'Content-Type': 'multipart/form-data; charset=utf-8',
      Authorization: `Bearer ${token}`,
    }
  }
  return axios.create({ baseURL, headers: authHeaders })
}

export { SERVICE, AUTHSERVICE, AUTHSERVICERECOVERY, AUTHSERVICE_FORMDATA }
