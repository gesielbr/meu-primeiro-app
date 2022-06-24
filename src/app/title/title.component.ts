import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnDestroy {
  @Input() public qqrvariavel: string = 'Bem vindo';

  constructor() {}
  ngOnInit(): void {}

  ngOnDestroy(): void {
    alert('Component destruído!');
  }
}
