import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  myPosition: any;
  public theDistance: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){ 
    this.geolocation.getCurrentPosition().then((position) => {       
      this.myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: this.myPosition,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 

      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.myPosition,      
      icon: 'assets/img/rose.png',
    });   
    let content = "<h4>Você está aqui!</h4>";             
    this.addInfoWindow(marker, content);

    }, (err) => {
      console.log(err);
    }); 
  }

  addInfoWindow(marker, content){ 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  }); 
}

  distance(){
    this.applyHaversine().then(res => {
    // The logic after you have your new results goes here.
    this.theDistance = res;
    console.log(res); // res will be the value that you passed into the resolve function above, in this case your updated locations array
    })
  }

  applyHaversine() {
  return new Promise((resolve, reject) => {
    
    this.geolocation.getCurrentPosition().then(res => {
      let usersLocation = {
        lat: res.coords.latitude, 
        lng: res.coords.longitude
      };

    let jardimLocation = {
      lat: -25.4421,
      lng: -49.2387
    };

    this.theDistance = this.getDistanceBetweenPoints(
      usersLocation,
      jardimLocation,
      'km'
    ).toFixed(4);

    resolve(); // As soon as this is called, the "then" in will be executed in the function below.

    }).catch(reject);
  });
}

  getDistanceBetweenPoints(start, end, units){  
      let earthRadius = {
          miles: 3958.8,
          km: 6371
      };  
      let R = earthRadius[units || 'miles'];
      let lat1 = start.lat;
      let lon1 = start.lng;
      let lat2 = end.lat;
      let lon2 = end.lng;
      let dLat = this.toRad((lat2 - lat1));
      let dLon = this.toRad((lon2 - lon1));
      let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c;  
      return d;  
  }
  
  toRad(x){
      return x * Math.PI / 180;
  }
}