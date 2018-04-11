import { DicSearchProvider } from './../../providers/dic-search/dic-search';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vocabulary } from '../../interfaces/vocabulary';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DictionaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html',
})
export class DictionaryPage {


  searchTerm: string = '';
  vocabularies: Vocabulary[]=[];

  constructor(public navCtrl: NavController,public NavParams: NavParams, public dataService: DicSearchProvider, public storage: Storage) {


  }


ionViewDidEnter(){
  this.initialize();
  this.setFilteredItems();
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


  setFilteredItems(): void {
    this.vocabularies = this.dataService.filteredItems(this.searchTerm);
  }



}
