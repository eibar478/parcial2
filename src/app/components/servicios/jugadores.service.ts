import { Injectable } from '@angular/core';

@Injectable()


export class jugadoresService {

    private jugadores:jugadoress[]= [
        {
            img :"assets/img/james.jpg",
            nombre:"JAMES",
            l:"/James",
            
        },
        {
            img :"assets/img/messi.jpg",
            nombre:"MESSI",
            l:"/Messi",
        },
        {
            img :"assets/img/ronaldo.jpg",
            nombre:"RONALDO",
            l:"/Ronaldo",
        
        }
        

        ];
        

    constructor(){
    console.log("Servicio listo para usar!!");
    }
    getjugadores():jugadoress[]{
    return this.jugadores;
    }
        
}
export interface jugadoress{
    img: string;
    nombre: string;
    l: string;
    }
    