import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from '@coffee-shared/models';


@Injectable()
export class AdminCompaniesService {
  CompaniesCollection: AngularFirestoreCollection<Company>;
  Companies: Observable<Company[]>;
  CompanyDoc: AngularFirestoreDocument<Company>;

  constructor(public afs:AngularFirestore) {
    this.CompaniesCollection = this.afs.collection('Companies');
    // this.Companies = this.afs.collection('Companies').valueChanges();
    this.Companies = this.CompaniesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Company;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );

  //different syntax
  // this.shirts = this.shirtCollection.snapshotChanges().pipe(
  //   map(actions => actions.map(a => {
  //     const data = a.payload.doc.data() as Shirt;
  //     const id = a.payload.doc.id;
  //     return { id, ...data };
  //   }))
  // );

  }

  getCompanies() {
    return this.Companies; 
  }

  addCompany(Company: Company) {
    this.CompaniesCollection.add(Company);
  }

  deleteCompany(Company: Company) {
    this.CompanyDoc = this.afs.doc(`Companies/${Company.id}`);
    this.CompanyDoc.delete();
  }

  updateCompany(Company: Company) {
    this.CompanyDoc = this.afs.doc(`Companies/${Company.id}`);
    this.CompanyDoc.update(Company);
  }
}



  
