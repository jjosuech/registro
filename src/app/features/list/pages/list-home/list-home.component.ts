import { Component } from '@angular/core';
import { ChamoService } from '../../../../core/services/chamo.service';
import { Chamo } from '../../../../core/interfaces/chamo';
import { ChamoApiService } from '../../../../core/services/chamo-api.service';

@Component({
  selector: 'app-list-home',
  imports: [],
  templateUrl: './list-home.component.html',
  styleUrl: './list-home.component.css'
})
export class ListHomeComponent {
  chamos: Chamo[] = [];

  constructor(
    private chamoService: ChamoService,
    private chamoApiService: ChamoApiService,
  ) {
    // this.chamos = chamoService.chamos;
    this.getChamos();
  }

  getChamos() {
    this.chamoApiService.getAll()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.chamos = response as Chamo[];
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
