import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';
import { DateService } from '../../services/date.service';
import { ICard } from '../../shared/card.interface';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  size = 'large';
  cardToDisplay: ICard;
  cards: ICard[];
  index: number;
  dueCards: ICard[];
  revealAnswer: boolean;
  progressPercent: number;
  loaded: boolean = false;

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
    const today = this.dateService.transformDate(new Date());
    return this.cards.filter(card => (card.date <= today));
  }
  againClick(): void {
    const card = this.dueCards[this.index];
    this.dueCards.push(card);
    this.nextCard();
  }
  easyClick(): void {
    const card = this.dueCards[this.index];
    this.cardService.updateCard(card).subscribe();
    this.nextCard();
  }
  mediumClick(): void {
    const card = this.dueCards[this.index];
    this.cardService.updateCard(card).subscribe();
    this.nextCard();
  }
  hardClick(): void {
    const card = this.dueCards[this.index];
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
