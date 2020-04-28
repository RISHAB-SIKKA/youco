    let area = document.querySelectorAll('#gs-btn');
    let btns = document.querySelectorAll('.gs-button');
    btns = Array.from(btns);
    area = Array.from(area);

    function pressed( btn ){
        area.forEach((ele,index)=>{
            if(index == btn+1){
                ele.style.zIndex ="1";
                ele.style.height="89vh";
                ele.style.opacity="1";
            }
            else{
                ele.style.zIndex="0";
                ele.style.height="0";
                ele.style.opacity="0";
            }
        });
        btns.forEach((ele,index)=>{
            if(index == btn+1){
            ele.style.background = "#1ba94c";
            ele.style.color = "#eee";
            }else{
                ele.style.background = "none";
                ele.style.color = "#39424e";
            }
        });
    }
