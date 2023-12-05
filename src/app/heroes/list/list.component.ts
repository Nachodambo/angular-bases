import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Speidermian',
    'Orlorfrod',
    'Moinoroi',
    'Rolf',
    'Aitanaiclak',
  ];

  public lastHeroe?: string;

  removeLastHeroe(): void {
    this.lastHeroe = this.heroNames.pop();
    
  }
}
