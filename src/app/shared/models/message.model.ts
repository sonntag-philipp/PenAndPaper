export class MessageModel {

  public sessionID: string;

  constructor (public type: string, public content: string) {}
}