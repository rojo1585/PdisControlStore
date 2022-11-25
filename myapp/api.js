const API = 'http://localhost:3000/productos'
const API2 = 'http://localhost:3000/users'
const API3 = 'http://localhost:3000/datesbyfecha'
//const API4 = 'http://localhost:3000/users'

export const getDates = async () => {
    const res = await fetch(API); 
    return await res.json();
};

export const getDateByID = async (id) =>{
    const res = await fetch(API + '/' + id); 
    return await res.json();
}

export const getDateByDate = async (fecha) =>{
    const res = await fetch(API3 + '/' + fecha); 
    return await res.json();
}

export const saveDate = async (newDate) => {
    const res = await fetch(API, {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify(newDate)
    });
    
    return await res.json();
};
export const deleteDate = async (id) => {
    
    fetch(API + '/' + id, {
        method: "DELETE",
    });
};

export const updateDate = async (id, newDate) => {
    await fetch(API + '/' + id, {
        method: "PUT",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newDate),
    })
};

export const getUser = async (email) => {
    console.log(API2 + '/' + email)
    const res = await fetch(API2 +'/'+email); 
    return await res.json();
};

export const getAllUsers = async () => {
    const res = await fetch(API2); 
    return await res.json();
};

export const addNewUser = async (NewUser) => {
    const res = await fetch(API2, {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify(NewUser)
        
    });
    console.log(res.json())
    return await res.json();
};

export const deleteClient = async (id) => {
    
    fetch(API2 + '/' + id, {
        method: "DELETE",
    });
};

export const updateClient = async (id, newDate) => {
    await fetch(API2 + '/' + id, {
        method: "PUT",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newDate),
    })
};

export const getUserByID = async (id) => {
    const res = await fetch(API2 +'/'+id); 
    return await res.json();
};