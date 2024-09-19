/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_BASENAME: string;
    // Додайте інші змінні середовища, які ви використовуєте
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
