import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar (mouseleave)="toggleSidebar()" (mouseenter)="toggleSidebar()" state="compacted" class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <!--
      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
      -->
      
    </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {
  constructor(private sidebarService: NbSidebarService,
    private layoutService: LayoutService,) {
}

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
}
