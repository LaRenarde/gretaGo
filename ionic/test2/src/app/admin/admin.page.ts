import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  lists:{
    id:number;
    title:string;
    subtitle:string;
    pagedir:string;
    }[]=[];
    data = '';
  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController) { }


  ngOnInit() {
    this.lists=[
      {'id':1,'title':'training','subtitle':'admin training','pagedir':'training'},
      {'id':2,'title':'user','subtitle':'admin user','pagedir':'user'},
    ]
  }

  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['msg'];
    });
  }
 
  logout() {
    this.authService.logout();
  }
 
  clearToken() {
    // ONLY FOR TESTING!
    this.storage.remove('access_token');
 
    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }

}
