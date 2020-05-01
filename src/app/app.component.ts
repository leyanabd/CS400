import { Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OnInit} from '@angular/core';
import {StatService} from './stat.service';

/* Form is present here but I *tried* to pass it down to parent then to child
* App-Component is the parent of parent and child components*/


// @ts-ignore
@Component({
  selector: 'app-root',
  template: './child.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Astronomy Stats';
  astro: any;
  var1; any;
  LATITUDE_BOS: FormControl = new FormControl('71.0589');
  LONGITUDE_BOS: FormControl = new FormControl('42.3601');

  location: FormGroup = new FormGroup({
      latitude_bos: new FormControl('71.0589'),
      longitude_bos: new FormControl('42.3601')
    }
  );
  wxOptions: {};

  location2 = this.form.group({
    latitude_bos2: [''],
    longitude_bos2: ['']
  });

  constructor(private wx: StatService, private form: FormBuilder) {}
  // tslint:disable-next-line:use-lifecycle-interface

  getStat() {
    this.wxOptions = {
      lat: this.location.get('latitude_bos').value,
      long: this.location.get('longitude_bos').value
    };
    this.wx.getStat().subscribe(
      response => {
        this.astro = response;

      }
    );
  }
  ngOnInit(): void {
    this.wx.getStat().subscribe( stats => {
      this.astro = stats;
    })
  }


}
