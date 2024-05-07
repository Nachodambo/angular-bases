import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spriderman',
    'Hulk',
    'Thor',
    'Ironman',
    'She Hulk',
  ];
  public deletedHero?: string;

  removeLastHeroe(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
