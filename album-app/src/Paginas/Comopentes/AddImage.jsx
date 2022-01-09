import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import ad from './style/add.module.css';
import { addPhoto, deletePhotoStorage } from "../../action";

const supabaseUrl = 'https://revgzgipeaptgdvtitql.supabase.co';
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQwNDg3NTc5LCJleHAiOjE5NTYwNjM1Nzl9.m2X6lVVZr1C-53kdKuMQ_fbifT1QQ8bdAyuD01KuTA8";
const supabase = createClient(supabaseUrl, supabaseKey)

export function Add(){


    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    const [name, setName] = useState([])
    const [env, setEnv] = useState(false)
    const [sub, setSub] = useState(false)

    
    const sup = async (name) => {

        for(let i = 0; i< name.length; i++){
            const { publicURL, error } = await supabase
        .storage
        .from('pau') 
        .getPublicUrl(name[i])
        
        if(publicURL){
            console.log('entra')
            const { data, error } = await supabase
            .from('album')
            .insert([
        { name: name[i], url: publicURL }
        ])  
        
            }
        }

}
    
    //const arr = photos.flat()

    /*console.log(arr)*/
    /*const nameHandler = (e) => {
        let name = e.target.value;

        for(let i =0; i < arr.length; i++){
            if(arr[i].name === name){
                alert('nombre ya usado')
            }else{
                setName(name)
            }
        }
    }*/

    
    const archivoHandler =async (e) => {
        const archivo = e.target.files;
        const arr = []
        let con = 0;
        for(let i = 0; i < archivo.length; i++){
            const { data, error } = await supabase
        .storage
        .from('pau')
        .upload(archivo[i].name, archivo[i], {
            cacheControl: '3600',
            upsert: false
            });
            con += 1
            arr.push(archivo[i].name)

            console.log(data)
            console.log(name)
        }   
        
        console.log(arr)
        if(con === archivo.length){
            setEnv(true)
        }

        setName(arr)
            
            
    }

    //let time = name.length + "800"
   
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(name)
        setSub(true)
            await sup(name)
            
            //console.log("timedd", parseInt(time))
            setTimeout(() => { window.location = '/home'}, 2000);
    }

    const cancelarAdd = (e) => {
        e.preventDefault();
        dispatch(deletePhotoStorage(name))
        dispatch(addPhoto(false))
    }

    return(
        <div>
            <form onSubmit={submitHandler} className={ad.con}>
                <h4>Paula Figueroa</h4>
                <input type="file" name="" id="" onChange={archivoHandler} multiple/>
                <div className={ad.btn}>
                    { env ? <button type="submit">{sub ? <div className={ad.spinner}></div>: "Subir"}</button> : ''}
                    <button 
                    className={ad.btnc}
                    onClick={cancelarAdd}
                    >
                    Cancelar
                    </button>
                </div>
                
            </form>
        </div>
    )
}