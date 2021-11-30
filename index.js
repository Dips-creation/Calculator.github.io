function cal(num){
    var inputRef = document.getElementById("input1");
    inputRef.value += num;
}
function result(){
    var inputRef = document.getElementById("input1");
    inputRef.value = eval(inputRef.value);

}
function clear(){
    var inputRef = document.getElementById("input1");
    inputRef.value = " " ;

}