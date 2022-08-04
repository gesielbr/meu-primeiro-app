import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding>-->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Aula de Diretivas de Atributo</h1>
      <hr />
    </app-diretivas-atributos> -->
    <!-- <app-new-component></app-new-component> -->
    <h1>Event</h1>
    <input type="text" #inputString (keyup)="onKeyUp($event)" /><br />
    <p>Valor Atual Event do Input = {{ valorAtual }}</p>

    <app-input [contador]="addValue"></app-input><br />
    <button (click)="add()">Somar +1 via @INPUT</button> <br /><br />

    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2>
    </ng-template>

    <app-output (enviarDados)="setDados($event)"> </app-output><br /><br />
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public addValue: number = 0;
  // public addValue: string = '';

  public getDados: { nome: string; idade: number } | undefined;

  valorAtual: string = '';

  constructor() {}
  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
    // this.addValue += 'Gesiel adicionado via @Input';
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
    console.log(event);
  }
}
