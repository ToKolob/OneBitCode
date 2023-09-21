const session = document.getElementById('session')
const sendsession = document.getElementById('sendsession')
sendsession.addEventListener('click',function(){
  window.sessionStorage.setItem('info', session.value)
  session.value = ''
})
const readsession = document.getElementById('readsession')
readsession.addEventListener('click',function(){
  const info = window.sessionStorage.getItem('info')
  alert('a informação é '+ info)
})

const local = document.getElementById('local')
const sendlocal = document.getElementById('sendlocal')
sendlocal.addEventListener('click',function(){
  window.localStorage.setItem('info', local.value)
  local.value = ''
})
const readlocal = document.getElementById('readlocal')
readlocal.addEventListener('click',function(){
  const info = window.localStorage.getItem('info')
  alert('a informação é '+ info)
})

const cookie = document.getElementById('cookie')
const sendcookie = document.getElementById('sendcookie')
sendcookie.addEventListener('click',function(){
  document.cookie = 'info='+cookie.value+'; expires='+new Date().getDate()+1+'; path:/'
  cookie.value = ''
})
const readcookie = document.getElementById('readcookie')
readcookie.addEventListener('click',function(){
  const info = document.cookie
  alert('a informação é '+ info)
})
