import { create } from 'zustand'

interface ConfigState {
  baseUrl: string
  setBaseUrl: (url: string) => void
}

export const useConfigStore = create<ConfigState>((set) => ({
  baseUrl: 'https://training-backend-qqcu.onrender.com', 
  setBaseUrl: (url) => set({ baseUrl: url }),
}))
