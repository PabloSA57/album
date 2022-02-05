import {HiUpload} from 'react-icons/hi';
import hd from './style/header.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addPhoto } from '../../action';

export default function Header(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const auth = useSelector(state => state.auth)

    const auth =  window.localStorage.getItem('auth');

    function submitHandler(e){
        e.preventDefault();
        alert('ok')
        dispatch(addPhoto(true))
    }

    function logautPau() {
        window.localStorage.removeItem('auth')
        navigate('/')
    }
    return(
        <header className={hd.container}>
            <div className={hd.nb}>
            <h2>Paula Figueroa</h2>
            
            <div className={hd.btn}>
                {auth ? <button onClick={submitHandler}><HiUpload /></button> :''}    
                {auth ? <button onClick={logautPau}>X</button> : ''}
            </div>
            
            </div>
        </header>
    )
}