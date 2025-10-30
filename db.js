import mongoose from "mongoose";

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
const AdminModel = mongoose.model("AdminModel", adminSchema);

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: {type: ObjectId, ref: AdminModel},
})
const CourseModel = mongoose.model("CourseModel", courseSchema);

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: {type: ObjectId, ref: CourseModel}
})


const UserModel = mongoose.model("UserModel", userSchema);
const PurchaseModel = mongoose.model("PurchaseModel", purchaseSchema); 


export {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
};