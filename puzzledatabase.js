var puzzleNames = ["completely won","beginner 001","beginner 002","beginner 003","bombay","oprah ale","the drawing board",
                   "the impossible trap","true chess i","bishop town", "true chess iii","true chess ii","trap town",
                   "stalemate 001","stalemate 002","stalemate 003","mateinone 001","mateinone 002","mateinone 003",
                   "mateinone 004","mateinone 005","mateinone 006","mateinone 007","mateinone 008","mateinone 009",
                   "mateinone 010","mateinone 011","mateinone 012","mateinone 013","mateinone 014","mateinone 015",
                   "the drop of the atomic bomb","two pawns on the sixth or seventh rank beat a rook--not","boom!!",
                   "doomsday","r.i.p.","thank you, bishop on b2!","scorpion","true chess vi","crusher","do no harm",
                   "the long way around","snafu","acid","green light","fair trade","solitude","petrov's defense gone wrong",
                   "domination"];
var candidateName = prompt("Enter puzzle name");
for(i = 0; i<puzzleNames.length;i++) {
  if (candidateName = puzzleNames[i]) alert("Same");
  else alert("Not same");
}
