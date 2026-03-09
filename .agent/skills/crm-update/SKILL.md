---
name: crm-update
description: Skill para actualizar el CRM de Empleados Digitales desde cualquier directorio de cliente
---

# Skill: Actualización del CRM Empleados Digitales

Esta skill permite a los agentes Antigravity actualizar el CRM central de Empleados Digitales desde cualquier directorio de cliente.

## Configuración del Webhook

**URL Base**: `https://crm-empleados-digitales.netlify.app/.netlify/functions`

### Endpoints Disponibles

| Endpoint | Descripción |
|----------|-------------|
| `/webhook-update` | CRUD completo para cualquier entidad |
| `/webhook-note` | Agregar notas rápidas a un cliente |

## Autenticación

Incluir el header `x-webhook-token` con el token configurado en las variables de entorno del CRM.

```
x-webhook-token: AgentesCRM2026!*88554#&y
```

## Client ID de CODENTMED IPS

```
9ba2377e-b546-4c40-928b-5b829392b1f1
```

## Uso del Webhook Principal (`/webhook-update`)

### Payload Format

```json
{
  "entity": "clients | projects | invoices | notes",
  "action": "create | update | delete",
  "data": { ... },
  "agent_source": "nombre-del-agente"
}
```

### Ejemplos por Entidad

#### Crear Cliente

```json
POST /.netlify/functions/webhook-update

{
  "entity": "clients",
  "action": "create",
  "data": {
    "name": "Nombre de la Empresa",
    "contact_name": "Persona de Contacto",
    "email": "email@empresa.com",
    "phone": "+57 300 123 4567",
    "status": "proposal",
    "directory_path": "g:\\EMPLEADOS DIGITALES\\CLIENTES\\NombreCliente",
    "notes": "Notas iniciales del cliente"
  },
  "agent_source": "antigravity-cliente-nuevo"
}
```

#### Actualizar Estado de Proyecto

```json
POST /.netlify/functions/webhook-update

{
  "entity": "projects",
  "action": "update",
  "data": {
    "id": "uuid-del-proyecto",
    "status": "in_progress",
    "description": "Nueva descripción actualizada"
  },
  "agent_source": "antigravity-proyecto-x"
}
```

#### Registrar Factura Pagada

```json
POST /.netlify/functions/webhook-update

{
  "entity": "invoices",
  "action": "update",
  "data": {
    "id": "uuid-de-factura",
    "status": "paid",
    "paid_date": "2026-01-30"
  },
  "agent_source": "antigravity-facturacion"
}
```

## Uso del Webhook de Notas (`/webhook-note`)

Para agregar notas rápidas sin necesidad de especificar action/entity:

```json
POST /.netlify/functions/webhook-note

{
  "client_id": "uuid-del-cliente",
  "project_id": "uuid-del-proyecto",  // opcional
  "content": "Se completó la reunión de seguimiento. El cliente aprobó el diseño.",
  "type": "meeting",
  "source": "antigravity-cliente-x"
}
```

### Tipos de Nota

| Tipo | Emoji | Uso |
|------|-------|-----|
| `note` | 📝 | Nota general |
| `call` | 📞 | Registro de llamada |
| `email` | ✉️ | Comunicación por email |
| `meeting` | 🤝 | Registro de reunión |
| `update` | 🔄 | Actualización del sistema |

## Estados Válidos

### Clientes (`status`)
- `lead` - Lead inicial
- `proposal` - Propuesta enviada
- `active` - Cliente activo
- `paused` - Proyecto pausado
- `completed` - Proyecto completado

### Proyectos (`status`)
- `planning` - En planificación
- `in_progress` - En desarrollo
- `review` - En revisión
- `completed` - Completado

### Facturas (`status`)
- `draft` - Borrador
- `sent` - Enviada al cliente
- `paid` - Pagada
- `overdue` - Vencida

## Ejemplo de Uso desde Antigravity

Cuando trabajes en el directorio de un cliente y necesites actualizar el CRM:

```javascript
// Usando fetch o curl para actualizar el CRM
const response = await fetch('https://crm-empleados-digitales.netlify.app/.netlify/functions/webhook-note', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-webhook-token': process.env.WEBHOOK_SECRET
  },
  body: JSON.stringify({
    client_id: 'uuid-cliente',
    content: 'Actualización desde el agente: Se completó la tarea X',
    type: 'update',
    source: 'antigravity-cliente-nombre'
  })
});
```

## Flujo Recomendado

1. **Al iniciar trabajo en un cliente**: Actualizar estado a `active`
2. **Al completar tareas**: Agregar nota con resumen
3. **Al entregar entregables**: Actualizar proyecto
4. **Al facturar**: Crear factura en estado `sent`
5. **Al recibir pago**: Actualizar factura a `paid`

## Respuestas del Webhook

### Éxito (200)
```json
{
  "success": true,
  "id": "uuid-generado",
  "action": "created",
  "timestamp": "2026-01-30T16:00:00.000Z"
}
```

### Error (400/401/500)
```json
{
  "error": "Mensaje de error",
  "message": "Detalles adicionales"
}
```

## Notas Importantes

> [!TIP]
> Siempre incluye `agent_source` para trazabilidad de qué agente hizo la actualización.

> [!IMPORTANT]
> El `client_id` debe existir en el CRM antes de agregar proyectos, facturas o notas relacionadas.

> [!WARNING]
> Las eliminaciones son permanentes. Usa con cuidado la acción `delete`.
