import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, ElementRef, ViewChild, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignalsService } from '../../services/signals.service';
import { AudioModel } from '../../models/audio.model';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule, NzPlacementType } from 'ng-zorro-antd/dropdown';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.less',
  imports: [CommonModule, FormsModule, NzSpinModule, NzDropDownModule, NzButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AudioComponent {

  audio?: AudioModel;
  display = true;
  speed = 1;
  isPlay = false;
  constructor(private aignal: SignalsService) {
    effect(() => {
      this.audio = this.aignal.signalAudiol();
      this.display = false;
      setTimeout(() => {
        this.display = true;
      }, 300)
    });
  }

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  // @ViewChild('speedSlider') speedSlider!: ElementRef;

  onSpeedChange(num: number) {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.playbackRate = num;
      this.speed = num;

    }
  }

  onPlay() {
    if (!this.isPlay) {
      this.audioPlayer.nativeElement.play();
      this.isPlay = true;
    } else {
      this.audioPlayer.nativeElement.pause();
      this.isPlay = false;
    }

  }

}
