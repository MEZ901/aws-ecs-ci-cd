import { Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // TODO: Replace with your Atlas connection string
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'userExplorer',
    }),
  ],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
