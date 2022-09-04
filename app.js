function isEvenOdd(){
    let Num1 = Number(document.querySelector("#num1").value);
    let result = Num1%2;

    console.log("\nnum1: ", Num1, "\nResult: ", result);
    document.querySelector("#result").value = result;
}