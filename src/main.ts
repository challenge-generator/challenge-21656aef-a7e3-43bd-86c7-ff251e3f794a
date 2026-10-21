import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/core/loader';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward, person, cart, notifications, settings, logOut, create, trash, add, remove, search, menu, close, checkmark, alertCircle, informationCircle, warning, camera, image, locate, barcode, qrCodeScanner, print, share, heart, heartOutline, star, starOutline, bookmark, bookmarkOutline, flag, flagOutline, globe, wallet, card, cash, walletOutline, cardOutline, cashOutline, personCircle, personCircleOutline, people, peopleCircle, chatbubbles, chatbubble, mail, mailOutline, call, callOutline, location, locationOutline, calendar, calendarOutline, time, timeOutline, lockClosed, lockOpen, eye, eyeOff, fingerPrint, key, qrCode, barcodeOutline, walletSharp, cartSharp, personSharp, homeSharp, listSharp, gridSharp, appsSharp, settingsSharp, notificationsSharp, helpCircle, helpCircleOutline, shieldCheckmark, shieldClose, fingerPrintOutline, shieldOutline, keyOutline, lockClosedOutline, lockOpenOutline, eyeOutline, eyeOffOutline, calendarOutlineOutline, timeOutlineOutline, locationOutlineOutline, mailOutlineOutline, callOutlineOutline, chatbubblesOutline, chatbubbleOutline } from 'ionicons/icons';

if (environment.production) {
  enableProdMode();
}

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  if (environment.production) {
    event.preventDefault();
  }
});

window.addEventListener('error', (event) => {
  console.error('Global Error:', event.error);
  if (environment.production) {
    event.preventDefault();
  }
});

const start = () => {
  addIcons({
    chevronBack,
    chevronForward,
    person,
    cart,
    notifications,
    settings,
    logOut,
    create,
    trash,
    add,
    remove,
    search,
    menu,
    close,
    checkmark,
    alertCircle,
    informationCircle,
    warning,
    camera,
    image,
    locate,
    barcode,
    qrCodeScanner,
    print,
    share,
    heart,
    heartOutline,
    star,
    starOutline,
    bookmark,
    bookmarkOutline,
    flag,
    flagOutline,
    globe,
    wallet,
    card,
    cash,
    walletOutline,
    cardOutline,
    cashOutline,
    personCircle,
    personCircleOutline,
    people,
    peopleCircle,
    chatbubbles,
    chatbubble,
    mail,
    mailOutline,
    call,
    callOutline,
    location,
    locationOutline,
    calendar,
    calendarOutline,
    time,
    timeOutline,
    lockClosed,
    lockOpen,
    eye,
    eyeOff,
    fingerPrint,
    key,
    qrCode,
    barcodeOutline,
    walletSharp,
    cartSharp,
    personSharp,
    homeSharp,
    listSharp,
    gridSharp,
    appsSharp,
    settingsSharp,
    notificationsSharp,
    helpCircle,
    helpCircleOutline,
    shieldCheckmark,
    shieldClose,
    fingerPrintOutline,
    shieldOutline,
    keyOutline,
    lockClosedOutline,
    lockOpenOutline,
    eyeOutline,
    eyeOffOutline,
    calendarOutlineOutline,
    timeOutlineOutline,
    locationOutlineOutline,
    mailOutlineOutline,
    callOutlineOutline,
    chatbubblesOutline,
    chatbubbleOutline
  });

  defineCustomElements(window).then(() => {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then((module) => {
        console.log('Aplicación Ionic iniciada correctamente');
      })
      .catch((err) => {
        console.error('Error al iniciar la aplicación:', err);
      });
  }).catch((err) => {
    console.error('Error al cargar componentes Ionic:', err);
  });
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  start();
} else {
  window.addEventListener('DOMContentLoaded', start);
}