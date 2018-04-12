import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { DicSearchProvider } from '../../providers/dic-search/dic-search';

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


//Exceptions
msgMissingFields: string ="Bitte Felder füllen";
msgAdded: string ="Vokabel erfolgreich hinzugefügt!"

transactionSuccessText: string;
errorText: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public dataService: DicSearchProvider) {

}



addVoc(): void{

  if(!this.spanischText || !this.deutschText || this.spanischText === "" || this.deutschText === "" ){
    this.showToast(this.msgMissingFields);
  }
  else{
    const item = {
      spanisch:this.spanischText,
      deutsch:this.deutschText
    };
    this.dataService.storeItems(item);


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
