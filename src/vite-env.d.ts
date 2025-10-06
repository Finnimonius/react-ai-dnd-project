/// <reference types="vite/client" />

// Типы для импортов различных файлов
declare module '*.jsx' {
  const component: any;
  export default component;
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// Глобальные переменные Vite
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // добавь другие env переменные если есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.jsx' {
  import { ComponentType } from 'react';
  const component: ComponentType<any>;
  export default component;
}