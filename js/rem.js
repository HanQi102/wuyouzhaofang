
// (function () {
//     var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
//     var timeoutId;
//     function setRem() {
//         var clientWidth = document.documentElement.clientWidth;
//         var nowPX = clientWidth / 320 * 100;
//         document.documentElement.style.fontSize = nowPX + 'px';
//     }
//     setRem();
//     window.addEventListener(supportsOrientationChange, function () {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(function () {
//             setRem();
//         }, 300);
//     }, false);
// })();
//动态配置rem
// 默认1rem=10px
function setRem() {
    var uiWidth = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.querySelector('html')
    // 修改10  更改rem和px的比例
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px'
}
window.onresize = setRem;
window.onload = setRem;