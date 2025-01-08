import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
  ]
}
