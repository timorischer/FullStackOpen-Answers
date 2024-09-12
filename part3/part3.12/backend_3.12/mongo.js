const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = 
    `mongodb+srv://rischertimo:${password}@cluster0.ihnq0.mongodb.net/personApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (!name && !number) {
    Person.find({}).then(result => {
        console.log("Phonebook:")
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
} else {
    if (!name || !number) {
        console.log('Enter a name and number')
        mongoose.connection.close()
        process.exit(1)
    }

    const person = new Person ({
        name: name,
        number: number,
    })

    person.save()
        .then(result => {
            console.log('person saved!')
            mongoose.connection.close()
        })
}
