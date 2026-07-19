from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")

        if source in graph and target in graph:
            graph[source].append(target)

    visited = set()
    visiting = set()

    def dfs(node):
        if node in visiting:
            return False

        if node in visited:
            return True

        visiting.add(node)

        for neighbour in graph[node]:
            if not dfs(neighbour):
                return False

        visiting.remove(node)
        visited.add(node)

        return True

    for node in graph:
        if node not in visited:
            if not dfs(node):
                return False

    return True


@app.post("/pipelines/parse")
def parse_pipeline(data: dict):

    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag(nodes, edges),
    }