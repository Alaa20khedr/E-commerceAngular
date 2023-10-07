import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  category:any[]=[]
  constructor(private _DataService:DataService){ 
   this. dataFromCat() }
  



  dataFromCat(){
    this._DataService.getData("categories").subscribe((response)=>{
     this.category=response.data
     console.log(response)
    })
}

}