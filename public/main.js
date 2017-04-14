var update = document.getElementById('update');

// fetch API to trigger a put request in browsers
update.addEventListener('click', function(){
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Woodstock',
      'quote': 'Today is a good day to have a good day.'
    })
  })
})
