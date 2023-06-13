import { Injectable } from '@angular/core';

declare global {
  interface Window {
    AndroidInterface: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AndroidService {

  constructor() { }

  sendMessageToAndroid(id:number) {
    window.AndroidInterface.handleEventFromWeb(id);
  }
}
