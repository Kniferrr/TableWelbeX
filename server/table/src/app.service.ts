import { Injectable } from '@nestjs/common';
import { data } from './data/data';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsers():object {
    return {data};
  }
}
