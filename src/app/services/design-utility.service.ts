import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  
  exclusive = new Subject<boolean>();

  username = new Subject<string>(); 
  //username = new BehaviorSubject<string>('Rxjs'); // Behaviour subject is same as subject, can take initial value


  print(countVal: any, elementId: string) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(elementId)?.appendChild(el);
  }
}
