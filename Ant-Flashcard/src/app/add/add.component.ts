import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ICard } from '../shared/card.interface';
import * as _ from 'lodash';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

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
      date: new Date().toString(),
      success: 0,
    };
    this.notification.blank(
      'Card added',
      '',
      {nzPlacement: 'bottomRight'},
    );
    this.cardService.addCard(newCard).subscribe();
    this.addCardForm.reset({
      tags: this.addCardForm.get('tags').value
    });
  }

}

