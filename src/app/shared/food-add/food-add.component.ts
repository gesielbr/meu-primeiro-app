import { Component, OnInit } from '@angular/core';

//SERVICES
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {}
  public listAddItem(value: string) {
    console.log(value);
    return this.foodListService.foodListAdd(value).subscribe(
      //notificando que estamos adicionando um item
      (res) => this.foodListService.foodListAlert(res),
      (error) => console.log(error)
    );
  }
}
