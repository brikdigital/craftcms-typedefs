export {};

// TODO: Move to wherever this should be
declare global {
  namespace Craft {
    function initUiElements(
      $container: Element | Document | JQuery | JQuery.Selector,
    );
  }
}
