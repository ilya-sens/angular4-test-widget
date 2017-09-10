import {Component, Input, OnInit} from '@angular/core';
import {ElementModel} from '../../util/element-model';

@Component({
  selector: 'app-sidebar-widget',
  templateUrl: './sidebar-widget.component.html',
  styleUrls: ['./sidebar-widget.component.css']
})
export class SidebarWidgetComponent implements OnInit {
  @Input() elements: Array<ElementModel>;

  constructor() { }

  ngOnInit() {
  }

}
