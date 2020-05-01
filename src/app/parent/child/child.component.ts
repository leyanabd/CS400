import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() location: FormGroup;
  location2: FormGroup;
  longitude: string;
  latitude: string;

  constructor() { }

  ngOnInit(): void {
  }

}
