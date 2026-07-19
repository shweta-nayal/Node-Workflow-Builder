import { useState } from "react";
import { useStore } from "./store";
import { ResultModal } from "./ResultModal";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const disabled = nodes.length === 0;

  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes,
        edges,
      }),
    });

    const data = await response.json();

    setResult(data);
    setOpen(true);
  };

  return (
    <>
      <div
            style={{
            background:"#fff",
            borderTop:"1px solid #E2E8F0",
            padding:"22px 28px",
            position:"sticky",
            bottom:0,
            alignItems:"center",
            zIndex:100,
            display:"flex",
            justifyContent:"center"
        }}
    >
        <button
            onClick={handleSubmit}
            disabled={disabled}
            style={{
                background: disabled ? "#CBD5E1" : "#2563EB",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "12px 28px",
                cursor: disabled ? "not-allowed" : "pointer",
                fontWeight: 600,
                fontSize: 18,
                transition: ".2s",
            }}
        >
            Validate Pipeline
        </button>
      </div>

      <ResultModal
        open={open}
        result={result}
        onClose={() => setOpen(false)}
      />
    </>
  );
};