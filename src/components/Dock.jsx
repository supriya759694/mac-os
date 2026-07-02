import "./dock.scss";

import {
  FaGithub,
  FaStickyNote,
  FaFileAlt,
  FaSpotify,
  FaTerminal,
} from "react-icons/fa";

const Dock = ({setWindowState})=>{

    return(
        <footer className='dock'>
            <div onClick = {() => setWindowState(s=>({...s, github: !s.github}))}
                className = 'icon github'>
                   <FaGithub className="dock-icon" />     
            </div>

            <div
            className = 'icon note'
            onClick = {()=> setWindowState(s=>({...s, note: !s.note}))}
            >
                <FaStickyNote className="dock-icon" />
            </div>

            <div
            className = 'icon resume'
            onClick = {()=> setWindowState(s=>({...s, resume: !s.resume}))}
            >
                <FaFileAlt className="dock-icon" />
            </div>

            <div
            className = 'icon spotify'
            onClick = {()=> setWindowState(s=>({...s, spotify: !s.spotify}))}
            >
                <FaSpotify className="dock-icon" />
            </div>

            <div
            className = 'icon terminal'
            onClick = {()=> setWindowState(s=>({...s, cli: !s.cli}))}
            >
                <FaTerminal className="dock-icon" />
            </div>

        </footer>
    )
}

export default Dock