import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}

  public foodList: Array<FoodList> = [];

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      (res) => (this.foodList = res),
      (error) => console.log(error)
    );

    //SUBSCRIBE PODE SER ASSIM
    this.foodListService.emitEvent.subscribe((res) => {
      alert(
        `Você escutou e fez esse alerta via Subscribe do método "public emitEvent", a resposta é => ${res}`
      );
      return this.foodList.push(res);
    });

    // OU SUBSCRIBE PODE SER ASSIM
    // this.foodListService.emitEvent.subscribe({
    //   next: (res: any) => {
    //     alert(
    //       `Você escutou e fez esse alerta via Subscribe, você digitou => ${res}`
    //     );
    //   },
    //   error: (err: any) => console.log(err),
    // });
  }

  //Quando back não devolve toda a lista completa
  foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe(
      (res) => {
        this.foodList = this.foodList.filter((item) => {
          return id !== item.id;
        });
      },
      (error) => console.log('Erro: ' + error)
    );
  }

  foodListEdit(nome: string, id: number) {
    this.foodListService.foodListEdit(nome, id).subscribe(
      (res) => {
        return console.log(res);
      },
      (error) => error
    );
  }
}
