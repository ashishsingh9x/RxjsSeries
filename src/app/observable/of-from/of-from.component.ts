import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
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

    // Of - Arguments
    const Obs1 = of('Ashish', 'Sangram', 'Singh');
    Obs1.subscribe(res => {
      //console.log(res);
      this.service.print(res, 'elContainer');
    })    

    // Of - Object
    const Obs2 = of({a: 'Ashish', b: 'Sangram', c: 'Singh'});
    Obs2.subscribe(res => {
      this.objMessage = res;
      this.service.print(res, 'elContainer');
    })    

    // From - Array
    const Obs3 = from(['Ashish', 'Sangram', 'Singh']);
    Obs3.subscribe(res => {
      //console.log(res);
      this.service.print(res, 'elContainer2');
    })

    // From - Promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved')
      }, 2000);
    })

    promise.then(res => {
      //console.log('res => ' + res);
    })

    const Obs4 = from(promise);
    Obs4.subscribe(res => {
      console.log('from promise');
      this.service.print(res, 'elContainer3');
    })

    // From - String
    const Obs5 = from('Welcome to rxjs');
    Obs5.subscribe(res => {
      console.log('from string => ' + res);
      this.service.print(res, 'elContainer4');
    })
  }
}
