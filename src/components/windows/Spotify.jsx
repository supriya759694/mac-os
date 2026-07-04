import MacWindow from "../MacWindow";
import "./spotify.scss";

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      width="25vw"
      windowName={windowName}
      setWindowsState={setWindowsState}
    >
      <div className="spotify-window">
        <iframe
          title="Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </MacWindow>
  );
};

export default Spotify;