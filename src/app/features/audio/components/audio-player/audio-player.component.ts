import {Component, Input} from '@angular/core';
import {Audio} from "../../dto/audio.dto";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  @Input() audio: Audio | null = null

}
