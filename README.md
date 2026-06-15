# RutaCosto UY

Aplicación web para estimar el costo de viajes por carretera dentro de Uruguay. Calcula distancia, consumo y costo de combustible, peajes, costo total y costo por persona a partir de los datos seleccionados por el usuario.

El proyecto busca ofrecer una herramienta simple y clara para familias, turistas, repartidores y cualquier persona que quiera anticipar cuánto puede costar un trayecto.

## Estado del proyecto

RutaCosto UY se encuentra en versión beta y continúa en desarrollo.

Actualmente incluye:

- Página principal informativa.
- Calculadora de viaje responsive.
- Selección de origen y destino.
- Viaje de solo ida o ida y vuelta.
- Cálculo de la ruta más corta entre los lugares disponibles.
- Selección del tipo y precio de combustible.
- Consumo configurable en litros cada 100 km.
- Selección de cantidad de pasajeros.
- Detección de peajes según los tramos recorridos.
- Selección del método de pago: Telepeaje, SUCIVE o efectivo.
- Selección de categoría tarifaria del vehículo.
- Desglose de combustible, peajes, costo total y costo por persona.

## Tecnologías

- **React 19** para construir la interfaz mediante componentes.
- **React Router 7** para gestionar la navegación entre páginas.
- **Tailwind CSS 4** para estilos, diseño responsive y personalización visual.
- **Bootstrap Icons** para los iconos de navegación, formularios y resultados.
- **Vite 8** como servidor de desarrollo y herramienta de compilación.
- **JavaScript con módulos ES** para datos, componentes y lógica de negocio.
- **ESLint** con reglas para React Hooks y React Refresh.
- **Google Fonts** para utilizar la familia tipográfica Montserrat.

## Cómo funciona

Los lugares y tramos de carretera se almacenan localmente en archivos JavaScript. La aplicación convierte esos tramos en un grafo bidireccional y utiliza el algoritmo de Dijkstra para encontrar la ruta disponible de menor distancia.

Después calcula:

```txt
litros consumidos = distancia total × consumo cada 100 km / 100
costo combustible = litros consumidos × precio por litro
costo total = costo combustible + costo de peajes
costo por persona = costo total / cantidad de pasajeros
```

Los peajes se detectan según la ruta y el rango kilométrico de cada tramo. Su precio depende de la categoría del vehículo y del método de pago seleccionado.

## Rutas de la aplicación

| Ruta | Descripción |
| --- | --- |
| `/` | Página principal |
| `/calculadora` | Calculadora de costos |

La navegación utiliza `BrowserRouter`, `Routes`, `Route` y un layout compartido con `Outlet`.

## Estructura

```txt
src/
├── components/
│   ├── Home/
│   │   ├── Feature/
│   │   ├── Hero.jsx
│   │   ├── RutasFrecuentesCard.jsx
│   │   └── RutasFrecuentesSection.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── Navbar.jsx
├── data/
│   ├── lugares.js
│   ├── peajes.js
│   ├── precioCombustible.js
│   ├── tarifasPeajes.js
│   └── tramosRuta.js
├── pages/
│   ├── Calculadora/
│   │   ├── Calculadora.jsx
│   │   ├── DetallesViaje.jsx
│   │   ├── ResultadoViaje.jsx
│   │   └── VehiculoPeajes.jsx
│   └── Home.jsx
├── utils/
│   ├── calcularCostoViaje.js
│   ├── calcularRuta.js
│   ├── formatCurrency.js
│   └── obtenerPeajesDelTramo.js
├── index.css
└── main.jsx
```

### Organización

- `components/`: componentes reutilizables y secciones de la página principal.
- `pages/`: páginas y componentes específicos de cada vista.
- `data/`: lugares, rutas, peajes, tarifas y precios cargados localmente.
- `utils/`: cálculo de rutas, costos, peajes y formato de moneda.
- `main.jsx`: configuración de React, React Router y estilos globales.

## Instalación

Se necesita Node.js y npm instalados.

```bash
git clone URL_DEL_REPOSITORIO
cd rutaCostoUy
npm install
npm run dev
```

La aplicación estará disponible normalmente en:

```txt
http://localhost:5173
```

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión optimizada en `dist/` |
| `npm run preview` | Sirve localmente la compilación de producción |
| `npm run lint` | Analiza el código con ESLint |

## Actualización de datos

Actualmente la aplicación no consume una API externa. Los datos se mantienen manualmente en:

- `src/data/precioCombustible.js`
- `src/data/tarifasPeajes.js`
- `src/data/peajes.js`
- `src/data/lugares.js`
- `src/data/tramosRuta.js`

Al actualizar precios o tarifas, también debe actualizarse la fecha correspondiente para poder identificar la vigencia de los datos.

## Próximas mejoras

- Guardar viajes y rutas frecuentes con LocalStorage.
- Permitir comparar recorridos y rutas alternativas.
- Agregar opciones para evitar peajes.
- Mostrar la fecha de actualización de precios y tarifas en la interfaz.
- Ampliar la cobertura de lugares y tramos.
- Mejorar la validación y los mensajes de error.
- Evaluar una integración futura con mapas.
- Incorporar pruebas automatizadas.

## Aviso

Los resultados son estimaciones y pueden variar por cambios de tarifas, consumo real del vehículo, tránsito, condiciones del camino, estilo de conducción y rutas alternativas.

RutaCosto UY no funciona como GPS ni reemplaza un servicio de navegación. Su objetivo es ofrecer una referencia orientativa del costo de un viaje.

## Autor

Desarrollado por **NMDEV.UY** como una solución web enfocada en viajes internos dentro de Uruguay.
