import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.sass'] 
})
export class App {
  colors = signal<string[]>([]);

  addColor(color: string) {
    this.colors.set([...this.colors(), color]);
  }
}
