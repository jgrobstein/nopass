import {manifest, version} from '@parcel/service-worker';

function dedupeArray(arr) {
  return [...new Set(arr)];
}

async function install() {
  const cache = await caches.open(version);
  await cache.addAll(dedupeArray(manifest));
}
addEventListener('install', e => e.waitUntil(install()));

async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(key => key !== version && caches.delete(key))
  );
}
addEventListener('activate', e => e.waitUntil(activate()));