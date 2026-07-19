import { useMemo, useRef, useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // Find variables like {{name}}
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const vars = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (!vars.includes(match[1])) {
        vars.push(match[1]);
      }
    }

    return vars;
  }, [text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      headerColor="#8B5CF6"
      width={Math.max(240, text.length * 7)}
      inputs={variables.map((v) => ({
        id: `${id}-${v}`,
      }))}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          minHeight: "80px",
          resize: "none",
          overflow: "hidden",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #d1d5db",
        }}
      />
    </BaseNode>
  );
};