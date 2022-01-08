import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../action";
import { useDispatch } from "react-redux";
import lg from './style/login.module.css';


const supabaseUrl = 'https://revgzgipeaptgdvtitql.supabase.co';

const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQwNDg3NTc5LCJleHAiOjE5NTYwNjM1Nzl9.m2X6lVVZr1C-53kdKuMQ_fbifT1QQ8bdAyuD01KuTA8";

const supabase = createClient(supabaseUrl, supabaseKey)


export default function Login(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [auth, setAuth] = useState(false);
    const [user, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const [data, setData] = useState({
        user:'',
        password:''
    })

    useEffect(() => {
        dataDB()
    }, [])

    const dataDB = async () => {
        try {
            let { data: login, error } = await supabase
            .from('login')
            .select('*')

                setData({
                    user: login[0].user,
                    password :login[0].password
                })

        
        } catch (error) {
            
        }
       

    }


    const handlerSubmit = (e) => {
        e.preventDefault()

        if(data.user === user && data.password === password){
                alert('entro')

                dispatch(login(true))
                window.localStorage.setItem('auth', true)
                navigate('/home')
        }else{
            alert('No eres pau')
        }

    }

    return(
        <div>
            <form onSubmit={handlerSubmit} className={lg.con}>

                <div className={lg.user}>
                <label htmlFor="">User</label>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div className={lg.user}>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
              

                <button type="submit">Login</button>
            </form>
        </div>
    )
}