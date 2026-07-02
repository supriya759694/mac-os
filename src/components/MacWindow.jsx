import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children, width = "40vw", height = "40vh", windowName, setWindowsState }) => {
  return (
    <Rnd default={{ width, height, x: 300, y: 200 }}>
      <div className="window">
        <div className="nav">
          <div className="dots">
            {/* Red dot closes the window */}
            <div onClick={() => setWindowsState(s => ({ ...s, [windowName]: false }))}
                 className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
          <div className="title">terminal — zsh</div>
        </div>
        <div className="main-content">
          {children} {/* actual window content goes here */}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow