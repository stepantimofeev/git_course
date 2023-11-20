//1




let arr1 = ['1 ', '2 ', '3 ', '32344 ', '553 ', '6 ', '7 ', '8 ', '9 ', '105 '];


let bd = document.querySelector('#ul1');

for (let i = 0; i < 1; i++) {
    let ul = document.createElement('ul');

    for (let elem of arr1) {
        let li = document.createElement('li');

        li.textContent = elem;
        ul.appendChild(li);
    }

    bd.appendChild(ul);

	let lis = document.querySelectorAll('#ul1 li');

	for (let li of lis) {
		let span = document.createElement('span');
		span.textContent = li.textContent;
		li.textContent = '';
		li.appendChild(span)

	    let remove = document.createElement('a');
	    remove.href = '';
	    remove.textContent = 'remove';

	    li.appendChild(remove);

	    remove.addEventListener('click', function(event) {
	        li.remove(); 
	        event.preventDefault();
	    });

		let crs = document.createElement('p');
		
		crs.textContent = 'перечеркнуть';
		li.appendChild(crs);
	
		crs.addEventListener('click', function() {
			span.style.textDecoration = 'line-through';
			crs.remove(); 
		});
	}

	let lispan = document.querySelectorAll('#ul1 li span');

	for (let li of lispan) {
		li.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = li.textContent;
			
			li.textContent = '';
			li.appendChild(input);
			
			input.addEventListener('blur', function() {
				li.textContent = this.value;
				li.addEventListener('click', func);
			});
	
			li.removeEventListener('click', func);
		});
	}

	let input = document.createElement('input');
	input.addEventListener('blur', function() {
		let li = document.createElement('li');
		li.classList.add('newli');

        li.textContent = input.value;
        ul.appendChild(li);

		let lisnew = document.querySelectorAll('.newli');

		for (let li of lisnew) {
			let span = document.createElement('span');
			span.textContent = li.textContent;
			li.textContent = '';
			li.appendChild(span)
	
			let remove = document.createElement('a');
			remove.href = '';
			remove.textContent = 'remove';
	
			li.appendChild(remove);
	
			remove.addEventListener('click', function(event) {
				li.remove(); 
				event.preventDefault();
			});
	
			let crs = document.createElement('p');
			
			crs.textContent = 'перечеркнуть';
			li.appendChild(crs);
		
			crs.addEventListener('click', function() {
				span.style.textDecoration = 'line-through';
				crs.remove(); 
			});
		}
	
		let newlispan = document.querySelectorAll('.newli span');
	
		for (let li of newlispan) {
			li.addEventListener('click', function func() {
				let input = document.createElement('input');
				input.value = li.textContent;
				
				li.textContent = '';
				li.appendChild(input);
				
				input.addEventListener('blur', function() {
					li.textContent = this.value;
					li.addEventListener('click', func);
				});
		
				li.removeEventListener('click', func);
			});
		}
		
    });

    bd.appendChild(input);
}



let table = document.querySelector('#table');
let users = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of users) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	
	table.appendChild(tr);
}

let tds = document.querySelectorAll('.tablediv td');

for (let td of tds) {
	td.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = td.textContent;
		
		td.textContent = '';
		td.appendChild(input);
		
		input.addEventListener('blur', function() {
			td.textContent = this.value;
			td.addEventListener('click', func);
		});

		td.removeEventListener('click', func);
	});
}

let trs2 = document.querySelectorAll('.tablediv tr');

for (let tr of trs2) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';

	tr.appendChild(remove);

	remove.addEventListener('click', function(event) {
		tr.remove(); 
		event.preventDefault();
	});
}

let table_input = document.querySelector('.tablediv');

let inputs = document.createElement('input');
table_input.appendChild(inputs);

let inputa = document.createElement('input');
table_input.appendChild(inputa);

let inputp = document.createElement('input');
table_input.appendChild(inputp);

let btnx = document.createElement('button');
btnx.textContent = 'click';
table_input.appendChild(btnx);

btnx.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = inputs.value;
	td1.classList.add('new');
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = inputa.value;
	td2.classList.add('new');
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = inputp.value;
	td3.classList.add('new');
	tr.appendChild(td3);
	
	table.appendChild(tr);

	let tdsnew = document.querySelectorAll('.new');

	for (let td of tdsnew) {
		td.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = td.textContent;

			td.textContent = '';
			td.appendChild(input);

			input.addEventListener('blur', function() {
				td.textContent = this.value;
				td.addEventListener('click', func);
			});

			td.removeEventListener('click', func);
		});
	}
});





let table2 = document.querySelector('#table2');
let usersv = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of usersv) {
	let tr = document.createElement('ul');
	
	let td1 = document.createElement('li');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('li');
	td2.textContent = user.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('li');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	
	table2.appendChild(tr);
}


let tdsb = document.querySelectorAll('#table2 li');

for (let td of tdsb) {
	td.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = td.textContent;
		
		td.textContent = '';
		td.appendChild(input);
		
		input.addEventListener('blur', function() {
			td.textContent = this.value;
			td.addEventListener('click', func);
		});

		td.removeEventListener('click', func);
	});
}

let tdli = document.querySelectorAll('#table2 ul');

for (let ul of tdli) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';

	ul.appendChild(remove);

	remove.addEventListener('click', function(event) {
		ul.remove(); 
		event.preventDefault();
	});
}

let tablemm = document.querySelector('.tablediv2');

let inputs1 = document.createElement('input');
tablemm.appendChild(inputs1);

let inputa1 = document.createElement('input');
tablemm.appendChild(inputa1);

let inputp1 = document.createElement('input');
tablemm.appendChild(inputp1);

let btnx1 = document.createElement('button');
btnx1.textContent = 'click';
tablemm.appendChild(btnx1);

btnx1.addEventListener('click', function() {
	let ul = document.createElement('ul');
	
	let td1 = document.createElement('li');
	td1.textContent = inputs1.value;
	td1.classList.add('new1');
	ul.appendChild(td1);
	
	let td2 = document.createElement('li');
	td2.textContent = inputa1.value;
	td2.classList.add('new1');
	ul.appendChild(td2);
	
	let td3 = document.createElement('li');
	td3.textContent = inputp1.value;
	td3.classList.add('new1');
	ul.appendChild(td3);
	
	table2.appendChild(ul);

	let tdsnew1 = document.querySelectorAll('.new1');

	for (let td of tdsnew1) {
		td.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = td.textContent;

			td.textContent = '';
			td.appendChild(input);

			input.addEventListener('blur', function() {
				td.textContent = this.value;
				td.addEventListener('click', func);
			});

			td.removeEventListener('click', func);
		});
	}
});