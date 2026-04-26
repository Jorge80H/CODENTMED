# GEMINI.md

> ⚠️ **ANTES DE CUALQUIER TAREA: Lee el archivo `memory.md`** en la raíz del repositorio.
> Contiene el estado actual del proyecto, decisiones tomadas, pendientes y aprendizajes clave.
> Ruta: `g:\EMPLEADOS DIGITALES\CLIENTES\CODENMED_IPS\CODENTMED_IPS_COM\memory.md`

This file provides guidance to Google Gemini when working with code in this repository.

## Project Overview

CODENTMED IPS - Clinical research organization website in Colombia. Focus on **national and international positioning** as a recognized clinical studies center.

## Technology Stack

- **Frontend**: Next.js 14 (React) with TypeScript
- **Styling**: Tailwind CSS
- **Database**: InstantDB (App ID: `2935a123-9c03-4e77-8072-d370920ae7fc`)
- **Hosting**: Netlify
- **i18n**: next-i18next (Spanish/English)

## InstantDB Configuration

**App ID**: `2935a123-9c03-4e77-8072-d370920ae7fc`

**Tables:**
- `heroSlides` - Homepage carousel
- `blogPosts` - Blog articles (bilingual)
- `blogCategories` - Categories
- `blogAuthors` - Authors
- `clinicalStudies` - Active studies
- `contactSubmissions` - Contact forms

**Client Location**: `src/lib/instantdb.ts`

## InstantDB MCP Server

Use the InstantDB MCP to interact with the database:
- **MCP URL**: `https://mcp.instantdb.com/mcp`

To add the Instant MCP server:
```bash
gemini mcp add --transport http instant https://mcp.instantdb.com/mcp
```

Then run `/mcp` in Gemini to see the InstantDB tools.

## Project Structure

```
codentmed-ips/
├── src/
│   ├── app/           # App Router (Next.js 14)
│   ├── pages/         # Page components
│   ├── components/    # Reusable components
│   ├── lib/
│   │   └── instantdb.ts  # InstantDB client
│   └── utils/
├── public/
│   └── locales/       # i18n translations (es/en)
└── package.json
```

## Key Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server
npm run build        # Production build
npm run type-check   # TypeScript validation
```

## Important Context

- **Bilingual**: Spanish (primary) + English
- **Target**: Clinical research sponsors + patients
- **Team**: Empleados Digitales (Jorge Henao, Luisa Mora)
- **Clients**: Dr. Wilson Bautista, Dr. Sonia Unriza
