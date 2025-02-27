import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {AudioModule} from "./features/audio/audio.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
