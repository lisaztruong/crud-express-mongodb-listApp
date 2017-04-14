var update = document.getElementById('update')
var del = document.getElementById('delete')

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

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Woodstock'
    })
  }).then(function (response) {
    window.location.reload()
  })
})
