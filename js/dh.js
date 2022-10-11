function dh(obj,trage,hs){
            
    clearInterval(obj.times);
obj.times= setInterval(function(){
    var hd=(trage-obj.offsetLeft)/10;
    hd=hd>0?Math.ceil(hd):Math.floor(hd);
        if(obj.offsetLeft==trage){
            clearInterval(obj.times);
    
            if(hs){
                 hs()
       }
        }
       obj.style.left= obj.offsetLeft+hd+'px';
      

    },20)

}