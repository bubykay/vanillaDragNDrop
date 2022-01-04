function Person(first, last){
    this.name = {first, last}
    return this
}

function Teacher(first, last ,subject){
    Person.call(this, first, last)
    this.subjet = subject

    return this
}


const p = new Teacher('kayode', 'adetayo', 'english')

console.log(p)