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
    const [name, setName] = useState('')

    
    const sup = async (name) => {
  
        // List all the files in the "avatars" bucket
        const { publicURL, error } = await supabase
        .storage
        .from('pau')
        .getPublicUrl(name)
        
        if(publicURL){
            console.log('entra')
            const { data, error } = await supabase
            .from('album')
            .insert([
        { name: name, url: publicURL }
        ])
        }
    }
    
    const arr = photos.flat()

    console.log(arr)
    const nameHandler = (e) => {
        let name = e.target.value;

        for(let i =0; i < arr.length; i++){
            if(arr[i].name === name){
                alert('nombre ya usado')
            }else{
                setName(name)
            }
        }
    }
    const archivoHandler =async (e) => {
        const archivo = e.target.files[0];
        console.log(archivo)
        const { data, error } = await supabase
        .storage
        .from('pau')
        .upload(name, archivo, {
            cacheControl: '3600',
            upsert: false
            });

            console.log(data)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
            sup(name)
            console.log(name)

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
                <input type="text" name="name" id="" onChange={nameHandler} placeholder="Name"/>
                <input type="file" name="" id="" onChange={archivoHandler}/>
                <div className={ad.btn}>
                    <button type="submit">Subir</button>
                    <button 
                    className={ad.btnc}
                    onClick={cancelarAdd}>Cancelar</button>
                </div>
                
            </form>
        </div>
    )
}