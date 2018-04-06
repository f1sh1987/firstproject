import { Vocabulary } from './../../interfaces/vocabulary';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//Lokalisierung

buttonAdd: string;
spanischTitle: string;
deutschTitle: string;
spanischText: string;
deutschText: string;

vocabulary: Vocabulary = {
  spanisch: null,
  deutsch: null
};

vocabularies: Vocabulary[];

//Exceptions

transactionSuccessText: string;
errorText: string;

  constructor(public navCtrl: NavController) {

  }

}
