import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Audio} from "../../dto/audio.dto";

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioListComponent {
  @Input() audios: Audio[] = [];
  @Output() audioSelected = new EventEmitter<Audio>();

  onRowClicked(audio: Audio): void {
    this.audioSelected.emit(audio);
  }
}
