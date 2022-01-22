/* Interfaz que contiene todos los atributos necesarios */
/* para la funcionalidad de las opciones del menu */
export interface Componente {

 icon: string;
 name: string;
 redirectTo: string;
 padre: string;
 hijos: Componente[];
 hijosVisibles: boolean;

}
