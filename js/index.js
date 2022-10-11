window.addEventListener('load',function(){

var lbt=document.querySelector('.lbt');
var ul=lbt.querySelector('ul');
var ol=lbt.querySelector('ol');
var zuo=document.querySelector('#zuo');
var you=document.querySelector('#you');
var flag=true;
// 显示与隐藏左右箭头模块开始
lbt.addEventListener('mouseover',function(){

    zuo.style.display='block';
    you.style.display='block';
    clearInterval(timer);
    timer=null;

})
lbt.addEventListener('mouseout',function(){

    zuo.style.display='none';
    you.style.display='none';
    timer=setInterval(function(){
        you.click();
    },3000)

})
// 显示与隐藏左右箭头模块结束
// 动态生成小圆点模块开始
for(i=0;i<ul.children.length;i++){
    li=document.createElement('li');
    li.setAttribute('index',i);
    ol.appendChild(li);
    ol.children[0].style.backgroundColor='#000'
    // 动态生成小圆圈模块结束
    li.addEventListener('click',function(){

        for(i=0;i<ol.children.length;i++){
            ol.children[i].style.backgroundColor='#fff';
        }
        this.style.backgroundColor='#000'
        var index=this.getAttribute('index');
        num=index;
        sum=index;
        dh(ul,-index*lbt.offsetWidth);
        // 图片跟随小圆点滚动模块结束
    })
}
// 右侧箭头模块开始
var num=0;
var sum=0;
var first=ul.children[0].cloneNode(true);
ul.appendChild(first);
you.addEventListener('click',function(){
    if(flag){
        flag=false;
        if(num==ul.children.length-1){
            num=0;
            ul.style.left=0;
        }
    num++;
    dh(ul,-num*lbt.offsetWidth,function(){
        flag=true;
    });
    sum++;
    if(sum==ol.children.length){
        sum=0;
    }
    for(i=0;i<ol.children.length;i++){
        ol.children[i].style.backgroundColor='#fff';
    }
    ol.children[sum].style.backgroundColor='#000';
    
    }
})
// 右侧箭头模块结束
// 左侧箭头模块开始
zuo.addEventListener('click',function(){
    if(flag){
        flag=false;
        if(num==0){
            num=ul.children.length-1;
            ul.style.left=(ul.children.length-1)*lbt.offsetWidth;
        }
    num--;
    dh(ul,-num*lbt.offsetWidth,function(){
        flag=true;
    });
    sum--;
    if(sum<0){
        sum=ol.children.length-1;
    }
    for(i=0;i<ol.children.length;i++){
        ol.children[i].style.backgroundColor='#fff';
    }
    ol.children[sum].style.backgroundColor='#000';
    
    }
})
// 左侧按钮模块结束
// 定时器模块
var timer=setInterval(function(){
    you.click();
},3000)




})