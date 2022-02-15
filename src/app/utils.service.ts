import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor() {}

  public debounce(fn, time) {
    let timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        fn();
        console.log('debounce');
      }, time);
    };
  }
}
