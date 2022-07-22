import request from '@/utils/request'

interface Ilogin {
  username: string,
  password: string
}

export function login(data: Ilogin) {
  return request({
    url: 'user/login',
    method: 'post',
    data: data
  })
}

export function getInfo(token: string) {
  return request({
    url: '/api/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'user/logout',
    method: 'get'
  })
}
