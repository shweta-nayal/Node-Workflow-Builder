import { BaseNode } from "../components/BaseNode";

export const APINode = ({ id }) => (
  <BaseNode
    id={id}
    title="API"
    headerColor="#06B6D4"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-response` }]}
  >
    <div>Calls an API endpoint</div>
  </BaseNode>
);