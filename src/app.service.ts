import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<H1>Hello Ken!</H1>';
  }
}
