// JSON
var student = {
    name: 'Alex',
    age: 27,
    id: 1092317,
    isMale: true,
    add: function(a, b) {
        return a + b;
    },
    courses: ['CS', 'Physics'],
    characteristics: {
        eyes: 'brown',
        weight: 70
    },
    mark: 8.5
}

function showStudentName(student) {
    console.log(student.name);

    ///
}

function cloneStudent(student) {
    return {
        name: student.name,
        age: student.age,
        id: student.id
        // etc
    }
}

function hasSameName(student1, student2) {
    return student1.name == student2.name;//returns true or false
}

function passOrFail(student, pass, fail) {
    if(student.mark < 5) {
        fail(student);
    } else {
        pass(student);
    }
}

function passStudent(std) {

}

function failStudent(std) {

}

// JSON
var student0 = {
    name: 'Alex',
    age: 27,
    id: 1092317,
    isMale: true,
    add: function(a, b) {
        return a + b;
    },
    courses: ['CS', 'Physics'],
    characteristics: {
        eyes: 'brown',
        weight: 70
    },
    mark: 8.5
}

var student1 = { 
    fullName: 'Vlad',
    multiply: function(a, b) {
        return a * b;
    },
    courses: ['CS', 'Physics'],
    characteristics: {
        eyes: 'brown',
        weight: 70
    },
    mark: 8.5
}

passOrFail(student1, passStudent, failStudent);//undefined


