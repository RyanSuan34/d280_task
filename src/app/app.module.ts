import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorldFactsComponent } from './world-facts/world-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    WorldFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
