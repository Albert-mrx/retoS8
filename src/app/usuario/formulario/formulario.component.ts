import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    valor:any;
    validar(edad:any){
      if(edad >= 18){
          this.valor=true;
      }else{
        this.valor = false;
      }
    }
    constructor() { }
    ngOnInit(): void {
    }

}
