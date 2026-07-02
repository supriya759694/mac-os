import MacWindow from "../MacWindow";
import Terminal from "react-console-emulator";

const Cli = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <Terminal
        commands={{
          hello: {
            description: "Say hello",
            fn: () => "Hello Supriya 👋",
          },

          about: {
            description: "About me",
            fn: () => "Full Stack Developer",
          },
        }}
      />
    </MacWindow>
  );
};

export default Cli;