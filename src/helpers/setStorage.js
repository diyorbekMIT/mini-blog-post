export default function setStorage(key, value){
    try{    
        localStorage.setItem(key, value);
    } catch(err){
        console.error("Error setting localStorage:", err);
    }
}