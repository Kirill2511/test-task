import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Audio} from "../dto/audio.dto";


@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audios: Audio[] = [
    {id: 1, name: 'Звук 1', fileName: 'sound1.mp3'},
    {id: 2, name: 'Звук 2', fileName: 'sound2.mp3'},
    {id: 3, name: 'Звук 3', fileName: 'sound3.mp3'}
  ];

  getAudios(): Observable<Audio[]> {
    return of(this.audios);
  }
}
