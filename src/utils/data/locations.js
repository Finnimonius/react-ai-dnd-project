// Объект всех локаций
export const DUNGEONS = {
  // СТАРТОВАЯ ЛОКАЦИЯ
  wind_gorge: {
    id: "wind_gorge",
    name: "Ущелье Ветров",
    description: "Вы стоите на краю глубокого ущелья. Ветер свистит между скал.",
    paths: [
      { 
        direction: "south",
        directionName: "Юг", 
        targetLocationId: "forgotten_path", 
        stepsRequired: 2,
        currentStep: 0 
      },
      { 
        direction: "southeast",
        directionName: "Юго-восток",  
        targetLocationId: "moon_lake", 
        stepsRequired: 2,
        currentStep: 0
      }
    ]
  },
  
  forgotten_path: {
    id: "forgotten_path", 
    name: "Забытая Тропа",
    description: "Старая заросшая тропа. Кажется, здесь давно никто не ходил.",
    paths: [
      { 
        direction: "north",
        directionName: "Север", 
        targetLocationId: "wind_gorge", 
        stepsRequired: 2,
        currentStep: 0
      }
    ]
  },
  
  moon_lake: {
    id: "moon_lake",
    name: "Озеро Лунного Света", 
    description: "Кристально чистое озеро отражает луну. Вода кажется волшебной.",
    paths: [
      { 
        direction: "northwest",
        directionName: "Северо-запад", 
        targetLocationId: "wind_gorge", 
        stepsRequired: 2,
        currentStep: 0
      }
    ]
  }
}
