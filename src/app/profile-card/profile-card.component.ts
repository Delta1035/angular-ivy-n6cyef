import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'profile-card',
  template: `
       <div>
         <profile-name [name]='profile.name'></profile-name>
         <profile-age [age]='profile.age'></profile-age>
       </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCardComponent implements OnInit {
  counter = 1;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    setInterval(() => {
      this.counter++;
      this.profile.name = 'from card' + this.counter;
      this.profile.age += 10;
    }, 2000);
  }
  @Input() profile: { name: string; age: number };
}
