let Username = 'jack pritom soren'


const SumofNumber = (number1:number,number2:number) => {
    console.log(number1+number2)
}


// console.log(Username)
SumofNumber(2,2)


const nameOrValue = (message: number | string)=>{
    console.log(message)
}

nameOrValue('jack')
nameOrValue(1)


let name2 : any;
name2= 'jack'
name2 = 2
name2 = true 


function voidFunction ():void {
    console.log('hello world')
}

voidFunction()

let nameObject : {name: string, id: number}

nameObject= {name: 'jack', id:2}

nameObject.name= 'pritom'