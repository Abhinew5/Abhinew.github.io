var names =new Array();
names[0]="Yaak";
names[1]="John";
names[2]="Jan";
names[3]="Jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="Paula";
names[8]="Yoke";
names[9]="jim";

for (var i =0; i<names.length; i++){
	if(names[i].chartAt=='J'| names[i].chartAt=='j'){
	console.log("Goodbye " + names[i])
}
else {
console.log("Hello " + names[i])
}
}