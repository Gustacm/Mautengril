import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof navigator !== 'undefined' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          resp => {
            resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
          },
          err => {
            reject(err);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported'));
      }
    });
  }
}
