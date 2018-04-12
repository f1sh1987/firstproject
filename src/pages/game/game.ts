
import { DicSearchProvider } from '../../providers/dic-search/dic-search';
import { Vocabulary } from '../../interfaces/vocabulary';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

buttonColor:string = "light";

count: number = 0;
question: string="";
answer: string="";
vocabularies :Vocabulary[];
selVoc: string[]=[];


  constructor(public navCtrl: NavController, dataService: DicSearchProvider, private toastCtrl:ToastController) {

    this.vocabularies = dataService.vocabularies;
    this.randomVoc();
    this.selectAnswers();
  }



  randomVoc(){
var test= this.vocabularies[Math.floor(Math.random() * this.vocabularies.length)];
this.question=test.deutsch;
this.answer=test.spanisch;

  }

  checkAnswer(selAnswer, event: any){
    if(selAnswer===this.answer){
      this.showToast("Richtig!!!");
this.randomVoc();
this.buttonColor="light";
this.selectAnswers();
this.count++;
    }else{
      this.showToast("Falsche Antwort! ("+this.answer+")");
      this.randomVoc();
           this.selectAnswers();
      this.buttonColor="light";

    }

      }

      selectAnswers(){
        this.selVoc = [];
                //wähle Random stelle an die Antwort gesetzt werden soll
      var position = (Math.floor(Math.random()*4)+1)-1;
      this.selVoc[position]=this.answer;


        var i=0;
        while (i < 4){
          if(this.selVoc[i]==null) {

          var value= this.vocabularies[Math.floor(Math.random() * this.vocabularies.length)];
          var jsonString = JSON.stringify(this.selVoc);

          if(jsonString.indexOf(value.spanisch)>=0){
            //nicht erhöhen
          }else{
            //falls nicht vorhanden füge hinzu
            this.selVoc[i]=value.spanisch;
            i++;
          }


        }
        else{
          //falls Arraystelle besetzt ist weiterspringen
          i++;
        }


      }

    }
    private showToast(message: string): void {
      let toast = this.toastCtrl.create({
          message: message,
          duration: 3000
      });
      toast.present();
    }



}
