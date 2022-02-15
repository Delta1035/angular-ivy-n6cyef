import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-age',
  template: `
        <p>Age: {{age}}</p>
    `,
})
export class ProfileAgeComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    setInterval(() => {
      this.age++;
      console.log(this.age);
      this.cd.markForCheck();
    }, 1000);
  }
  @Input() age: number;
}
