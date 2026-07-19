export const ResultModal = ({ open, result, onClose }) => {
  if (!open) return null;

  const MetricCard = ({ title, value, color }) => (
    <div
      style={{
        flex: 1,
        background: "#cfe1f4",
        border: "1px solid #E2E8F0",
        borderRadius: 14,
        padding: 20,
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#071a35",
          fontSize: 16,
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: 12,
          fontSize: 28,
          fontWeight: 700,
          color,
        }}
      >
        {value}
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,.35)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 600,
          background: "#fff",
          borderRadius: 20,
          padding: 35,
          boxShadow: "0 30px 80px rgba(0,0,0,.2)",
        }}
      >
        <h2
          style={{
            margin: 0,
            textAlign: "center",
            color: "#0F172A",
          }}
        >
          {result.is_dag
            ? "✅ Pipeline Validation Successful"
            : "❌ Pipeline Validation Failed"}
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748B",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          {result.is_dag
            ? "Workflow is valid and ready for execution."
            : "Workflow contains one or more cycles."}
        </p>

        <div
          style={{
            display: "flex",
            gap: 15,
          }}
        >
          <MetricCard
            title="Nodes"
            value={result.num_nodes}
            color="#2563EB"
          />

          <MetricCard
            title="Edges"
            value={result.num_edges}
            color="#7C3AED"
          />

          <MetricCard
            title="DAG"
            value={result.is_dag ? "YES" : "NO"}
            color={result.is_dag ? "#16A34A" : "#DC2626"}
          />
        </div>

        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "#2563EB",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 30px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};