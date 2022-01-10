import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Capitan America']; 
  heroeBorrado: string = ''

  borrarHeroe(){
    let borrado = this.heroes.shift() || '';
    this.heroeBorrado = borrado;
  }

}
