export {};

declare global {
    namespace Craft {
        interface EntryIndex extends Craft.BaseElementIndex {
        }
        interface EntryIndexController extends BaseClass<EntryIndex> {
            new (): EntryIndex;
        }
        let EntryIndex: EntryIndexController;
    }
}