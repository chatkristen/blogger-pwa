/**
 * This is auto generated metadata file, generated at: Wed Oct 02 2024 19:34:43 GMT+0000 (Coordinated Universal Time)
 * Prevent making any changes here
 */

export interface Metadata {
  github: {
    repository: string;
    branch: string;
  };
  pwa: {
    logs: boolean;
    oneSignalEnabled: boolean;
    oneSignalSDK: string;
    oneSignalConfig: {
      appId: string;
      allowLocalhostAsSecureOrigin: boolean;
    };
    serviceWorker: {
      source: string;
      scope: string;
    };
  };
  build: {
    hash: string;
  };
}

export const metadata = JSON.parse(
  '{"github":{"repository":"chatkristen/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"d56abbf2-6dd3-4a00-93f2-c633bb99b3d0","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"PdeIBcCkCPDUbWnXtBcwq"}}',
) as Metadata;
