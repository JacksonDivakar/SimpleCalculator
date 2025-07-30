function start(){
    let val1=Number(document.getElementsByName("val1")[0].value)
    let val2=Number(document.getElementsByName("val2")[0].value)
    let val3=String(document.getElementsByName("val3")[0].value)
    let val4=0;
    switch(val3){
        case "+":
            val4=val1+val2;
            break
        case "-":
            val4=val1-val2;
            break
        case "*":
            val4=val1*val2;
            break
        case "/":
            val4=(val1/val2);
            val4=val4.toFixed(2);
            break
                                

    }
     hi.innerHTML=val4;
    
}

