import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html',
})
export class ContadorComponent {
numero: number = 10;

  acumular(valor: number){
    this.numero += valor;
    console.log(this.numero);
  }
}