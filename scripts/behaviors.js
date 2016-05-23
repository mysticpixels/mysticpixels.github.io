/*==========================================
=            The behavior layer            =
==========================================*/

/*----------  functions  ----------*/
function greetUser(){
	var greetingPlaceholder=document.querySelector('h1');
	var timeofDay= new Date();
	if (timeofDay.getHours() > 12)
		greetingPlaceholder.innerHTML="Good afternoon";
	if (timeofDay.getHours() < 12)
		greetingPlaceholder.innerHTML="Good Morning";
	if (timeofDay.getHours() > 16)
		greetingPlaceholder.innerHTML="Good Evening";
}

/*----------  where all the fun triggers ;)  ----------*/
greetUser();