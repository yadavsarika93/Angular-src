import { Component, OnInit } from '@angular/core';
import {User} from '../User';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent
{
  public batches=['Pre-Placement Activity','Logic Building','Angular','Python']

  userobj = new User('Piyush Manohar Khairnnar','Marvellous@gmail.com',7588945488,'Paytm','Python',true);
}
