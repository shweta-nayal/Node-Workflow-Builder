import { BaseNode } from "../components/BaseNode";

export const DelayNode = ({ id }) => (
  <BaseNode
    id={id}
    title="Delay"
    headerColor="#64748B"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-output` }]}
  >
    <div>Wait 5 sec</div>
  </BaseNode>
);