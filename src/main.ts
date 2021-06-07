// in type script you can define your type of variable or if you don't know 
// right now so you can put it any
const a= "10";
console.log("hello world")

const hi:string = " hi there";

let age:number = 433

let lastName: any = "danishyar"


// function

// it's better to also give it the out put of your function type as well.
const getFullName = (name:string, lastName:string): string =>{
    return "This is the full name"+ name +" " + lastName;
};

// it's better to don't right the javascript way so do the following
console.log(getFullName("Shirhussain", "Danishyar"));




// object
const user:{name:string; age:number;}={
    name: "shir",
    age: 20
}


const user2:{name:string; age: number;}= {
    name: "Elon",
    age: 40,
}

// its better to write the above code like the following
// function inside our interface user

// if you found some conflict in your naming with user or with class 
// all you need to do is change the name i.e: User to IUser
interface IUser{
    name: string;
    age?: number;
    getUserMessage():string;
}

const user3: IUser = {
    name: "bill",
    age: 60,
    getUserMessage(){
        return "Hi there this is "+name+" i'm The founder of microsoft"
    },
};

// if id don't give it the age in the code bellow so it will get an error
// the good thing is in typescript you can just add ? mark in your variable
const user4: IUser={
    name: "Lary",
    // age: 50,
    getUserMessage(){
        return "i'm "+ name+ " eleson  and founder of Oracal "
    },
};


console.log(user.age, user.name)
console.log(user4.age, user4.name)


// combine data type 
// if you wanna make it human readable so give it a type name in the beginning
// type alice is and union
type ID = string;
type PopularTag = string;
// type MaybePopularTag = PopularTag | null
type MaybePopularTag = string | null

interface UserInterface {
    id: ID;
    name: string;
    lastName: string;
};

let username:string = "Shirhussain";

// it cat take both type
const popularTags: PopularTag[] = ["love", "made in china"];
const madeInAfghanistanTag: MaybePopularTag = "made in Afghanistan";
let pageName:string | number = "3"
let errorMessage: string | null = null

let myUser: UserInterface | null = null

let someProp: string | number | null | undefined | string[] | object;

// Void 

// in function if we don't return something so you have to user void
const dosomthing = (): void =>{
    console.log("This is inside dosomething and void")
}

let another: void = undefined;

// any type in ts
// any is not a solution it's just a start of bigger problem
let nextbigthing: any = "what ever the funk you want";
// here it should give me the error but with the help of any id doesn't
console.log(nextbigthing.bar());

// never type 


const nextfunc = (): never =>{
    // console.log("This is about never")
    // it give me the error but when i throw never inside the function
    // i don't get any error
    throw "never";
}

// unknown type 
let vAny: any = 10;
let vUnkown: unknown=10;

let str1: string = vAny;
// here i can pass vAny but not vUnknown
// let str2: string = vUnkown;

console.log(vAny.something());
// The samething gos here i can't use vUnkown
// console.log(vUnkown.something());


let str3: string = vUnkown as string

let pageNumber: string = "1";
// let numericPageNumber1: number = pageNumber;
// the above line doesn't work so all you need to do is change the type 
let numericPageNumber: number = (pageNumber as unknown) as number;

// I highly recommend you to stick to void and unknown
// and don't user any in any case


// if you are using any so convert it to something else
let mark: any = "100"
let myMark = mark as string

// Dom element
// ts has a lot of type for DOM out of the box
const shirelement = document.querySelector('some string here');
// if i don't user as Html so i need to define the as any as well otherwise id don't
// const shirelement = document.querySelector('some string here') as HTMLInputElement;

// console.log("This is some element", shirelement.value);
// the line above give it to me some errors so what i need to do is 
// just use any

console.log("Some element", (shirelement as any).value);
// console.log("Some element", shirelement.value);


shirelement.addEventListener("blur", (event) => {
    // console.log("event", event.target.value);
    // here i got error because i haven't identified the target
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);

})

// classes

// in typescript like java we have public and private
// if we don't specify the public or private in the class so
// it automatically will count as public

class Student {
    firstName: string;
    lastName: string;
    // private firstName: string;
    // private lasNamme: string;
    // public firstName: string;
    // public lastName: string;
    // protected firstName: string;
    // protected lastName: string;
    // protect means that we can use inside children
    readonly unchangeableName: string;

    // or you can also use constructor in class
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    changeUnChangableName(): void {
        // this.unchangeableName = "This is unchangeable"
    }

    getStudentFullName(): string {
        return "The name of student is: " + this.firstName +" "+ this.lastName;
    }
}


const student = new Student("Shirhussain", "Danishyar");

console.log(student.lastName +" "+ student.lastName);
console.log(student.getStudentFullName);


// interface
interface StudentInterface {
    // studentFullName(): string;
}


class MyStudent implements StudentInterface{
    firstName: string;
    lastName: string;
    readonly unchangeableName: string;
    // static MaxAge = 70;
    // or sometime we can use static with readonly both
    static readonly MaxAge=60;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    changeUnchangableName():void{
        
    }

    getStdFullName(): string {
        return this.firstName + this.lastName;
    }
}

const mystd = new MyStudent("Jeff", "besoz");

console.log(mystd.firstName)
console.log(mystd.lastName)
console.log(mystd.getStdFullName)
// console.log(mystd.MaxAge)
// here it doesn't work


//  interacting with Typescript //


class Admin extends MyStudent{
    private editor: string;

    setEditor(editor:string):void{
        this.editor = editor;
    }

    getEditor(): string{
        return this.editor
    }
}

const admin = new Admin("Hu3in", "Danishyar")

console.log(admin.firstName)
console.log(admin.getStdFullName)
console.log(admin.lastName)
console.log(admin.changeUnchangableName)


// Generics in type script
// Big "T" is default name for generic
// we can use T as Data Type 
// all generic data type are written inside "<>"
// const addId = <T>(obj:T) => {
const addId = <T extends object>(obj:T) => {
    const id = Math.random().toString(16);
    return{
        // spread is Es6 feature to merge objects
        ...obj,
        id
    }
}

// people normally user T or V
interface WeUser<T, V>{
    name: string;
    data: T;
    meta: V;
}

const teacher: WeUser<{meta:string}, string> = {
    name: "Mohammad",
    data: {
        meta: "something like foo",
    },
    meta: "bar",
};

const teacher2: WeUser<string[], string> = {
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

const searchStr = "foo";

// const hasSearchString = any<string>((el:string)=> el.contains(searchStr)),([
//     "fooooooooo", 
//     "baaaaaaaar",
//     "Baaaaaaaz"
// ])



//  Enums

const statuses = {
    notStarted: 0,
    inPrograss: 1,
    done: 2,
};

console.log(statuses.inPrograss);

// or also we can use it with enumerable

enum StatusEnum {
    notStarted= "Not started",
    inPrograss = "In prograss",
    Done = "Done",
}


interface Task {
    id:string;
    status: StatusEnum;
}

console.log(StatusEnum.Done)

let notStartedStatus = StatusEnum.notStarted;

// notStartedStatus = "foo fooo foo", dosen't work
notStartedStatus = StatusEnum.inPrograss;

