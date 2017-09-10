import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarWidgetComponent} from './sidebar-widget/sidebar-widget.component';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2DragDropModule} from 'ng2-drag-drop';
import {MainWidgetComponent} from './main-widget/main-widget.component';

@NgModule({
  imports: [
    CommonModule, Ng2OrderModule, Ng2DragDropModule.forRoot()
  ],
  exports: [SidebarWidgetComponent, MainWidgetComponent],
  declarations: [SidebarWidgetComponent, MainWidgetComponent]
})
export class ComponentsModule {
}
