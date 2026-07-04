import { useEffect, useState } from "react";
import MacWindow from "../MacWindow";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./note.scss";

const Note = ({ windowName, setWindowsState }) => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNote = async () => {
      try {
        const response = await fetch("/note.txt");

        if (!response.ok) {
          throw new Error("Failed to load note.");
        }

        const text = await response.text();
        setMarkdown(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadNote();
  }, []);

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
    >
      <div className="note-window">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                if (!inline && match) {
                  return (
                    <SyntaxHighlighter
                      language={match[1]}
                      style={atelierDuneDark}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                }

                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;