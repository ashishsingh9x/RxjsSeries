import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  
  print(countVal: any) {
    let el = document.createElement('li');
    el.innerText = countVal;
    document.getElementById('elContainer')?.appendChild(el);
  }
}
