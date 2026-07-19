import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      id={id}
        title="Input"
        headerColor="#3B82F6"
        outputs={[{ id: `${id}-value` }]}
    >
      <label
        style={{
          fontSize:13,
          fontWeight:600,
          color:"#475569"
          }}
        >
        Name
        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            marginTop: "4px",
            marginBottom: "10px",
          }}
      />
      </label>

      <br />

      <label>
        Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            marginTop: "4px",
          }}
        >
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};