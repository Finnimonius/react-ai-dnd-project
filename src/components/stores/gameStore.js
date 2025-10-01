import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGameStore = create(
    persist(
        (set) => ({
            currentLocation: 'city',
            gameHistory: [],
            isLoading: false,
            currentDungeon: null,
            currentOption: [],

            enterLocation: async (locationId) => {
                set({
                    currentLocation: locationId, 
                })
            },

        }),
        {
            name: 'character-storage',
        }
    )
)