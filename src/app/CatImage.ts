export class CatImage{
  // Safe in Firebase Database?
  id: number; // stores id from CatImage Object
  url: string; // stores url from CatImage Object
  height: number; // stores height from CatImage Object
  width: number; // stores width from CatImage Object
  constructor(i, u, h, w) {
    this.id = i;
    this.url = u;
    this.height = h;
    this.width = w;
    console.log('Im a Cat' + this.id + this.url + this.width + this.height);
  }
  // tslint:disable-next-line:typedef
  getUrl(){
    return this.url; // returning url from CatImage Object
  }
  // tslint:disable-next-line:typedef
  getId(){
    return this.id; // returning id from CatImage Object
  }
  // tslint:disable-next-line:typedef
  getHeight(){
    return this.height; // returning height from CatImage Object
  }
  // tslint:disable-next-line:typedef
  getWidth(){
    return this.width;  // returning width from CatImage Object
  }
}
