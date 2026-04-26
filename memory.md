# MEMORY.md — CODENTMED IPS
> Documento de memoria del proyecto. Registra decisiones técnicas, aprendizajes y estado actual para cualquier IA (Claude, Gemini, Antigravity) que trabaje en este repositorio.
> **Actualizar este archivo después de cada sesión de trabajo importante.**

---

## 📍 Estado Actual del Proyecto
**Fecha última actualización:** 2026-04-26  
**Fase:** Sitio web en producción (Netlify) — mejoras continuas de UI/UX  
**URL producción:** https://codentmed.com  
**Rama activa:** `main`

---

## 🏗️ Arquitectura del Sitio

### Estructura de páginas activas
```
/                          → Inicio (HeroSection + secciones)
/servicios                 → Listado de especialidades
/servicios/reumatologia    → Reumatología (Dr. Wilson)
/servicios/medicina-interna → Medicina Interna (Dr. Wilson)
/servicios/medicina-general → Medicina General (Dra. Erika)
/servicios/hematologia     → Hematología (Dr. Leonardo)
/nosotros/quienes-somos    → Quiénes Somos (con foto equipo)
/nosotros/equipo           → Página del equipo médico
/pacientes                 → Información para pacientes
/blog                      → Blog médico
/blog/[slug]               → Post individual
/contacto                  → Formulario de contacto + mapa
/aviso-de-privacidad       → Aviso legal (Ley 1581 de 2012)
/terminos-y-condiciones    → Términos legales
```

### Componentes clave
- **`Header.tsx`** — Navbar con menú desktop/mobile. Logo en `/images/logos/codentmed-logo-transparent.png`
- **`Footer.tsx`** — Footer con logo blanco (filtro CSS `brightness(0) invert(1)`). Logo en `codentmed-logo-transparent.png`
- **`ContactForm.tsx`** — Formulario con checkbox autorización datos (Ley 1581 obligatorio)
- **`AgendarCitaModal.tsx`** — Modal de agendamiento (formulario propio, pendiente integrar iframe SaludTools)

---

## ✅ Decisiones Técnicas Tomadas

### Logo
- El logo principal (`codentmed-logo-transparent.png`) tiene fondo transparente.
- **Header:** Se usa directamente sin filtro (colores originales sobre fondo claro).
- **Footer:** Se aplica `filter: brightness(0) invert(1)` para renderizarlo en blanco sobre fondo verde oscuro.
- ⚠️ No usar el `codentmed-logo.png` original (tiene fondo blanco). No usar `codentmed-logo-white.png` (generado por IA, no oficial).

### Navegación
- El problema del menú hamburguesa en desktop era `display: 'flex'` en línea que sobreescribía `lg:hidden` de Tailwind.
- **Solución:** Nunca poner `display: 'flex'` en el `style` de elementos que se controlan con clases Tailwind de visibilidad.

### Formulario de Contacto
- Campo **"Motivo de contacto"**: Cita Médica | Información de Servicios | PQRS | Otro
- Campo **"Especialidad"**: Solo Reumatología | Medicina Interna (no incluir Medicina General ni "No sé")
- Checkbox obligatorio de **autorización de datos personales** (Ley 1581 de 2012) — el botón de envío queda deshabilitado hasta que se marque.
- Horario de atención: Solo **Lunes–Viernes 8:00–17:00** (se eliminaron los sábados).

### Páginas de Servicios
- **Reumatología:** CTA final apunta a `https://agenda.saludtools.com/qj82t2wo` (SaludTools externo).
- **Medicina Interna:** Sin sección de FAQs. Avatar del Dr. Wilson Bautista con foto circular.
- **Equipo (`/nosotros/equipo`):** Botón "Ver Especialidades" apunta a `/servicios` (no a `/servicios/medicina` que no existe).

### Páginas Legales
- Diseño con hero verde oscuro + sidebar TOC + texto oscuro (`#1a2e1c`) sobre fondo blanco (`#fff`).
- ⚠️ No usar clases `prose` o `text-foreground` de Tailwind en estas páginas (heredan mal el color en este contexto). Usar siempre estilos en línea.
- **Aviso de Privacidad:** Basado en Ley 1581 de 2012 + Decreto 1377 de 2013. Menciona datos sensibles de salud y retención de 20 años de historias clínicas.

### Footer
- Columna **LEGAL** tiene: Aviso de Privacidad + Términos y Condiciones.
- Barra inferior: Solo copyright. Sin links duplicados.
- Se eliminó el link "Transparencia".

---

## 🔧 Pendientes / Próximos Pasos

### Alta prioridad
- [ ] **Integrar SaludTools como iframe en modal** — El usuario quiere que al hacer clic en "Agendar cita" se abra la ventana de SaludTools como un modal incrustado (no una pestaña nueva). URL: `https://agenda.saludtools.com/qj82t2wo`
- [ ] **Verificar que SaludTools permite iframe** (algunos servicios bloquean con `X-Frame-Options`). Si lo bloquea, mostrar un modal simple con botón que abre en nueva pestaña.

### Media prioridad
- [ ] Revisar si la sección de FAQs debe eliminarse también de **Hematología** y **Medicina General** (solo se eliminó de Medicina Interna).
- [ ] Optimizar imágenes del equipo (algunas son JPG pesados, convertir a WebP).
- [ ] Agregar el checkbox de autorización de datos al **AgendarCitaModal** también (actualmente solo está en ContactForm).

### Baja prioridad
- [ ] Crear versión oficial del logo en blanco (SVG nativo) con el equipo de diseño — la versión actual usa filtro CSS.
- [ ] Revisar el componente `Layout.tsx` que tiene su propio footer antiguo (no usado en producción pero puede confundir).

---

## 📁 Archivos de Assets Importantes

```
public/images/
├── logos/
│   ├── codentmed-logo-transparent.png  ← Logo principal (fondo transparente) ✅ USAR ESTE
│   ├── codentmed-logo.png              ← Logo original (fondo blanco) ⚠️ NO USAR
│   └── codentmed-logo-white.png        ← Generado por IA ⚠️ NO USAR
├── team/
│   ├── DrWilsonBautistafotoperfil.jpg  ← Dr. Wilson (perfil circular en servicios)
│   ├── Dr-Sonia.JPG                    ← Dra. Sonia
│   ├── DrLeonardo_Hematologo.JPG       ← Dr. Leonardo
│   └── Medico_General.JPG             ← Dra. Erika
├── about-team-2.jpg                    ← Foto grupal para /nosotros/quienes-somos
└── medical/
    ├── columna.jpg
    ├── mano.jpg
    └── rotula.jpg
```

---

## 🌐 Integraciones y Credenciales

| Servicio | Dato |
|---|---|
| **InstantDB App ID** | `2935a123-9c03-4e77-8072-d370920ae7fc` |
| **Google Analytics** | `G-59MEPFBEM0` |
| **SaludTools (agendamiento)** | `https://agenda.saludtools.com/qj82t2wo` |
| **Teléfono** | `(601) 739 7010` |
| **Dirección** | Vitale Centro Médico · Usaquén, Bogotá |
| **Horario** | Lunes–Viernes 8:00–17:00 |

---

## 📝 Historial de Sesiones

### 2026-04-26 — Sesión de UI/UX y Contenido
**Cambios realizados:**
- Fix menú hamburguesa visible en desktop (conflicto `display:flex` inline vs `lg:hidden` Tailwind)
- Formulario de contacto: nuevo campo "Motivo de contacto", especialidades limitadas, checkbox Ley 1581
- Footer: logo blanco funcional, eliminado "Transparencia", eliminados links duplicados
- Botón equipo: corregido link roto `/servicios/medicina` → `/servicios`
- Páginas legales nuevas: `/aviso-de-privacidad` y `/terminos-y-condiciones` con diseño profesional
- Reumatología: CTA → SaludTools
- Medicina Interna: sin FAQs, con avatar Dr. Wilson
- Commit: `ab56c60` — 56 archivos, 3070 inserciones

### 2026-04-25 — Sesión Hero y Navegación
**Cambios realizados:**
- Hero de /pacientes estandarizado igual que /servicios y /equipo (verde, badge dorado, Newsreader)
- Navbar: "Equipo" renombrado a "Nosotros" → link a /nosotros/quienes-somos
- Quienes Somos: foto equipo integrada con `objectPosition: 'center 20%'`
- Medicina Interna: avatar Dr. Wilson, sin FAQs
