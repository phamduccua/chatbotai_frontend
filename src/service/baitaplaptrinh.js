import request from '../utils/request'

export const getBaiTapLapTrinhById = async (code) => {
    const response = await request.get("get/bai-tap-lap-trinh-" + code)
    return response.data
}

export const addBaiTapLapTrinh = async (option = {}) => {
    const response = await request.post("/add/bai-tap-lap-trinh", option)
    return response.data
}

export const updateBaiTapLapTrinh = async (option = {}) => {
    const response = await request.put("update/bai-tap-lap-trinh", option)
    return response.data
}
 export const getListBaiTapLapTrinh = async() => {
    const response = await request.get("get/bai-tap-lap-trinh")
    return response.data
 }

 export const deleteBaiTapLapTrinh = async (ids) => {
    const response = await request.delete("detete/bai-tap-lap-trinh", {data:ids})
    return response.data
 }