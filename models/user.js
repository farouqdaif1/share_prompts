import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "That email is already in use"],
        lowercase: true
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: [true, "That username is already in use"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
        ,
        lowercase: true
    },
    image: {
        type: String,
    },

});
const User = models.User || model("User", UserSchema);

export default User;
