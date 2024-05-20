function add(a:number, b:number):number{
    return a+b;
}
function greet(a:string):string{
    return "Salut "+a+" ! ça va ?";
}

let v:any = add(1, 7);
console.log(typeof(v), v);
let c:unknown = greet("Adam");
console.log(typeof(c), c);