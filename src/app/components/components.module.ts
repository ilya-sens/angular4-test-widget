import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarWidgetComponent } from './sidebar-widget/sidebar-widget.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarWidgetComponent, MainWidgetComponent]
})
export class ComponentsModule { }
