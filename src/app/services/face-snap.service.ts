import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  constructor(private http: HttpClient) {

  }
  faceSnaps: FaceSnap[]=[
    {
      id: 0,
      title: 'Archibald',
      description: 'Mon meilleur ami  depuis tout peti',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.composition.gallery/artworkpic/takashi-murakami-dob-in-pure-white-robe-pink-and-blue-lithograph-available-for-sale-on-composition-gallery1682341205-56562.jpeg',
      location: 'France',
    },
    {
      id: 1,
      title: 'Hannibal',
      description: 'loremqldnnad',
      createdDate: new Date(),
      snaps: 400,
      imageUrl:
        'https://media.composition.gallery/artworkpic/takashi-murakami-dob-in-pure-white-robe-pink-and-blue-lithograph-available-for-sale-on-composition-gallery1682341205-56562.jpeg',
      location: 'Sousse',
    },
    {
      id: 2,
      title: 'opa archibald',
      description: 'lorem lorem lorem',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.composition.gallery/artworkpic/takashi-murakami-dob-in-pure-white-robe-pink-and-blue-lithograph-available-for-sale-on-composition-gallery1682341205-56562.jpeg',
    },
  ];
  getALLFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>("http://localhost:3000/facesnaps")
  }
  snapFacSnapById(id: number,op: '+'|'-'): void {
    console.log(id)
    /* const snap=this.faceSnaps.find((elt) => elt.id===id);
     if(snap) {
       if(op=="+") {
         snap.snaps++
       } else {
         snap.snaps--
       }

     } else {
       throw Error('snap do not exist')
     }*/
  }
  getOnSingleSnap(id: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`)
  }
  addFaceSnap(formValue: {title: string,description: string,location?: string,imageUrl: string}): void {
    const faceSnap: FaceSnap={
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length-1].id+1
    }

    this.faceSnaps.push(faceSnap)
  }
}
