export const LOCATIONS = {
  city: {
    id: 'city',
    name: 'Одун Фелл',
    type: 'hub',
    availableActions: ['explore', 'shop', 'tavern', 'dungeon'],
    connections: ['dungeon', 'forest', 'tavern']
  },
  dungeon: {
    id: 'dungeon', 
    name: 'Подземелье',
    type: 'adventure',
    availableActions: ['explore', 'combat', 'loot', 'return'],
    connections: ['city']
  },
  forest: {
    id: 'forest',
    name: 'Древний лес', 
    type: 'adventure',
    availableActions: ['explore', 'hunt', 'gather', 'return'],
    connections: ['city']
  }
}
