import {Component,OnInit} from '@angular/core';
import {FaceSnap} from './models/face-snap.model';
import {Observable,interval} from "rxjs"
import {map,filter} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
/*  interval$!: Observable<number|string>
  ngOnInit(): void {
    this.interval$=interval(1000).pipe(
      filter(elt => elt%3===0),
      map(x => x%2===0? `${x} je suis  pair`:`je ne suis impair ${x}`))
  }*/

}
