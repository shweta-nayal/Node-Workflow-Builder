# 🚀 Node Pipeline Builder

A drag-and-drop visual workflow builder built using **React Flow**, **React**, **Zustand**, and **FastAPI**,enabling users to create customizable node-based workflows with dynamic nodes and backend graph analysis.

This project was developed as part of the **Technical Assessment**. It allows users to visually build workflows by dragging nodes onto a canvas, connecting them, validating the pipeline, and analyzing its graph structure.

---

## ✨ Features

### 🧩 Node Abstraction
- Built a reusable **BaseNode** component to eliminate duplicate code.
- Easily create new nodes by configuring:
  - Title
  - Handles
  - Content
  - Header color
- Consistent styling across all node types.

---

### 📦 Node Types

#### Inputs
- 📥 Input Node
- 📝 Text Node

#### AI
- 🤖 LLM Node

#### Processing
- 🌐 API Node
- 📄 JSON Node
- 🔍 Filter Node
- ➗ Math Node
- ⏱ Delay Node

#### Output
- 📤 Output Node

---

### 🎨 Modern UI

- Clean dashboard layout
- Responsive sidebar
- Categorized node library
- Live pipeline statistics
- Beautiful node cards
- Floating canvas
- Interactive minimap
- Smooth animated edges
- Modern shadows and hover effects

---

### 📊 Live Dashboard

Displays real-time statistics:

- 📦 Number of Nodes
- 🔗 Number of Edges
- 🔴 / 🟢 Pipeline Status

Automatically updates while building workflows.

---

### 📝 Smart Text Node

The Text Node supports:

- Auto-resizing width & height
- Dynamic variable detection

Example:

```
Hello {{username}}

Today's date is {{currentDate}}
```

Automatically generates input handles for:

- username
- currentDate

---

### 🔄 Backend Integration

The frontend sends the complete pipeline to the FastAPI backend.

Backend calculates:

- Total Nodes
- Total Edges
- Whether the graph is a Directed Acyclic Graph (DAG)

Example Response

```json
{
    "num_nodes": 8,
    "num_edges": 7,
    "is_dag": true
}
```

---

### 📋 Validation Result

After clicking **Validate Pipeline**, a modern modal displays:

- Total Nodes
- Total Edges
- DAG Status

instead of using a browser alert.

---

### 🗑 Node Deletion

Every node includes a delete button.

Deleting a node automatically:

- Removes the node
- Removes all connected edges
- Updates dashboard statistics instantly

---

### 🎯 Additional Improvements

- Responsive layout
- Professional card-based design
- Hover animations
- Smooth transitions
- Reusable components
- Cleaner project structure

---

# 🛠 Tech Stack

## Frontend

- React
- React Flow
- Zustand
- JavaScript
- CSS

## Backend

- Python
- FastAPI

---

# 📂 Project Structure

```
frontend/
│
├── src/
│   ├── nodes/
│   │   ├── BaseNode.js
│   │   ├── inputNode.js
│   │   ├── outputNode.js
│   │   ├── textNode.js
│   │   ├── llmNode.js
│   │   ├── apiNode.js
│   │   ├── jsonNode.js
│   │   ├── filterNode.js
│   │   ├── mathNode.js
│   │   └── delayNode.js
│   │
│   ├── toolbar.js
│   ├── ui.js
│   ├── submit.js
│   ├── store.js
│   └── App.js
│
backend/
│
├── main.py
```

---

# ▶️ Running the Project

## Frontend

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## Backend

```bash
cd backend
uvicorn main:app --reload
```

Runs on:

```
http://127.0.0.1:8000
```

---

# How to Test

1. Drag nodes from the sidebar.
2. Connect nodes together.
3. Create Text Nodes with variables:

```
{{input}}
{{username}}
{{email}}
```

4. Observe new input handles generated automatically.
5. Delete any node using the ✕ button.
6. Click **Validate Pipeline**.
7. View the pipeline analysis modal.

---

~ Shweta Nayal
