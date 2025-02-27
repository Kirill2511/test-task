import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AudioListComponent} from './components/audio-list/audio-list.component';
import {MatTableModule} from '@angular/material/table';
import {AudioPlayerComponent} from './components/audio-player/audio-player.component';
import {AudioService} from "./services/audio.service";
import {AudioComponent} from "./audio.component";

@NgModule({
  declarations: [
    AudioComponent,
    AudioListComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [AudioComponent],
  providers: [AudioService]
})
export class AudioModule {
}
