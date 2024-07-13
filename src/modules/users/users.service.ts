import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(username: string): Promise<User> {
    const newUser = new this.userModel({ username });
    return newUser.save();
  }

  async getUser(username: string): Promise<User> {
    return this.userModel.findOne({ username }).populate('scores').exec();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().populate('scores').exec();
  }
}
