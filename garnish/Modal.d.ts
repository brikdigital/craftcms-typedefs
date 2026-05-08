export {};

declare global {
  namespace Garnish {
    interface Modal {
      show(): void;
      hide(): void;
    }
    interface ModalConstructor extends BaseClass<Modal> {
      new (root: JQuery): Modal;
    }
    let Modal: ModalConstructor;
  }
}
