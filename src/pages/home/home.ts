import { GamePage } from './../game/game';
import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { Vocabulary } from '../../interfaces/vocabulary';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//Lokalisierung

buttonAdd: string;
spanischTitle: string ="Spanisch";
deutschTitle: string = "Deutsch";
spanischText: string;
deutschText: string;
vocabularies: Vocabulary[] = [];


//Exceptions
msgMissingFields: string ="Bitte Felder füllen";
msgAdded: string ="Vokabel erfolgreich hinzugefügt!"

transactionSuccessText: string;
errorText: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,private storage: Storage) {


}

addVoc(): void{
  if(!this.spanischText || !this.deutschText || this.spanischText === "" || this.deutschText === "" ){
   // alert("Bitte Felder füllen");
    this.showToast(this.msgMissingFields);
  }
  else{
    const item = {
      spanisch:this.spanischText,
      deutsch:this.deutschText
    };
    this.vocabularies.push(item);
    //alert(JSON.stringify(this.vocabularies));
    this.storage.set('vocabularies', JSON.stringify(this.vocabularies));



    this.showToast(this.msgAdded);
    this.clearText();
  }

}

private showToast(message: string): void {
  let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
  });
  toast.present();
}

clearText(): void{
  this.spanischText="";
  this.deutschText="";


}






}
