import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from '../shared/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  configUrl = 'http://localhost:3001/api/flashcards';

  constructor(private http: HttpClient) {

  }

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.configUrl);
  }
  addCard(newCard: ICard): Observable<ICard> {
    console.log(newCard)
    return this.http.post<ICard>(this.configUrl, newCard);
  }
  updateCard(updatedCard: ICard): Observable<ICard> {
    const url = `${this.configUrl}/${updatedCard.id}`;
    return this.http.put<ICard>(url, updatedCard);
  }
  deleteCard(cardToDelete: ICard): Observable<{}> {
    const url = `${this.configUrl}/${cardToDelete.id}`;
    return this.http.delete(url);
  }

}
