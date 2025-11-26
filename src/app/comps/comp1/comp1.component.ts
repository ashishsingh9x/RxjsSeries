import { Component } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss',
})
export class Comp1Component {
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
