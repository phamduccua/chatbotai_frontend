import request from '../utils/request'

export const getBaiThucHanh = async (option = {}) => {
    const response = await request.get("get/bai-thuc-hanh", option)
    return response.data
}