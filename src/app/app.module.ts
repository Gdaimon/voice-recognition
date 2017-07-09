import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SpeechRecognitionService } from "./services/speech-recognition.service";

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers   : [ SpeechRecognitionService ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
