import * as elements from 'typed-html';

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

import MainFrame from '../../client/components/frames/MainFrame';

@Injectable()
export class RouterInterceptor implements NestInterceptor<string, string> {
  intercept(context: ExecutionContext, next: CallHandler<string>) {
    const request = context.switchToHttp().getRequest();
    const isHxRequest = !!request?.headers?.['hx-request'];
    return next
      .handle()
      .pipe(
        map((data) => (isHxRequest ? data : <MainFrame>{data}</MainFrame>)),
      );
  }
}
