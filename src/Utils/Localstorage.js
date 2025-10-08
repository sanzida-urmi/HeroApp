import js from "@eslint/js";

export const getlocal = () =>{
    try{
        const data = localStorage.getItem('install')
        return data? JSON.parse(data) : []
    }
    catch(err){
        console.log(err);
        return []
    }
}

export const updatelocal =(app)=>{
    const getlist = getlocal();

    try{
        const isduplicate = getlist.some(p=> p.id === app.id)
        if(isduplicate) return alert('already exist');
        const updatelocallist = [...getlist, app]

        localStorage.setItem('install', JSON.stringify(updatelocallist))
    }
    catch(err){
        console.log(err)
    }
}