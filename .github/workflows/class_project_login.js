function myfunction(){
  let x= document.getElementById('email').value;
  let y= document.getElementById('password').value;


  if (x == "Abhishek@gmail.com" || x == "9992908567") {
    if (y == "123456") {
      let z= document.getElementById('payment');
      let m= document.getElementById('l');
      let n= document.getElementById('c');
      n.style.display="none";
      m.style.display="none";
      z.style.display="block";
    }

  }
  if (x == "") {
    alert("I don't get emailor Phone number !");
  }
  if (y == "") {
    alert("I don't get Password !");
  }
}
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
function debit_card(){
  let pp=document.getElementById('payment');
  let dc=document.getElementById('debit');
  pp.style.display= "none";
  dc.style.display= "block";
}
function credit_card(){
  let pp=document.getElementById('payment');
  let ck=document.getElementById('credit');
  pp.style.display= "none";
  ck.style.display= "block";
}
function cash_on(){
  let pp=document.getElementById('payment');
  let co=document.getElementById('cash');
  pp.style.display= "none";
  co.style.display= "block";
}
function car1() {
   // window.close();
   window.open("class_project_login.php");
}




function next_p() {
  let a=document.getElementById('total_amount').value;
  if (a == "" ) {
      alert("please select a car");
  }
  else {
      alert("you car is booked");
      window.close("");
}
}

function back_me() {
  let pp=document.getElementById('payment');
  let dc=document.getElementById('debit');
  let ck=document.getElementById('credit');
  let co=document.getElementById('cash');
  pp.style.display= "block";
  co.style.display= "none";
  ck.style.display= "none";
  dc.style.display= "none";
}
function cancel_me() {
  let m= document.getElementById('l');
  let n= document.getElementById('c');
  let pp=document.getElementById('payment');
  let dc=document.getElementById('debit');
  let ck=document.getElementById('credit');
  let co=document.getElementById('cash');
  pp.style.display= "none";
  co.style.display= "none";
  ck.style.display= "none";
  dc.style.display= "none";
  m.style.display= "block";
  n.style.display= "block";
}
function pay() {
   let a=document.getElementById('account_no1').value;
   let b=document.getElementById('month1').value;
   let c=document.getElementById('cvv1').value;
   let d=document.getElementById('total_amount1').value;
   let e=document.getElementById('email').value;
  let lovez=document.getElementById('love');
  let creditz=document.getElementById('credit');
  let www=document.getElementById('debit');
  let azz=document.getElementById('demo').value = Math.floor(Math.random() * 10000);
   if (a.length == 0 || b.length == 0 || c.length == 0) {
     alert("please fill the information as asked !");
   }
   if (a.length <1 || a.length >1) {
     alert("Account no. is not correct ,Please check!");
   }

   if (b.length <1 || b.length >1) {
     alert("Please check Expiry date");
   }
   if (c.length < 1 || c.length > 1) {
     alert("CVV number is not correct");
   }
   if (d < 5000) {
     alert("please select the amount of car");
     let e=prompt("would you like to go for amount selection");
     if (e == "yes") {
       window.close();
       window.open("class_project1.php");
     }
     if (e == "no") {
       alert("In that case you have to leave us now, thank you !");
       window.close();
       window.open("class_project.php");
     }
     else {
       alert("please say something valid!");
     }
   }

   else {
     alert("Thank you for we with us");
     lovez.style.display="block";
     www.style.display="none";

     var x=window.open("","MsgWindow","width=450,height=550,top=50,left=500");
    x.document.write("<p style='position:absolute;top:10px;left:150px;font-size:30px;width:60px;font-family:cursive;color:#D19510;border:1px solid #D19510;border-radius:100%;'>A.D</p>");
     x.document.write("<p style='position:absolute;top:80px;left:20px;font-family:cursive;color:#98071C'>ID: "+e+"</p><br>");
     for (var i = 0; i < 1; i++) {
     x.document.write("<span style='position:absolute;top:130px;left:20px;font-family:cursive;color:#480AF4'>Account number:"+a[i]+"</span>");
   }
   x.document.write("<span style='position:absolute;top:130px;left:170px;font-family:cursive;color:#480AF4'> XXXX XXXX XXXX </span>");
   }
   for (var i = 0; i <1 ; i++) {
   x.document.write("<span style='position:absolute;top:130px;left:320px;font-family:cursive;color:#480AF4'>"+a[i]+"</span>");
 }
    x.document.write("<br><p style='position:absolute;top:150px;left:50px;font-family:cursive;color:#98071C'>Pay from here  :  "+d+"<br></p>");
    // x.document.write("<input id='txt' value="+a+" style='position:absolute;left:200px;width:100px;height:30px;border:1px solid black;'/><br>");
    x.document.write("<input type='button' value='OTP'   style='position:absolute;top:195px;left:120px;font-family:cursive;color:white;outline:none;background-color:#480AF4;border:none;'><span style='position:absolute;top:195px;left:170px;font-family:cursive;color:white;outline:none;background-color:#480AF4;border:none;'>"+azz+"</span>");
    x.document.write("<br><br><img src='dot.png' style='position:absolute;top:320px;left:180px;'><span style='position:absolute;top:235px;left:80px;font-family:cursive;color:white;background-color:#480AF4;'>We hope you Enjoyed with us.</span><br><br><br><br><span style='position:absolute;top:270px;left:170px;font-family:cursive;color:#98071C;'>Thank you !</span>");
  setTimeout(function(){ x.close() }, 5000);

}

function timedText() {
  var x = document.getElementById("txt");
  setTimeout(function(){ x.value="1" }, 120000);
  setTimeout(function(){ x.value="2" }, 119000);
  setTimeout(function(){ x.value="3" }, 118000);
  setTimeout(function(){ x.value="4" }, 117000);
  setTimeout(function(){ x.value="5" }, 116000);
  setTimeout(function(){ x.value="6" }, 115000);
  setTimeout(function(){ x.value="7" }, 114000);
  setTimeout(function(){ x.value="8" }, 113000);
  setTimeout(function(){ x.value="9" }, 112000);
  setTimeout(function(){ x.value="10" }, 111000);
  setTimeout(function(){ x.value="11" }, 110000);
  setTimeout(function(){ x.value="12" }, 109000);
  setTimeout(function(){ x.value="13" }, 108000);
  setTimeout(function(){ x.value="14" }, 107000);
  setTimeout(function(){ x.value="15" }, 106000);
  setTimeout(function(){ x.value="16" }, 105000);
  setTimeout(function(){ x.value="17" }, 104000);
  setTimeout(function(){ x.value="18" }, 103000);
  setTimeout(function(){ x.value="19" }, 102000);
  setTimeout(function(){ x.value="20" }, 101000);
  setTimeout(function(){ x.value="21" }, 100000);
  setTimeout(function(){ x.value="22" }, 99000);
  setTimeout(function(){ x.value="23" }, 98000);
  setTimeout(function(){ x.value="24" }, 97000);
  setTimeout(function(){ x.value="25" }, 96000);
  setTimeout(function(){ x.value="26" }, 95000);
  setTimeout(function(){ x.value="27" }, 94000);
  setTimeout(function(){ x.value="28" }, 93000);
  setTimeout(function(){ x.value="29" }, 92000);
  setTimeout(function(){ x.value="30" }, 91000);
  setTimeout(function(){ x.value="31" }, 90000);
  setTimeout(function(){ x.value="32" }, 89000);
  setTimeout(function(){ x.value="33" }, 88000);
  setTimeout(function(){ x.value="34" }, 87000);
  setTimeout(function(){ x.value="35" }, 86000);
  setTimeout(function(){ x.value="36" }, 85000);
  setTimeout(function(){ x.value="37" }, 84000);
  setTimeout(function(){ x.value="38" }, 83000);
  setTimeout(function(){ x.value="39" }, 82000);
  setTimeout(function(){ x.value="40" }, 81000);
  setTimeout(function(){ x.value="41" }, 80000);
  setTimeout(function(){ x.value="42" }, 79000);
  setTimeout(function(){ x.value="43" }, 78000);
  setTimeout(function(){ x.value="44" }, 77000);
  setTimeout(function(){ x.value="45" }, 76000);
  setTimeout(function(){ x.value="46" }, 75000);
  setTimeout(function(){ x.value="47" }, 74000);
  setTimeout(function(){ x.value="48" }, 73000);
  setTimeout(function(){ x.value="49" }, 72000);
  setTimeout(function(){ x.value="50" }, 71000);
  setTimeout(function(){ x.value="51" }, 70000);
  setTimeout(function(){ x.value="52" }, 69000);
  setTimeout(function(){ x.value="53" }, 68000);
  setTimeout(function(){ x.value="54" }, 67000);
  setTimeout(function(){ x.value="55" }, 66000);
  setTimeout(function(){ x.value="56" }, 65000);
  setTimeout(function(){ x.value="57" }, 64000);
  setTimeout(function(){ x.value="58" }, 63000);
  setTimeout(function(){ x.value="59" }, 62000);
  setTimeout(function(){ x.value="60" }, 61000);
  setTimeout(function(){ x.value="1" }, 60000);
  setTimeout(function(){ x.value="2" }, 59000);
  setTimeout(function(){ x.value="3" }, 58000);
  setTimeout(function(){ x.value="4" }, 57000);
  setTimeout(function(){ x.value="5" }, 56000);
  setTimeout(function(){ x.value="6" }, 55000);
  setTimeout(function(){ x.value="7" }, 54000);
  setTimeout(function(){ x.value="8" }, 53000);
  setTimeout(function(){ x.value="9" }, 52000);
  setTimeout(function(){ x.value="10" }, 51000);
  setTimeout(function(){ x.value="11" }, 50000);
  setTimeout(function(){ x.value="12" }, 49000);
  setTimeout(function(){ x.value="13" }, 48000);
  setTimeout(function(){ x.value="14" }, 47000);
  setTimeout(function(){ x.value="15" }, 46000);
  setTimeout(function(){ x.value="16" }, 45000);
  setTimeout(function(){ x.value="17" }, 44000);
  setTimeout(function(){ x.value="18" }, 43000);
  setTimeout(function(){ x.value="19" }, 42000);
  setTimeout(function(){ x.value="20" }, 41000);
  setTimeout(function(){ x.value="21" }, 40000);
  setTimeout(function(){ x.value="22" }, 39000);
  setTimeout(function(){ x.value="23" }, 38000);
  setTimeout(function(){ x.value="24" }, 37000);
  setTimeout(function(){ x.value="25" }, 36000);
  setTimeout(function(){ x.value="26" }, 35000);
  setTimeout(function(){ x.value="27" }, 34000);
  setTimeout(function(){ x.value="28" }, 33000);
  setTimeout(function(){ x.value="29" }, 32000);
  setTimeout(function(){ x.value="30" }, 31000);
  setTimeout(function(){ x.value="31" }, 30000);
  setTimeout(function(){ x.value="32" }, 29000);
  setTimeout(function(){ x.value="33" }, 28000);
  setTimeout(function(){ x.value="34" }, 27000);
  setTimeout(function(){ x.value="35" }, 26000);
  setTimeout(function(){ x.value="36" }, 25000);
  setTimeout(function(){ x.value="37" }, 24000);
  setTimeout(function(){ x.value="38" }, 23000);
  setTimeout(function(){ x.value="39" }, 22000);
  setTimeout(function(){ x.value="40" }, 21000);
  setTimeout(function(){ x.value="41" }, 20000);
  setTimeout(function(){ x.value="42" }, 19000);
  setTimeout(function(){ x.value="43" }, 18000);
  setTimeout(function(){ x.value="44" }, 17000);
  setTimeout(function(){ x.value="45" }, 16000);
  setTimeout(function(){ x.value="46" }, 15000);
  setTimeout(function(){ x.value="47" }, 14000);
  setTimeout(function(){ x.value="48" }, 13000);
  setTimeout(function(){ x.value="49" }, 12000);
  setTimeout(function(){ x.value="50" }, 11000);
  setTimeout(function(){ x.value="51" }, 10000);
  setTimeout(function(){ x.value="52" }, 9000);
  setTimeout(function(){ x.value="53" }, 8000);
  setTimeout(function(){ x.value="54" }, 7000);
  setTimeout(function(){ x.value="55" }, 6000);
  setTimeout(function(){ x.value="56" }, 5000);
  setTimeout(function(){ x.value="57" }, 4000);
  setTimeout(function(){ x.value="58" }, 3000);
  setTimeout(function(){ x.value="59" }, 2000);
  setTimeout(function(){ x.value="60" }, 1000);
}
  function timed1Text() {
    var x = document.getElementById("tx1t");
  setTimeout(function(){ x.value="00" }, 120000);
  setTimeout(function(){ x.value="00" }, 119000);
  setTimeout(function(){ x.value="00" }, 118000);
  setTimeout(function(){ x.value="00" }, 117000);
  setTimeout(function(){ x.value="00" }, 116000);
  setTimeout(function(){ x.value="00" }, 115000);
  setTimeout(function(){ x.value="00" }, 114000);
  setTimeout(function(){ x.value="00" }, 113000);
  setTimeout(function(){ x.value="00" }, 112000);
  setTimeout(function(){ x.value="00" }, 111000);
  setTimeout(function(){ x.value="00" }, 110000);
  setTimeout(function(){ x.value="00" }, 109000);
  setTimeout(function(){ x.value="00" }, 108000);
  setTimeout(function(){ x.value="00" }, 107000);
  setTimeout(function(){ x.value="00" }, 106000);
  setTimeout(function(){ x.value="00" }, 105000);
  setTimeout(function(){ x.value="00" }, 104000);
  setTimeout(function(){ x.value="00" }, 103000);
  setTimeout(function(){ x.value="00" }, 102000);
  setTimeout(function(){ x.value="00" }, 101000);
  setTimeout(function(){ x.value="00" }, 100000);
  setTimeout(function(){ x.value="00" }, 99000);
  setTimeout(function(){ x.value="00" }, 98000);
  setTimeout(function(){ x.value="00" }, 97000);
  setTimeout(function(){ x.value="00" }, 96000);
  setTimeout(function(){ x.value="00" }, 95000);
  setTimeout(function(){ x.value="00" }, 94000);
  setTimeout(function(){ x.value="00" }, 93000);
  setTimeout(function(){ x.value="00" }, 92000);
  setTimeout(function(){ x.value="00" }, 91000);
  setTimeout(function(){ x.value="00" }, 90000);
  setTimeout(function(){ x.value="00" }, 89000);
  setTimeout(function(){ x.value="00" }, 88000);
  setTimeout(function(){ x.value="00" }, 87000);
  setTimeout(function(){ x.value="00" }, 86000);
  setTimeout(function(){ x.value="00" }, 85000);
  setTimeout(function(){ x.value="00" }, 84000);
  setTimeout(function(){ x.value="00" }, 83000);
  setTimeout(function(){ x.value="00" }, 82000);
  setTimeout(function(){ x.value="00" }, 81000);
  setTimeout(function(){ x.value="00" }, 80000);
  setTimeout(function(){ x.value="00" }, 79000);
  setTimeout(function(){ x.value="00" }, 78000);
  setTimeout(function(){ x.value="00" }, 77000);
  setTimeout(function(){ x.value="00" }, 76000);
  setTimeout(function(){ x.value="00" }, 75000);
  setTimeout(function(){ x.value="00" }, 74000);
  setTimeout(function(){ x.value="00" }, 73000);
  setTimeout(function(){ x.value="00" }, 72000);
  setTimeout(function(){ x.value="00" }, 71000);
  setTimeout(function(){ x.value="00" }, 70000);
  setTimeout(function(){ x.value="00" }, 69000);
  setTimeout(function(){ x.value="00" }, 68000);
  setTimeout(function(){ x.value="00" }, 67000);
  setTimeout(function(){ x.value="00" }, 66000);
  setTimeout(function(){ x.value="00" }, 65000);
  setTimeout(function(){ x.value="00" }, 64000);
  setTimeout(function(){ x.value="00" }, 63000);
  setTimeout(function(){ x.value="00" }, 62000);
  setTimeout(function(){ x.value="00" }, 61000);
  setTimeout(function(){ x.value="01" }, 60000);
  setTimeout(function(){ x.value="01" }, 59000);
  setTimeout(function(){ x.value="01" }, 58000);
  setTimeout(function(){ x.value="01" }, 57000);
  setTimeout(function(){ x.value="01" }, 56000);
  setTimeout(function(){ x.value="01" }, 55000);
  setTimeout(function(){ x.value="01" }, 54000);
  setTimeout(function(){ x.value="01" }, 53000);
  setTimeout(function(){ x.value="01" }, 52000);
  setTimeout(function(){ x.value="01" }, 51000);
  setTimeout(function(){ x.value="01" }, 50000);
  setTimeout(function(){ x.value="01" }, 49000);
  setTimeout(function(){ x.value="01" }, 48000);
  setTimeout(function(){ x.value="01" }, 47000);
  setTimeout(function(){ x.value="01" }, 46000);
  setTimeout(function(){ x.value="01" }, 45000);
  setTimeout(function(){ x.value="01" }, 44000);
  setTimeout(function(){ x.value="01" }, 43000);
  setTimeout(function(){ x.value="01" }, 42000);
  setTimeout(function(){ x.value="01" }, 41000);
  setTimeout(function(){ x.value="01" }, 40000);
  setTimeout(function(){ x.value="01" }, 39000);
  setTimeout(function(){ x.value="01" }, 38000);
  setTimeout(function(){ x.value="01" }, 37000);
  setTimeout(function(){ x.value="01" }, 36000);
  setTimeout(function(){ x.value="01" }, 35000);
  setTimeout(function(){ x.value="01" }, 34000);
  setTimeout(function(){ x.value="01" }, 33000);
  setTimeout(function(){ x.value="01" }, 32000);
  setTimeout(function(){ x.value="01" }, 31000);
  setTimeout(function(){ x.value="01" }, 30000);
  setTimeout(function(){ x.value="01" }, 29000);
  setTimeout(function(){ x.value="01" }, 28000);
  setTimeout(function(){ x.value="01" }, 27000);
  setTimeout(function(){ x.value="01" }, 26000);
  setTimeout(function(){ x.value="01" }, 25000);
  setTimeout(function(){ x.value="01" }, 24000);
  setTimeout(function(){ x.value="01" }, 23000);
  setTimeout(function(){ x.value="01" }, 22000);
  setTimeout(function(){ x.value="01" }, 21000);
  setTimeout(function(){ x.value="01" }, 20000);
  setTimeout(function(){ x.value="01" }, 19000);
  setTimeout(function(){ x.value="01" }, 18000);
  setTimeout(function(){ x.value="01" }, 17000);
  setTimeout(function(){ x.value="01" }, 16000);
  setTimeout(function(){ x.value="01" }, 15000);
  setTimeout(function(){ x.value="01" }, 14000);
  setTimeout(function(){ x.value="01" }, 13000);
  setTimeout(function(){ x.value="01" }, 12000);
  setTimeout(function(){ x.value="01" }, 11000);
  setTimeout(function(){ x.value="01" }, 10000);
  setTimeout(function(){ x.value="01" }, 9000);
  setTimeout(function(){ x.value="01" }, 8000);
  setTimeout(function(){ x.value="01" }, 7000);
  setTimeout(function(){ x.value="01" }, 6000);
  setTimeout(function(){ x.value="01" }, 5000);
  setTimeout(function(){ x.value="01" }, 4000);
  setTimeout(function(){ x.value="01" }, 3000);
  setTimeout(function(){ x.value="01" }, 2000);
  setTimeout(function(){ x.value="01" }, 1000);
}




function sum() {
  let a=document.getElementById('tx0t').value;
  let azz=document.getElementById('demo').value;
  if (a == azz) {
    alert("car is booked thank you!");
    window.close();
    window.open("class_project.php");
  }
  else {
    alert("sorry! not correct");
  }
}
// function rev() {
//   let a=document.getElementById('account_no1').value;
//   let b=document.getElementById('month1').value;
//   let c=document.getElementById('cvv1').value;
//   let d=document.getElementById('total_amount1').value;
//   let e=document.getElementById('email').value;
//  let lovez=document.getElementById('love');
//  let creditz=document.getElementById('credit');
//  let www=document.getElementById('debit');
// let azz=document.getElementById('demo').value = Math.floor(Math.random() * 10000);
//
//
//   // alert("Thank you for we with us");
//   // lovez.style.display="block";
//   // www.style.display="none";
//
//   var x=window.open("","MsgWindow","width=450,height=550,top=50,left=500");
//  x.document.write("<p style='position:absolute;top:10px;left:150px;font-size:30px;width:60px;font-family:cursive;color:#D19510;border:1px solid #D19510;border-radius:100%;'>A.D</p>");
//   x.document.write("<p style='position:absolute;top:80px;left:20px;font-family:cursive;color:#98071C'>ID: "+e+"</p><br>");
//   for (var i = 0; i < 1; i++) {
//   x.document.write("<span style='position:absolute;top:130px;left:20px;font-family:cursive;color:#480AF4'>Account number:"+a[i]+"</span>");
// }
// x.document.write("<span style='position:absolute;top:130px;left:170px;font-family:cursive;color:#480AF4'> XXXX XXXX XXXX </span>");
// }
// for (var i = 0; i <1 ; i++) {
// x.document.write("<span style='position:absolute;top:130px;left:320px;font-family:cursive;color:#480AF4'>"+a[i]+"</span>");
// }
//  x.document.write("<br><p style='position:absolute;top:150px;left:50px;font-family:cursive;color:#98071C'>Pay from here  :  "+d+"<br></p>");
//  x.document.write("<input id='txt' value="+a+" style='position:absolute;left:200px;width:100px;height:30px;border:1px solid black;'/><br>");
//  x.document.write("<input type='button' value='OTP'   style='position:absolute;top:195px;left:120px;font-family:cursive;color:white;outline:none;background-color:#480AF4;border:none;'><span style='position:absolute;top:195px;left:170px;font-family:cursive;color:white;outline:none;background-color:#480AF4;border:none;'>"+azz+"</span>");
//  x.document.write("<br><br><img src='dot.png' style='position:absolute;top:320px;left:180px;'><span style='position:absolute;top:235px;left:80px;font-family:cursive;color:white;background-color:#480AF4;'>We hope you Enjoyed with us.</span><br><br><br><br><span style='position:absolute;top:270px;left:170px;font-family:cursive;color:#98071C;'>Thank you !</span>");
// setTimeout(function(){ x.close() }, 5000);
//
// }
