import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  
  exclusive = new Subject<boolean>();

  print(countVal: any, elementId: string) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(elementId)?.appendChild(el);
  }
}
