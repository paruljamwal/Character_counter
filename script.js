function showData(){
    let words = document.getElementById("words").value.length;
    let word = document.getElementById("words").value;
    let sentence = document.getElementById("words").value;
    word=word.match( /\w+/g );
    word=word.length;
    document.getElementById("show").innerHTML =`Total Character: ${words}` ;
    
    document.getElementById("word").innerHTML =`Total Words: ${word}` ;

    document.getElementById("sentence").innerHTML =`Sentence: ${sentence}` ;

    }