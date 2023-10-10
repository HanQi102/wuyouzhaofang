var send = document.querySelector( '.send' )
var yzm = document.querySelector( '.yzm' )
var phone = document.querySelector( '.phone' )
var mima = document.querySelector( '.mima' )
var register = document.querySelector( '.register' )
// 发送验证码
send.addEventListener( 'click', function ()
{
    var reg = /^[1-9]\d{10}$/;
    if ( phone.value == ' ' )
    {
        alert( '手机号不能为空' )
        return true
    } else if ( !reg.test( phone.value ) )
    {
        alert( '请正确输入手机号' )
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

register.addEventListener( 'click', function ()
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
        alert( '数字验证错误' )
        return true
    }


    //  向cookie存值
    if ( register )
    {
        setCookie( 'phone', phone.value )
        // setCookie( 'user', input[ 3 ].value )
        setCookie( 'pwd', mima.value )
    }


    alert( '注册成功！' )
    // var form_ = document.querySelector('form')
    // form_.setAttribute("action", './login.html');
    location.href = ( "../login.html" )

} )