# EnerLedger-Solana-Hackathon
Infraestructura energética descentralizada (DePIN) para el registro inmutable de mediciones y tokenización de eficiencia en Solana.

**EnerLedger** es una red de infraestructura física descentralizada (**DePIN**) diseñada para el registro inmutable de mediciones eléctricas y la tokenización de métricas de eficiencia energética. Utilizando la velocidad y bajos costos de la red **Solana**, EnerLedger permite a los usuarios transformar su consumo de energía en activos digitales verificables.


![Logo EnerLedger](logo.jpeg)

## Visión General

El proyecto aborda la falta de transparencia en los sistemas de medición tradicionales mediante el uso de **Smart Contracts** en Rust. EnerLedger registra lecturas de medidores inteligentes directamente en la blockchain, eliminando la posibilidad de manipulación de datos y permitiendo un sistema de recompensas automatizado mediante el token **ENER**.

##  Stack Tecnológico

* **Blockchain:** Solana (Mainnet/Devnet)
* **Smart Contracts:** Anchor Framework / Rust
* **Lenguajes:** Rust (Backend), TypeScript (Client/Logic)
* **Frontend Web:** Portal de monitoreo global (Estética Vintage Engraving)
* **Mobile App:** EnerWallet para gestión de nodos y recompensas.

## Arquitectura del Ecosistema

### 1. Smart Contract (El Núcleo)
Desarrollado en **Rust**, el contrato permite:
* `inicializar_medidor`: Registro de nuevos dispositivos en la red.
* `registrar_lectura`: Almacenamiento inmutable de datos de consumo (kWh) vinculados a un Timestamp y un ID de medidor.

### 2. Dashboard Web (Monitoreo de Red)
Interfaz de escritorio diseñada para la visualización de datos globales de la red DePIN.
* **Métricas en Tiempo Real:** Visualización de energía total procesada (150.5 kWh) y nodos activos.
* **Gráfica de Consumo:** Histórico de carga de la red con trazabilidad directa a la blockchain.
![Dashboard Web](Diseño%20UI%20para%20EnerLedger.png)
### 3. EnerWallet (App Móvil)
La interfaz del usuario final para interactuar con la infraestructura física:
* Conexión de medidores inteligentes.
* Gestión de **EnerTokens (ENER)**.
* Firma de transacciones para validación de datos.
  ## Interfaz de Usuario (EnerWallet)
![Wallet](Diseño%20UI%20para%20EnerWallet.png)


## Datos de la Red 

| Métrica | Valor |
| :--- | :--- |
| **Energía Total Registrada** | 150.5 kWh |
| **Medidores Activos** | 3 |
| **Registros Verificados** | 4 |
| **Token de Recompensa** | $ENER |

## Instalación y Despliegue

```bash
# Clonar el repositorio
 git clone https://github.com/Arisbethp02/enerledger.git

# Instalar dependencias
npm install

# Compilar el contrato de Anchor
anchor build

# Desplegar en Devnet
anchor deploy
