import { Component, OnInit } from '@angular/core';

import { jugadoresService, jugadoress } from '../servicios/jugadores.service';


@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.css']
})
export class JamesComponent implements OnInit {
  jugador:jugadoress[] = []
  james:jugadoress[]

  constructor(private _servicios:jugadoresService) { 
    this.james = [{
      nombre: "",  
      img: "",
      l: ""
    }]
  }

  ngOnInit(): void {
    this.jugador = this._servicios.getjugadores()

    for(let james of this.jugador){
      if(james.nombre == "James Rodriguez"){
        this.james = [{
          nombre: james.nombre,
          img: james.img,
          l: james.l
        }]
      }
    }
  }

}
