import {HttpContextToken, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {inject} from "@angular/core";
import {LoadingIndicatorService} from "./loading-indicator.service";
import {finalize} from "rxjs";

export const SkipLoadingIndicator = new HttpContextToken(() => false);

export const loadingInterceptor: HttpInterceptorFn =
  (request: HttpRequest<any>, next: HttpHandlerFn) => {
    if (request.context.get(SkipLoadingIndicator)) {
      return next(request);
    }
    const loadingIndicatorService = inject(LoadingIndicatorService);
    loadingIndicatorService.startLoading();
    return next(request)
      .pipe(
        finalize(() => loadingIndicatorService.finishLoading())
      )
  }
