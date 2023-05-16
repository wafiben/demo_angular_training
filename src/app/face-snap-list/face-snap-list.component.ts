import {Component,OnInit} from '@angular/core';
import {FaceSnapService} from './../services/face-snap.service';
import {FaceSnap} from '../models/face-snap.model';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  /*faceSnaps!: FaceSnap[];*/
  faceSnaps$!: Observable<FaceSnap[]>
  constructor(private faceSnapService: FaceSnapService) {
    /*this.faceSnaps=this.faceSnapService.getALLFaceSnaps()*/
  }
  ngOnInit(): void {
    this.faceSnaps$=this.faceSnapService.getALLFaceSnaps();
  }

}
