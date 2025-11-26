import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  
  print(countVal: any, elementId: string) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById(elementId)?.appendChild(el);
  }
}
