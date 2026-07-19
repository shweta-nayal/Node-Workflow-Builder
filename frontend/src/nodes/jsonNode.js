import { BaseNode } from "../components/BaseNode";

export const JSONNode = ({ id }) => (
  <BaseNode
    id={id}
    title="JSON"
    headerColor="#6366F1"
    inputs={[{ id: `${id}-json` }]}
    outputs={[{ id: `${id}-output` }]}
  >
    <div>Parse JSON</div>
  </BaseNode>
);