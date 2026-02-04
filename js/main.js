const OpenBtn = document.querySelector("#menu-open");
const menuPanel = document.querySelector("#menu-panel");
const menuList = document.querySelectorAll(".menu-list li");
const closeBtn = document.querySelector("#menu-close");
// メニューを全体で使いまわすオプション
const menuOptions = {
    duration : 1800,
    easing : "ease",
    fill : "forwards"

};


// 開く処理
OpenBtn.addEventListener("click" , ()=>{

    menuPanel.animate({
        translate : ["100vw" , 0] //移動　x軸 100%→0%

    },
    
        menuOptions
    
    )
    // リストの内容を1つずつ表示
menuList.forEach((menuList,index) =>{
    menuList.animate(
        {
            opacity:[0,1],
            translate:["2rem" , 0]
        },
        {
            duration:2400,
            delay:500 * index,
            easing:"ease",
            fill:"forwards",
        }
    )

}
)
})
// 閉じる処理
closeBtn.addEventListener("click" , ()=>{
    menuPanel.animate({
        translate : [ 0 ,"100vw"], //移動　x軸 100%→0%

    },
    
        menuOptions
    
)
});


// const hour = Date.now().now.getSeconds();
// const imgChange = document.querySelector("#timeImage");

// if(hour >= 5 && hour < 12){
//     imgChange.src = "img/img/61305DCC6FCE971FE676B36782144510138429DA.png";
// } else if(hour >= 12 && hour <18){
//     imgChange.src = "img/img/DDDE600E8324780A9163FF451535236B1FECDC46.jpeg";
// } else{
//     imgChange.src= "img/img/B8571BDF95F0D0CB5FA95A4B470BD8970BBD0859.jpeg"
// }
// console.log(hour)
const imgChange = document.querySelector("#timeImage");

    function changeImage() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        imgChange.src = "img/img/61305DCC6FCE971FE676B36782144510138429DA.png";
    } else if (hour >= 12 && hour < 18) {
        imgChange.src = "img/img/DDDE600E8324780A9163FF451535236B1FECDC46.jpeg";
    } else {
        imgChange.src = "img/img/B8571BDF95F0D0CB5FA95A4B470BD8970BBD0859.jpeg";
    }
    }

// 最初に1回実行
changeImage();

// 4秒ごとに実行
setInterval(changeImage, 4000);