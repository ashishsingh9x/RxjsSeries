import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss',
})
export class FromEventComponent implements AfterViewInit {
  constructor(private service: DesignUtilityService) { }

  @ViewChild('addBtn') addBtn!: ElementRef;

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'Video ' + count++
      console.log(countVal);
      this.service.print(countVal, 'elContainer');
    })
  }
}
