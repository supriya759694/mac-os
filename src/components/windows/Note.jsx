import { useEffect, useState } from "react";
import MacWindow from "../MacWindow";

const Note = ({ windowName, setWindowState }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((data) => setText(data));
  }, []);

  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <pre>{text}</pre>
    </MacWindow>
  );
};

export default Note;