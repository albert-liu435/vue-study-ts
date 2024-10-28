//https://juejin.cn/post/7091936510076780575

import { RouteRecordRaw } from "vue-router";

declare global {
  declare interface RouteMetaCustom {
    title?: string;
    icon?: string;
  }

  type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import("*.vue")>)
    | (() => Promise<T>);

  declare interface AppRouteRecordRaw
    extends Omit<RouteRecordRaw, "meta" | "children"> {
    name?: string;
    component?: Component | string;
    meta?: RouteMetaCustom;
    children?: AppRouteRecordRaw[];
  }
}
