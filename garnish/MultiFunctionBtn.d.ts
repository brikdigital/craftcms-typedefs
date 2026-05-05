export {};

declare global {
  namespace Garnish {
    interface MultiFunctionBtn {
      busyEvent(): void;
      successEvent(): void;
    }

    interface MultiFunctionBtnConstructor extends BaseClass<MultiFunctionBtn> {
      new (el: JQuery);
    }

    let MultiFunctionBtn: MultiFunctionBtnConstructor;
  }
}
