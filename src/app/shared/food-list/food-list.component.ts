import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}

  public foodList: Array<string> = [];

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();

    //SUBSCRIBE PODE SER ASSIM
    this.foodListService.emitEvent.subscribe((res) =>
      alert(
        `Você escutou e fez esse alerta via Subscribe, a resposta é => ${res}`
      )
    );

    // OU SUBSCRIBE PODE SER ASSIM
    this.foodListService.emitEvent.subscribe({
      next: (res: any) => {
        alert(
          `Você escutou e fez esse alerta via Subscribe, você digitou => ${res}`
        );
      },
      error: (err: any) => console.log(err),
    });
  }
}
