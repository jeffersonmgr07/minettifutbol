# Minetti Fútbol

Sistema web para la gestión del **Torneo Municipal de Fútbol de Menores 2026**.

## Ya cargado en esta versión

- Categorías oficiales: Sub 6, Sub 8, Sub 10 y Sub 12.
- Años de nacimiento por categoría.
- Equipos y grupos extraídos del Excel.
- Fixture completo por categoría y grupo.
- Programación con día, hora y campo para Fecha 1 y Fecha 2.
- Página pública inicial.
- Páginas públicas: fixture, equipos, tabla, resultados, goleadores y bases.
- Estructura interna: admin, entrenador, árbitro, mesa de control y login.
- SQL inicial para Supabase/PostgreSQL.

## Archivo index

Este proyecto usa Next.js con App Router. El inicio real del sitio es:

```txt
app/page.tsx
```

Ese archivo cumple la función de `index`.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir:

```txt
http://localhost:3000
```

## Publicar en Vercel

1. Subir el contenido a GitHub.
2. En Vercel elegir **Add New → Project**.
3. Importar el repositorio.
4. Deploy.

## Datos cargados

- Categorías: 4
- Equipos inscritos por categoría/grupo: 44
- Partidos del fixture: 118
- Descansos registrados: 26
- Eventos con fecha/hora/campo desde el Excel: 48

## Nueva demo de delegado

- `/delegado` Demo de acceso único para delegado con selección de jugadores para partido.

## Avance cargado

### Fecha 1 - 17 de mayo

Se cargaron los resultados de la primera fecha desde la imagen enviada por la organización.

Rutas actualizadas:

- `/`
- `/publico/fixture`
- `/publico/resultados`
- `/publico/tabla-posiciones`

### Demo delegado

Ruta:

```txt
/delegado
```

La demo usa el padrón real cargado del equipo **GUERREROS DE MANCHAY - Sub 6** para simular la convocatoria del partido de Fecha 2 contra **RENACE JUVENTUD**.

### Archivos de datos agregados

- `data/results.ts`
- `data/delegateMock.ts`
- `public/images/resultados-fecha-1-17-mayo.jpeg`


## Fotos de jugadores

Para la demo de delegado, subir las fotos de los jugadores en formato PNG en esta ruta:

```txt
public/IMG/jugadores/
```

El archivo debe llamarse igual que el DNI del jugador:

```txt
public/IMG/jugadores/94768639.png
```

La web lo mostrará automáticamente en la nómina general.
