import { Component } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss',
})
export class Comp2Component {
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
