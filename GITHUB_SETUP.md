# 🚀 Instrucciones para Subir a GitHub

## Comandos para Ejecutar

Después de crear el repositorio en GitHub, ejecuta estos comandos en la terminal:

```bash
# 1. Navegar al directorio del proyecto
cd "M:\EMPLEADOS DIGITALES\CLIENTES\CODENMED_IPS\CODENTMED_IPS_COM"

# 2. Agregar el remote origin (REEMPLAZA 'TU-USUARIO' con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/codentmed-ips.git

# 3. Verificar que el remote se agregó correctamente
git remote -v

# 4. Push inicial al repositorio
git push -u origin main
```

## Configuración Adicional Recomendada

### Variables de Entorno para GitHub Actions

En la configuración del repositorio de GitHub, ve a **Settings > Secrets and variables > Actions** y agrega:

#### Repository Secrets:
```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
NEXT_PUBLIC_SITE_URL=https://codentmed-ips.netlify.app
NEXT_PUBLIC_DR_WILSON_URL=https://drwilsonbautista.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NETLIFY_AUTH_TOKEN=tu-netlify-auth-token
NETLIFY_SITE_ID=tu-netlify-site-id
```

### Protección de Rama Main

1. Ve a **Settings > Branches**
2. Haz clic en **Add rule**
3. Branch name pattern: `main`
4. Marca:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

## URLs Importantes

- **Repositorio:** `https://github.com/TU-USUARIO/codentmed-ips`
- **Actions:** `https://github.com/TU-USUARIO/codentmed-ips/actions`
- **Releases:** `https://github.com/TU-USUARIO/codentmed-ips/releases`

## Próximos Pasos Después del Push

1. **Verificar GitHub Actions** - El workflow debería ejecutarse automáticamente
2. **Configurar Netlify** - Conectar el repositorio para deploy automático
3. **Setup Supabase** - Crear proyecto y ejecutar migraciones
4. **Configurar dominio** - Si tienes uno personalizado

## Comandos de Desarrollo Común

```bash
# Crear nueva rama para feature
git checkout -b feature/nueva-funcionalidad

# Hacer cambios y commit
git add .
git commit -m "Add nueva funcionalidad"

# Push de la rama
git push origin feature/nueva-funcionalidad

# Crear Pull Request en GitHub web interface
```

¡El proyecto está listo para GitHub! 🎉