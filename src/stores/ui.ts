import { create } from 'zustand';

export interface UIStore {
  sidebarIsOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarIsOpen: false,
  openSidebar: () => set(() => ({ sidebarIsOpen: true })),
  closeSidebar: () => set(() => ({ sidebarIsOpen: false })),
}));
