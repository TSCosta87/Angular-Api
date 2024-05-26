import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards:string[] = [
    '1',
    '2',
    '3',
  ]

  constructor() { }

  getCards(): string[] {
    return this.cards;
  }
}
