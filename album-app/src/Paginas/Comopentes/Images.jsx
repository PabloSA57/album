import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getPhoto } from "../../action";
import {deletePhoto, deletePhotoStorage, downloadPhotoStorage} from "../../action"
import im from './style/images.module.css';
import { AiOutlineDelete, AiOutlineDownload } from "react-icons/ai";

export default function Image(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const photos = useSelector(state => state.photos);
    //const auth = useSelector(state => state.auth);

    const auth = window.localStorage.getItem('auth')
    console.log(photos)

    useEffect(() => {
        dispatch(getPhoto())
    }, [])

  
    const deletePhotos = (id, name) => {
        console.log(id)

        dispatch(deletePhoto(id))
        dispatch(deletePhotoStorage(name))

        setTimeout(() => {
            console.log('entro')
            window.location = '/home';
        }, 2000)
    }

    const downloadPhoto = (name) => {
        dispatch(downloadPhotoStorage())
    }
    return(
        <div className={im.all}>

            <div className={im.div1}>
            { photos[0]?.map((e) => {
                return(
                    <div className={im.con}>
                        
                        <img src={e.url} alt={e.name} />

                        <div className={im.btn}>
                        {auth ? <button className={im.btnd} onClick={() => deletePhotos(e.id, e.name)}><AiOutlineDelete/> </button> : ''
                        }

                        <button 
                        onClick={() => downloadPhoto(e.name)}
                        className={im.btnd} ><AiOutlineDownload /></button>
                        </div>
                        

                        {//<button onClick={deleteStorage}>de</button>
                        }
                    </div>
                   
                )
            })

            }
            </div>
           
    <div className={im.div2}>
    { photos[1]?.map((e) => {
                return(
                    <div className={im.con}>
                        
                        <img src={e.url} alt={e.name} />

                        <div className={im.btn}>
                        {auth ? <button className={im.btnd} onClick={() => deletePhotos(e.id, e.name)}><AiOutlineDelete/> </button> : ''
                        }

                        <button 
                        onClick={() => downloadPhoto(e.name)}
                        className={im.btnd} ><AiOutlineDownload /></button>
                        </div>
                        

                        {//<button onClick={deleteStorage}>de</button>
                        }
                    </div>
                   
                )
            })

            }

    </div>

        </div>
    )
}