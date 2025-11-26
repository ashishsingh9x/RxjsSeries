import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-of-from',
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss',
})
export class OfFromComponent implements OnInit {

  objMessage: any;
  constructor(private service: DesignUtilityService) { }

  ngOnInit(): void {
    const Obs1 = of('Ashish', 'Sangram', 'Singh');
    Obs1.subscribe(res => {
      console.log(res);
      this.service.print(res);
    })    

    const Obs2 = of({a: 'Ashish', b: 'Sangram', c: 'Singh'});
    Obs2.subscribe(res => {
      this.objMessage = res;
      this.service.print(res);
    })    
  }
}
