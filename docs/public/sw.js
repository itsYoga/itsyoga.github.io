// Service Worker to bust GitHub Pages cache per-deploy using versioned query params
// VERSION is provided by the page via postMessage after reading /version.json

let currentVersion = undefined;

self.addEventListener('message', (event) => {
	if (!event || !event.data) return;
	if (event.data.type === 'SET_VERSION' && typeof event.data.version === 'string') {
		currentVersion = event.data.version;
	}
});

self.addEventListener('install', (event) => {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

function withVersionQuery(request) {
	try {
		const url = new URL(request.url);
		// Only same-origin resources should be modified
		if (url.origin !== self.location.origin) return request;
		// Do not re-version already versioned URLs
		if (url.searchParams.has('v')) return request;
		// Only add version for navigations and static asset types
		const isNavigation = request.mode === 'navigate';
		const isAsset = /\.(css|js|mjs|png|jpg|jpeg|gif|webp|svg|ico|mp4|webm|mp3|wav|glb|gltf|wasm|json)$/i.test(url.pathname);
		if (!isNavigation && !isAsset) return request;
		if (!currentVersion) return request; // If version unknown yet, do not alter
		url.searchParams.set('v', currentVersion);
		return new Request(url.toString(), request);
	} catch (_) {
		return request;
	}
}

self.addEventListener('fetch', (event) => {
	const request = withVersionQuery(event.request);
	event.respondWith(fetch(request));
});
