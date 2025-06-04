/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';

// Precache generated assets.
precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener('install', () => {
  self.skipWaiting(); // Eski versiyonları atla
});
