import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    RouterLink
  ],
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

}
