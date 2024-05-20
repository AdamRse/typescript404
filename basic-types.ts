let str:string = "a";
let nb:number = 3;
let bl:boolean = true;

let any = "any";
let unknown:unknown = 0;

let nl:null = null;
let undef:undefined = undefined;
function vd(message: string): void {
    console.log("coucou");
}
function error(message: string): never {
    throw new Error(message);
}
let arr:Array<number> = [0, 1];
let tuple: [number, string] = [3, "Coucou"];

console.log(str, nb, bl, any, unknown, nl, undef, vd, error, arr, tuple);