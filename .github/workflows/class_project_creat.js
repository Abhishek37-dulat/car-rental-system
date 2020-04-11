function eye(){
  let p=document.getElementById('password');
  let o=document.getElementById('eye_open');
  let c=document.getElementById('eye_close');
  if (p.type === 'password') {
    p.type= "text";
    o.style.display= "block";
    c.style.display= "none";
  }
  else {
    p.type= "password";
    o.style.display= "none";
    c.style.display= "block";
  }
}
