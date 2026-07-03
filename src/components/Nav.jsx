import './nav.scss'
import DateTime from './DateTime'
import { FaApple, FaWifi } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <FaApple className='icon'/>
            <p>Supriya Bhowmick</p>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
        </div>
        <div className="right">
            <FaWifi className='icon'/>
            <DateTime />
        </div>
    </nav>
  )
}

export default Nav