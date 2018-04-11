import { Storage } from '@ionic/storage';
import { Vocabulary } from '../../interfaces/vocabulary';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DicSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DicSearchProvider {

  vocabularies: Vocabulary[]=[];
  constructor(public http: HttpClient, public storage: Storage) {
    this.initialize();

  }

  ionViewDidEnter(){
    this.initialize();

  }



  initialize(): void {

    this.storage.get('vocabularies')
    .then(vocabularies => {
        if (vocabularies) {
            this.vocabularies = JSON.parse(vocabularies);
        } else {
            this.vocabularies = [];
        }
    });

  }

  filteredItems(searchTerm){

    return this.vocabularies.filter((vocabularies) => {
      return (vocabularies.deutsch.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1 || vocabularies.spanisch.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1);
    });
  }

}
