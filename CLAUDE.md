# CLAUDE.md

> ⚠️ **ANTES DE CUALQUIER TAREA: Lee el archivo `memory.md`** en la raíz del repositorio.
> Contiene el estado actual del proyecto, decisiones tomadas, pendientes y aprendizajes clave.
> Ruta: `g:\EMPLEADOS DIGITALES\CLIENTES\CODENMED_IPS\CODENTMED_IPS_COM\memory.md`

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains documentation and project planning files for CODENTMED IPS, a clinical research organization in Colombia. The project focuses on **national and international positioning** as a recognized clinical studies center, leveraging Dr. Wilson Bautista's scientific authority.

**Updated Project Structure (3 Phases):**

**Phase 1**: Strategic Digital Positioning
- Corporate website for CODENTMED IPS (bilingual: Spanish and English, with international positioning focus)
- Dr. Wilson Bautista website optimization + SEO strategy + content creation (existing site enhancement)
- Specialized sections for private consultation connected between both sites
- SEO optimization for national and international reach

**Phase 2**: Strategic Positioning Plan (replaces previous Phase 3)
- Scientific content strategy for national/international positioning
- Specialized social media management (medical networks, LinkedIn)
- Editorial plan for scientific publications
- Influencer strategy for Dr. Wilson Bautista

**Phase 3**: Advanced Operational Automations (moved from Phase 2)
- Automated appointments, payments, and follow-up systems
- Internal training agent for medical/administrative staff
- Administrative management agent
- Digital patient handbook
- Integration with electronic health records

## Repository Structure

This is a documentation-only repository containing:
- `REQUERIMIENTOS_SITIO_CODENMED_IPS.md` - Requirements and specifications for the CODENTMED IPS corporate website
- `REQUERIMIENTOS_SITIO_DR_BAUTISTA.md` - Requirements for Dr. Bautista's personal website  
- `PLAN_DE_AUTOMATIZACIONES.md` - Implementation plan for Phase 2 automation modules
- `PROPUESTA_COMERCIAL_CODENMED_IPS.md` - Original commercial proposal (markdown format)
- `propuesta_comercial.html` - **Updated HTML commercial proposal** with professional design and current pricing
- `logo-empleados.png` - Empleados Digitales company logo

## Current Pricing Structure (All prices + IVA)

**Phase 1: Strategic Digital Positioning**
- CODENTMED IPS Website: $1,400,000 COP + IVA
- Dr. Wilson Bautista Website Optimization + SEO + Content: $500,000 COP + IVA
- **Total Phase 1**: $1,900,000 COP + IVA
- Payment: 50% upfront, 50% on delivery

**Phase 2: Advanced Operational Automations**
- Appointments, Payments & Follow-ups System: $1,800,000 COP + IVA
- Intelligent Management Agents (Training + Admin + Patient Handbook): $1,500,000 COP + IVA

**Monthly Services (Starting after Phase 1)**:
- Website Maintenance: $140,000 COP + IVA/month
- Strategic Positioning & Content: $300,000 COP + IVA/month  
- Automations (when active): $480,000 COP + IVA/month

## Key Technical Specifications

**Technology Stack:**
- Frontend: Next.js 14 (React) with TypeScript
- Styling: Tailwind CSS
- Database: **InstantDB** (App ID: `2935a123-9c03-4e77-8072-d370920ae7fc`)
- Hosting: Netlify
- CMS: Headless via InstantDB

**Database Schema (InstantDB):**
- `heroSlides` - Homepage carousel management
- `blogPosts` - Blog articles (bilingual ES/EN)
- `blogCategories` - Blog categories
- `blogAuthors` - Blog authors
- `clinicalStudies` - Active clinical studies
- `contactSubmissions` - Contact form submissions

**Critical Requirements:**
- Page load time: < 3 seconds
- Mobile-responsive design
- SEO optimization for national and international positioning
- SSL certificate (HTTPS)
- Google Analytics 4 integration
- Integration readiness for appointment/payment systems
- Electronic health records integration capability

## InstantDB MCP Server

This project uses InstantDB with the MCP server for AI-assisted development:
- **MCP URL**: `https://mcp.instantdb.com/mcp`
- **App ID**: `2935a123-9c03-4e77-8072-d370920ae7fc`

Use the InstantDB MCP server to:
- Query and view data in the database
- Create and update records
- Manage schema and permissions

## Important Project Context

**Target Clients**: Dr. Sonia Unriza and Dr. Wilson Bautista
**Development Team**: Jorge Henao (Co-founder), Luisa Mora (Co-founder) - Empleados Digitales

**Key Project Goals:**
- Position CODENTMED IPS as nationally and internationally recognized clinical studies center
- Leverage Dr. Wilson Bautista's scientific authority and image  
- Capture private consultation market
- Automate clinical operations (appointments, payments, follow-ups)
- Future social media strategy (Phase 3 - to be quoted separately)

**Language & Market**: Spanish content for Colombian healthcare market with international reach

**Note**: This is currently the planning and requirements phase. The HTML proposal (`propuesta_comercial.html`) is the most current document for client presentation.