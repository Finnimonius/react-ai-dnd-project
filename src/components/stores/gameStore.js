import { create } from "zustand";
import { persist } from "zustand/middleware";
import queryAI from "../../services/api";
import { DUNGEONS } from "../../utils/data/locations";

export const useGameStore = create(
    persist(
        (set, get) => ({
            currentLocation: 'city',
            currentDungeon: null,
            gameHistory: [],
            isLoading: false,
            error: null,
            aiText: '',

            enterLocation: (location) => {
                set({
                    currentLocation: location,
                })
            },

            startGame: async () => {
                set({
                    isLoading: true,
                    currentDungeon: 'wind_gorge'
                })

                const dungeon = getDungeon(DUNGEONS, get().currentDungeon)
                const directions = getDirections(dungeon)

                try {
                    const { gameHistory } = get()
                    const data = await queryAI(`Начни рассказ истории в стиле D&D. Мы сейчас находимся в локации ${dungeon.name}. И в конце предложи пойти на выбор ${directions}`)

                    const historyEntry = {
                        aiText: data,
                        directions: directions.split(' '),
                    }

                    set({
                        aiText: data,
                        isLoading: false,
                        gameHistory: [...gameHistory, historyEntry]
                    })
                } catch (error) {
                    set({ error: error.message, isLoading: false })
                }
            },

            backToCity: () => {
                set({
                    currentLocation: 'city',
                    gameHistory: [],
                })
            }

        }),
        {
            name: 'game-storage',
        }
    )
)

function getDungeon(dungeons, dungeonKey) {
    return dungeons[dungeonKey]
}

function getDirections(dungeon) {
    return dungeon.paths.map(path => path.directionName).join(' ')
}