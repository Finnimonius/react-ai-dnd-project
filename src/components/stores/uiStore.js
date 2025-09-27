import { create } from "zustand";

// stores/
// ├── characterStore.js     # Создание и данные персонажа
// ├── gameStore.js          # Игровой процесс, AI взаимодействие
// ├── uiStore.js            # Состояние интерфейса
// ├── inventoryStore.js     # Инвентарь (потом добавишь)
// ├── combatStore.js        # Боевая система (потом добавишь)

    // 1: <ClassSelection />,
    // 2: <RaceSelection />,
    // 3: <EquipmentSelection />,
    // 4: <CharacterReview />

export const useUIStore = create((set) => ({

    currentView: 'main',

    goToClassSelection: () => set({ currentView: 'class-selection'}),
    goToRaceSelection: () => set({ currentView: 'race-selection'}),
    goToGameplay: () => set({ currentView: 'gameplay'}),
    goToMain: () => set({ currentView: 'main'})

}))