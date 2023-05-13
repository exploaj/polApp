import { Injectable } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }
  configuracionInicial(){
    this.oneSignal.startInit('52ae0185-f5e5-49b4-b1bd-c4db44670275', '165383787260');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log('notificacion recibida', noti)
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log('Notificacion abierta', noti)
        // do something when a notification is opened
    });

    this.oneSignal.endInit();
    }
}
