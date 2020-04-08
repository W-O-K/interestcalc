//array of objects
var data = [
	{
		 "principal": 2500,
		"time": 1.8

	},
	{
		"principal": 1000,
		"time": 5
	},
	{
		"principal": 3000,
		"time": 1
	},
	{
		"principal": 2000,
		"time": 3
	}
	];

//function for calculation
function interestCalculator(arr){
let interestData = [...arr];
  for (let i = 0; i < arr.length; i++) {
if (arr[i].principal >= 2500 && arr[i].time > 1 && arr[i].time < 3){
  interestData[i].rate = 3; 
  interestData[i].interest =(interestData[i].principal * interestData[i].time * interestData[i].rate) / 100;
} else if (arr[i].principal >= 2500 && arr[i].time >= 3){
  interestData[i].rate = 4; 
  interestData[i].interest =(interestData[i].principal * interestData[i].time * interestData[i].rate) / 100;
}else if (arr[i].principal < 2500 && arr[i].time <= 1){
  interestData[i].rate = 2; 
  interestData[i].interest =(interestData[i].principal * interestData[i].time * interestData[i].rate) / 100; 
} else {
	interestData[i].rate = 1; 
  interestData[i].interest =(interestData[i].principal * interestData[i].time * interestData[i].rate) / 100;
}

}
	console.log(interestData);
	return interestData;
	}

interestCalculator(data);