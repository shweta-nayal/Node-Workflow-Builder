import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Output"
      headerColor="#10B981"
      inputs={[{ id: `${id}-value` }]}
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
          width:"100%",
          padding:"9px 12px",
          border:"1px solid #CBD5E1",
          borderRadius:10,
          marginTop:6,
          marginBottom:12,
          fontSize:14,
          outline:"none"
          }}
      />
      </label>

      <br />

      <label>
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          style={{
          width:"100%",
          padding:"9px 12px",
          border:"1px solid #CBD5E1",
          borderRadius:10,
          marginTop:6,
          marginBottom:12,
          fontSize:14,
          outline:"none"
          }}
        >
          
          <option>Text</option>
          <option>Image</option>
        </select>
      </label>
    </BaseNode>
  );
};