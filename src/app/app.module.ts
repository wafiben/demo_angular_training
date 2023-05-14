import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SnapFaceComponent} from './snap-face/snap-face.component';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {HeaderComponent} from './header/header.component';
import { LandigPageComponent } from './landig-page/landig-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapFaceComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandigPageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
