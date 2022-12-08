export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public item1: string;
  public item2: string;
  public item3: string;
  public item4: string;
  public steps: string;
  public visibility: boolean;
  constructor(
    name: string,
    desc: string,
    imagePath: string,
    item1: string,
    item2: string,
    item3: string,
    item4: string,
    steps: string,
    visibility: boolean
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
    this.item4 = item4;
    this.steps = steps;
    this.visibility = visibility;
  }
}
