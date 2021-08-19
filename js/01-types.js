var username = "instructor";
var password = "Letmein1234!";
var instructorID = 5;
// let password: string;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
// password = 1234;
var age = 40;
var currentYear = 2018;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var companyName;
companyName: "Eleven Fifty";
var appName = "Twitter";
appName: "Instagram";
var isLoggedIn = true;
var isGoldLevelUser = true;
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allScores = [100, 92, 95, 96];
console.log("Student List:", studentList[0]);
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//VOID
function sayHelloToAll() {
    console.log("Hello to All");
}
var undefinedVariable = undefined;
var nullVariable = null;
//Declare a tuple type
var usernameAndId;
//Initialize It
usernameAndId = [1, "kennisreally40"]; //OK
//usernameAndId = ["kenn26", 2]; ERROR
//ENUM
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
var x;
var y;
x = '1234';
x = 1234;
// x= true;
// y = false;
//# sourceMappingURL=01-types.js.map