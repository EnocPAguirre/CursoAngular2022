import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  //@Input() personajes: Personaje[] = [];
  constructor(private dbService: DbzService) { }

  ngOnInit(): void {
  }

  get personajes() {
    return this.dbService.personajes;
  }


}
