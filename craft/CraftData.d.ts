export {};

// TODO: Cleanup
declare global {
  namespace Craft {
    interface Site {
      id: number;
      uid: string;
      handle: string;
      name: string;
    }
    interface EntryType {
      id: number;
      handle: string;
      name: string;
    }
    interface Section {
      id: number;
      uid: string;
      handle: string;
      type: string;
      name: string;
      sites: number[];
      entryTypes: EntryType[];
    }
    interface HttpProxy {
      host: string;
      port: number;
      auth: {
        username: Nullable<string>;
        password: Nullable<string>;
      };
      protocol: string;
    }
    interface CategoryGroup {
      id: number;
      uid: string;
      handle: string;
      name: string;
    }
    interface FileKind {
      label: string;
      extensions: string[];
    }
    interface CookieOptions {
      path: string;
      domain: string;
      secure: boolean;
      sameSite: string;
    }
    const enum CmsEdition {
      Solo,
      Team,
      Pro,
    }
    interface Announcement {
      id: number;
      label: string;
      heading: string;
      body: string;
      icon: string;
      unread: boolean;
    }

    let Pro: CmsEdition.Pro;
    let Solo: CmsEdition.Solo;
    let Team: CmsEdition.Team;

    let actionTrigger: string;
    let actionUrl: string;
    let announcements: Announcement[];
    let asciiCharMap: Record<string, string>;
    let baseApiUrl: string;
    let baseCpUrl: string;
    let baseSiteUrl: string;
    let baseUrl: string;
    let clientOs: string;
    let cpTrigger: string;
    let csrfTokenName: Optional<string>; // exists only if CSRF protection is enabled
    let csrfTokenValue: Optional<string>; // exists only if CSRF protection is enabled
    let datepickerOptions: JQueryUI.DatepickerOptions;
    let fileKinds: Record<string, FileKind>;
    let language: string;
    let left: 'left' | 'right';
    let maxPasswordLength: number;
    let minPasswordLength: number;
    let omitScriptNameInUrls: boolean;
    let orientation: 'ltr' | 'rtl';
    let pageNum: number;
    let pageTrigger: string; // seems to be 'p' in all sites I've tried?
    let path: string;
    let pathParam: string; // 'p' as well
    let registeredAssetBundles: string[];
    let registeredJsFiles: string[];
    let resourceBaseUrl: string;
    let right: 'left' | 'right';
    let scriptName: string;
    let systemUid: string;
    let timepickerOptions: JQueryTimepickerOptions;
    let timezone: string;
    let tokenParam: string;
    let translations: Record<string, Record<string, string>>;
    let useEmailAsUsername: boolean;
    let usePathInfo: string;

    // Added only if user is logged in. Not sure if representing everything as optional is the way to go.
    let allowAdminChanges: Optional<boolean>;
    let allowUpdates: Optional<boolean>;
    let allowUppercaseInSlug: Optional<boolean>;
    let apiParams: Optional<Nullable<string[]>>;
    let appId: Optional<string>;
    let autofocusPreferred: Optional<boolean>;
    let autosaveDrafts: Optional<boolean>;
    let canAccessQueueManager: Optional<boolean>;
    let dataAttributes: Optional<string[]>;
    let defaultIndexCriteria: Optional<Record<string, string>>; // not quite sure, used in BaseElementIndex
    let disableAutofocus: Optional<boolean>;
    let editableCategoryGroups: Optional<CategoryGroup[]>;
    let edition: Optional<CmsEdition>;
    let elementTypeNames: Optional<Record<string, string[]>>;
    let elevatedSessionDuration: Optional<number>;
    let fieldsWithoutContent: Optional<string[]>;
    let handleCasing: Optional<string>;
    let httpProxy: Optional<HttpProxy>;
    let isImagick: Optional<boolean>;
    let isMultiSite: Optional<boolean>;
    let limitAutoSlugsToAscii: Optional<boolean>;
    let maxUploadSize: Optional<number>;
    let notificationDuration: Optional<number>;
    let previewIframeResizerOptions: Optional<{ autoResize: boolean } | false>;
    let primarySiteId: Optional<Nullable<number>>;
    let primarySiteLanguage: Optional<Nullable<string>>;
    let publishableSections: Optional<Section[]>;
    let remainingSessionType: Optional<number>;
    let runQueueAutomatically: Optional<boolean>;
    let siteId: Optional<Nullable<number>>;
    let sites: Optional<Site[]>;
    let siteToken: Optional<string>;
    let slugWordSeparator: Optional<string>;
    let userEmail: Optional<string>;
    let userHasPasskeys: Optional<boolean>;
    let userIsAdmin: Optional<boolean>;
    let username: Optional<string>;
  }
}
