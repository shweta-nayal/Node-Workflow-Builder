import { DraggableNode } from "./draggableNode";

const Section = ({ title, children }) => (
    <div
        style={{
            background: "#d6e4fc",
            border: "1px solid #E2E8F0",
            borderRadius: 16,
            padding: 9,
            marginLeft: -7,
            minWidth: 168,
            boxShadow: "0 8px 20px rgba(15,23,42,.05)",
        }}
    >
        <div
            style={{
                fontSize: 12,
                color: "#142f55",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 15,
            }}
        >
            {title}
        </div>

        <div
            style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
            }}
        >
            {children}
        </div>
    </div>
);

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #E2E8F0",
        padding: "20px 30px",
        display: "flex",
        gap: 18,
        flexWrap: "wrap",
      }}
    >
      <Section title="Inputs">
        <DraggableNode type="customInput" label="📥 Input" />
        <DraggableNode type="text" label="📝 Text" />
      </Section>

      <Section title="AI">
        <DraggableNode type="llm" label="🤖 LLM" />
      </Section>

      <Section title="Processing">
        <DraggableNode type="api" label="🌐 API" />
        <DraggableNode type="json" label="📄 JSON" />
        <DraggableNode type="filter" label="🔍 Filter" />
        <DraggableNode type="math" label="➗ Math" />
        <DraggableNode type="delay" label="⏱ Delay" />
      </Section>

      <Section title="Output">
        <DraggableNode type="customOutput" label="📤 Output" />
      </Section>
    </div>
  );
};