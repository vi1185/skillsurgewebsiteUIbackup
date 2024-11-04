'use client';
import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ConnectionMode,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface RoadmapFlowProps {
  roadmapId: string;
}

const RoadmapFlow = ({ roadmapId }: RoadmapFlowProps) => {
  // Enhanced Frontend Development roadmap
  const frontendNodes: Node[] = [
    // Fundamentals
    {
      id: '1',
      type: 'input',
      data: { label: 'Internet & Web Fundamentals' },
      position: { x: 250, y: 0 },
      className: 'bg-primary text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '2',
      data: { label: 'HTML5 & Semantic Web' },
      position: { x: 100, y: 100 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '3',
      data: { label: 'CSS3 & Modern Layout' },
      position: { x: 400, y: 100 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    
    // CSS Advanced
    {
      id: '4',
      data: { label: 'Responsive Design' },
      position: { x: 300, y: 200 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '5',
      data: { label: 'CSS Frameworks' },
      position: { x: 500, y: 200 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },

    // JavaScript
    {
      id: '6',
      data: { label: 'JavaScript Fundamentals' },
      position: { x: 250, y: 300 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '7',
      data: { label: 'ES6+ Features' },
      position: { x: 100, y: 400 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '8',
      data: { label: 'DOM Manipulation' },
      position: { x: 400, y: 400 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },

    // Advanced Concepts
    {
      id: '9',
      data: { label: 'React Fundamentals' },
      position: { x: 250, y: 500 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '10',
      data: { label: 'State Management' },
      position: { x: 100, y: 600 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '11',
      data: { label: 'React Router' },
      position: { x: 400, y: 600 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },

    // Modern Development
    {
      id: '12',
      data: { label: 'TypeScript' },
      position: { x: 100, y: 700 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '13',
      data: { label: 'Next.js' },
      position: { x: 400, y: 700 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },

    // Testing & Optimization
    {
      id: '14',
      data: { label: 'Testing (Jest & RTL)' },
      position: { x: 100, y: 800 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '15',
      data: { label: 'Performance Optimization' },
      position: { x: 400, y: 800 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },

    // Final Stage
    {
      id: '16',
      type: 'output',
      data: { label: 'Advanced Frontend Developer' },
      position: { x: 250, y: 900 },
      className: 'bg-secondary text-white rounded-lg p-2 border-2 border-secondary/50',
    },
  ];

  const frontendEdges: Edge[] = [
    // Fundamentals connections
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    
    // CSS Advanced connections
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e3-5', source: '3', target: '5', animated: true },
    
    // JavaScript path
    { id: 'e2-6', source: '2', target: '6', animated: true },
    { id: 'e3-6', source: '3', target: '6', animated: true },
    { id: 'e6-7', source: '6', target: '7', animated: true },
    { id: 'e6-8', source: '6', target: '8', animated: true },
    
    // React path
    { id: 'e7-9', source: '7', target: '9', animated: true },
    { id: 'e8-9', source: '8', target: '9', animated: true },
    { id: 'e9-10', source: '9', target: '10', animated: true },
    { id: 'e9-11', source: '9', target: '11', animated: true },
    
    // Modern Development
    { id: 'e9-12', source: '9', target: '12', animated: true },
    { id: 'e9-13', source: '9', target: '13', animated: true },
    
    // Testing & Optimization
    { id: 'e13-14', source: '13', target: '14', animated: true },
    { id: 'e13-15', source: '13', target: '15', animated: true },
    
    // Final connections
    { id: 'e14-16', source: '14', target: '16', animated: true },
    { id: 'e15-16', source: '15', target: '16', animated: true },
  ];

  // Example nodes and edges for Backend Development roadmap
  const backendNodes: Node[] = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Programming Basics' },
      position: { x: 250, y: 0 },
      className: 'bg-primary text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '2',
      data: { label: 'Node.js Fundamentals' },
      position: { x: 250, y: 100 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '3',
      data: { label: 'Express.js' },
      position: { x: 250, y: 200 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '4',
      data: { label: 'Databases' },
      position: { x: 100, y: 300 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '5',
      data: { label: 'Authentication & Authorization' },
      position: { x: 400, y: 300 },
      className: 'bg-dark-gray text-white rounded-lg p-2 border-2 border-primary/50',
    },
    {
      id: '6',
      type: 'output',
      data: { label: 'Advanced Backend Concepts' },
      position: { x: 250, y: 400 },
      className: 'bg-secondary text-white rounded-lg p-2 border-2 border-secondary/50',
    },
  ];

  const backendEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e3-5', source: '3', target: '5', animated: true },
    { id: 'e4-6', source: '4', target: '6', animated: true },
    { id: 'e5-6', source: '5', target: '6', animated: true },
  ];

  // Add more roadmap configurations here...

  // Select the appropriate nodes and edges based on roadmapId
  const getRoadmapConfig = (id: string) => {
    switch (id) {
      case 'frontend-development':
        return { nodes: frontendNodes, edges: frontendEdges };
      case 'backend-development':
        return { nodes: backendNodes, edges: backendEdges };
      // Add more cases for other roadmaps
      default:
        return { nodes: [], edges: [] };
    }
  };

  const { nodes: initialNodes, edges: initialEdges } = getRoadmapConfig(roadmapId);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[600px] bg-black rounded-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionMode={ConnectionMode.Loose}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default RoadmapFlow; 