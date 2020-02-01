import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '@nx05/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@nx05/ui-login';
import { PetsComponent } from './pets/pets.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    UiLoginModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
