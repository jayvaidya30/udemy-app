import mongoose from "mongoose";
console.log("connected to");
mongoose.connect("mongodb+srv://jayvaidya30:mivuqizBVpvXxegM@cluster0.86xlhas.mongodb.net/udemy-app");
const {Schema, model} = mongoose;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String, unique: true },
    password: String,
    firstName: String,
    secondName: String
})

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    secondName: String
})
const Admin = mongoose.model("Admin", adminSchema);

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: {type: ObjectId, ref: Admin},
})
const Course = mongoose.model("Course", courseSchema);

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: {type: ObjectId, ref: Course}
})


const User = mongoose.model("User", userSchema);
const Purchase = mongoose.model("Purchase", purchaseSchema); 


export {
    User,
    Admin,
    Course,
    Purchase
};