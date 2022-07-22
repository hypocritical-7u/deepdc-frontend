import request from '@/utils/request'

interface IBaseDeviceForm {
    device_ip: string,
    device_name: string,
    device_owner: string,
    device_version: string,
    room_id: string,
    u_index: number,
    data_source: {
        snmp_community: string,
        snmp_ip: string,
        snmp_version: number
    }
}

interface IDvDeviceForm {
    rack_id: string,
}

interface IDvDeviceAutoForm extends IDvDeviceForm {
    policy_type: number
}

interface IUpdateDecideForm extends IBaseDeviceForm {
    device_id: string,
    device_manager: string,
    rack_name: string,
}

interface IUpdateRackForm {
    rack_id: string,
    rack_name: string,
    total_capacity: string,
    room_id: string,
    data_source: string
}
interface IRackForm extends IUpdateRackForm {
    location: number,
}

interface IRoom {
    room_id: string,
    room_name: string,
    room_addr: string
}
// 获取机房列表的接口
export function getDcInfo(room_id: string) {
    return request({
        url: 'api/get_dc_info',
        method: 'get',
        params: { room_id }
    })
}
// 添加交换机，(手动添加)服务器的统一接口
export function addDcDevice(addForm: IDvDeviceForm) {
    return request({
        url: 'api/add_dc_device_man',
        method: 'post',
        data: addForm
    })
}
// 自动添加服务器
export function addDcDeviceAuto(addForm: IDvDeviceAutoForm) {
    return request({
        url: 'api/add_dc_device_auto',
        method: 'post',
        data: addForm
    })
}

// 添加机柜
export function addDcRack(addForm: IRackForm) {
    return request({
        url: 'api/add_dc_rack',
        method: 'post',
        data: addForm
    })
}
// 更新机柜
export function updateDcRack(editForm: IUpdateRackForm) {
    return request({
        url: 'api/modify_dc_rack',
        method: 'post',
        data: editForm
    })
}
// 删除机柜
export function delDcRack(room_id: string, rack_id: string) {
    return request({
        url: 'api/del_dc_rack',
        method: 'get',
        params: { room_id, rack_id }
    })
}
// 删除设备支持批量删除
export function delDevice(delDeviceForms: any) {
    return request({
        url: 'api/del_dc_deviceset',
        method: 'post',
        data: delDeviceForms
    })
}
// 搜索机房列表
export function searchDc(room_id: string, input_id: string) {
    return request({
        url: 'api/search_rack_device',
        method: 'get',
        params: { room_id, input_id }
    })
}
// 查看机柜信息
export function getRackInfo(room_id: string, rack_id: string) {
    return request({
        url: 'api/get_rack_info',
        method: 'get',
        params: { room_id, rack_id }
    })
}
// 查看设备（服务器，交换机)信息
export function getDeviceInfo(room_id: string, device_id: string) {
    return request({
        url: 'api/get_equipment_info',
        method: 'get',
        params: { room_id, device_id }
    })
}
// 更新交换机，服务器
export function updateDevice(editForm: IUpdateDecideForm) {
    return request({
        url: 'api/update_dc_device',
        method: 'post',
        data: editForm
    })
}
// 获取机柜下的设备
export function getRackDevice(room_id: string, rack_id: string) {
    return request({
        url: 'api/get_devices_of_rack',
        method: 'get',
        params: { room_id, rack_id }
    })
}
// 修改机房信息
export function updateRoom(editForm: IRoom) {
    return request({
        url: 'api/modify_room_info',
        method: 'post',
        data: editForm
    })
}

