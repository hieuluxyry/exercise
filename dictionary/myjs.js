function transcript(){
  let arr_english =["dog","cat","hello","love","game","sport"];
  let arr_vietnam =["chó","mèo","xin chào","yêu","trò chơi","thể thao"];
  let string =document.getElementById("string").value;
  let index_english = 0;
  let result ="";
  for(i=0;i<arr_english.length;i++){
    if(string==arr_english[i]){
        index_english = i;
        for(let j=0;j<arr_vietnam.length;j++){
            if(index_english==j){
                result = arr_vietnam[j];
            }
        }
    }
  }
  document.getElementById("result").innerHTML =result; 
}