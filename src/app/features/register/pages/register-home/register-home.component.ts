import { Component } from '@angular/core';
import { ChamoService } from '../../../../core/services/chamo.service';
import { FormsModule } from '@angular/forms';
import { ChamoApiService } from '../../../../core/services/chamo-api.service';

@Component({
  selector: 'app-register-home',
  imports: [
    FormsModule
  ],
  templateUrl: './register-home.component.html',
  styleUrl: './register-home.component.css'
})
export class RegisterHomeComponent {
  name = '';

  constructor(
    private chamoService: ChamoService,
    private chamoApiService: ChamoApiService,
  ) {

  }

  register() {
    this.chamoApiService.insert(this.name).subscribe({
      next: () => {
        this.name = '';
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
