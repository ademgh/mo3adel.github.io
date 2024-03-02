function show_result(){
    let ch = document.querySelector("#ch").value;
    let mo = document.querySelector("#mo").value;
    let ta = document.querySelector("#ta").value;

    let kol = (parseFloat(ch)+parseFloat(mo)+(parseFloat(ta)*2))/4
    document.querySelector(".kol").innerHTML = kol;
}
function show_result1(){
    let ch1 = document.querySelector("#ch1").value;
    let mo1= document.querySelector("#mo1").value;
    let ta1 = document.querySelector("#ta1").value;

    let kol1 = (parseFloat(ch1)+parseFloat(mo1)+(parseFloat(ta1)*2))/4
    document.querySelector(".kol1").innerHTML = kol1;
}
function show_result2(){
    let ch1 = document.querySelector("#ch2").value;
    let mo1= document.querySelector("#mo2").value;
    let ta1 = document.querySelector("#ta2").value;

    let kol2 = (parseFloat(ch1)+parseFloat(mo1)+(parseFloat(ta1)*2))/4
    document.querySelector(".kol2").innerHTML = kol2;
}