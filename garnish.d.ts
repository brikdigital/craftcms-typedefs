export {};

declare global {
  namespace Garnish {
    interface Base {
      readonly classId: number;
    }
    interface BaseConstructor extends BaseClass<Base, object> {
      new (): Base;
    }
    let Base: BaseConstructor;
  }
}
