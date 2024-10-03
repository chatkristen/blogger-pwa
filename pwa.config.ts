import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Chat Kristen',
  shortName: 'Chat Kristen',
  description: 'Chat Kristen: Platform yang menyajikan inspirasi, renungan harian, dan diskusi seputar kehidupan Kristen.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Renungan',
      shortName: 'Renungan',
      description: 'Renungan',
      url: '/search/label/Renungan?utm_source=homescreen',
    },
    {
      name: 'Lagu Rohani',
      shortName: 'Lagu Rohani',
      description: 'Lagu Rohani',
      url: '/search/label/Lagu%20Rohani?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: 'd56abbf2-6dd3-4a00-93f2-c633bb99b3d0',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
 origin: 'https://www.chatkristen.com',
} satisfies Config;
