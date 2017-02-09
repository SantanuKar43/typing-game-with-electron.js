var time = 10;
var countdownInterval;

$(document).ready(function(){
  countdownInterval = setInterval(countdown,1000);
});

function countdown(){
  time-=1;
  $('#timer').animate({'font-size':'40px','opacity':'0'},500);
  $('#timer').animate({'font-size':'60px','opacity':'1'},500);
  if(time==0){
    $('#timer').html('Time Up');
    return clearInterval(countdownInterval);
    console.log('end');
  }
  $('#timer').html(time);

}
