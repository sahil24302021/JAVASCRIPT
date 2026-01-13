export class Singleton {
    message(){
        return "Hello Singleton";
    }
}

const obj = new Singleton();
console.log(obj.message());

export function somethings(){
    return "Hello from something";
}
