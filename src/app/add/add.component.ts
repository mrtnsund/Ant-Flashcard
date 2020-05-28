import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ICard } from '../shared/card.interface';
import * as _ from 'lodash';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DateService } from '../services/date.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addCardForm;
  cards: ICard[];
  listOfOption: Array<{ label: string; value: string }> = [];
  size = 'default';
  newTags = [];

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private dateService: DateService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.addCardForm = this.formBuilder.group({
      question: '',
      answer: '',
      tags: [],
    });
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
      this.listOfOption = this.getExistingTags();
    });
  }

  getExistingTags(): Array<any> {
    const allTags = [];
    this.cards.forEach(x => x.tags.forEach(element => {
      allTags.push({ label: element, value: element });
    }))
    if (allTags.length === 0) {
      return null;
    }

    const uniqueTags = _.uniqBy(allTags, 'label');
    console.log(uniqueTags);
    return uniqueTags;
    // return Array.from(new Set(uniqueTags));
  }
  onSubmit(card) {
    const newCard: ICard = {
      question: card.question,
      answer: card.answer,
      tags: card.tags,
      date: this.dateService.transformDate(new Date()),
      success: 0,
    };
    if (card.question && card.answer) {
      this.notification.create(
        'success',
        'Card added',
        '',
        {nzPlacement: 'bottomRight'},
      );
      this.cardService.addCard(newCard).subscribe();
      this.addCardForm.reset({
        tags: this.addCardForm.get('tags').value
      });
    } else {
      this.notification.create(
        'error',
        'Please enter a question and answer',
        '',
        {nzPlacement: 'bottomLeft'}
      );
    }
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

