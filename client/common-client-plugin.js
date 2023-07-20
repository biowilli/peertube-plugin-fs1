function register ({ registerHook, peertubeHelpers }) {
  const favicon = document.querySelector('link[rel="icon"]')
  favicon.href = peertubeHelpers.getBaseStaticRoute() + '/images/FS1-RGB-Farbe.png'
}

export {
  register
}
