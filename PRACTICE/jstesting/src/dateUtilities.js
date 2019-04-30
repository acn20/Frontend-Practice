function getDaysToChristmas(dateService) {
    var today = dateService.getDate();

    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    var leftDaysToChristmas = 0;

    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)) {
        monthDays[1] = 29;
    }

    if (day <= 25 && month + 1 == 12) {
        return (25 - day);
    }

    if (month == 11 && day > 25) {
        leftDaysToChristmas = 31 - day + 1 + 334 + 24;
        if (isLeapYear(year + 1)) {
            leftDaysToChristmas++;
        }

        return leftDaysToChristmas;
    }

    for (var i = month + 1; i < 11; i++) {
        leftDaysToChristmas += monthDays[i];
    }

    leftDaysToChristmas += 24;//December days
    leftDaysToChristmas += monthDays[month] - day + 1;//days from the current month

    return leftDaysToChristmas;
}

function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
        }
        else {
            return true;
        }
    }

    return false;
}

function getDaysToChristmas2(dateService) {
    var today = dateService.getDate();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var leftDaysToChristmas = 0;
    var leftDays = 0;

    if (month == 12 && day <= 25) {
        return (25 - day);
    }

    var monthDays = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];//months counted starting with December

    if(month == 12 && day > 25) {
        if (isLeapYear(year + 1)) {
            monthDays[2] = 29;
        }
    }

    if(month == 1 || month == 2) {
        if (isLeapYear(year)) {
            monthDays[2] = 29;
        }
    }

    if (month == 12) {
        month = 0;
    }

    for (var i = month; i <= 11; i++) {
        leftDays += monthDays[i];
    }

    if (day < 25) {
        leftDaysToChristmas = leftDays + (25 - day);
    }

    else {
        leftDaysToChristmas = leftDays - (day - 25);
    }

    return leftDaysToChristmas;
}