import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss',
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus: string = '';
  techStatus2: string = '';
  subs2?: Subscription;
  constructor(private service: DesignUtilityService) {
    
  }

  ngOnDestroy(): void {
    this.subs2?.unsubscribe();
  }

  ngOnInit(): void {
    // Example 01: (Manual)
    const cusObs1 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);
      setTimeout(() => {
        observer.next('Html and Css');
      }, 3000);
      setTimeout(() => {
        observer.next('Javascript');
        //observer.error('Limit Exceed');
      }, 4000);
      setTimeout(() => {
        observer.next('JQuery');
        //observer.complete();
        this.techStatus =  'completed';
      }, 5000);
    })

    cusObs1.subscribe({
      next: (res) => {
        console.log(res);
        this.service.print(res, 'elContainer');
      },
      error: (err) => {
        this.techStatus = 'error';
      },
      complete: () => {
        this.techStatus = 'completed';
      }
    });

    // Example 2 - Custom Intervals
    const Arr2 = ['Angular', 'Javascript', 'Html', 'Css', 'Typescript']
    const cusObs2 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);

        if (count >=3) {
          observer.error('Error Emit');
        }

        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe({
      next: (res) => {
        this.service.print(res, 'elContainer2');
      },
      error: (err) => {
        console.log('Error emit')
        this.techStatus2 = 'error';
      },
      complete: () => {
        this.techStatus2 = 'completed';
      }
    })
  }
}
