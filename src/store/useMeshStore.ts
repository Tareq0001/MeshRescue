import { create } from 'zustand';

interface Node {
  id: string;
  name: string;
  distance: string;
  battery: number;
  status: 'active' | 'sos' | 'weak';
}

interface MeshState {
  isScanning: boolean;
  nodes: Node[];
  toggleScan: () => void;
  broadcastSOS: () => void;
}

export const useMeshStore = create<MeshState>((set) => ({
  isScanning: true,
  nodes: [
    { id: '1', name: 'Node_A8F2', distance: '12m', battery: 84, status: 'active' },
    { id: '2', name: 'Node_C1X9', distance: '45m', battery: 12, status: 'sos' },
    { id: '3', name: 'Node_B7M4', distance: '120m', battery: 56, status: 'weak' },
  ],
  toggleScan: () => set((state) => ({ isScanning: !state.isScanning })),
  broadcastSOS: () => set((state) => ({ 
    nodes: [{ id: '0', name: 'Local_Self', distance: '0m', battery: 100, status: 'sos' }, ...state.nodes] 
  })),
}));