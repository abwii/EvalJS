function sentenceSearcher(phrase, mot){
    const phrases = phrase.split(".");
    let resulat = "";
    let tab = [];

    phrases.forEach(element => {
        if(element.toLowerCase().includes(mot.toLowerCase())){
            resulat = `"${element.trim() + "."}"`;
            tab.push(resulat);
        }
    });

    if(tab.length > 0){
        return tab[0];
    } else{
        return "";
    }
}

const str = "I have a cat. I have a mat. Things are going swell.";

console.log(sentenceSearcher(str, "have"));  
console.log(sentenceSearcher(str, "MAT"));
console.log(sentenceSearcher(str, "things"));
console.log(sentenceSearcher(str, "flat"));