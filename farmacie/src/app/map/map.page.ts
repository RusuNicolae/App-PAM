import {Component, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { MapType } from '@angular/compiler';
import { resolve } from 'url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage  {
  // implements OnInit, 
 
  @ViewChild('gmap', {static:true}) gmapElement:any;
  map:google.maps.Map;
  notification$; 

  constructor(public router:Router,) { 
    this.loadMap();
  }
  async loadMap() {
    const currentCoords =await this.getCurrentLocation();
    console.log('user current location', currentCoords);
    const mapProp= {
      center: new google.maps.LatLng(
        currentCoords.latitude,
        currentCoords.longitude
      ),
      zoom:12,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      MapTypeControl:false
    };

    // var marker=new google.maps.Marker({
    //   position:{lat:42.4668,lng:-70.9495},
    //   map:this.map
    // })

    this.map=new google.maps.Map(this.gmapElement.nativeElement,mapProp);
  }
  
  getCurrentLocation():Promise<Coordinates> {
    return new Promise(resolve=>
      navigator.geolocation.getCurrentPosition(success=>resolve(success.coords))
      );
  }

  goBack(){
    this.router.navigate(['farmacii'])

  };
}

