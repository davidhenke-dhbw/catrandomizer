import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatImage } from './CatImage';
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  readonly ROOT_URL = 'https://api.thecatapi.com/v1/images/search'; // stores the url which is used to get data from API
  jsondata;
  cat; // used to set a CatImage Object to store id, url, height and weight
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getImages() {
    this.http.get(this.ROOT_URL).subscribe(data => {
      // tslint:disable-next-line:prefer-const

      this.jsondata = data;
      this.jsondata.forEach(obj => {
        this.cat = new CatImage(obj.id, obj.url, obj.height, obj.width); // initializing new CatImage Object
      });
    });
    return this.cat; // returning CatImage Objectblalba
  }

}
