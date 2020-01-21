import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() song: any;
  @Input() currentSong: any;
  @Input() newTime: any;
  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();

  constructor() { }

  parseTime(time: number = 0.00): string {
    if (time) {
      const partTime = parseInt(time.toString().split('.')[0], 10);
      let minutes = Math.floor(partTime / 60).toString();
      minutes = minutes.length === 1 ? `0${minutes}` : minutes;
      let seconds = (partTime % 60).toString();
      seconds = seconds.length === 1 ? `0${seconds}` : seconds;
      return `${minutes}:${seconds}`;
    }
    return '00:00';
  }

}
