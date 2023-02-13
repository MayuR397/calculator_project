 var expression="";



function getNumber(n){
    expression=expression+n;
    console.log(expression)
    document.getElementById("showData").value = expression;
}

function clr(){
    expression="";
    document.getElementById("showData").value =""
}

function cal(){

    if(expression.length > 0){
        let res=eval(expression);
        document.getElementById("showData").value = res;
    }
    else{
        let data = document.getElementById("showData");
        data.value = eval(data.value);
    }
    
    expression="";
}

