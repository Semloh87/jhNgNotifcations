export class Notification {
  id: string;

  constructor(public type: string, public title, public content: string) {
    this.id = Math.random().toString(36).substr(2, 16);
  }
}
