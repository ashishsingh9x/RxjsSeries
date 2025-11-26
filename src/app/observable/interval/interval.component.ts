import { Component, OnInit } from '@angular/core';
import { delay, interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss',
})
export class IntervalComponent implements OnInit {

  constructor(private service: DesignUtilityService) { }
  obsMessage: any;
  videoSubscription!: Subscription;

  ngOnInit(): void {
    //const broadCastVideos = interval(1000);
    // timer(delay, interval);
    const broadCastVideos = timer(5000, 1000);
    this.videoSubscription = broadCastVideos.subscribe(res => {
      console.log(res);
      this.obsMessage = 'Videos ' + res;
      this.service.print(this.obsMessage);

      if (res >= 5) {
        this.videoSubscription.unsubscribe(); 
      }
    })
  }

}
