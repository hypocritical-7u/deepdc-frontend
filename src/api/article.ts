// 接口未使用
import request from '@/utils/request'

export function fetchList(query: string) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}

export function fetchArticle(id: number) {
    return request({
        url: '/vue-element-admin/article/detail',
        method: 'get',
        params: { id }
    })
}

export function fetchPv(pv: number) {
    return request({
        url: '/vue-element-admin/article/pv',
        method: 'get',
        params: { pv }
    })
}

export function createArticle(data: string) {
    return request({
        url: '/vue-element-admin/article/create',
        method: 'post',
        data
    })
}

export function updateArticle(data: string) {
    return request({
        url: '/vue-element-admin/article/update',
        method: 'post',
        data
    })
}
