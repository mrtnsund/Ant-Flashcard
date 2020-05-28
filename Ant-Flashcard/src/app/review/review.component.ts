import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { DateService } from '../services/date.service';
import { ICard } from '../shared/card.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  size = 'large';
  cardToDisplay: ICard;
  cards: ICard[];
  index: number;
  dueCards: ICard[];
  revealAnswer: boolean;
  progressPercent: number;
  loaded: boolean = false;
  today;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cardService: CardService,
    private dateService: DateService,
  ) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
      this.index = 0;
      this.today = this.dateService.transformDate(new Date());
      this.dueCards = this.getDueCards();
      this.cardToDisplay = this.dueCards[this.index];
      this.progressPercent = 1 / this.dueCards.length * 100;
      this.loaded = true;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  getDueCards(): ICard[] {
    return this.cards.filter(card => (card.date <= this.today));
  }
  againClick(): void {
    // const card = this.dueCards[this.index];
    // this.dueCards.push(card);
    this.nextCard();
  }
  easyClick(): void {
    const card = this.dueCards[this.index];
    const newDate = new Date();
    card.date = this.dateService.transformDate(newDate.setDate(newDate.getDate() + 4));
    this.cardService.updateCard(card).subscribe();
    this.nextCard();
  }
  mediumClick(): void {
    const card = this.dueCards[this.index];
    const newDate = new Date();
    card.date = this.dateService.transformDate(newDate.setDate(newDate.getDate() + 3));
    this.cardService.updateCard(card).subscribe();
    this.nextCard();
  }
  hardClick(): void {
    const card = this.dueCards[this.index];
    const newDate = new Date();
    card.date = this.dateService.transformDate(newDate.setDate(newDate.getDate() + 1));
    this.cardService.updateCard(card).subscribe();
    this.nextCard();
  }
  nextCard(): void {
    this.revealAnswer = false;
    this.index++;
    this.cardToDisplay = this.dueCards[this.index];
    this.progressPercent = this.index / this.dueCards.length * 100;
  }
  toggleAnswer(): void {
    this.revealAnswer = true;
  }


}
