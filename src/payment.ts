import { Iformat } from './Iformat';

export class Payment implements Iformat{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){};

  format() {
    return`${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}