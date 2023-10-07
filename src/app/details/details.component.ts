import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  productId:any
  productDetails:any
constructor( private _ActivatedRoute:ActivatedRoute , private _DataService:DataService){
  
  this._ActivatedRoute.paramMap.subscribe((pram)=>{
this.productId=pram.get('id')
  })
 this. getDetailfData()
}
getDetailfData(){
this._DataService.getDetails(this.productId).subscribe((response)=>{
  this.productDetails=response.data
})
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
    
  },
  nav: true
}

}