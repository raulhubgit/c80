var nome_games = [];
function submit(){
    var name1 = document.getElementById("nome1").value;
    var name2 = document.getElementById("nome2").value;
    var name3 = document.getElementById("nome3").value;
    var name4 = document.getElementById("nome4").value;

    nome_games.push(name1);
    nome_games.push(name2);
    nome_games.push(name3);
    nome_games.push(name4);

    console.log(nome_games);
    document.getElementById("displayName").innerHTML = nome_games;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}
function sorting(){
nome_games.sort();
console.log(nome_games);
document.getElementById("displayName").innerHTML = nome_games;
}
function finding()
{

    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<nome_games.length; j++)
    {

        if(s==nome_games[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="nome encontrado "+found+"vez(es)";
    console.log("nome encontrado "+found+"vez(es)");

}