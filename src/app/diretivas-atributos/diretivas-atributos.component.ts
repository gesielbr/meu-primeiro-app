import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public height: string = '20px';
  public background: string = 'yellow';

  public nome: string = '';
  public list: Array<{ nome: string }> = [];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.height == '20px') {
        this.height = '200px';
      } else {
        this.height = '20px';
      }

      if (this.background == 'yellow') {
        this.background = 'deepskyblue';
      } else {
        this.background = 'yellow';
      }
    }, 2000);
  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
