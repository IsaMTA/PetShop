import { Almohadillas, Arena, Eliminador, Estacion, Funditas, Guantes, Recompensa, Rollitos, Snacks, Suplemento } from "../helpers/assets.helper";
import { Producto } from "../modelos/ModeloProducto.model";

export const PRODUCTOS: Producto[] = [
  { id: 101, nombre: 'Almohadillas de entrenamiento para mascotas de AmazonBasics', precio: 363.4  , img: Almohadillas},
  { id: 102, nombre: 'Guantes para aseo de mascotas de DELOMO', precio: 262.46  , img: Guantes},
  { id: 103, nombre: 'Recompensas para limpiar dentadura de perro de Greenies', precio:  464.35  , img: Recompensa},
  { id: 104, nombre: 'Arena para gatos de Dr. Elsey´s', precio:  363.40 , img: Arena},
  { id: 105, nombre: 'Paquete de rollitos de bolsas para recoger desechos de mascota de Earth Rated', precio: 242.27  , img: Rollitos},
  { id: 106, nombre: 'Funditas comestibles ', precio: 325.04  , img: Funditas},
  { id: 107, nombre: 'Eliminador de manchas y olores Rocco & Roxie Supply Co', precio: 403.78  , img: Eliminador},
  { id: 108, nombre: 'Suplemento alimenticio Cosequin DS', precio: 706.62  , img: Suplemento },
  { id: 109, nombre: 'Estación de alimentación para mascotas de Pet Zone', precio: 484.54  , img: Estacion},
  { id: 100, nombre: 'Snacks para perro de Milk-Bone', precio: 159.29  , img: Snacks}
];