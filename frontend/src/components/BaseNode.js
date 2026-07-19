import { Handle, Position } from "reactflow";
import { useStore } from "../store";

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
  width = 220,
  height = "auto",
  headerColor = "#2563EB",
}) => {
  const deleteNode = useStore((state) => state.deleteNode);
  return (
    <div
      style={{
        width,
        minHeight: height,
        background: "#ffffff",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 10px 30px rgba(15,23,42,.08)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 16px 35px rgba(15,23,42,.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(15,23,42,.08)";
      }}
    >
      {/* Colored Header */}
      <div
        style={{
          height: 6,
          background: headerColor,
        }}
      />

      {/* Left Handles */}
      {inputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            background: "#2563EB",
            width: 10,
            height: 10,
            top:
              inputs.length === 1
                ? "50%"
                : `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      {/* Content */}
      <div style={{ padding: "16px" }}>
        <div
          style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
          }}
      >
          <div
              style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#0F172A",
              }}
          >
              {title}
          </div>

          <button
            className="nodrag"
            onClick={(e) => {
                e.stopPropagation();
                deleteNode(id);
            }}
              style={{
                  border: "none",
                  background: "#FEE2E2",
                  color: "#DC2626",
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: ".2s",
              }}
              onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#DC2626";
                  e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FEE2E2";
                  e.currentTarget.style.color = "#DC2626";
              }}
          >
              ✕
          </button>
      </div>

        {children}
      </div>

      {/* Right Handles */}
      {outputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            background: "#10B981",
            width: 10,
            height: 10,
            top:
              outputs.length === 1
                ? "50%"
                : `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};