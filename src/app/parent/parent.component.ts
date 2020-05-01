import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {StatService} from '../stat.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-parent',
  template: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() location: FormGroup;
  location2: FormGroup;
  latitude: string; latitude_bos: string;
  longitude: string; longitude_bos: string;
  getStat;

  constructor() {
  }

  ngOnInit() {
  };

}
