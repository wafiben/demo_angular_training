import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FaceSnapService} from './../services/face-snap.service';
import {FaceSnap} from '../models/face-snap.model';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  singleFaceSnap$!: Observable<FaceSnap>;
  buttonText: string="Oh Snap!";
  constructor(private router: ActivatedRoute,private faceSnapService: FaceSnapService,private rout: Router) {
  }
  ngOnInit(): void {
    const id=+this.router.snapshot.params['id'];
    this.singleFaceSnap$=this.faceSnapService.getOnSingleSnap(id)
  }
  onSnap(id: number): void {
    if(this.buttonText==='Oh Snap!') {
      /*this.faceSnap.snaps++;*/
      this.buttonText='Oops, unSnap!';
      this.faceSnapService.snapFacSnapById(id,"+")
    } else {
      /*  this.faceSnap.snaps--;*/
      this.buttonText='Oh Snap!';
      this.faceSnapService.snapFacSnapById(id,"-")
    }
  }
  onViewFaceSnap(): void {
    this.rout.navigateByUrl('facesnaps')
  }

}
