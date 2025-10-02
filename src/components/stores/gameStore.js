import { create } from "zustand";
import { persist } from "zustand/middleware";
// import queryAI from "../../services/api";

export const useGameStore = create(
    persist(
        (set) => ({
            currentLocation: 'city',
            gameHistory: [],
            isLoading: false,
            currentDungeon: null,
            currentOption: [],
            error: null,
            aiText: '',

            enterLocation: async (location) => {
                set({
                    currentLocation: location,
                    isLoading: true
                })

                setTimeout(() => {
                    set({ isLoading: false })
                }, 500);
            },

            startGame: async () => {
                set({
                    isLoading: true
                })


                setTimeout(() => {
                    set({ isLoading: false })
                }, 2000);
                // try {
                //     const data = await queryAI('Пришли мне рецепт плова')
                //     set({ aiText: data, isLoading: false })
                // } catch (error) {
                //     set({ error: error.message, isLoading: false })
                // }
            },

            backToCity: () => {
                set({
                    currentLocation: 'city',
                    gameHistory: [],
                })
            }

        }),
        {
            name: 'character-storage',
        }
    )
)