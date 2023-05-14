import {Component,OnInit,Input} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';
import {FaceSnapService} from './../services/face-snap.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  click: boolean=false;


  buttonText!: string;
  ngOnInit(): void {
    this.buttonText="oh snap";
  }
  handleClick() {
    /*this.faceSnap.snaps+=1*/

  }
  constructor(private faceSnapService: FaceSnapService,private router: Router) {

  }
  onSnap() {
    if(this.buttonText==='Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText='Oops, unSnap!';
      this.click=true
      this.faceSnapService.snapFacSnapById(this.faceSnap.id,"+")
    } else {
      this.faceSnap.snaps--;
      this.buttonText='Oh Snap!';
      this.click=false
      this.faceSnapService.snapFacSnapById(this.faceSnap.id,"-")
    }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
