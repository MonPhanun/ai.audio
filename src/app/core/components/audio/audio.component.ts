import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignalsService } from '../../services/signals.service';
import { AudioModel } from '../../models/audio.model';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.less',
  imports: [CommonModule, FormsModule, NzSpinModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AudioComponent {

  audio?: AudioModel;
  test = true;
  constructor(private aignal: SignalsService) {
    effect(() => {
      this.audio = this.aignal.signalAudiol();
      console.log(this.audio.audio);
      this.test = false;
      setTimeout(() => {
        this.test = true;
      }, 300)
    });
  }

}
