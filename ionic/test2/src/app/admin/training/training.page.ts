import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  lists:{
    id:number;
    name:string;
    start_data:Data;
    end_data:Data;
    stasus:boolean;
    }[]=[];

  constructor(
    public http : HttpClient,
    public loadingController: LoadingController
    ) { }

    async presentLoading() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }

    ionViewDidEnter(){
     
      this.http.get('http://localhost:8000/training/')
      .subscribe(data =>{
          this.lists=data['data'];
      })

    }

    ngOnInit() {
 
    }

}
