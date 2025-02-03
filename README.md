# Proyecto 4: Reservas Hoteleras

Este proyecto consiste en una **API RESTful** para la **gestión de reservas hoteleras**, implementada con **Node.js**, **Express** y almacenamiento en un archivo JSON. Se incluyen las 4 operaciones CRUD y filtros adicionales.

Opcionalmente, se implementa **documentación con Swagger** siguiendo la especificación **OpenAPI** para estandarizar el desarrollo y facilitar la escalabilidad.

## **Despliegue**

Este proyecto se ejecuta tanto en entorno local como en **Render**.

- **Base URL Local:** [`http://localhost:3000`](http://localhost:3000)
- **Base URL en Render:** [`https://proyecto4-kqpr.onrender.com`](https://proyecto4-kqpr.onrender.com)
- **Documentación Swagger:**  
  - **Local:** [`http://localhost:3000/api-docs`](http://localhost:3000/api-docs)  
  - **Render:** [`https://proyecto4-kqpr.onrender.com/api-docs`](https://proyecto4-kqpr.onrender.com/api-docs)
  - **Home Render:** [`https://proyecto4-kqpr.onrender.com/`](https://proyecto4-kqpr.onrender.com/)

---

## **Requerimientos del Proyecto**

- Crear una **arquitectura de carpetas organizada**.
- Implementar los **endpoints CRUD** para la gestión de reservas hoteleras.
- Permitir la **creación de reservas** con los detalles necesarios (hotel, tipo de habitación, número de huéspedes, fechas, etc.).
- Implementar **búsqueda y filtros** por hotel, rango de fechas, tipo de habitación, estado y número de huéspedes.
- Utilizar **persistencia de datos** con un archivo `reservas.json`.
- Documentar la API con **Swagger y OpenAPI**.

---

## **Endpoints de la API**

### 1.- Crear una Nueva Reserva
**Método:** POST  
**URL Local:** [`http://localhost:3000/api/reservas`](http://localhost:3000/api/reservas)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas`](https://proyecto4-kqpr.onrender.com/api/reservas)  

---

### 2.- Obtener Todas las Reservas
**Método:** GET  
**URL Local:** [`http://localhost:3000/api/reservas`](http://localhost:3000/api/reservas)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas`](https://proyecto4-kqpr.onrender.com/api/reservas)  

---

### 3.- Obtener una Reserva por ID
**Método:** GET  
**URL Local:** [`http://localhost:3000/api/reservas/1`](http://localhost:3000/api/reservas/1)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas/1`](https://proyecto4-kqpr.onrender.com/api/reservas/1)  

---

### 4.- Actualizar una Reserva
**Método:** PUT  
**URL Local:** [`http://localhost:3000/api/reservas/1`](http://localhost:3000/api/reservas/1)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas/1`](https://proyecto4-kqpr.onrender.com/api/reservas/1)  

**Cuerpo de la petición (JSON):**  
```json
{
  "tipo_habitacion": "Doble",
  "num_huespedes": 2,
  "estado": "Pendiente de Pago"
}
```

### 5.- Eliminar una Reserva
**Método:** DELETE  
**URL Local:** [`http://localhost:3000/api/reservas/1`](http://localhost:3000/api/reservas/1)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas/1`](https://proyecto4-kqpr.onrender.com/api/reservas/1)  

---

### 6.- Filtrar Reservas por Hotel
**Método:** GET  
**URL Local:** [`http://localhost:3000/api/reservas?hotel=Molina`](http://localhost:3000/api/reservas?hotel=Molina)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas?hotel=Molina`](https://proyecto4-kqpr.onrender.com/api/reservas?hotel=Molina)  

---

### 7.- Filtrar Reservas por Rango de Fechas
**Método:** GET  
**URL Local:** [`http://localhost:3000/api/reservas?fecha_inicio=2025-02-03&fecha_fin=2025-02-04`](http://localhost:3000/api/reservas?fecha_inicio=2025-02-03&fecha_fin=2025-02-04)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas?fecha_inicio=2025-02-03&fecha_fin=2025-02-04`](https://proyecto4-kqpr.onrender.com/api/reservas?fecha_inicio=2025-02-03&fecha_fin=2025-02-04)  

---

### 8.- Filtrar Reservas por Tipo de Habitación
**Método:** GET  
**URL Local:** [`http://localhost:3000/api/reservas?tipo_habitacion=Cuatro`](http://localhost:3000/api/reservas?tipo_habitacion=Cuatro)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas?tipo_habitacion=Cuatro`](https://proyecto4-kqpr.onrender.com/api/reservas?tipo_habitacion=Cuatro)  

---

### 9.- Filtrar Reservas por Estado
**Método:** GET  
**URL Local:** [`http://localhost:3000/api/reservas?estado=Pendiente`](http://localhost:3000/api/reservas?estado=Pendiente)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas?estado=Pendiente`](https://proyecto4-kqpr.onrender.com/api/reservas?estado=Pendiente)  

---

### 10.- Filtrar Reservas por Número de Huéspedes
**Método:** GET  
**URL Local:** [`http://localhost:3000/api/reservas?num_huespedes=4`](http://localhost:3000/api/reservas?num_huespedes=4)  
**URL en Render:** [`https://proyecto4-kqpr.onrender.com/api/reservas?num_huespedes=4`](https://proyecto4-kqpr.onrender.com/api/reservas?num_huespedes=4)  
