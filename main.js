// تحديد عنصر الشاشة الذي سيتم تحديثه
var countdownElement = document.getElementById('countdown');

// تحديد العداد التنازلي
var countdown;

// الوظيفة التي تبدأ العد التنازلي
function startCountdown() {
  // الحصول على القيمة المدخلة من input element
  var timeInput = document.getElementById('time-input');
  var minutes = timeInput.value;

  // التأكد من أن القيمة هي عدد صحيح
  if (isNaN(minutes) || minutes < 1) {
    alert('الرجاء إدخال عدد صحيح أكبر من الصفر!');
    return;
  }
// تحويل الدقائق إلى ثوانٍ
  var seconds = minutes * 60;
  
  // تحديد العداد التنازلي
  countdown = setInterval(function() {
    // تحويل الثواني إلى ساعات ودقائق وثوانٍ
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    // تنسيق الوقت كساعات ودقائق وثوانٍ
    var formattedTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + remainingSeconds).slice(-2);
    
    // تحديث عنصر الشاشة
    countdownElement.innerHTML = 'العد التنازلي: ' + formattedTime;

    // تفحص ما إذا كان الوقت قد انتهى
    if (seconds <= 0) {
      // إيقاف العداد التنازلي
      clearInterval(countdown);

      // تحديث عنصر الشاشة لإظهار الانتهاء
      countdownElement.innerHTML = 'انتهى الوقت!';
    }

    // تخفض الثواني بواحد
    seconds--;
  }, 1000);
}

// الوظيفة التي توقف العد التنازلي
function stopCountdown() {
  clearInterval(countdown);
}

// الوظيفة التي تعيد تعيين العد التنازلي
function resetCountdown() {
  clearInterval(countdown);
  countdownElement.innerHTML = 'العد التنازلي: 00:00:00';
  document.getElementById('time-input').value = '';
}

// تعيين حدث النقر على الزر "بدء" لبدء العد التنازلي
document.getElementById('start').addEventListener('click', startCountdown);

// تعيين حدث النقر على الزر "إيقاف" لإيقاف العد التنازلي
document.getElementById('stop').addEventListener('click', stopCountdown);

// تعيين حدث النقر على الزر "إعادة تعيين" لإعادة تعيين العد التنازلي
document.getElementById('reset').addEventListener('click', resetCountdown);
