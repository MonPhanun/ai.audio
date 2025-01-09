import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@Component({
  selector: 'app-root',
  imports: [NzBreadCrumbModule, NzMenuModule, NzLayoutModule, NzIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: []
})
export class AppComponent {
  title = 'ai.audio';
}
