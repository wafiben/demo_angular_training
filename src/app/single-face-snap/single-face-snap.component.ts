import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FaceSnapService} from './../services/face-snap.service';
import {FaceSnap} from '../models/face-snap.model';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  singleFaceSnap!: FaceSnap;
  constructor(private router: ActivatedRoute,private faceSnapService: FaceSnapService,private rout: Router) {
  }
  ngOnInit(): void {
    const id=+this.router.snapshot.params['id'];
    this.singleFaceSnap=this.faceSnapService.getOnSingleSnap(id)
  }
  onViewFaceSnap(): void {
    this.rout.navigateByUrl('facesnaps')
  }

}
