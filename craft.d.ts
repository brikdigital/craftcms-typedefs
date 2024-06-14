export {};

declare global {
  namespace Craft {
    function initUiElements(
      $container: Element | Document | JQuery | JQuery.Selector,
    );

    let timepickerOptions: JQueryTimepickerOptions;
    let datepickerOptions: JQueryUI.DatepickerOptions;
  }
}
