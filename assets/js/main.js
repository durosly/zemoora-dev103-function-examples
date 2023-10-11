// function eval(x) {
// 	const result = (cube(x) + 7) / 6;
// 	return result;
// }

// function cube(y) {
// 	return y * y * y;
// }

// for (let i = 1; i <= 10; i++) {
// 	console.log(i, eval(i));
// }

/* write a function to convert celcius to fahrenheit */
function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

// print fahrenheit for 0C to 100C
// for (let temp = 0; temp < 101; temp++) {
// 	const tempInF = celsiusToFahrenheit(temp);
// 	console.log(`${temp} celcius = ${tempInF} fahrenheit`); // string literal
// }

/* write a function that calculates the area of a right angled triangle */
function calcTriangleArea(a, b) {
	const area = (1 / 2) * a * b;
	console.log("area", area);
}

// calcTriangleArea(4, 5);

/* write a function that calculates the perimeter and area of a circle */
function calcCirclePerimeterAndArea(radius) {
	const perimeter = 2 * Math.PI * radius;
	const area = Math.PI * Math.pow(radius, 2);

	console.log(perimeter, area);
}

// calcCirclePerimeterAndArea(10);

/* Write a function to generate a random number within an interval */

function generateRandom(start, end) {
	const scale = end - start;
	const rand = Math.round(Math.random() * scale + start);

	return rand;
}

const random = generateRandom(20, 20);
console.log(random);
