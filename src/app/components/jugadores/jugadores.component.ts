import { Component, OnInit } from '@angular/core';

import { jugadoresService, jugadoress } from '../servicios/jugadores.service';

@Component({

  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores:jugadoress[]=[];

  constructor(private _jugadoresService:jugadoresService) { }
  ngOnInit(): void {
  this.jugadores=this._jugadoresService.getjugadores();
  console.log(this.jugadores);
}
}