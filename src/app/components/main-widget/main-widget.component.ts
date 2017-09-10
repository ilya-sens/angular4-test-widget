import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementModel} from '../../util/element-model';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {
  @Input() elements: Array<ElementModel>;
  @Input() elementBeingWatched: ElementModel;
  @Output() elementMustBeDeleted: EventEmitter<ElementModel> = new EventEmitter();
  @Output() elementMustBeCreated: EventEmitter<ElementModel> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteElement(element: ElementModel) {
    this.elementMustBeDeleted.emit(element);
  }

  createElement() {
    this.elementMustBeCreated.emit(new ElementModel());
  }
}
