// The Magic Eight Ball

const userName = "Kamran Fazal";

// Ternary Expression

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

const userQuestion = "What is my nick name?";

console.log(`${userName} asked ${userQuestion}`);

// Generate Random Number 0 - 7

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = " ";

// control flow using switch statements

switch (randomNumber) {
	case 0:
		eightBall = "It is certain";
		break;

	case 1:
		eightBall = "It is decidedly so";

		break;

	case 2:
		eightBall = "Reply hazy try again";

		break;

	case 3:
		eightBall = "Cannot predict now";

		break;

	case 4:
		eightBall = "Do not count on it";

		break;

	case 5:
		eightBall = "My sources say no";

		break;

	case 6:
		eightBall = "Outlook not so good";

		break;

	case 7:
		eightBall - "Signs point to yes";

		break;
}

console.log(`The Magic Eight Ball says ${eightBall}`);
