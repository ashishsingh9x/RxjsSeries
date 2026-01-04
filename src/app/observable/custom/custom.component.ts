import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss',
})
export class CustomComponent implements OnInit {

  techStatus: string = '';
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
        observer.complete();
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
  }

  constructor(private service: DesignUtilityService) {
    
  }

}
