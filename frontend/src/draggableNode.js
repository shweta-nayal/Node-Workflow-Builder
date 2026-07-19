export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      style={{
        cursor: "grab",
        minWidth: "120px",
        height: "42px",
        background: "#ffffff",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        color: "#334155",
        transition: "0.2s ease",
        boxShadow: "0 4px 10px rgba(15,23,42,.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 12px 25px rgba(37,99,235,.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 10px rgba(37,99,235,.15)";
      }}
    >
      {label}
    </div>
  );
};