
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, OnInit, } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AudioModel } from '../../models/audio.model';
import { SignalsService } from '../../services/signals.service';




@Component({
  selector: 'app-layout',

  imports: [RouterOutlet, CommonModule, NzBreadCrumbModule, NzMenuModule, NzLayoutModule, NzIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less',
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutComponent implements OnInit {

  title = 'ai.audio';
  isCollapsed = false;
  isSmallCollapsed = false;
  list = ["01", "02"]

  audio?: AudioModel;
  bookOne: AudioModel[] = [];
  bookTwo: AudioModel[] = [];
  bookThree: AudioModel[] = [];

  constructor(private aignal: SignalsService, private router: Router) {
    effect(() => {
      this.audio = this.aignal.signalAudiol();
    });
  }

  ngOnInit(): void {
    this.audio = new AudioModel("Book 1", "CD1 T1", "Audio 1", "CD 1", "Track 1", "......", "......", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 01 Credits.mp3");
    this.bookOne = AudioModel.bookOneAudio;
    this.bookTwo = AudioModel.bookTwoAudio;
    this.bookThree = AudioModel.bookThreeAudio;
  }

  onClick(val: AudioModel) {
    this.aignal.setSignal(val);

  }

  onlogOut() {
    this.router.navigate(['login']);
    localStorage.setItem("login", "false");
  }
}
