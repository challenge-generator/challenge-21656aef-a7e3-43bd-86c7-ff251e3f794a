import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.poo.refactoring',
  appName: 'Ionic POO Refactoring',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    cleartext: true,
    hostname: 'localhost'
  },
  android: {
    buildToolsVersion: '34.0.0',
    minSdkVersion: 23,
    targetSdkVersion: 34,
    useAndroidX: true,
    allowMixedContent: true,
    webContentsDebuggingEnabled: true
  },
  ios: {
    minVersion: '13.0',
    allowsInsecureLocalhost: true,
    cordovaNativeVersion: '7.0.0'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      splashFullScreen: true,
      splashMaintainAspectRatio: true
    },
    StatusBar: {
      backgroundColor: '#ffffff',
      style: 'dark'
    },
    LocalNotifications: {
      smallIcon: 'assets/icon/notification-icon.png',
      sound: 'beep.wav'
    }
  },
  logging: {
    logLevel: 'debug',
    maxLogEntries: 100
  },
  experimental: {
    legacyBranding: false,
    hideLogs: false
  }
};

export default config;