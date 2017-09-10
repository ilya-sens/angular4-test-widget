export class ElementModel {
  id: number;
  title: string;
  color: string;
  text: string;
  _order: number;

  constructor(id = 0, title = '', color = '', text = '', _order = 0) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.text = text;
    this._order = _order;
  }
}
