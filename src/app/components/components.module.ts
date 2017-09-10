import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarWidgetComponent} from './sidebar-widget/sidebar-widget.component';
import {OrderModule} from 'ngx-order-pipe';
import {Ng2DragDropModule} from 'ng2-drag-drop';
import {MainWidgetComponent} from './main-widget/main-widget.component';
import {FormsModule} from '@angular/forms';
import {OrderByPipe} from '../util/order.pipe';

@NgModule({
  imports: [
    CommonModule,
    OrderModule,
    Ng2DragDropModule.forRoot(),
    FormsModule
  ],
  exports: [
    SidebarWidgetComponent,
    MainWidgetComponent
  ],
  declarations: [
    SidebarWidgetComponent,
    MainWidgetComponent,
    OrderByPipe
  ],
})
export class ComponentsModule {
}
