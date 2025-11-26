import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private service: DesignUtilityService) { }

  ngOnInit(): void {
    this.service.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.service.exclusive.next(false);
  }
}
