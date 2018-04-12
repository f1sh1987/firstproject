import { DicSearchProvider } from './../../providers/dic-search/dic-search';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Vocabulary } from '../../interfaces/vocabulary';

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
  vocabularies: Vocabulary[];

  constructor(public navCtrl: NavController, public dataService: DicSearchProvider) {


  }

ionViewDidEnter(){
  this.vocabularies=this.dataService.vocabularies;
}

ionViewDidLoad(){

  this.setFilteredItems();
}



  setFilteredItems(): void {
    this.vocabularies = this.dataService.filteredItems(this.searchTerm);
  }



}
