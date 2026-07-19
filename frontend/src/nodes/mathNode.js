import { BaseNode } from "../components/BaseNode";

export const MathNode = ({ id }) => (
  <BaseNode
    id={id}
    title="Math"
    headerColor="#EC4899"
    inputs={[
      { id: `${id}-a` },
      { id: `${id}-b` },
    ]}
    outputs={[{ id: `${id}-result` }]}
  >
    <div>Add / Multiply</div>
  </BaseNode>
);