import { Link } from "react-router-dom";
import { useState } from "react";
import iu from './style/InicioUser.module.css'
import j from '../../image/fo5png.png'

export default function InicioUser(){

     return(
        <div  className={iu.con}>
            <div className={iu.h}>
                <Link to='/login'>
                <h2>Nova Photos</h2>
                </Link>    
                
                <img src={j} alt="" width='100%' height='350px'/>
                
            </div>
            
            <Link to='/home'>
                <button>Open</button>
            </Link>
        </div>
     )
}