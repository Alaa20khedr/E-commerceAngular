import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  brand:any[]=[]
  constructor(private _DataService:DataService){
    this.  dataFrombrand()
  }

   
  dataFrombrand(){
    this._DataService.getData("brands").subscribe((response)=>{
     this.brand=response.data
     console.log(response)
    })
  }
}
