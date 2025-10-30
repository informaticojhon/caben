# CABEN - Servicios Marítimos

**Servicios Marítimos René Armando Oyarce Cárcamo EIRL**

Sitio web corporativo desarrollado con **Astro** y **Tailwind CSS** para una empresa especializada en servicios marítimos en la Región de Los Lagos y la Región de Aysén, Chile.

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework de sitios estáticos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **TypeScript** - Tipado estático
- **HTML5** y **CSS3**

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── images/          # Imágenes y assets estáticos
│   │   ├── inicio/      # Imágenes del slider principal
│   │   ├── servicios/   # Imágenes de servicios
│   │   └── clientes/    # Logos de clientes
│   └── favicon.ico
├── src/
│   ├── components/      # Componentes reutilizables
│   │   └── HeroSlider.astro
│   ├── layouts/         # Layouts base
│   │   └── BaseLayout.astro
│   ├── pages/           # Páginas del sitio
│   │   ├── index.astro  # Página principal
│   │   ├── acerca.astro # Acerca de nosotros
│   │   ├── servicios.astro # Servicios
│   │   └── contacto.astro  # Contacto
│   └── styles/
│       └── global.css   # Estilos globales con Tailwind
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
└── package.json
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL-del-repositorio]
cd caben

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Construcción para Producción
```bash
# Generar sitio estático
npm run build

# Vista previa del sitio construido
npm run preview
```

## 🌐 Servicios

### 🚢 Transporte de Pasajeros
- Rutas marítimas regulares y especiales
- Embarcaciones modernas y seguras
- Personal capacitado y experimentado

### ⚓ Subarriendo de Embarcaciones
- Flota moderna y versátil
- Mantención preventiva permanente
- Opciones con o sin tripulación

### 💼 Consultoría Marítima
- Optimización de operaciones
- Cumplimiento normativo
- Gestión de riesgos marítimos

## 📱 Características del Sitio

- **Diseño Responsive** - Optimizado para móviles, tablets y desktop
- **Rendimiento Optimizado** - Sitio estático generado con Astro
- **SEO Friendly** - Meta tags optimizados para buscadores
- **Accesibilidad** - Cumple estándares de accesibilidad web
- **Tema Marítimo** - Paleta de colores y diseño inspirado en el mar

## 🎨 Paleta de Colores

```css
--color-marine-900: #0b1e3a  /* Azul marino oscuro */
--color-marine-700: #0f3d5e  /* Azul marino medio */
--color-marine-600: #0d5c63  /* Azul verdoso */
--color-marine-500: #1976d2  /* Azul brillante */
--color-marine-400: #42a5f5  /* Azul claro */
```

## 📞 Información de Contacto

- **Teléfono:** +56 963204644
- **Email:** contacto@caben.cl
- **Dirección:** Costanera SN, Melinka, Región de Aysén, Chile

## 🚀 Migración desde Vue.js

Este proyecto fue migrado exitosamente desde **Vue.js + Bootstrap** a **Astro + Tailwind CSS** para mejorar:

- ✅ **Rendimiento** - Sitio estático más rápido
- ✅ **SEO** - Mejor indexación en buscadores
- ✅ **Mantenimiento** - Arquitectura más simple
- ✅ **Carga inicial** - Menos JavaScript en el cliente

### Cambios Principales:
- Eliminación de Vue Router (navegación nativa de Astro)
- Migración de componentes Vue a componentes Astro
- Reemplazo de Bootstrap por Tailwind CSS
- Movimiento de assets de `src/assets` a `public/images`
- Configuración optimizada para sitios estáticos

## 📄 Licencia

© 2025 Servicios Marítimos René Armando Oyarce Cárcamo EIRL. Todos los derechos reservados.

---

Desarrollado con ❤️ para conectar las comunidades marítimas del sur de Chile.
