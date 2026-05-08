export {};

declare global {
    namespace Craft {
        interface BaseElementIndex {
            elementType: string;
            siteId: number;
            sourceKey: string;

            getSelectedElementIds(): number[];
            updateElements(preservePagination?: boolean, pageChanged?: boolean);
            setIndexBusy(showSpinner: boolean = true): void;
            setIndexAvailable(): void;
        }
        interface BaseElementIndexConstructor extends BaseClass<BaseElementIndex> {
            new (): BaseElementIndex;
        }
        let BaseElementIndex: BaseElementIndexConstructor;
    }
}