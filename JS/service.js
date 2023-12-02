function checkSiteStatus(siteUrl, onlineRedirect, offlineRedirect) {
  fetch(siteUrl, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        // Site is online, redirect to the provided URL
        window.location.href = onlineRedirect;
      } else {
        // Site is offline, redirect to the other page
        window.location.href = offlineRedirect;
      }
    })
    .catch(error => {
      // Error occurred, assume site is offline and redirect
      window.location.href = offlineRedirect;
    });
}

// Usage
function go() {
  const butt = document.getElementById('TitansGO')
butt.style.backgroundColor = '#333333';
butt.textContent = 'FINDING SERVER';
  const siteUrl = 'https://2mdfmnqv-8080.usw3.devtunnels.ms/';
const onlineRedirect = siteUrl;
const offlineRedirect = 'https://seismetic.pages.dev/';

checkSiteStatus(siteUrl, onlineRedirect, offlineRedirect);
}