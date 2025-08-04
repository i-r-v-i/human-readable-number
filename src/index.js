module.exports = function toReadable(number) {
    const words = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let res = "";
    let hundred = " hundred ";
    const str = String(number);

    switch (true) {
        case number < 20:
            res = words[number];
            break;
        case number % 10 === 0 && number < 100:
            res = words[number];
            break;
        case number < 100:
            res = words[str[0] * 10] + " " + words[str[1]];
            break;
        case number % 100 === 0 && number < 1000:
            res = words[number / 100] + hundred;
            break;
        case number % 10 === 0 && number < 1000:
            res = words[str[0]] + hundred + words[str[1] * 10];
            break;
        case number % 100 < 20 && number < 1000:
            res =
                words[str[0]] +
                hundred +
                words[Number(str[1] * 10) + Number(str[2])];
            break;
        case number % 100 > 20 && number < 1000:
            res =
                words[str[0]] +
                hundred +
                words[str[1] * 10] +
                " " +
                words[str[2]];
            break;
        default:
            res = number + " more than 1000";
    }
    return res;
};

