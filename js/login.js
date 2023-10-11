var login = document.querySelectorAll( '.login' )
for ( var i = 0; i < login.length; i++ )
{
    login[ i ].setAttribute( 'index', i );

    login[ i ].onclick = function ()
    {
        //当前 点击谁就获取谁的index
        var ind = this.getAttribute( 'index' )

        //先把所有的links的a的类名置空
        for ( var j = 0; j < login.length; j++ )
        {
            login[ j ].className = '';
            login[ ind ].className = 'active';
        }

        // var divs = document.getElementsByClassName( 'color' )
        var text = document.querySelectorAll( '.text' )

        for ( var k = 0; k < text.length; k++ )
        {
            text[ k ].style.display = 'none';
            text[ ind ].style.display = 'block'
        }
    }
}
// var input = document.querySelectorAll( 'input' )
var login1 = document.querySelector( '.login1' )
var phone = document.querySelector( '.phone' )
var phone1 = document.querySelector( '.phone1' )
var login2 = document.querySelector( '.login2' )

var mima = document.querySelector( '.mima' )
var send = document.querySelector( '.send' )
var yzm = document.querySelector( '.yzm' )

login1.addEventListener( 'click', function ()
{
    // 手机号验证
    var reg = /^[1-9]\d{10}$/;
    if ( phone.value == ' ' )
    {
        alert( '手机号不能为空' )
        return true
    } else if ( !reg.test( phone.value ) )
    {
        alert( '请正确输入手机号' )
        return true
    }

    //  密码验证
    if ( mima.value == "" )
    {
        alert( '密码不能为空' )
        return true;
    }

    if ( login1 )
    {
        console.log( getCookie( 'phone' ) );

        if ( phone.value != getCookie( 'phone' ) )
        {
            alert( '该手机号未注册，请先注册！' )

        } else if ( mima.value != getCookie( 'pwd' ) )
        {
            alert( '密码或用户名错误！' )

            // } else if
            //     ( input[ 2 ].value != getCookie( 'user' ) )
            // {
            //     alert( '密码或用户名错误！' )

        } else if ( phone.value == getCookie( 'phone' ) && mima.value == getCookie( 'pwd' ) )
        {
            alert( '密码正确' )
            // var form_ = document.querySelector('form')
            // form_.setAttribute("action", './index.html');
            location.href = ( "./index.html" )

        }

    } else
    {
        alert( '未注册，请重新注册！' )
    }
} )

// 验证登录
// 发送验证码
send.addEventListener( 'click', function ()
{
    // var reg = /^[1-9]\d{10}$/;
    if ( phone1.value != getCookie( 'phone' ) )
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
login2.addEventListener( 'click', function ()
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
    // if ( login2 )
    // {
    //     setCookie( 'phone', phone.value )
    //     // setCookie( 'user', input[ 3 ].value )
    //     setCookie( 'pwd', mima.value )
    // }


    alert( '登录成功！' )
    // var form_ = document.querySelector('form')
    // form_.setAttribute("action", './login.html');
    location.href = ( "../index.html" )

} )