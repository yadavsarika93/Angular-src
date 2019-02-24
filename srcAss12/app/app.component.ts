import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public items: Observable<any[]>;
  public items1: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('/Gold').valueChanges();

        this.items1 = db.collection('/Silver').valueChanges();
    }
}
