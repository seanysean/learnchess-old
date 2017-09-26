var puzzleNames = ["completely won","beginner 001","beginner 002","beginner 003","bombay","oprah ale","the drawing board",
                   "the impossible trap","true chess i","bishop town", "true chess iii","true chess ii","trap town",
                   "stalemate 001","stalemate 002","stalemate 003","mateinone 001","mateinone 002","mateinone 003",
                   "mateinone 004","mateinone 005","mateinone 006","mateinone 007","mateinone 008","mateinone 009",
                   "mateinone 010","mateinone 011","mateinone 012","mateinone 013","mateinone 014","mateinone 015",
                   "the drop of the atomic bomb","two pawns on the sixth or seventh rank beat a rook--not","boom!!",
                   "doomsday","r.i.p.","thank you, bishop on b2!","scorpion","true chess vi","crusher","do no harm",
                   "the long way around","snafu","acid","green light","fair trade","solitude","petrov's defense gone wrong",
                   "domination","the battery explodes"];
var candidateName = prompt("Enter puzzle name").toLowerCase();
var smashedName, distant;
var output = document.getElementById("output");
var looping = true;
for(i = 0; i < puzzleNames.length; i++) {
  distant = puzzleNames[i].replace(/[^a-z]/g,"");
  smashedName = candidateName.replace(/[^a-zA-Z]/g,"");
  console.log(distant);
  if (puzzleNames[i] === candidateName) {
    output.innerHTML = `<a target="_blank" href="https://learnchess.neocities.org/puzzles/${i + 1}.html">Duplicate found</a>`;
    looping = false;
  }
  else if(smashedName === distant) {
    output.innerHTML = `<a target="_blank" href="https://learnchess.neocities.org/puzzles/${i + 1}.html">Distant duplicate found</a>`;
    looping = false;
  }
  else if (looping) {
    output.innerHTML = "No puzzle found with that name";
    console.log("Candidate " + candidateName);
  }
}
