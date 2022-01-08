import sr from './style/search.module.css';
import { HiOutlineSearch } from "react-icons/hi";

export default function Search(){
    
    
    return(
        
            <form className={sr.con}> 
            <input type="text" placeholder="Search Photo" />
            <button><HiOutlineSearch /></button>
            </form>
            
        
    )
}