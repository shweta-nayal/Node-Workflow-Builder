import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      headerColor="#F59E0B"
      inputs={[
          { id: `${id}-system` },
          { id: `${id}-prompt` },
      ]}
      outputs={[
          { id: `${id}-response` },
      ]}
    >
      <div>This is an LLM.</div>
    </BaseNode>
  );
};