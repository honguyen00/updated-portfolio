import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


export default function Footer() {
    return (
        <div className="fixed-bottom d-flex justify-content-center overflow-hidden" style={{backgroundColor: '#314347'}}>
            <a href="https://www.linkedin.com/in/ho-nguyen-le-abb703236/" target="_blank"><AiFillLinkedin size={40}/></a>
            <a href="https://github.com/honguyen00"><AiFillGithub size={40} target="_blank"/></a>
            <a href="https://www.youtube.com/channel/UCRVpBwWS9tnofXA5BlxnMnA>" target="_blank"><AiFillYoutube size={40}/></a>  
        </div>    
    )
}