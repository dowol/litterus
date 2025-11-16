export function getURL(id: string): string {
    return new URL(id.toString(), 'blob:' + location.origin).toString();
}

export function getUUID(url: string): string | undefined {
    return (url.startsWith('blob:')) ? url.substring(url.lastIndexOf('/') + 1) : undefined;
}

export default {getURL, getUUID};