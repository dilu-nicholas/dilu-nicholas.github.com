// JavaScript Document

function f_inv_x() {
	$("#d").val(1/parseInt($("#d").val()));
}

function f_x_sqr() {
    document.getElementById("d").value =  document.getElementById("d").value * document.getElementById("d").value
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
