import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class HelloWorldComponent {
  greeting = 'Hello World!';
  welcomeMessage = 'Welcome to the Angular data binding playground by Yosua.';
  favoriteNumbers = [3, 7, 9, 21];
  typedValue = '';
  clickCount = 0;

  inputHandler(value: string): void {
    this.typedValue = value;
  }

  clickHandler(): void {
    this.clickCount += 1;
  }
}
