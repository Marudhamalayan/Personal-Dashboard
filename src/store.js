import {create} from 'zustand';

// Define the store with the initial state and actions
const useStore = create((set) => ({
    theme: 'light', // Initial theme is set to light
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })), // Action to toggle theme
    quickLinks: [], //  Quick links array to store the links
    addLink: (link) => set((state) => ({ quickLinks: [...state.quickLinks, link] })), // Action to add a link
    removeLink: (link) => set((state) => ({ quickLinks: state.quickLinks.filter(l => l !== link) })) // Action to remove a link
}));

export default useStore;