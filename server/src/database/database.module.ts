import { Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://issammez:issammat03@cluster0.xwqcdxr.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'userExplorer',
      },
    ),
  ],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
