import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  nome: String = "Fulano"
  url: String = "https://www.ifsc.edu.br/image/layout_set_logo?img_id=902745&t=1677950697448"
  esconderTexto: boolean = true;
  valorDigitado: String = ""
  isMouseOver: boolean = false;

  clique() {
    alert('ação do botão');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorDigitado = (<HTMLInputElement>event.target).value;
  }
  onMouseOver() {
    this.isMouseOver = true;
  }
  onMouseOut() {
    this.isMouseOver = false;
  }

  getValor() {
    return 1;
  }

  constructor() { }

  ngOnInit(): void
}
