import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
constructor(private _loadservice:LoadService){}
  isLoading: Subject<boolean> = this._loadservice.isLoading;

}
