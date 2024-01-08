import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';
import { FilterQuery, Model, Types } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async find(filterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(filterQuery).lean<User[]>(true);
  }

  async create(document: Omit<User, '_id'>): Promise<User> {
    const createdDocument = new this.userModel({
      ...document,
      _id: new Types.ObjectId(),
    });

    return (await createdDocument.save()).toJSON() as unknown as User;
  }
}
