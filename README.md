<div align="center">

# 🃏 Traitor Royale

### *¿Quién es el IMPOSTOR?*

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.15-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
</p>

Un emocionante juego multijugador de engaño y deducción con temática de Clash Royale. Encuentra al impostor antes de que sea demasiado tarde.

[Características](#-características) • [Instalación](#-instalación) • [Cómo Jugar](#-cómo-jugar) • [Tecnologías](#️-tecnologías)

</div>

---

## 🎮 Características

- 🎭 **Juego de Roles**: Cada jugador recibe un rol secreto - ¿eres el impostor o un jugador normal?
- 🃏 **Cartas de Clash Royale**: Integración con la API de Clash Royale para una experiencia única
- 👥 **Multijugador Local**: Juega con 3 o más amigos en el mismo dispositivo
- 🔄 **Sistema de Turnos**: Los jugadores se pasan el dispositivo para mantener su rol en secreto
- 🎨 **Interfaz Moderna**: Diseño responsivo con animaciones suaves usando Framer Motion
- 🌙 **UI Atractiva**: Componentes personalizados con Radix UI y Tailwind CSS
- 🔒 **Sesiones Seguras**: Manejo de sesiones del lado del servidor con Astro

## 📦 Instalación

### Requisitos Previos

- Node.js 18+ o Bun
- Git

### Pasos

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/aek676/traitor-royale.git
   cd traitor-royale
   ```

2. **Instala las dependencias**
   ```bash
   bun install
   # o
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   bun dev
   # o
   npm run dev
   ```

4. **Abre tu navegador**
   
   Navega a `http://localhost:4321`

## 🎯 Cómo Jugar

1. **Configuración**: 
   - Ingresa los nombres de todos los jugadores (mínimo 3)
   - El sistema asignará aleatoriamente un impostor

2. **Descubre tu Rol**:
   - Cada jugador ve su carta/rol en secreto
   - El impostor recibirá una carta diferente o instrucciones especiales

3. **Fase de Juego**:
   - Los jugadores se turnan para realizar acciones
   - ¡El impostor debe ocultarse mientras sabotea discretamente!

4. **Votación y Victoria**:
   - Discute con tus amigos y vota por quién crees que es el impostor
   - ¿Podrás encontrarlo a tiempo?

## 🛠️ Tecnologías

### Frontend
- **[Astro](https://astro.build)** - Framework web moderno y rápido
- **[React](https://react.dev)** - Componentes interactivos
- **[TypeScript](https://www.typescriptlang.org)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com)** - Estilos utilitarios
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas

### UI Components
- **[Radix UI](https://www.radix-ui.com)** - Componentes accesibles
- **[Lucide React](https://lucide.dev)** - Iconos modernos
- **[shadcn/ui](https://ui.shadcn.com)** - Sistema de componentes

### Backend & APIs
- **Astro Actions** - API server-side
- **Clash Royale API** - Integración de cartas del juego

## 📁 Estructura del Proyecto

```
traitor-royale/
├── src/
│   ├── actions/           # Server actions (lógica del juego)
│   ├── components/        # Componentes React y Astro
│   │   ├── ui/           # Componentes de UI reutilizables
│   │   ├── ActionButton.tsx
│   │   ├── PressToReveal.tsx
│   │   └── SwipeToRevealCard.tsx
│   ├── interfaces/        # Tipos TypeScript (Player, Card)
│   ├── layouts/          # Layouts de Astro
│   ├── lib/              # Utilidades y API clients
│   │   ├── clashRoyaleApi.ts
│   │   └── utils.ts
│   ├── pages/            # Rutas de la aplicación
│   │   ├── index.astro   # Página de inicio
│   │   ├── config.astro  # Configuración del juego
│   │   └── game/         # Páginas del juego
│   └── styles/           # Estilos globales
├── public/               # Assets estáticos
└── docker-compose.yml    # Configuración Docker
```

## 🚀 Comandos Disponibles

| Comando              | Acción                                              |
| :------------------- | :-------------------------------------------------- |
| `bun install`        | Instala las dependencias                            |
| `bun dev`            | Inicia el servidor de desarrollo en `localhost:4321`|
| `bun build`          | Construye la aplicación para producción             |
| `bun preview`        | Previsualiza la build de producción localmente      |
| `bun check`          | Verifica errores de TypeScript                      |

## 🐳 Docker

El proyecto incluye configuración de Docker para un despliegue sencillo:

```bash
docker-compose up
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**aek676**

---

<div align="center">

⭐ ¡Dale una estrella si te gusta el proyecto! ⭐

</div>
