export const LOCATIONS = {
    city: {
        id: 'city',
        name: 'Одун Фелл',
        type: 'hub',
        availableActions: ['explore', 'shop', 'tavern', 'dungeon'],
    },
    blacksmith: {
        id: 'blacksmith',
        name: 'Кузнец',
        type: 'hub',
        availableActions: ['explore', 'shop', 'tavern', 'dungeon'],
    },
    portal: {
        id: 'portal',
        name: 'Портал',
        type: 'hub',
        availableActions: ['explore', 'shop', 'tavern', 'dungeon'],
    },
    dungeon: {
        id: 'dungeon',
        name: 'Подземелье',
        type: 'adventure',
        availableActions: ['explore', 'combat', 'loot', 'return'],
    },
    forest: {
        id: 'forest',
        name: 'Древний лес',
        type: 'adventure',
        availableActions: ['explore', 'hunt', 'gather', 'return'],
    }
}
