import { v4 } from 'uuid';

export abstract class Entity {
  public readonly id: string;

  constructor(id?: string) {
    if (!id) {
      this.id = v4();
    } else {
      this.id = id;
    }
  }
}
