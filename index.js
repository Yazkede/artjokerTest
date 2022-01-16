let arr = [];
let code;

function promo() {
	while (arr.length != 8 || arr.includes(NaN) || arr.includes('')) {
		code = prompt("Введите промокод, состоящий из 8 цифр");
		arr = ("" + code).split("").map(Number);
	}
	if (condition2() !== true && condition1() !== true) {
		if (condition3() !== true) {
			alert('Ваш бонус 0. Промокод недействителен.');
		}
	}
}

function condition1() {
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 == 0)
			&& ((arr[i + 3] % 2 != 0 && arr[i + 4] % 2 != 0 && arr[i + 3] >= arr[i + 4])
				|| (arr[i + 4] % 2 != 0 && arr[i + 5] % 2 != 0 && arr[i + 4] >= arr[i + 5])
				|| (arr[i + 5] % 2 != 0 && arr[i + 6] % 2 != 0 && arr[i + 5] >= arr[i + 6])
				|| (arr[i + 6] % 2 != 0 && arr[i + 7] % 2 != 0 && arr[i + 6] >= arr[i + 7]))) {
			alert('Ваш бонус 1000');
			return true;
		}
	}
}

function condition2() {
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 == 0 && arr[i + 1] > arr[i])
			&& ((arr[i + 3] % 2 != 0 && arr[i + 4] % 2 != 0 && arr[i + 4] > arr[i + 3])
				|| (arr[i + 4] % 2 != 0 && arr[i + 5] % 2 != 0 && arr[i + 5] > arr[i + 4])
				|| (arr[i + 5] % 2 != 0 && arr[i + 6] % 2 != 0 && arr[i + 6] > arr[i + 5])
				|| (arr[i + 6] % 2 != 0 && arr[i + 7] % 2 != 0 && arr[i + 7] > arr[i + 6]))) {
			alert('Ваш бонус 2000');
			return true;
		}
	}
}

function condition3() {
	let sumEven = 0;
	let sumOdd = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEven += arr[i];
		}
		if (arr[i] % 2 != 0) {
			sumOdd += arr[i];
		}
	}
	if (sumEven > sumOdd) {
		alert('Ваш бонус 100');
		return true;
	}
}

promo();