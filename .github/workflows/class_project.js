function search_car()
{
  let a=document.getElementById('pick_up').value;
  let b=document.getElementById('return_location').value;
  let c=document.getElementById('day').value;
  let d=document.getElementById('month').value;
  let e=document.getElementById('year').value;
  let f=document.getElementById('time').value;
  let g=document.getElementById('time_type').value;
  let h=document.getElementById('day2').value;
  let i=document.getElementById('month2').value;
  let j=document.getElementById('year2').value;
  let k=document.getElementById('time2').value;
  let l=document.getElementById('time_type2').value;
  let m=document.getElementById('dob').value;
  let n=document.getElementById('country').value;
  let o=document.getElementById('State').value;
  let p=document.getElementById('Zip_code').value;
  if (a == "" ||  b == "" || c == "" ||  d == "" || e == "" ||  f == "" || g == "" ||  h == "" || i == "" ||  j == "" || k == "" ||  l == "" || m == "" ||  n == "" || o == "" ||  p == "") {
    alert("please fill complete form !");
  }
  let z=p.length;
  if(z < 6 || z > 6)
  {
    alert("Please write valid Zip code");
  }
  else {
    window.close();
        window.open("class_project1.php");
  }

}
function contact_love(){
  let b=document.getElementById('contact_love');
  let a=document.getElementById('contact_lovew');
  a.style.display="none";
  b.style.display="block";
}
function contact_lovea(){
  let a=document.getElementById('contact_love');
  let b=document.getElementById('contact_lovew');
  a.style.display="none";
  b.style.display="block";
}
function contact_loveb(){
  let a=document.getElementById('contact_love');
  let b=document.getElementById('contact_lovew');
  a.style.display="none";
  b.style.display="block";
}function contact_lovec(){
  let a=document.getElementById('contact_love');
  let b=document.getElementById('contact_lovew');
  a.style.display="none";
  b.style.display="block";
}
