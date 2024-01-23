// let obj=
// {
//     a:"1",
//     b:"harry",
// }
// console.log(obj);
class Animal{
    constructor(name)
    {
        this.name=name;
        console.log('object has been instantiated');
        

    }
    eats()
    {
        console.log('eats');
        
    }
}
class lion extends Animal{
    constructor(name){
        super(name);
        this.name=name;
    
    }

}
let a = new Animal('Animal');
let l= new lion('lion');