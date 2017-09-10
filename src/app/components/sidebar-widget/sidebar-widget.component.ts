import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementModel} from '../../util/element-model';

@Component({
  selector: 'app-sidebar-widget',
  templateUrl: './sidebar-widget.component.html',
  styleUrls: ['./sidebar-widget.component.scss']
})
export class SidebarWidgetComponent implements OnInit {
  @Input() elements: Array<ElementModel>;
  @Output() elementBeingWatchedChanged: EventEmitter<ElementModel> = new EventEmitter();

  elementBeingWatched: ElementModel;

  constructor() { }

  ngOnInit() {
  }

  isElementBeingWatched(element: ElementModel) {
    // assuming element.id is unique
    if (this.elementBeingWatched) {
      return this.elementBeingWatched.id === element.id;
    } else {
      return false;
    }
  }

  watchElement(element: ElementModel) {
    if (!this.elementBeingWatched || element.id !== this.elementBeingWatched.id) {
      this.elementBeingWatched = element;
      this.elementBeingWatchedChanged.emit(element);
    }
  }
}
