import { BaseNode } from "../components/BaseNode";

export const FilterNode = ({ id }) => (
  <BaseNode
    id={id}
    title="Filter"
    headerColor="#EAB308"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-filtered` }]}
  >
    <div>Filter Data</div>
  </BaseNode>
);