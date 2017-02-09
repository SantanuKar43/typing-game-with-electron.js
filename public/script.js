var time = 41;

$(document).ready(function(){
  countdownInterval = setInterval(countdown,1000);
});

function countdown(){
  $('#timer').animate({'font-size':'40px','opacity':'0'},400);
  time-=1;
  $('#timer').animate({'font-size':'60px','opacity':'1'},600);
  $('#timer').html(time);
  if(time==0) clearInterval(countdownInterval);
}
