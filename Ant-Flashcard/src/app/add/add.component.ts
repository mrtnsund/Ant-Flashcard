import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ICard } from '../shared/card.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cards: ICard[];
  listOfOption: Array<{ label: string; value: string }> = [];

  size = 'default';
  newTags = [];
  tagValue = [];

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
      this.listOfOption = this.getExistingTags();
    })
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

}

