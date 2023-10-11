var send = document.querySelector( '.send' )
var yzm = document.querySelector( '.yzm' )
var phone = document.querySelector( '.phone' )
var mima = document.querySelector( '.mima' )
var mima1 = document.querySelector( '.mima1' )

var submit = document.querySelector( '.submit' )
// 发送验证码
// 发送验证码
send.addEventListener( 'click', function ()
{
    // var reg = /^[1-9]\d{10}$/;
    if ( phone.value != getCookie( 'phone' ) )
    {
        alert( '请输入已注册手机号' )
        return true
    } else
    {
        var i = 60;
        var timer;

        clearInterval( timer );
        timer = setInterval( function ()
        {
            i--;
            send.innerHTML = i + '秒后重新发送';
            if ( i == 0 )
            {
                send.innerHTML = '重新获取验证码';
                send.disabled = false
            } else
            {
                send.disabled = true
            }

        }, 1000 )
        num = parseInt( Math.random() * 10000 )
        setTimeout( function ()
        {
            alert( num )
            console.log( num );
        }, 6000 )

    }
} )

submit.addEventListener( 'click', function ()
{


    // 数字验证
    if ( yzm.value == num )
    {
    } else if ( yzm.value == '' )
    {
        alert( '数字验证不能为空' )
        return true
    } else
    {
        alert( '数字验证码错误' )
        return true
    }
    // // 密码验证
    if ( mima.value == "" )
    {
        alert( '密码不能为空' )
        return true;
    }
    //两次密码输入不一致
    else if ( mima.value != mima1.value )
    {
        alert( '两次密码不一致' )
        return true;
    }

    //  向cookie存值
    if ( submit )
    {
        setCookie( 'phone', phone.value )
        // setCookie( 'user', input[ 3 ].value )
        setCookie( 'pwd', mima.value )
    }


    alert( '密码修改成功！' )
    // var form_ = document.querySelector('form')
    // form_.setAttribute("action", './login.html');
    location.href = ( "../login.html" )

} )