import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-directive-practice',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle],
  template: `
    <section class="wrapper">



      <ng-container *ngFor="let i of item; let d = index">
        <div
          *ngIf="i.city === selectedCity"
          class="person-card"
          [ngClass]="{
            highlight: i.age > 30,
            'first-person': d === 0
          }"
          [ngStyle]="{
            borderColor: i.age > 30 ? 'red' : 'green'
          }"
        >
          {{ i.name }} - {{ i.age }} tahun - {{ i.city }}
        </div>
      </ng-container>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100%;
      padding: 2rem;k
      background: #0b1220;
      color: #e2e8f0;
      font-family: 'Segoe UI', Arial, sans-serif;
    }

    .wrapper {
      max-width: 720px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h2 {
      margin: 0;
      color: #fff;
    }

    .hint {
      margin: 0;
      color: #cbd5e1;
    }

    .controls {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    button {
      padding: 0.45rem 0.9rem;
      border-radius: 10px;
      border: 1px solid rgba(148, 163, 184, 0.35);
      background: rgba(255, 255, 255, 0.04);
      color: #fff;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    button:hover {
      border-color: #2563eb;
    }

    .person-card {
      border: 2px solid transparent;
      padding: 0.75rem 1rem;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.04);
      margin-top: 0.5rem;
    }

    .highlight {
      background: rgba(255, 0, 0, 0.08);
    }

    .first-person {
      box-shadow: 0 0 0 1px rgba(124, 58, 237, 0.5);
    }
  `]
})
export class DirectivePracticeComponent {
  item = [
    { name: 'Anderson', age: 35, city: 'Sao Paulo' },
    { name: 'John', age: 12, city: 'Sao Paulo' },
    { name: 'Perter', age: 22, city: 'Sao Paulo' },
  ];

  selectedCity = 'Sao Paulo';
}
