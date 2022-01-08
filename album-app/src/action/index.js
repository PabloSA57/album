import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://revgzgipeaptgdvtitql.supabase.co';
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQwNDg3NTc5LCJleHAiOjE5NTYwNjM1Nzl9.m2X6lVVZr1C-53kdKuMQ_fbifT1QQ8bdAyuD01KuTA8";
const supabase = createClient(supabaseUrl, supabaseKey)

export  function getPhoto(){

    return async function(dispatch){
        const { data, error } = await supabase
        .from('album')
        .select()

        console.log(data)
        dispatch({
            type: "GET_PHOTO",
            payload: data
        })
    }
}

export  function deletePhoto(id){
    console.log(id)
    return async function(dispatch){
        const { data, error } = await supabase
        .from('album')
        .delete()
        .eq('id', id)
    }
}

export  function deletePhotoStorage(name){
    console.log(name)
    return async function(dispatch){
        const { data, error } = await supabase
        .storage
        .from('pau')
        .remove([name])
    }
}

export  function downloadPhotoStorage(){
   // console.log(name)
    return async function(dispatch){
        const { data, error } = await supabase
    .storage
    .from('pau')
    .download('d')

    console.log(data)
    console.log(error)
}
}

export function addPhoto(bool){
    console.log(bool)
    return async function(dispatch){
        dispatch({
            type: "ADD_PHOTO",
            payload: bool
        })
    }
}


export function login(bool){
    console.log(bool)
    return async function(dispatch){
        dispatch({
            type: "AUTH_USER",
            payload: bool
        })
    }
}
