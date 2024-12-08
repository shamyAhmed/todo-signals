import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootLayout } from './layouts/rootLayout/RootLayout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RootLayout],
  template: `
    <td-root-layout>
      <router-outlet></router-outlet>
    </td-root-layout>
  `,
})
export class AppComponent {
  title = 'todo-signals';
}