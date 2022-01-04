

interface Obj   {
    arr: {
        mail: string
        add: number
    }
}

function kayus(kay: Obj){
    for(let i in kay.arr){
        console.log(i)
    }
}