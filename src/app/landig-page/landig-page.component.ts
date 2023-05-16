import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../models/user.model';
@Component({
  selector: 'app-landig-page',
  templateUrl: './landig-page.component.html',
  styleUrls: ['./landig-page.component.scss']
})
export class LandigPageComponent {
  userName!: string;
  email !: string;
  onSubmit(form: NgForm): void {
    console.log(form.value)
    /*this.tableOfuser.push(this.nameOfUser);
    console.log(this.tableOfuser)*/
  }
}
