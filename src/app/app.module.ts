import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SnapFaceComponent} from './snap-face/snap-face.component';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {HeaderComponent} from './header/header.component';
import {LandigPageComponent} from './landig-page/landig-page.component';
import {SingleFaceSnapComponent} from './single-face-snap/single-face-snap.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NewFaceSnapComponent} from './new-face-snap/new-face-snap.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SnapFaceComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandigPageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
