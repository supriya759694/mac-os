import MacWindow from "../MacWindow";

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </MacWindow>
  );
};

export default Resume;