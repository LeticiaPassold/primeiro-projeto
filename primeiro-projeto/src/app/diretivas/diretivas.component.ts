import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit{
    cursos: string[] = ["Angular","React","Vue"];

    mostrarCursos : boolean = false;
    meuFavorito: boolean | undefined;

    constructor() { }

    ngOnInit(): void {
    }

    onClick(){
      this.meuFavorito = !this.meuFavorito;
    }

    onMostrarCursos(){
      this.mostrarCursos = !this.mostrarCursos;
    }
}
