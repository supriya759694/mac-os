import MacWindow from "../MacWindow";

const Spotify = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <iframe
        src="YOUR_SPOTIFY_EMBED_LINK"
        width="100%"
        height="100%"
        allow="autoplay; clipboard-write; encrypted-media;"
      />
    </MacWindow>
  );
};

export default Spotify;