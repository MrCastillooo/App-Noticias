import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll) ionInfiniteScroll!: IonInfiniteScroll;

  public articles: Article[] = [];

  constructor(private newService: NewsService) {}

  ngOnInit() {
    this.newService.getTopHeadLine()
    .subscribe(articles => {
      this.articles = articles;
    });
  }

  loadData() {
    this.newService.getTopHeadLinesByCategory('business', true)
    .subscribe(articles => {

      if (articles.length === this.articles.length) {
        this.ionInfiniteScroll.disabled = true;
        return;
      }

      this.articles = articles;
      this.ionInfiniteScroll.complete();
    });
  }
}
