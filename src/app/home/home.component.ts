import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards;
  noOfDueCards;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cardService: CardService,
    private dateService: DateService,
  ) { }

  ngOnInit(): void {
    this.noOfDueCards = 'no';
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
      this.getNoOfDueCards();
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getNoOfDueCards() {
    const today = this.dateService.transformDate(new Date());
    if (this.cards.length >= 1) {
      this.noOfDueCards = this.cards.filter(card => card.date <= today).length;
    }
    if (this.noOfDueCards === 0) {
      this.noOfDueCards = 'no';
    }
  }
}
