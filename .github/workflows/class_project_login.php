<!DOCTYPE html>
<html onload="width=100 ,height=100">
  <head >
    <meta charset="utf-8">
    <link rel="stylesheet" href="class_project_login.css">
    <title></title>
  </head>
  <body>
    <div class="background">
    <1img src="world-map.jpg" alt="" class="background-img">
   <div class="project">
   <img src="tesla_model_3_64px.png" alt="carlogo" class="carlogo">
   <p class="india">INDIA</p>
   <p class="carrental">CAR RENTAL</p>
     <!-- <1input type="text" name="sear" placeholder="Search" class="sear" >
     <1button type="submit" name="button" class="search" style="background-color:LightSlateGrey;border:none;">Search</button> -->
   <div class="toplist">
     <ul>
       <li><a href="class_project.php">Home</a></li>
     </ul>
     <ul>
       <!-- <li><a href="class_project_terms.php">Reservation</a></li> -->
     </ul>
   <ul>
     <li><a href="class_project_terms.php">Services</a></li>
   </ul>
   <ul>
     <li><a href="class_project_terms.php">Terms</a></li>
   </ul>
   <ul>
     <li><a href="class_project_about.php">About us</a></li>
   </ul>
   <ul>
     <li><a href="class_project_terms.php">Contact</a></li>
   </ul>
   </div>
   <p class="numbers">91+ 9992908567</p>
<div class="Toptelephone">
   <img src="telephone_64px.png" alt="telephone" class="telephone" id="telephone">
    </div>
   </div>
</div>



<div class="L" id="l">
  <img src="log.png" alt="" class="Limg">
  <input type="text" name="" value="" placeholder="Phone number" class="phone_number" id="email">
  <div><input type="password" name="" value="" placeholder="Password" class="password" id="password">
  <img src="eye_open.png" class="eye_open" id="eye_open" onclick="eye()"><img src="eye_close.png" class="eye_close" id="eye_close" onclick="eye()"></div>
  <input type="button" name="" value="login"  class="Blogin" onclick="myfunction()">
  <p class="or">______________OR______________</p>
  <a href="class_project.php"><img src="google.png" alt="" class="Lgoogle"></a>
  <a href="class_project.php" class="google">Log in with google </a>
  <p class="forgot"><a href="class_project.php" style="color:#4B4B45">Forgot password?</a></p>
</div>
<div class="C" id="c">
<p class="Cd">Don't have an account?</p>
<a href="class_project_creat.php" class="Ca">Sign up</a>

</div>

<div class="payment" id="payment">
<p style="position:absolute;top:5px;left:120px;font-size:20px;font-family:cursive;color:#98071C"><b>Pay</b></p>
<div class="method">Select method of Payment</div>
<div class="method1" onclick="debit_card()" id="dd"><img src="ddl.png" alt="" class="ddl"><img src="ddd.png" alt="" class="ddd" ><span style="position:absolute;left:30px;top:5px;">Debit card</span></div>
<div class="method2" onclick="credit_card()" id="cc"><img src="ccl.png" alt="" class="ccl"><img src="ccd.png" alt="" class="ccd" ><span style="position:absolute;left:30px;top:5px;">Credit card</div>
<div class="method3" onclick="cash_on()" id="cash_on"><img src="cashl.png" alt="" class="cashl"><img src="cashd.png" alt="" class="cashd" ><span style="position:absolute;left:30px;top:5px;">Cash on delivery</div>
<img src="lock.png" alt="" style="position:absolute;top:265px;left:120px;">
<p style="position:absolute;top:285px;left:20px;font-size:15px;font-family:cursive;color:#480AF4">Just don't worried about the safety <br>you are fully secure.</p>
<button type="button" name="button" class="cancel_me" onclick="cancel_me()">Cancel Booking</button>
</div>

<div class="debit_card" id="debit">
    <button type="button" name="button"  class="back-me" onclick="back_me()">Back</button>
<p style="position:absolute;top:5px;left:130px;font-size:20px;font-family:cursive;color:#98071C"><b>Debit card</b></p>
<p style="position:absolute;top:40px;left:30px;font-size:20px;font-family:cursive;color:#98071C"><b>Total Amount:</b></p>
<input class="rent_charges" value="<?php  echo $_GET["Amount1"]?><?php  echo $_GET["Amount2"]?><?php  echo $_GET["Amount3"]?>
  <?php  echo $_GET["Amount4"]?> <?php  echo $_GET["Amount5"]?><?php  echo $_GET["Amount6"]?><?php  echo $_GET["Amount7"]?>
  <?php  echo $_GET["Amount8"]?><?php  echo $_GET["Amount9"]?><?php  echo $_GET["Amount10"]?><?php  echo $_GET["Amount11"]?>
  <?php  echo $_GET["Amount12"]?>">
<div type="text" class="debit_pay" id="debit_pay"></div>
<input class="account_no" placeholder="Enter your account number" id="account_no1">
<input class="date" placeholder="MM/YYYY" id="month1">
<input class="cvv" placeholder="CVV" id="cvv1">
<input type="button" class="plan" value="Go For Payment" onclick="pay(),timedText() ,timed1Text()">
</div>

<div class="credit_card" id="credit">
  <button type="button" name="button"  class="back-me" onclick="back_me()">Back</button>
  <p style="position:absolute;top:5px;left:130px;font-size:20px;font-family:cursive;color:#98071C"><b>Credit card</b></p>
  <p style="position:absolute;top:40px;left:30px;font-size:20px;font-family:cursive;color:#98071C"><b>Total Amount:</b></p>
  <input class="rent_charges" id="total_amount1" value="<?php  echo $_GET["Amount1"]?><?php  echo $_GET["Amount2"]?><?php  echo $_GET["Amount3"]?>
    <?php  echo $_GET["Amount4"]?> <?php  echo $_GET["Amount5"]?><?php  echo $_GET["Amount6"]?><?php  echo $_GET["Amount7"]?>
    <?php  echo $_GET["Amount8"]?><?php  echo $_GET["Amount9"]?><?php  echo $_GET["Amount10"]?><?php  echo $_GET["Amount11"]?>
    <?php  echo $_GET["Amount12"]?>" >
  <input class="account_noc" placeholder="Enter your account number" id="account_no1">
  <input class="datec" placeholder="MM/YYYY" id="month1">
  <input class="cvvc" placeholder="CVV" id="cvv1">
  <input type="button" class="planc" value="Go For Payment" onclick="pay(),timedText() ,timed1Text()">
</div>
<form class="cash" id="cash">
  <button type="button" name="button"  class="back-me" onclick="back_me()">Back</button>
  <p style="position:absolute;top:5px;left:110px;font-size:20px;font-family:cursive;color:#98071C"><b>Cash on delivery</b></p>
  <p  style="position:absolute;top:45px;left:20px;font-size:20px;font-family:cursive;color:#4B4B45"><b>Rent charge</b></p><div class="rent_charges" id="rent_charges">
    <?php  $a= $_GET["Amount1"]?><?php  $b= $_GET["Amount2"]?><?php  $c= $_GET["Amount3"]?>
      <?php  $d= $_GET["Amount4"]?> <?php  $e= $_GET["Amount5"]?><?php  $f= $_GET["Amount6"]?><?php  $g= $_GET["Amount7"]?>
      <?php  $h= $_GET["Amount8"]?><?php  $i= $_GET["Amount9"]?><?php  $j= $_GET["Amount10"]?><?php  $k= $_GET["Amount11"]?>
      <?php  $l= $_GET["Amount12"]?>
      <?php
  if (isset( $_GET["Amount1"])) {
  echo $_GET["Amount1"]="6600";
  }
  elseif (isset( $_GET["Amount2"])) {
    echo $_GET["Amount2"]="6650";
  }
  elseif (isset( $_GET["Amount3"]))
  {
   echo $_GET["Amount3"]="7500";
  }
  elseif (isset( $_GET["Amount4"])) {
    echo $_GET["Amount4"]="7500";
  }
  elseif (isset( $_GET["Amount5"]))
  {
   echo $_GET["Amount5"]="7400";
  }
  elseif (isset( $_GET["Amount6"])) {
  echo $_GET["Amount6"]="7448";
  }
  elseif (isset( $_GET["Amount7"]))
  {
  echo $_GET["Amount7"]="6499.55";
  }
  elseif (isset( $_GET["Amount8"])) {
  echo $_GET["Amount8"]="6400";
  }
  elseif (isset( $_GET["Amount9"]))
  {
    echo $_GET["Amount9"]="7590";

  }
  elseif (isset( $_GET["Amount10"])) {
  echo $_GET["Amount10"]="7770" ;
  }
  elseif (isset( $_GET["Amount11"]))
  {
  echo $_GET["Amount11"]="5780";
  }
  elseif (isset( $_GET["Amount12"])) {
  echo $_GET["Amount12"]="6150";
  }
  else {
    echo "car not selected";
  }

  ?>
  </div>
  <p style="position:absolute;top:85px;left:20px;font-size:20px;font-family:cursive;color:#4B4B45"><b>GST</b></p><div class="gst">5 percent</div>
  <p style="position:absolute;top:125px;left:20px;font-size:20px;font-family:cursive;color:#4B4B45"><b>Other Texes</b></p><div class="texes">(1 to 2) percent</div>
    <p style="position:absolute;top:165px;left:20px;font-size:20px;font-family:cursive;color:#4B4B45"><b>You have to pay</b></p><div class="total_amount" id="total_amount">
    <?php  echo $_GET["Amount1"]="$a"?><?php  echo $_GET["Amount2"]="$b"?><?php  echo $_GET["Amount3"]="$c"?>
      <?php  echo $_GET["Amount4"]="$d"?> <?php  echo $_GET["Amount5"]="$e"?><?php  echo $_GET["Amount6"]="$f"?>
      <?php  echo $_GET["Amount7"]="$g"?><?php  echo $_GET["Amount8"]="$h"?><?php  echo $_GET["Amount9"]="$i"?>
      <?php  echo $_GET["Amount10"]="$j"?><?php  echo $_GET["Amount11"]="$k"?>
      <?php  echo $_GET["Amount12"]="$l"?>
  </div>
  <p style="position:absolute;top:205px;left:20px;font-size:20px;font-family:cursive;color:#4B4B45"><b>You will receive bill on delivery !</b></p>
  <spans class="next_p"  onclick="next_p()"><a href="class_project1.php"><img  src="next.png" id="nextg" style="  position:absolute;top:0px;left:0px;"></a></spans>
</form>
<div class="love" id="love" >
  <div class="love1">
    <p style="position:absolute;top:10px;left:100px;font-family:cursive;color:white">One Time OTP</p>
    <a href="class_project1.php"><img src="cancel_me.png" class="cancel_me_2"></a>
    </div>
    <p style="position:absolute;top:70px;left:170px;font-family:cursive;font-size: 30px;border: 1px solid #D19510;border-radius:100% ;color:#D19510">A.D</p>
    <p style="position:absolute;top:130px;left:40px;font-family:cursive;font-size: 20px;color:#98071C">Don't worry you are secured<br>just go for it.</p>
    <input type="text" name="" placeholder="Enter OTP" value="" id="tx0t" class="love_t0">
    <p style="position:absolute;top:260px;left:170px;font-family:cursive;color:blue">Timer</p>
    <input type="text" name="" value="" id="tx1t" class="love_t1">
    <input type="text" name="" value="" id="txt" class="love_t2">
    <input type="button" name="" value="submit" class="love_submit" onclick="sum()">
    <!-- <input type="button" name="" value="Resend" class="love_resend" onclick="rev()"> -->

</div>
<!-- <button onclick="gg()" style="position:absolute;top:220px ;color:black;left: 10px;border:1px solid black;width:100px;height:30px;">Click Me</button>
<input type="text"  value="hello" style="position:absolute;top:120px ;color:black;left: 10px;border:1px solid black;width:100px;height:30px;"  id="deom"> -->

<!-- <button onclick="gg()" style="position:absolute;top:220px ;color:black;left: 10px;border:1px solid black;width:100px;height:30px;">Click Me</button> -->

<input type="text" id="demo" value="" style="position:absolute;top:120px ;color:black;left: 10px;border:1px solid white;color:white;width:100px;height:30px;">


<div class="footer">

  <p style="position:absolute;top:10px ;color:white;left: 10px;font-size:18px;font-family: Arial, Helvetica, sans-serif;">Follow us:</p>
  <p style="position:absolute;top:10px;left:300px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">Contact us:</p>
  <p style="position:absolute;top:36px;left:300px;color:white;font-size:18px;">91+ 9992908567</p>
  <p style="position:absolute;top:70px;left:300px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">E-mail:</p>
  <p style="position:absolute;top:92px;left:300px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">Abhishek11906997dulat@gmail.com</p>
  <p style="position:absolute;top:10px;left:700px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">Office-Address:</p>
  <p style="position:absolute;top:36px;left:700px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">Plot no. 18A<br>Law gate,<br>Phagwara, Punjab, India<br>144401</p>
   <p style="position:absolute;top:10px;left:970px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">It is private network<br>Please read all Terms and Conditions before Payment</p>
    <p style="position:absolute;top:70px;left:970px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">Web-site:</p>
     <p style="position:absolute;top:92px;left:970px;color:white;font-size:18px;font-family: Arial, Helvetica, sans-serif;">www.India_car_rental.com</p>
  <a href="https://www.gmail.com/mail/help/intl/en/about.html?utm_expid=..."><img src="email.png" alt="" style="position:absolute;width:30px;top:90px;left:10px;"></a>
  <a href="https://twitter.com/login"><img src="tw.png" alt="" style="position:absolute; top:90px;left:60px;"></a>
  <a href="https://www.facebook.com/?stype=lo&jlou=AfeolTKa9HuUTwkqgCpmVWGPFrqnMWQXcpo2GotkJZG3wIlYADZfsx2PkizaSkbqvsYRvKSfZpwWPBSumOfXRiaGIEjfpgBQ7xxUjrHSo6FMCQ&smuh=60324&lh=Ac96WsWa6NzQcHVY"><img src="fb.png" alt="" style="position:absolute;width:30px; top:90px;left:100px;"></a>
  <a href="https://www.instagram.com/accounts/login/?hl=en"><img src="insta.png" alt="" style="position:absolute;width:30px; top:90px;left:140px;"></a>

</div>




<script src="class_project_login.js">

</script>

</html>
