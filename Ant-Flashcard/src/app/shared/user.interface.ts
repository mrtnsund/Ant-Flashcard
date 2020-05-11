import { ICard } from './card.interface';

export interface IUser {
  username?: string;
  email: string;
  password: string;
  cards: ICard[];
}