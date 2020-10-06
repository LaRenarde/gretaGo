import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  public trainingid: string;
  training = {
    name: '',
    start_date: '',
    end_date: '',
    status: '',
  };
  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    private activatedRoute: ActivatedRoute
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


  sendPostRequest(formValue) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // httpOptions.headers =
    // httpOptions.headers.set('Authorization', 'my-new-auth-token');

    // let postData = { 
    //   "name": "javascript",
    //   "start_date": "2020-02-28",
    //   "end_date": "2020-02-28",
    //   "status": 1
    // };

    let postData = formValue;

    this.http.put("http://localhost:8000/training/" + this.trainingid, postData, httpOptions)

      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
  }



  ngOnInit() {
    this.trainingid = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get('http://localhost:8000/training/' + this.trainingid)
      .subscribe(data => {
        this.training = data['data'];
      })
  }

}
