import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'mail'
    },
    {
      title: 'login',
      url: '/',
      icon: 'paper-plane'
    },
    {
      title: 'admin',
      url: '/admin',
      icon: 'heart'
    },
    {
      title: 'change',
      url: 'change',
      icon: 'heart'
    },
    {
      title: 'page1',
      url: 'change/page1',
      icon: 'heart'
    },
    {
      title: 'pgae2',
      url: 'change/page2',
      icon: 'heart'
    }

  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['login']);
        }

      });
    })
  }
}