# Minetti Fútbol

Sistema web para la gestión de campeonatos locales de fútbol de menores.

## Estructura principal

- `/` Página pública principal del campeonato.
- `/publico` Portal público.
- `/login` Acceso interno.
- `/admin` Panel de administración.
- `/entrenador` Panel de entrenador/delegado.
- `/arbitro` Panel de árbitro.
- `/mesa-control` Validación en cancha.

## Sobre el archivo index

Este proyecto usa Next.js con App Router.

En Next.js moderno, el archivo principal no se llama `index.html`.
La página inicial del sitio es:

```txt
app/page.tsx
```

Ese archivo cumple la función de `index`.

## Tecnologías

- Next.js
- React
- Tailwind CSS
- TypeScript
- Supabase
- PostgreSQL

## Instalación local

```bash
npm install
npm run dev
```

Luego abrir:

```txt
http://localhost:3000
```
