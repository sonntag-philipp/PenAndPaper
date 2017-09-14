import { CharacterModel } from './character.model';
export class AccountModel {
  uid: string;

  characters: CharacterModel[] = [];
}