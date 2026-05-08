export {};

declare global {
    namespace Craft {
        namespace ElementActionTrigger {
            interface Settings {
                type: string;
                validateSelection(selectedItems: JQuery<HTMLElement>, elementIndex: Craft.BaseElementIndex): boolean;
                activate(selectedItems: JQuery<HTMLElement>, elementIndex: Craft.BaseElementIndex):  void;
            }
        }
        interface ElementActionTrigger {
            enableTrigger(): void;
            disableTrigger(): void;
        }
        interface ElementActionTriggerConstructor extends BaseClass<ElementActionTrigger> {
            new (settings: Craft.ElementActionTrigger.Settings): ElementActionTrigger;
        }
        let ElementActionTrigger: ElementActionTriggerConstructor;
    }
}
