import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Audio} from "./dto/audio.dto";
import {AudioService} from "./services/audio.service";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  audioService = inject(AudioService)

  audios$?: Observable<Audio[]>;
  selectedAudio: Audio | null = null;

  ngOnInit(): void {
    this.audios$ = this.audioService.getAudios();
  }

  onAudioSelected(audio: Audio): void {
    this.selectedAudio = audio;
  }

}
