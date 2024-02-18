import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quick.coffee.app',
  appName: 'quick-coffee-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
