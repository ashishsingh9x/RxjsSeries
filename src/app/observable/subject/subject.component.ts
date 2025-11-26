import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';
import { Comp1Component } from "../../comps/comp1/comp1.component";
import { Comp2Component } from "../../comps/comp2/comp2.component";
import { Comp3Component } from "../../comps/comp3/comp3.component";

@Component({
  selector: 'app-subject',
  imports: [Comp1Component, Comp2Component, Comp3Component],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit, OnDestroy {
  username: string = '';
  constructor(private service: DesignUtilityService) {
    this.service.username.subscribe(res => {
      this.username = res;
    })
   }

  ngOnInit(): void {
    this.service.exclusive.next(true);    
  }

  ngOnDestroy(): void {
    this.service.exclusive.next(false);
  }
}
