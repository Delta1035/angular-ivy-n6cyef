import { ChangeDetectorRef, Component, OnInit, VERSION } from '@angular/core';
import { UtilsService } from './utils.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UtilsService],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  flag = false;
  counter = 0;
  timer;
  profile: { name: string; age: number } = {
    name: 'Semlinker',
    age: 31,
  };
  constructor(private utils: UtilsService, private cd: ChangeDetectorRef) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit() {
    setTimeout(() => {
      // this.profile.name = 'Fer';
      // this.profile = Object.assign({}, this.profile, { name: 'Fer' });
      // this.cd.detectChanges();
      // this.cd.markForCheck();
    }, 2000);
  }

  toggle(target) {
    console.log('click', this.utils);
    // setTimeout(function () {
    //   console.log(this);
    // }, 1000);
    // if (this.timer) return;
    // this.timer = setTimeout(() => {
    //   // console.log(this);
    //   this.counter++;
    //   this.timer = null;
    // }, 1000);

    // this.debounce();
    this.utils.debounce(() => {
      console.log('start');
    }, 1000);
  }

  // debounce() {
  //   if (this.timer) clearTimeout(this.timer);
  //   this.timer = setTimeout(() => {
  //     // console.log(this);
  //     this.counter++;
  //     this.timer = null;
  //   }, 1000);
  // }
}
