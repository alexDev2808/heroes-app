import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

}
