import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Emp } from './models/emp';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

emp: Observable<Emp[]>;

empRecord: AngularFirestoreCollection<Emp>;


  constructor(public afs: AngularFirestore) {
    this.empRecord =afs.collection<Emp>('emp');
    //this.emp = this.afs.collection('emp').valueChanges();
    this.emp = this.empRecord.snapshotChanges().pipe(
    map(actions => actions.map(a => {
    const data =a.payload.doc.data() as Emp;
    const id = a.payload.doc.id;
    return { id,...data};
    }))
    );

  }

  getEmp(){
    return this.emp;
  }
}
