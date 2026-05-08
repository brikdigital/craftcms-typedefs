export {};

// TODO: Move to wherever this should be
declare global {
  type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

  namespace Craft {
    let elementIndex: Craft.BaseElementIndex;

    function getActionUrl(alias: string): string;

    function sendActionRequest(
      method: HTTPMethod,
      actionUrl: string,
      data: string | Record<string, unknown>,
    ): Promise<unknown>;
    function downloadFromUrl(
      method: HTTPMethod,
      actionUrl: string,
      data: string | Record<string, unknown>,
    ): Promise<void>;

    function initUiElements(
      $container: Element | Document | JQuery | JQuery.Selector,
    );
  }
}
