import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from '../shared/card.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  configUrl = 'https://pi-7a130fdb.localhost.run/api/flashcards'; //RASPBERRY PI

  token;

  constructor(private http: HttpClient, private authService: AuthService) {

  }


  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.configUrl);
  }
  addCard(newCard: ICard): Observable<ICard> {
    if (newCard.tags === null) {
      newCard.tags = [];
    }
    newCard.user = this.authService.getAccessToken();
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
