import {
  CallHandler,
  ExecutionContext,
  mixin,
  NestInterceptor,
} from '@nestjs/common';
import { ModalType } from '../../client/enums/modalType.enum';

export const ModalInterceptor = (modalType: ModalType) => {
  class ModalInterceptorMixin implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>) {
      const http = context.switchToHttp();
      const req = http.getRequest();
      const res = http.getResponse();

      const urlFromRequest = req.headers['hx-current-url'] as string;
      if (urlFromRequest) {
        const urlObject = new URL(urlFromRequest);
        urlObject.searchParams.append('modal', modalType);
        res.setHeader(
          'HX-Push-Url',
          `${urlObject.pathname}${urlObject.search}`,
        );
      }

      return next.handle();
    }
  }

  return mixin(ModalInterceptorMixin);
};
