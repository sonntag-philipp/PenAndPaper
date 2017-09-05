export class StatusModel {

  name: string;
  maxValue: number;
  value: number;

  constructor(name: string, value: number, maxValue: number) {
    this.name = name;
    this.maxValue = maxValue;
    this.value = value;
  }
}