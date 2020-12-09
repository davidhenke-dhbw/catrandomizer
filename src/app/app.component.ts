import {Component, Input} from '@angular/core';
import {ImageServiceService} from './image-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private imageservice: ImageServiceService) {
  }
  catimage; // variable is used to store CatImage Object
  pUrl1 = '../assets/anthropomorphized-animals-2023331_1280.png';
  pUrl2 = '../assets/giraffe-308771_1280.png';
  itemImageUrl = this.pUrl1; // variable is used to store image url
  title = 'BootAng';
  @Input() name = 'Generate'; // sets name of the button
  // tslint:disable-next-line:typedef
  getNewCats(){
    this.catimage = this.imageservice.getImages();
    if (this.catimage == null){
      this.itemImageUrl = this.pUrl2;
      // How to avoid?
    }
    else{
      this.itemImageUrl = this.catimage.getUrl() ;
    }
  }
}
