import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
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
  getALLFaceSnaps(): FaceSnap[] {
    return this.faceSnaps
  }
  snapFacSnapById(id: number,op: '+'|'-'): void {
    const snap=this.faceSnaps.find((elt) => elt.id===id);
    if(snap) {
      if(op=="+") {
        snap.snaps++
      } else {
        snap.snaps--
      }

    } else {
      throw Error('snap do not exist')
    }
  }
  getOnSingleSnap(id: number): FaceSnap {
    const foundElement=this.faceSnaps.find((elt) => elt.id===id);
    if(foundElement) {
      return foundElement
    }
    else{
      return {id: 0,title: '',
      description: '',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:"",
      location: '',
    }
    }

  }
}
