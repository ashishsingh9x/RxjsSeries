import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss',
})
export class PromiseComponent implements OnInit  {

  promiseVal: any;
  ngOnInit(): void {
    // let buyLaptop = new Promise(function (resolve, reject) {
    //   // resolve('Promise is resolved')
    //   reject('Promise is reject')
    // });

    let buyLaptop = new Promise((resolve, reject) => {
       //resolve('Promise is resolved')
       //reject('Promise is reject')
      
       
       if (this.DellAvailable()) {
          return setTimeout(() => {
            resolve(this.dell)
          }, 3000)
        }
        else if (this.HpAvailable()) {
          return setTimeout(() => {
            resolve(this.hp)
          }, 3000)
        }
        else {
          return setTimeout(() => {
            reject(this.notAvai)
          }, 3000)
        }
    });

    buyLaptop.then(res => {
      console.log('Success =>', res);
    }).catch(err => {
      console.log('Error =>', err);
    })
  }

  DellAvailable() {
    return false;
  }

  HpAvailable() {
    return false;
  }

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'Silver'
  }

  notAvai = {
    brand: 'Not Available',
    status: 'Failed'
  }
}
