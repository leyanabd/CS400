import {Component, OnInit} from '@angular/core';
import {ASTRO} from './PS4-MOCK';
import {PS4} from './PS4';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Astronomy Stats';
  Stats = ASTRO;
  private selectedStat: PS4;
  inputValueStr: string;
  inputValueNum: number;
  randomVariable: string;
  names =  ['latitude', 'longitude', 'Date', 'sunrise', 'sunset', 'SOLAR_NOON', 'DAY_LENGTH', ' SUN_ALTITUDE',
    'SUN_DISTANCE', 'SUN_AZIMUTH', 'MOON_ALTITUDE', 'MOON_DISTANCE', 'MOON_AZIMUTH', 'MOON_PARALLACTIC_ANGLE'];
  selectStat(stat: PS4) {
    this.selectedStat = stat;
  }

  constructor() { {
    this.inputValueStr = 'hey';
  }
  }
}
