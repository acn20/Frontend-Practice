var list = [];
list.push(1);
list.push(2);

// [1, 2] de ce ai declarat aici var list si nu doar list? ca parca var era pt variabile locale, din interiorul functiilor
// var e pt orice tip de variabila. fara var declara o variabila globala.
function addAll(n) {
    if(n < 0) {
        throw new Error("n cannot be negative.");
    }

    if(n == 0) {
        return [0];
    }

    var array = [];

    for(var i = 0; i < n; i++) {
        array.push(i);
    }

    return array;
}

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var combined = array1.concat(array2); // [1, 2, 3, 4, 5, 6]

function addAllRecursive(n) {
    if(n < 0) {
        throw new Error("n cannot be negative.");
    }

    if(n == 0) {
        return [0];
    }

    return addAllRecursive(n-1).concat([n]); 
}

function countElements(list) {
	if(!Array.isArray(list) || !list.length) {
		throw new Error('list cannot be null.');
	}

	if(list.length == 1) {
		var key = list[0];

		return {
			key: 1
		}

		// de ex { 7: 1 }
	}
	
	var counter = {

	};

	// [7, 5, 3, 3, 4, 7, 7]
	for(var i = 0; i < list.length; i++) {
		var element = list[i];

		if(counter[element]) {
			counter[element]++;
		} else {
			counter[element] = 1;
		}
	}
	
	return counter;// countElements([1,2,4,2,1,1])
//{1: 3, 2: 2, 4: 1} dia, dar de ce nu sunt unele sub altele? pai si eu daca vreau sa afisez in site cu spatiu?
// 0 == 0 -> true
// "" == "" -> true
// [] == [] -> false...de ce nu le repara nimeni?

//cum poate sa-ti dea null?
// puteam sa scriu si cu cu cuvantul null?
// 	if("") {
// 		console.log('write me if this is true');
// 	} else {
// 		console.log('write me if previous is false')
// 	}
// //aaa deci daca conditia din if e false imi executa doar else? da
// 	// truthy sau falsy
// 	// 0 -> false
// 	// orice altceva -> true

// 	// null
// 	// 00000000000000000000000000000 -> false, 0, null
// //nu se opoate ca in memorie sa fie loc gol fara 0 fara nimic? ala cum se numeste??
// 	// 00000000000000000000000000000 -> null
// 	// 00000000000000100001000010001 -> "" - false
// 	// 00000000000000000000000000000 -> null
// 	// [] = true
// //pai si atunci de unde stii ca e string??? daca nu exista //nu prea inteleg diferenta intre gol si nu exista, din mom ce in memorie ai zis ca tot exista
// 	if(text) {
// 		console.log('this is true');
// 	}



    //sau de exemplu if(16) 
		
}