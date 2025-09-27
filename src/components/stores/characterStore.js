import { create } from "zustand";


export const useCharacterStore = create((set, get) => ({
    
    selectedClass: null,
    selectedRace: null,

    selectClass: (classData) => set({selectedClass: classData}),
    selectRace: (raceData) => set({selectedRace: raceData}),

    getCharacter: () => {
        const { selectedClass, selectRace } = get()
        if(!selectedClass || !selectRace) return null

        return {
            class: selectedClass,
            race: selectRace,
            name: `${selectedClass} ${selectRace}`
        }
    },

    reset: () => set({ selectClass: null, selectedRace: null})
}))