var num=[]; //Declare an array
num.push(prompt("Enter the first number")); // Prompt user to enter three numbers. The variables can also be assigned as num[0]=5;
num.push(prompt("Enter the second number"));
num.push(prompt("Enter the third number"));

console.log("The numbers you entered are:"); //Print the numbers entered
for(i=0;i<num.length;i++){
console.log(num[i]);
}

	if(num[0]>num[1] && num[0]>num[2]){ //Check condition for the greatest number
	greatest=num[0];
	console.log("The greatest among the entered values is " + greatest);
	}

	else if(num[1]>num[0] && num[1]>num[2]){
	greatest=num[1];
	console.log("The greatest among the entered values is " + greatest);
	}

	else if (num[2]>num[0] && num[2]>num[1]){
	greatest=num[2];
	console.log("The greatest among the entered values is " + greatest);
}
	