function average(a,b,c){
  let sum = (a+b+c)/3
  console.log(sum)
}

average(1,2,3)


function min(d, e) {
  if (d < e) {
    console.log(d);
  } else {
    console.log(e);
  }

}
min(66,33)



let f = 99
let g = 5555
let exp;
  if (f < g) {
    exp = function(){
        console.log(f)
    };
  } else {
    exp = function(){
        console.log(g)
    };
  }

exp()






function countChar(star){
    let g = [...star];
    let counter = 0;
    for (let elem of g) {
	    if (elem === 'f') {
		    counter++;
	}
}
console.log(counter)
};

countChar("123fgfgaaaaa")





function countChar2(param){
    let g = [...param];
    let counter = {};
    for (let i of g) {
	    if (counter[i] === undefined) {
		counter[i] = 1;
	} else {
		counter[i]++;
	}
}
console.log(counter)
};

countChar2("NusupaevMirlan")