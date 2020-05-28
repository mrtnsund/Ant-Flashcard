import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';
import { DateService } from '../../services/date.service';
import { ICard } from '../../shared/card.interface';
import { FormBuilder } from '@angular/forms';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import * as _ from 'lodash';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  listOfOption: Array<{ label: string; value: string }> = [];
  size2 = 'default';
  newTags = [];

  size = 'large';
  cardToDisplay: ICard;
  cards: ICard[];
  index: number;
  dueCards: ICard[];
  revealAnswer: boolean;
  progressPercent: number;
  loaded: boolean = false;
  selectedTags;
  selectTagForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cardService: CardService,
    private dateService: DateService,
    private formBuilder: FormBuilder,
    private _hotkeysService: HotkeysService
  ) {
    this.selectTagForm = this.formBuilder.group({
      tags: []
    });
    this._hotkeysService.add(new Hotkey('space', (event: KeyboardEvent): boolean => {
      if (this.revealAnswer) {
        this.nextCard();
      } else {
        this.toggleAnswer();
      }
      return false;
    }));
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
      this.index = 0;
      // this.progressPercent = 1 / this.dueCards.length * 100;
      this.loaded = true;
      this.listOfOption = this.getExistingTags();
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  getDueCards(): ICard[] {
    return this.cards.filter(card => (card.tags.some((val) => this.selectedTags.indexOf(val) !== -1)));
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
  selectTag(tag): void {
    this.selectedTags = tag.tags;
    console.log(tag.tags)
    this.dueCards = this.getDueCards();
    this.cardToDisplay = this.dueCards[this.index];

  }

  getExistingTags(): Array<any> {
    const allTags = [];
    if (this.cards){
      this.cards.forEach(x => x.tags.forEach(element => {
        allTags.push({ label: element, value: element });
      }))
    }
    if (allTags.length === 0) {
      return null;
    }

    const uniqueTags = _.uniqBy(allTags, 'label');
    console.log(uniqueTags);
    return uniqueTags;
    // return Array.from(new Set(uniqueTags));
  }
}
