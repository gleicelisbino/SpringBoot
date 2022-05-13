import axios from "axios"


export const getOrderDetails = (
    orderId) => {
    axios.get(`http://localhost:8080/api/findWithCountryName/?Find=${orderId}`, {
        orderId,  
    }
    )
}
