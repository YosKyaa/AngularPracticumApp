import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {
    readonly data = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'];

  /** Initial article feed inspired by a simple Reddit clone. */
  private readonly initialArticles = [
    {
      title: 'Angular Tutorial',
      link: 'https://angular.io/tutorial',
      votes: 15
    },
    {
      title: 'TypeScript Handbook',
      link: 'https://www.typescriptlang.org/docs/',
      votes: 8
    },
    {
      title: 'RxJS Guide',
      link: 'https://rxjs.dev/guide/overview',
      votes: 12
    }
  ];

  redditArticles = [...this.initialArticles];
  newArticleTitle = '';
  newArticleLink = '';

  get sortedArticles() {
    return [...this.redditArticles].sort((a, b) => b.votes - a.votes);
  }

  addArticle(): void {
    const title = this.newArticleTitle.trim();
    const link = this.newArticleLink.trim();

    if (!title || !link) {
      return;
    }

    this.redditArticles = [
      ...this.redditArticles,
      { title, link, votes: 0 }
    ];

    this.newArticleTitle = '';
    this.newArticleLink = '';
  }

  voteUp(article: { votes: number }): void {
    article.votes += 1;
  }

  voteDown(article: { votes: number }): void {
    article.votes -= 1;
  }

  domain(link: string): string | null {
    try {
      const url = new URL(link);
      return url.hostname;
    } catch {
      return null;
    }
  }

  resetArticles(): void {
    this.redditArticles = [...this.initialArticles];
  }
}
