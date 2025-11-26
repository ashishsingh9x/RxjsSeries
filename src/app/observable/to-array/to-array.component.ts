import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss',
})
export class ToArrayComponent implements OnInit {

  users = [
    { name: 'Ashish', skills: 'Angular'},
    { name: 'Akash', skills: 'Dot Net'},
    { name: 'Rohan', skills: 'React'},
    { name: 'Bharti', skills: 'Full Stack'}
  ]

  sourceSub = new Subscription();
  ngOnInit(): void {
    
    // Ex -01
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5), // this will take 5 data
      toArray() //transforming data to array before subscription
    ).subscribe(res => {
      //console.log(res);

      // if (res >= 8) {
      //   this.sourceSub.unsubscribe();
      // }
    })

    // Ex - 02
    const source2 = from(this.users);

    source2.pipe(toArray()).subscribe(res => {
      //console.log(res);
    })

    // Ex - 03
    const source3 = of('Ashish', 'Bharti', 'Akash')
    source3.pipe(toArray()).subscribe(res => {
      console.log(res);
    })
  }

}
