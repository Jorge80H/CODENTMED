# CODENTMED IPS - Sitio Web Corporativo

Centro Integrado de Medicina, Odontología e Investigación Clínica - Atención integral con visión científica.

## 🚀 Estado del Proyecto

**Fase actual:** Configuración inicial completada ✅  
**Deploy target:** Netlify + GitHub  
**Base de datos:** Supabase  
**Stack:** Next.js 14 + TypeScript + Tailwind CSS

## 📋 Próximos Pasos para Continuar

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
1. Crear proyecto en [Supabase](https://supabase.com)
2. Copiar `.env.example` a `.env.local`
3. Completar las variables:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key

# Site
NEXT_PUBLIC_SITE_URL=https://codentmed-ips.netlify.app
NEXT_PUBLIC_DR_WILSON_URL=https://drwilsonbautista.com
```

### 3. Ejecutar Migraciones de Supabase
```bash
# En el dashboard de Supabase, ejecutar el SQL de:
# supabase/migrations/001_initial_schema.sql
```

### 4. Iniciar Desarrollo Local
```bash
npm run dev
```

### 5. Conectar con GitHub
1. Crear repositorio en GitHub
2. Conectar repositorio local:
```bash
git remote add origin https://github.com/tu-usuario/codentmed-ips.git
git branch -M main
git push -u origin main
```

### 6. Configurar Netlify
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
│   └── supabase.ts     # Cliente Supabase
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

## 📊 Base de Datos (Supabase)

### Tablas Principales
- **contacts** - Contactos principales
- **sponsors** - Información de patrocinadores
- **patients** - Información de pacientes
- **private_consultations** - Consultas privadas

### Servicios Disponibles
```typescript
import SupabaseService from '@/lib/supabase'

// Crear contacto
await SupabaseService.createContact(contactData)

// Enviar formulario completo
await SupabaseService.submitForm({
  contact: contactData,
  additionalData: formSpecificData
})
```

## 🌍 Internacionalización

- **Idiomas soportados:** Español (ES) y Inglés (EN)
- **Configuración:** `next-i18next.config.js`
- **Detección automática:** Por geolocalización y browser
- **URLs:** `/es/` y `/en/`

## 📱 Páginas Planificadas

### Estructura del Sitio
```
├── Home/Inicio
├── Para Patrocinadores (B2B)
├── Para Pacientes (B2C)
├── Servicios/
│   ├── Medicina Interna & Reumatología
│   ├── Odontología Especializada
│   ├── Investigación Clínica
│   ├── Educación Médica
│   └── Asesorías Institucionales
├── Dr. Wilson Bautista (integración)
├── Investigación y Publicaciones
├── Certificaciones
├── Blog/Recursos
└── Contacto Internacional
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

1. **Sistema bilingüe completo** con next-i18next
2. **Componentes base** y design system
3. **Páginas principales** con contenido
4. **Formularios** con integración Supabase
5. **SEO avanzado** internacional

---

**Desarrollado por:** Empleados Digitales  
**Contacto técnico:** Claude Code Assistant  
**Versión:** 0.1.0