import { useSiteData } from 'vitepress';
export const hashRE = /#.*$/;
export const extRE = /\.(md|html)$/;
export const outboundRE = /^[a-z]+:/i;
export function withBase(path) {
    return (useSiteData().value.base + path).replace(/\/+/g, '/');
}
export function isExternal(path) {
    return outboundRE.test(path);
}
export function isActive(route, path) {
    if (path === undefined) {
        return false;
    }
    const routePath = normalize(route.path);
    const pagePath = normalize(path);
    return routePath === pagePath;
}
export function normalize(path) {
    return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}
/**
 * get the path without filename (the last segment). for example, if the given
 * path is `/guide/getting-started.html`, this method will return `/guide/`.
 * Always with a trailing slash.
 */
export function getPathDirName(path) {
    const segments = path.split('/');
    if (segments[segments.length - 1]) {
        segments.pop();
    }
    return ensureEndingSlash(segments.join('/'));
}
export function ensureEndingSlash(path) {
    return /(\.html|\/)$/.test(path) ? path : `${path}/`;
}
