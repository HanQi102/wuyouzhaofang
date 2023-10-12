var num = 0;
dian.onclick = function () {
    var i = 60;
    var timer;

    clearInterval(timer);
    timer = setInterval(function () {

        i--;
        dian.innerHTML = i + '秒后重新发送';
        if (i == 0) {
            dian.innerHTML = '重新获取验证码';
            dian.disabled = false
        } else {
            dian.disabled = true
        }

    }, 1000)
    num = parseInt(Math.random() * 10000)
    setTimeout(function () {
        alert(num)
    }, 1000)
}
// var submit = document.querySelector('#submit')
var zhuce = document.querySelector('.zhuce')
var phone = document.querySelector('.phone')
var pwd = document.querySelector('.pwd')
zhuce.onclick = function () {
    var inp = document.querySelectorAll('.inp')
    // 手机号验证
    var reg = /^[1-9]\d{10}$/;
    if (inp[0].value == ' ') {
        alert('手机号不能为空')
        return true
    } else if (!reg.test(inp[0].value)) {
        alert('请正确输入手机号')
        return true
    }
    // 数字验证
    if (inp[1].value == num) {
    } else if (inp[1].value == '') {
        alert('数字验证不能为空')
        return true
    } else {
        alert('数字验证错误')
        return true
    }

    // // 密码验证
    if (inp[2].value == "") {
        alert('密码不能为空')
        return true;
    }

    //  向cookie存值
    if (zhuce) {
        setCookie('phone', inp[0].value)
        setCookie('pwd', inp[2].value)
    }

    alert('注册成功！')
    location.href = ("./wodeyemian.html")
}

