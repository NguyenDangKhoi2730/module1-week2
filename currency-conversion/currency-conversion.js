function convert(){
    var amount=document.getElementById("amount").value;
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var result;
    if (from=="VietNam"&&to=="USD") {
        result="Result: "+(amount/23000)+"$";
    } else if (from=="USD"&&to=="VietNam") {
        result="Result: "+(amount*23000)+"VND";
    } else if (from=="VietNam"&&to=="VietNam") {
        result="Result: "+amount+"VND";
    }
    else{ result="Result: "+amount+"USD"};
    document.getElementById("result").innerHTML=result;
}