import axios from "axios"

// export const URL_PREFIX = process.env.REACT_APP_IS_PROD ? process.env.REACT_APP_PROD_URL_PREFIX : "http://43.231.114.215:7001";
export const URL_PREFIX = process.env.REACT_APP_IS_PROD ? process.env.REACT_APP_PROD_URL_PREFIX : "http://43.231.114.43:7001";

const apiItem = (mainRouteName: string) => ({

    save: (data: any) => axios.post(`${URL_PREFIX}/itemcode/${mainRouteName}`, data),
    getMany: () => axios.get(`${URL_PREFIX}/itemcode/${mainRouteName}`,),
    getManyBarcodeLike: (barcode: string) => axios.get(`${URL_PREFIX}/itemcode/${mainRouteName}?barcode=${barcode}`,),
    getOneBarcode: (barcode: string) => axios.get(`${URL_PREFIX}/itemcode/${mainRouteName}?barcode=${barcode}`,),
    update: (data: any) => axios.post(`${URL_PREFIX}/itemcode/${mainRouteName}`, data),

})

export default apiItem
