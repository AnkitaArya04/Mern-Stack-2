
//CRUD Operation
use("CrudDb")
//create
db.createCollection("courses")

db.courses.insertOne({
    name: "Ankita arya course",
    price: 0,
    assignments: 12,
    projects: 45
})

db.courses.insertMany([
    {
        "name": "Ankita Arya Course",
        "price": 0,
        "assignments": 12,
        "projects": 45
    },
    {
        "name": "Full Stack Developer Program",
        "price": 249,
        "assignments": 20,
        "projects": 30
    },
    {
        "name": "AI & Machine Learning",
        "price": 299,
        "assignments": 18,
        "projects": 25
    },
    {
        "name": "Python Programming Essentials",
        "price": 99,
        "assignments": 10,
        "projects": 12
    },
    {
        "name": "Frontend Mastery with React",
        "price": 149,
        "assignments": 15,
        "projects": 20
    },
    {
        "name": "Backend APIs with Node.js",
        "price": 199,
        "assignments": 14,
        "projects": 18
    },
    {
        "name": "Database Design with SQL",
        "price": 89,
        "assignments": 8,
        "projects": 10
    },
    {
        "name": "DevOps and Cloud Basics",
        "price": 179,
        "assignments": 16,
        "projects": 22
    },
    {
        "name": "Data Structures in Java",
        "price": 129,
        "assignments": 13,
        "projects": 15
    },
    {
        "name": "Cybersecurity Fundamentals",
        "price": 159,
        "assignments": 11,
        "projects": 17
    }
])
//read
// let a=db.courses.find({price:0})
// // console.log(a)
// // console.log(a.count())
// console.log(a.toArray())

// let b=db.courses.findOne({price:0})
// console.log(b)

//update
// db.courses.updateOne({price:0},{$set:{price:100}})

// db.courses.updateMany({price:0},{$set:{price:1000}})

//delete
db.courses.deleteOne({price:100})
db.courses.deleteMany({price:1000})