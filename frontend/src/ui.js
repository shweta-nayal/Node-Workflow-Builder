// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { APINode } from "./nodes/apiNode";
import { JSONNode } from "./nodes/jsonNode";
import { FilterNode } from "./nodes/filterNode";
import { DelayNode } from "./nodes/delayNode";
import { MathNode } from "./nodes/mathNode";

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,

  api: APINode,
  json: JSONNode,
  filter: FilterNode,
  delay: DelayNode,
  math: MathNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <>
        <div
          ref={reactFlowWrapper}
          style={{
            width: "100%",
            height: "72vh",
            background: "#e9e9ea",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType='smoothstep'
            >
                <Background
                  gap={24}
                  size={1.2}
                  color="#C7D7F6"
                />
                <Controls
                  style={{
                      borderRadius: 10
                  }}
                />
                {nodes.length === 0 && (
                  <div
                      style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          pointerEvents: "none",
                      }}
                  >
                      <div
                          style={{
                              background: "rgba(255,255,255,.92)",
                              backdropFilter: "blur(10px)",
                              border: "1px solid #E2E8F0",
                              borderRadius: 20,
                              padding: "30px 45px",
                              textAlign: "center",
                              boxShadow: "0 15px 40px rgba(15,23,42,.08)",
                          }}
                      >
                    

                          <h2
                              style={{
                                  marginBottom: 8,
                                  color: "#1e273d",
                              }}
                          >
                              Create your first workflow
                              
                          </h2>

                          <p
                              style={{
                                  margin: 0,
                                  color: "#64748B",
                                  marginBottom: 8,
                              }}
                          >
                               

                              Drag any node from the left sidebar
                              to begin building your pipeline.
                          </p>
                      </div>
                  </div>
                )}
                <MiniMap
                  zoomable
                  pannable
                  maskColor="rgba(37,99,235,.12)"
                  nodeColor="#3B82F6"
                  style={{
                    background:"#fff",
                    borderRadius:12,
                    border:"1px solid #CBD5E1",
                    height:130,
                    width:180
                  }}
                  />
            </ReactFlow>
        </div>
        </>
    )
}
