import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGameStore = create(persist((set) => ({
    currentLocation: 'city',
    gameHistory: [],
    isLoading: false,
    currentDungeon: null,
    currentOption: [],

    enterDungeon: async (dungeonName) => {
        set({
            currentLocation: 'dungeon',
            isLoading: true,
            currentDungeon: dungeonName
        })
    }
}),
    {
        name: 'game-storage'
    }
))