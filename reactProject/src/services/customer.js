import axios from "axios"

export const addCustomer = (customerId,
    companyName,
    contactName,
    contactTitle,
    address,
    city,
    region,
    postalCode,
    country,
    phone,
    fax) => {
    axios.post(`http://localhost:8080/api/Customers/${customerId}`, {
        customerId,  
        companyName,   
        contactName,   
        contactTitle,
        address,  
        city,    
        region,
        postalCode,
        country,  
        phone,
        fax,
    }
    )
}

export const updateCustomer = (
    customerId,
    companyName,
    contactName,
    contactTitle,
    address,
    city,
    region,
    postalCode,
    country,
    phone,
    fax) => {
    axios.put(`http://localhost:8080/api/Customers/${customerId}`, {
        customerId,  
        companyName,   
        contactName,   
        contactTitle,
        address,  
        city,    
        region,
        postalCode,
        country,  
        phone,
        fax,
    }
    )
}

export const deleteCustomer = (id) => {
    axios.delete(
        `http://localhost:8080/api/Customers/${id}`).then(alert("Deletado com sucesso!")
        )
        document.location.reload()
}

