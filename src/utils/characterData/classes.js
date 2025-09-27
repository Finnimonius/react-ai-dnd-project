export const CLASSES = [
  {
    id: 'fighter',
    name: 'Воин',
    description: 'Мастер боевых искусств, сильный и выносливый боец.',
    hitDie: 10,
    primaryAbility: 'strength',
    skills: ['Атлетика', 'Запугивание', 'Выживание'],
    features: ['Боевой стиль', 'Вторая ветрость']
  },
  {
    id: 'wizard',
    name: 'Волшебник',
    description: 'Исследователь магических тайн, владеющий мощными заклинаниями.',
    hitDie: 6,
    primaryAbility: 'intelligence',
    skills: ['Магия', 'История', 'Расследование'],
    features: ['Книга заклинаний', 'Магическое восстановление']
  },
  {
    id: 'rogue',
    name: 'Плут',
    description: 'Хитрый и ловкий специалист скрытности и точных ударов.',
    hitDie: 8,
    primaryAbility: 'dexterity',
    skills: ['Обман', 'Ловкость рук', 'Скрытность'],
    features: ['Скрытая атака', 'Хитрое действие']
  },
  {
    id: 'cleric',
    name: 'Жрец',
    description: 'Посланник божества, несущий исцеление и божественную магию.',
    hitDie: 8,
    primaryAbility: 'wisdom',
    skills: ['Проницательность', 'Медицина', 'Убеждение'],
    features: ['Божественное вмешательство', 'Изгнание нежити']
  }
]