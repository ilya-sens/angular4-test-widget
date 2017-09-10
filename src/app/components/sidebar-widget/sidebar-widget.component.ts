import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementModel} from '../../util/element-model';
import {DropEvent} from 'ng2-drag-drop';

@Component({
  selector: 'app-sidebar-widget',
  templateUrl: './sidebar-widget.component.html',
  styleUrls: ['./sidebar-widget.component.scss'],
})
export class SidebarWidgetComponent implements OnInit {
  @Input() elements: Array<ElementModel>;
  @Output() elementBeingWatchedChanged: EventEmitter<ElementModel> = new EventEmitter();

  elementBeingWatched: ElementModel;
  order = '_order';
  reverse = false;
  sortTrigger = 0;

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

  changeOrder($event: DropEvent, element) {
    const elementToDrop = $event.dragData as ElementModel;
    // move up
    if (elementToDrop === element) {
      return;
    }
    if (elementToDrop._order > element._order) {
      const untilOrder: number = elementToDrop._order;
      const fromOrder: number = element._order;
      this.elements.filter(it => it._order >= fromOrder && it._order < untilOrder).forEach(it => {
        it._order++;
      });
      this.elements[this.elements.indexOf(elementToDrop)]._order = fromOrder;
    // move down
    } else {
      const fromOrder: number = elementToDrop._order;
      const untilOrder: number = element._order;
      this.elements.filter(it => it._order > fromOrder && it._order <= untilOrder).forEach(it => {
        it._order--;
      });
      this.elements[this.elements.indexOf(elementToDrop)]._order = untilOrder;
    }
    console.log(this.elements);
    this.sortTrigger++;
  }
}
