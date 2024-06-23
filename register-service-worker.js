const url = `${asyncPush.APP_URL}/js?api_token=${asyncPush.API_AUTH_TOKEN}`;
fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'text/javascript',
  },

})
  .then(response => response.text())
  .then(data => {
    const script = document.createElement('script');
    script.textContent = data;
    setTimeout(() => {
      document.body.appendChild(script);
    }, 2000);
  })
  .catch(error => console.error('Error:', error));