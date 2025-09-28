import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Hello {{ username() }}</h1>
    <input [(ngModel)]="username()" />
  `
})
export class AppComponent {
  username = signal('Hannah Lorainne');
}
