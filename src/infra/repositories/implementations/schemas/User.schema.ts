import { Schema, model } from "mongoose";
import * as bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true },
    telefone: { type: String, required: true },
    });

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    
    bcrypt.hash(this.password, 10, (err: Error, hash: string) => {
        if (err) return next(err);
        this.password = hash;
    
        return next();
    });
})

const UserModel = model('User', UserSchema)

export { UserModel }