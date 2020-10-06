import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

    training = {
      name: '',
      start_date: '',
      end_date:'',
      status: '',
    };
  constructor(public http : HttpClient ) {}


  ngOnInit() {
  }


  sendPostRequest(formValue) {
    const httpOptions = {
      headers: new HttpHeaders({

          'Content-Type':  'application/json'
      })
    };
    // httpOptions.headers =
    // httpOptions.headers.set('Authorization', 'my-new-auth-token');

    //  let postData = { 
    //   "name": "javascript",
    //   "start_date": "2020-02-28",
    //   "end_date": "2020-02-28",
    //   "status": 1
    // };

     let postData = formValue; 

    this.http.post("http://localhost:8000/training/register", postData, httpOptions)

      .subscribe(data => {

        console.log(data['_body']);
      }, error => {
        console.log(error);
      });

    

  }
}

