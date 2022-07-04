import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public nome: string = 'Gesiel';
  public idade: number = 40;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;

  public imgSrc: string =
    'https://vidafullstack.com.br/wp-content/uploads/2021/01/como-criar-site.jpg';

  public imgTitle: string = 'Property Binding';
  public imgAlt: string = '';
  public position: { x: number; y: number } = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent) {}

  public mouseMoveTest(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  constructor() {}

  ngOnInit(): void {}
}
