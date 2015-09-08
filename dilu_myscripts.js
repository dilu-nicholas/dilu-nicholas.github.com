// JavaScript Document
function reciprocal() {
	if(this.resultsCurrent != "") {
		this.resultsCurrent = (1/parseFloat(this.resultsCurrent)) + "";
		this.updateResults();
	}
}


function f_x_sqr() {
	with(document.calc) {
		x.value = x.value * x.value;
	}
	keynum = 0;
}

function c(val) {
 document.getElementById("d").value=val;
}

function v(val) {
	document.getElementById("d").value+=val;
}

function e() { 
    try { 
        c(eval(document.getElementById("d").value)) 
    } 
    catch(e) {
        c('Error')
		} 
}
