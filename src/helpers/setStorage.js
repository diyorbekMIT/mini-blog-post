export  function setStorage(key, value){
    try{    
        localStorage.setItem(key, value);
    } catch(err){
        console.error("Error setting localStorage:", err);
    }
}

export function getStorage(key){
    try{
        const token = localStorage.getItem(key);
        return token;
    } catch(err){
        console.error("Error getting localStorage:", err);
        return null;
    }
}

export function removeStorage(key){
    try{
        localStorage.removeItem(key);
    }   catch(err){
        console.error("Error removing localStorage:", err);
    }
}