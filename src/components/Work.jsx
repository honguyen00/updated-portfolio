import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";

export default function Work({title, image, github, livesite}) {
    const [style, setStyle] = useState({display: 'none'})
    return (
        <div className="work-container" style={{position: 'relative'}} onMouseOver={() => {setStyle({display: 'block'})}} onMouseOut={() => {setStyle({display: 'none'})}}>
            <a href={livesite} target="_blank" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block'}}>
                <div className={style.display === 'none' ? "blur-effect d-flex align-items-center justify-content-center" : 
                "blur-effect d-flex align-items-center justify-content-center hover"}></div>
            </a>
            <div style={{...style, zIndex: '4', position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%)`}}>                        
                <div className="d-flex align-items-center">
                    <h4>{title}</h4>
                    <a href={github} target="_blank"><AiFillGithub size={20}/></a>
                </div>         
            </div>
        </div>
    )
}