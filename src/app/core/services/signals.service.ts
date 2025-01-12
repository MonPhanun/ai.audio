import { Injectable, signal } from '@angular/core';
import { AudioModel } from '../models/audio.model';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  constructor() { }
  firtValue = new AudioModel("Book 1", "Audio 1", "CD 1", "Track 1", "Track 1", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 01 Credits.mp3");
  signalAudiol = signal<AudioModel>(this.firtValue);

  setSignal(val: AudioModel) {
    this.signalAudiol.set(val);
  }
}
