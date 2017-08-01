import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { SQLite } from '@ionic-native/sqlite';
import { SqlStorageProvider } from '../../providers/sql-storage/sql-storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  seencities: boolean = false;
  public cities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  protected platform: Platform, public sqliteService: SqlStorageProvider) {
        this.platform.ready().then(() => {
        this.sqliteService.addItem();
        this.sqliteService.getRows().then(s => {
            this.cities = this.sqliteService.arr;
            console.log('Lendo o db getRows(): ', s)
            console.log('Lendo o db this.sqliteService.arr: ', this.sqliteService.arr)
          });
      })
}
  select(){
    if (this.seencities === true)
    this.seencities = false
    else
    this.seencities = true
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  ionViewCanEnter(){
  }

  doLogout(){
    this.navCtrl.push(LoginPage);
  }

}
