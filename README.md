# CODENTMED IPS - Sitio Web Corporativo

Centro Integrado de Medicina, Odontología e Investigación Clínica - Atención integral con visión científica.

## 🚀 Estado del Proyecto

**Fase actual:** Configuración inicial completada ✅  
**Deploy target:** Netlify + GitHub  
**Base de datos:** InstantDB (App ID: `2935a123-9c03-4e77-8072-d370920ae7fc`)
**Stack:** Next.js 14 + TypeScript + Tailwind CSS

## 📋 Próximos Pasos para Continuar

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
1. Copiar `.env.example` a `.env.local`
2. Completar las variables:
```bash
# InstantDB
NEXT_PUBLIC_INSTANT_APP_ID=2935a123-9c03-4e77-8072-d370920ae7fc
INSTANT_SECRET_TOKEN=tu-secret-token

# Site
NEXT_PUBLIC_SITE_URL=https://codentmed-ips.netlify.app
NEXT_PUBLIC_DR_WILSON_URL=https://drwilsonbautista.com
```

### 3. Iniciar Desarrollo Local
```bash
npm run dev
```

### 4. ✅ Repositorio GitHub Conectado
**URL del repositorio:** https://github.com/Jorge80H/CODENTMED.git

El repositorio ya está configurado y sincronizado. Para development futuro:
```bash
git pull origin main    # Obtener últimos cambios
git push origin main    # Subir cambios locales
```

### 5. Configurar Netlify
1. Crear cuenta en [Netlify](https://netlify.com)
2. Conectar repositorio GitHub
3. Configurar variables de entorno en Netlify
4. El `netlify.toml` ya está configurado

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                 # App Router (Next.js 14)
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Homepage
│   └── globals.css     # Estilos globales
├── components/         # Componentes reutilizables
├── lib/
│   └── instantdb.ts    # Cliente InstantDB
└── utils/              # Utilidades
```

## 🎨 Design System

### Colores de Marca
- **Primary:** Verde CODENTMED `#339b5e`
- **Secondary:** Dorado `#fde047`
- **Grays:** Escala de grises completa

### Componentes CSS Disponibles
- `.btn-primary` - Botón principal
- `.btn-secondary` - Botón secundario
- `.card` - Tarjeta con sombra
- `.section-padding` - Padding de sección
- `.container-max` - Contenedor máximo

## 📊 Base de Datos (InstantDB)

### App ID
`2935a123-9c03-4e77-8072-d370920ae7fc`

### Tablas Principales
- **heroSlides** - Carrusel del homepage
- **blogPosts** - Artículos del blog (bilingüe)
- **blogCategories** - Categorías del blog
- **blogAuthors** - Autores del blog
- **clinicalStudies** - Estudios clínicos activos
- **contactSubmissions** - Formularios de contacto

### Uso en la Aplicación
```typescript
import { db } from '@/lib/instantdb'

// Query hero slides activos
const { data, isLoading } = db.useQuery({
  heroSlides: {
    $: {
      where: { isActive: true },
      order: { order: 'asc' }
    }
  }
})

// Enviar formulario de contacto
await db.transact([
  db.tx.contactSubmissions[crypto.randomUUID()]().update({
    name: 'Nombre',
    email: 'email@example.com',
    message: 'Mensaje',
    type: 'general',
    language: 'es',
    createdAt: Date.now(),
    status: 'new'
  })
])
```

## 🌍 Internacionalización

- **Idiomas soportados:** Español (ES) y Inglés (EN)
- **Configuración:** `next-i18next.config.js`
- **Detección automática:** Por geolocalización y browser
- **URLs:** `/es/` y `/en/`

## 📱 Páginas Implementadas

### Estructura del Sitio
```
├── Home/Inicio ✅
├── Para Patrocinadores (B2B) ✅
├── Para Pacientes (B2C) ✅
├── Nosotros ✅
├── Blog ✅
├── Contacto ✅
├── Servicios/
│   ├── Medicina Interna & Reumatología ✅
│   ├── Odontología Especializada ✅
│   ├── Investigación Clínica ✅
│   ├── Educación Médica ✅
│   └── Asesorías Institucionales ✅
├── Dr. Wilson Bautista (integración pendiente)
└── Certificaciones
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo local
npm run build        # Build producción
npm run start        # Servidor producción
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## 📈 Métricas de Éxito

- **Performance:** Core Web Vitals > 90
- **SEO:** Top 5 keywords objetivo (3 meses)
- **Conversión B2B:** > 4%
- **Conversión B2C:** > 6%
- **Tráfico Internacional:** 40% (6 meses)

## 🚀 Deploy Automático

El proyecto está configurado con GitHub Actions para deploy automático en Netlify:
- **Push a `main`** → Deploy producción
- **Pull Request** → Preview deployment
- **Lighthouse CI** → Auditoría de performance

## 📞 Integración Dr. Wilson Bautista

- **Dominio existente:** drwilsonbautista.com
- **Redirects configurados:** `/dr-wilson/*` → drwilsonbautista.com
- **Cross-linking SEO:** Enlaces bidireccionales optimizados

## 📝 Próximos Desarrollos

1. ✅ **Sistema bilingüe completo** con next-i18next
2. ✅ **Componentes base** y design system
3. ✅ **Páginas principales** con contenido
4. ⏳ **Formularios** con integración InstantDB
5. ⏳ **SEO avanzado** internacional

---

**Desarrollado por:** Empleados Digitales  
**Contacto técnico:** Jorge Henao  
**Versión:** 0.2.0