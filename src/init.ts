// Register service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log(reg);
        })
        .catch(reason => {
            console.error(reason);
        });
}
else {
    class EnvironmentError extends Error {
        code: string;

        constructor() {
            super();
            this.code = 'EUNSUPPORTEDENV'
            this.message = "Litterus can't be run on your browser due to technical problem.\nPlease upgrade your browser as latest version."
            this.cause = "ServiceWorker not available"
        }
    }

    throw new EnvironmentError();
}

// Revoke unused font blobs
window.addEventListener('storage', (e: StorageEvent) => {
    if(e.key?.startsWith('font:') && e.oldValue) {
        URL.revokeObjectURL(e.oldValue);
    }
});