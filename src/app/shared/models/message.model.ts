export class MessageModel {

  public sessionID: string;
  public content: string;
  public type: string;
  public resourceID: string;

  constructor (type: string, content: string, resourceID: string) {
    this.content = content;
    this.type = type;
    this.resourceID = resourceID;
  }
}