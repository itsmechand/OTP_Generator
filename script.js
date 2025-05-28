let timerInterval;

function generateOTP() {
    clearInterval(timerInterval);

    const chars = '0123456789';
    let otp = '';

    for (let i = 0; i < 6; i++) {
        otp += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById('otpDisplay').textContent = otp;
    startTimer(30); // 30 seconds validity
}

function startTimer(seconds) {
    let timeLeft = seconds;
    const timer = document.getElementById('timer');
    timer.textContent = `Expires in: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = `Expires in: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('otpDisplay').textContent = 'EXPIRED';
            timer.textContent = 'OTP expired';
        }
    }, 1000);
}

function copyOTP() {
    const otp = document.getElementById('otpDisplay').textContent;
    if (otp && otp !== 'EXPIRED' && otp !== '------') {
        navigator.clipboard.writeText(otp).then(() => {
            alert('OTP copied to clipboard!');
        });
    }
}
