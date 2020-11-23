

function divisibleByB(a, b) {
	for(i = a + 1; i > a; i++){
		if(i % b === 0){
			return i;
		}
	}
}


function toInt(str) {
	return Number(str)
}

function toStr(int) {
	return String(int)
}


function toInt(str) {
	return str * 1;
}

function toStr(int) {
	return `${int}`;
}

function toInt(str) {
	return str-""
}

function toStr(int) {
	return int+""
}

function toInt(str) {
	return parseInt(str)
}

function toStr(int) {
	return int.toString()
	
}


function getFilename(path) {
	if(path.lastIndexOf('/')==-1) return path;
	else return path.slice(path.lastIndexOf('/')+1);
	
}

class Name {
	constructor (fname, lname) {
		this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase()
		this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase()

this.fullname = `${fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase()} ${lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase()}`;
this.initials =  fname.charAt(0).toUpperCase()+'.'+lname.charAt(0).toUpperCase();
}
}


class Name {
	constructor(f, l) {
		this.fname = f[0].toUpperCase() + f.slice(1).toLowerCase();
		this.lname = l[0].toUpperCase() + l.slice(1).toLowerCase();
		this.fullname = `${this.fname} ${this.lname}`;
		this.initials = `${this.fname[0]}.${this.lname[0]}`;
	}
}


class User {
	static userCount=0;
    constructor(name){
        this.username = name;
        User.userCount++;
    }
}


function sweetestIcecream(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++){
	if(arr[i].flavor === 'Chocolate'){	
	 arr[i].flavor = 10;
	} else if(arr[i].flavor === 'Vanilla'){	
	 arr[i].flavor = 5;
	} else if(arr[i].flavor === 'ChocolateChip'){	
	 arr[i].flavor = 5;	
	} else if (arr[i].flavor === 'Plain'){	
	 arr[i].flavor = 0;
	} else if(arr[i].flavor === 'Strawberry'){	
	 arr[i].flavor = 10;
  }
 }
	for(let j = 0; j < arr.length; j++){
		newArr.push(arr[j].flavor + arr[j].numSprinkles)
	}
	return Math.max(...newArr)
}