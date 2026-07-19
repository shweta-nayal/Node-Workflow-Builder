import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useStore } from "./store";

function App() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const status = nodes.length === 0 ? "Empty" : "Ready";

  return (
    <div
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #E2E8F0",
          padding: "18px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#0F172A",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            🚀 Node Pipeline Builder
          </h1>

          <p
            style={{
              marginTop: 8,
              color: "#64748B",
              fontSize: 15,
            }}
          >
           • Build • Connect • Validate Workflows.
          </p>
        </div>

        {/* Dashboard */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            // padding:"16px 20px",
          }}
        >
          <StatCard
            title="Nodes"
            value={nodes.length}
            icon="📦"
            color="#2563EB"
          />

          <StatCard
            title="Edges"
            value={edges.length}
            icon="🔗"
            color="#7C3AED"
          />

          {/* <StatCard
            title="Version"
            value="1.0"
            icon="🚀"
            color="#16A34A"
          /> */}

          <StatCard
            title="Status"
            value={status}
            icon={status === "Ready" ? "🟢" : "🔴"}
            color={status === "Ready" ? "#16A34A" : "#DC2626"}
          />
        </div>
      </div>

      {/* Main Content */}

      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Left Sidebar */}

        <div
          style={{
            width: 230,
            background: "#fff",
            borderRight: "1px solid #E2E8F0",
            padding: 8,
            overflowY: "auto",
          }}
        >
          <PipelineToolbar />
        </div>

        {/* Canvas + Submit */}

        <div
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          <PipelineUI />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >

        <SubmitButton />
      </div>
        </div>
      </div>

      
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        padding: "10px 12px",
        minWidth: 9,
        boxShadow: "0 10px 24px rgba(15,23,42,.06)",
        transition: ".2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "#64748B",
          fontSize: 15,
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        <span>{icon}</span>
        {title}
      </div>

      <div
        style={{
          marginTop: 6,
          fontSize: 18,
          fontWeight: 700,
          color,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default App;