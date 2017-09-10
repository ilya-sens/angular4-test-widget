import {Component, OnInit} from '@angular/core';
import {ElementModel} from './util/element-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements: Array<ElementModel> = [
    new ElementModel(6, 'Projekt Paris', '#d14836', 'Some long text', 0),
    new ElementModel(5, 'Projekt New York', '#531c5f', 'Some long text', 1),
    new ElementModel(4, 'Projekt Barcelona', '#131c5f', 'Some long text', 2),
    new ElementModel(3, 'Projekt Zürich', '#43bcaf', 'Some long text', 3),
    new ElementModel(2, 'Projekt Hong Kong', '#134c1f', 'Some long text', 4),
    new ElementModel(1, 'Projekt Madrid', '#13bc1f', 'Some long text', 5)
  ];

}
