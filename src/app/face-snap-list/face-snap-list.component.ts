import {Component} from '@angular/core';
import {FaceSnapService} from './../services/face-snap.service';
import {FaceSnap} from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[]
  constructor(private faceSnapService: FaceSnapService) {
    this.faceSnaps=this.faceSnapService.getALLFaceSnaps()
  }

}
