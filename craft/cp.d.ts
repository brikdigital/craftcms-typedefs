export {};

declare global {
  namespace Craft {
    namespace cp {
      function displayError(
        text: string,
        settings?: {
          icon: string;
          iconLabel: string;
          details: string;
        },
      );
    }
  }
}
