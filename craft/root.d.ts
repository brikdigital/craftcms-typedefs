export {};

// TODO: Move to wherever this should be
declare global {
  type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

  namespace Craft {
    function getActionUrl(alias: string): string;

    function downloadFromUrl(
      method: HTTPMethod,
      actionUrl: string,
      data: string | Record<string, unknown>,
    );

    function initUiElements(
      $container: Element | Document | JQuery | JQuery.Selector,
    );
  }
}
