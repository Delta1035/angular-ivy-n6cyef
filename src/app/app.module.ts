import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileAgeComponent } from './profile-age/profile-age.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProfileNameComponent,
    ProfileAgeComponent,
    ProfileCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
