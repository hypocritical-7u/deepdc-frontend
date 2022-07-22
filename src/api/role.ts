import request from '@/utils/request'

// 这些接口目前都未使用
export function getRoutes() {
    return request({
        url: '/vue-element-admin/routes',
        method: 'get'
    })
}

export function getRoles() {
    return request({
        url: '/vue-element-admin/roles',
        method: 'get'
    })
}

export function addRole(data: string) {
    return request({
        url: '/vue-element-admin/role',
        method: 'post',
        data
    })
}

export function updateRole(id: number, data: string) {
    return request({
        url: `/vue-element-admin/role/${id}`,
        method: 'put',
        data
    })
}

export function deleteRole(id: number) {
    return request({
        url: `/vue-element-admin/role/${id}`,
        method: 'delete'
    })
}
