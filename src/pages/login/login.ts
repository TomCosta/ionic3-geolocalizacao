
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'login',
  templateUrl: 'login.html', 
})

export class LoginPage {

  logoState: any = "in"; 
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menuCtrl: MenuController, platform: Platform, 
  public events: Events) {

    platform.ready().then(() => {

    events.subscribe('sair:clicked', (sair) => {
    // Do something with the clicked item data:
    this.doLogout();
    console.log(sair[0]);
    });
  
    });  
  }

  ionViewDidLoad() {
//    this.menuCtrl.enable(false);
    console.log('ionViewDidLoad LoginPage');
  }

  onPageWillLeave() {
//    this.menuCtrl.enable(true);
  }

  doLogin(){
    this.navCtrl.push(HomePage);
  }
  
  doLogout(){
    this.navCtrl.push(LoginPage);
  }

}
