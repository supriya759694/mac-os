import "./dock.scss";

import {
  FaGithub,
  FaStickyNote,
  FaFilePdf,
  FaSpotify,
  FaTerminal,
  FaCalendarAlt,
  FaLink,
  FaEnvelope,
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
            className = 'icon pdf'
            onClick = {()=> setWindowState(s=>({...s, pdf: !s.pdf}))}
            >
                <FaFilePdf className="dock-icon" />
            </div>
            <div
            className = 'icon calendar'
            onClick = {()=> setWindowState(s=>({...s, calendar: !s.calendar}))}
            >
                <FaCalendarAlt className="dock-icon" />
            </div>
            <div
            className = 'icon link'
            onClick = {()=> setWindowState(s=>({...s, link: !s.link}))}
            >
                <FaLink className="dock-icon" />
            </div>
            <div
            className = 'icon mail'
            onClick = {()=> setWindowState(s=>({...s, mail: !s.mail}))}
            >
                <FaEnvelope className="dock-icon" />
            </div>

            {/* <div
            className = 'icon resume'
            onClick = {()=> setWindowState(s=>({...s, resume: !s.resume}))}
            >
                <FaFilePdf className="dock-icon" />
            </div> */}

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