import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    {
      nome: 'Gesiel Oliveira',
      idade: 40,
    },
    {
      nome: 'Maria Sirlei Souza Oliveira',
      idade: 60,
    },
    {
      nome: 'Abner Oliveira',
      idade: 39,
    },
    {
      nome: 'Uriel Oliveira',
      idade: 37,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
