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
    <!-- <app-input [contador]="addValue"></app-input><br />
    <button (click)="add()">AddValue</button> -->

    <app-output></app-output><br />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public addValue: number = 0;
  constructor() {}
  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
  }
}
