redirect any url to a different url using uBlockOrigin's fitler settings.
ex of redirecting youtube short urls to proper watch urls)
!!! shorts redirect
youtube.com##+js(redirect-if, /\/shorts\/([A-Za-z0-9_-]+)/, (m) => {location.replace = "https://www.youtube.com/watch?v=" + m[1];})
