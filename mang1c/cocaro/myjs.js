 
     let b = document.getElementById("Carogame");
     let board = [];
     let data = "";
     for(let i =0;i<6;i++){
        board[i] = new Array(0,0,0,0,0,0);
     }
     for(let i =0;i<5;i++){
        data += "";
        for(let j=0;i<6;i++){
            data += board[i][j] + "&nbsp;&nbsp";
        }             
}
data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
        b.innerHTML = data;
        function changeValue(){

        }
        function changeValue(){

        }
function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i < 6; i++) {
        data += "<br/>";
        for (let j = 0; j < 6; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>" + data;
}