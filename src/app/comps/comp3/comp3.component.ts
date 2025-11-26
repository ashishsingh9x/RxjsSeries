import { Component } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-comp3',
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss',
})
export class Comp3Component {
  username: string = '';
  constructor(private service: DesignUtilityService) {
    this.service.username.subscribe(res => {
      this.username = res;
    })
  }
  
  onChange(uname: string) {
    console.log(uname);
    this.service.username.next(uname);
  }
}
