var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// in type script you can define your type of variable or if you don't know 
// right now so you can put it any
var a = "10";
console.log("hello world");
var hi = " hi there";
var age = 433;
var lastName = "danishyar";
// function
// it's better to also give it the out put of your function type as well.
var getFullName = function (name, lastName) {
    return "This is the full name" + name + " " + lastName;
};
// it's better to don't right the javascript way so do the following
console.log(getFullName("Shirhussain", "Danishyar"));
// object
var user = {
    name: "shir",
    age: 20
};
var user2 = {
    name: "Elon",
    age: 40
};
var user3 = {
    name: "bill",
    age: 60,
    getUserMessage: function () {
        return "Hi there this is " + name + " i'm The founder of microsoft";
    }
};
// if id don't give it the age in the code bellow so it will get an error
// the good thing is in typescript you can just add ? mark in your variable
var user4 = {
    name: "Lary",
    // age: 50,
    getUserMessage: function () {
        return "i'm " + name + " eleson  and founder of Oracal ";
    }
};
console.log(user.age, user.name);
console.log(user4.age, user4.name);
;
var username = "Shirhussain";
// it cat take both type
var popularTags = ["love", "made in china"];
var madeInAfghanistanTag = "made in Afghanistan";
var pageName = "3";
var errorMessage = null;
var myUser = null;
var someProp;
// Void 
// in function if we don't return something so you have to user void
var dosomthing = function () {
    console.log("This is inside dosomething and void");
};
var another = undefined;
// any type in ts
// any is not a solution it's just a start of bigger problem
var nextbigthing = "what ever the funk you want";
// here it should give me the error but with the help of any id doesn't
console.log(nextbigthing.bar());
// never type 
var nextfunc = function () {
    // console.log("This is about never")
    // it give me the error but when i throw never inside the function
    // i don't get any error
    throw "never";
};
// unknown type 
var vAny = 10;
var vUnkown = 10;
var str1 = vAny;
// here i can pass vAny but not vUnknown
// let str2: string = vUnkown;
console.log(vAny.something());
// The samething gos here i can't use vUnkown
// console.log(vUnkown.something());
var str3 = vUnkown;
var pageNumber = "1";
// let numericPageNumber1: number = pageNumber;
// the above line doesn't work so all you need to do is change the type 
var numericPageNumber = pageNumber;
// I highly recommend you to stick to void and unknown
// and don't user any in any case
// if you are using any so convert it to something else
var mark = "100";
var myMark = mark;
// Dom element
// ts has a lot of type for DOM out of the box
var shirelement = document.querySelector('some string here');
// if i don't user as Html so i need to define the as any as well otherwise id don't
// const shirelement = document.querySelector('some string here') as HTMLInputElement;
// console.log("This is some element", shirelement.value);
// the line above give it to me some errors so what i need to do is 
// just use any
console.log("Some element", shirelement.value);
// console.log("Some element", shirelement.value);
shirelement.addEventListener("blur", function (event) {
    // console.log("event", event.target.value);
    // here i got error because i haven't identified the target
    var target = event.target;
    console.log("event", target.value);
});
// classes
// in typescript like java we have public and private
// if we don't specify the public or private in the class so
// it automatically will count as public
var Student = /** @class */ (function () {
    // or you can also use constructor in class
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    Student.prototype.changeUnChangableName = function () {
        // this.unchangeableName = "This is unchangeable"
    };
    Student.prototype.getStudentFullName = function () {
        return "The name of student is: " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
var student = new Student("Shirhussain", "Danishyar");
console.log(student.lastName + " " + student.lastName);
console.log(student.getStudentFullName);
var MyStudent = /** @class */ (function () {
    function MyStudent(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    MyStudent.prototype.changeUnchangableName = function () {
    };
    MyStudent.prototype.getStdFullName = function () {
        return this.firstName + this.lastName;
    };
    // static MaxAge = 70;
    // or sometime we can use static with readonly both
    MyStudent.MaxAge = 60;
    return MyStudent;
}());
var mystd = new MyStudent("Jeff", "besoz");
console.log(mystd.firstName);
console.log(mystd.lastName);
console.log(mystd.getStdFullName);
// console.log(mystd.MaxAge)
// here it doesn't work
//  interacting with Typescript //
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(MyStudent));
var admin = new Admin("Hu3in", "Danishyar");
console.log(admin.firstName);
console.log(admin.getStdFullName);
console.log(admin.lastName);
console.log(admin.changeUnchangableName);
// Generics in type script
// Big "T" is default name for generic
// we can use T as Data Type 
// all generic data type are written inside "<>"
// const addId = <T>(obj:T) => {
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var teacher = {
    name: "Mohammad",
    data: {
        meta: "something like foo"
    },
    meta: "bar"
};
var teacher2 = {
    name: "amir",
    data: ["some", "foo", "bar", "random", "thing"],
    meta: "next"
};
// const shirUser = {
//     name: "shir",
// }
// const result = addId(user);
// const result = addId<string>("some user");
// console.log("result", result)
var searchStr = "foo";
// const hasSearchString = any<string>((el:string)=> el.contains(searchStr)),([
//     "fooooooooo", 
//     "baaaaaaaar",
//     "Baaaaaaaz"
// ])
//  Enums
var statuses = {
    notStarted: 0,
    inPrograss: 1,
    done: 2
};
console.log(statuses.inPrograss);
// or also we can use it with enumerable
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["notStarted"] = "Not started";
    StatusEnum["inPrograss"] = "In prograss";
    StatusEnum["Done"] = "Done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.Done);
var notStartedStatus = StatusEnum.notStarted;
// notStartedStatus = "foo fooo foo", dosen't work
notStartedStatus = StatusEnum.inPrograss;
