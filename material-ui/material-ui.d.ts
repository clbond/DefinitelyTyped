// Type definitions for material-ui v0.14.0
// Project: https://github.com/callemall/material-ui
// Definitions by: Nathan Brown <https://github.com/ngbrown>, Oliver Herrmann <https://github.com/herrmanno>, Chris Bond <https://github.com/clbond>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare module "material-ui" {
    export import AppBar = __MaterialUI.AppBar; // require('material-ui/lib/app-bar');
    export import AppCanvas = __MaterialUI.AppCanvas; // require('material-ui/lib/app-canvas');
    export import Avatar = __MaterialUI.Avatar; // require('material-ui/lib/avatar');
    export import AutoComplete = __MaterialUI.AutoComplete; // require('material-ui/lib/auto-complete');
    export import Badge = __MaterialUI.Badge; // require('material-ui/lib/badge');
    export import BeforeAfterWrapper = __MaterialUI.BeforeAfterWrapper; // require('material-ui/lib/before-after-wrapper');
    export import Card = __MaterialUI.Card.Card; // require('material-ui/lib/card/card');
    export import CardActions = __MaterialUI.Card.CardActions; // require('material-ui/lib/card/card-actions');
    export import CardExpandable = __MaterialUI.Card.CardExpandable; // require('material-ui/lib/card/card-expandable');
    export import CardHeader = __MaterialUI.Card.CardHeader; // require('material-ui/lib/card/card-header');
    export import CardMedia = __MaterialUI.Card.CardMedia; // require('material-ui/lib/card/card-media');
    export import CardText = __MaterialUI.Card.CardText; // require('material-ui/lib/card/card-text');
    export import CardTitle = __MaterialUI.Card.CardTitle; // require('material-ui/lib/card/card-title');
    export import Checkbox = __MaterialUI.Checkbox; // require('material-ui/lib/checkbox');
    export import CircularProgress = __MaterialUI.CircularProgress; // require('material-ui/lib/circular-progress');
    export import ClearFix = __MaterialUI.ClearFix; // require('material-ui/lib/clearfix');
    export import DatePicker = __MaterialUI.DatePicker.DatePicker; // require('material-ui/lib/date-picker/date-picker');
    export import DatePickerDialog = __MaterialUI.DatePicker.DatePickerDialog; // require('material-ui/lib/date-picker/date-picker-dialog');
    export import Dialog = __MaterialUI.Dialog // require('material-ui/lib/dialog');
    export import DropDownIcon = __MaterialUI.DropDownIcon; // require('material-ui/lib/drop-down-icon');
    export import DropDownMenu = __MaterialUI.Menus.DropDownMenu; // require('material-ui/lib/DropDownMenu/DropDownMenu');
    export import EnhancedButton = __MaterialUI.EnhancedButton; // require('material-ui/lib/enhanced-button');
    export import FlatButton = __MaterialUI.FlatButton; // require('material-ui/lib/flat-button');
    export import FloatingActionButton = __MaterialUI.FloatingActionButton; // require('material-ui/lib/floating-action-button');
    export import FontIcon = __MaterialUI.FontIcon; // require('material-ui/lib/font-icon');
    export import IconButton = __MaterialUI.IconButton; // require('material-ui/lib/icon-button');
    export import IconMenu = __MaterialUI.Menus.IconMenu; // require('material-ui/lib/menus/icon-menu');
    export import LeftNav = __MaterialUI.LeftNav; // require('material-ui/lib/left-nav');
    export import LinearProgress = __MaterialUI.LinearProgress; // require('material-ui/lib/linear-progress');
    export import List = __MaterialUI.Lists.List; // require('material-ui/lib/lists/list');
    export import ListDivider = __MaterialUI.Lists.ListDivider; // require('material-ui/lib/lists/list-divider');
    export import ListItem = __MaterialUI.Lists.ListItem; // require('material-ui/lib/lists/list-item');
    export import Menu = __MaterialUI.Menu.Menu; // require('material-ui/lib/menu/menu');
    export import MenuItem = __MaterialUI.Menu.MenuItem; // require('material-ui/lib/menu/menu-item');
    export import Mixins = __MaterialUI.Mixins; // require('material-ui/lib/mixins/');
    export import Overlay = __MaterialUI.Overlay; // require('material-ui/lib/overlay');
    export import Paper = __MaterialUI.Paper; // require('material-ui/lib/paper');
    export import RadioButton = __MaterialUI.RadioButton; // require('material-ui/lib/radio-button');
    export import RadioButtonGroup = __MaterialUI.RadioButtonGroup; // require('material-ui/lib/radio-button-group');
    export import RaisedButton = __MaterialUI.RaisedButton; // require('material-ui/lib/raised-button');
    export import RefreshIndicator = __MaterialUI.RefreshIndicator; // require('material-ui/lib/refresh-indicator');
    export import Ripples = __MaterialUI.Ripples; // require('material-ui/lib/ripples/');
    export import SelectField = __MaterialUI.SelectField; // require('material-ui/lib/select-field');
    export import Slider = __MaterialUI.Slider; // require('material-ui/lib/slider');
    export import SvgIcon = __MaterialUI.SvgIcon; // require('material-ui/lib/svg-icon');
    export import Icons = __MaterialUI.Icons;
    export import Styles = __MaterialUI.Styles; // require('material-ui/lib/styles/');
    export import Snackbar = __MaterialUI.Snackbar; // require('material-ui/lib/snackbar');
    export import Tab = __MaterialUI.Tabs.Tab; // require('material-ui/lib/tabs/tab');
    export import Tabs = __MaterialUI.Tabs.Tabs; // require('material-ui/lib/tabs/tabs');
    export import Table = __MaterialUI.Table.Table; // require('material-ui/lib/table/table');
    export import TableBody = __MaterialUI.Table.TableBody; // require('material-ui/lib/table/table-body');
    export import TableFooter = __MaterialUI.Table.TableFooter; // require('material-ui/lib/table/table-footer');
    export import TableHeader = __MaterialUI.Table.TableHeader; // require('material-ui/lib/table/table-header');
    export import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn; // require('material-ui/lib/table/table-header-column');
    export import TableRow = __MaterialUI.Table.TableRow; // require('material-ui/lib/table/table-row');
    export import TableRowColumn = __MaterialUI.Table.TableRowColumn; // require('material-ui/lib/table/table-row-column');
    export import ThemeWrapper = __MaterialUI.ThemeWrapper; // require('material-ui/lib/theme-wrapper');
    export import Toggle = __MaterialUI.Toggle; // require('material-ui/lib/toggle');
    export import TimePicker = __MaterialUI.TimePicker; // require('material-ui/lib/time-picker');
    export import TextField = __MaterialUI.TextField; // require('material-ui/lib/text-field');
    export import Toolbar = __MaterialUI.Toolbar.Toolbar; // require('material-ui/lib/toolbar/toolbar');
    export import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup; // require('material-ui/lib/toolbar/toolbar-group');
    export import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator; // require('material-ui/lib/toolbar/toolbar-separator');
    export import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle; // require('material-ui/lib/toolbar/toolbar-title');
    export import Tooltip = __MaterialUI.Tooltip; // require('material-ui/lib/tooltip');
    export import Utils = __MaterialUI.Utils; // require('material-ui/lib/utils/');

    export import GridList = __MaterialUI.GridList.GridList; // require('material-ui/lib/gridlist/grid-list');
    export import GridTile = __MaterialUI.GridList.GridTile; // require('material-ui/lib/gridlist/grid-tile');

    // svg icons
    export import ActionAccessibility = __MaterialUI.Icons.ActionAccessibility; // require('material-ui/lib/svg-icon/action/accessibility');
    export import ActionAccessible = __MaterialUI.Icons.ActionAccessible; // require('material-ui/lib/svg-icon/action/accessible');
    export import ActionAccountBalance = __MaterialUI.Icons.ActionAccountBalance; // require('material-ui/lib/svg-icon/action/account-balance');
    export import ActionAccountBalanceWallet = __MaterialUI.Icons.ActionAccountBalanceWallet; // require('material-ui/lib/svg-icon/action/account-balance-wallet');
    export import ActionAccountBox = __MaterialUI.Icons.ActionAccountBox; // require('material-ui/lib/svg-icon/action/account-box');
    export import ActionAccountCircle = __MaterialUI.Icons.ActionAccountCircle; // require('material-ui/lib/svg-icon/action/account-circle');
    export import ActionAddShoppingCart = __MaterialUI.Icons.ActionAddShoppingCart; // require('material-ui/lib/svg-icon/action/add-shopping-cart');
    export import ActionAlarmAdd = __MaterialUI.Icons.ActionAlarmAdd; // require('material-ui/lib/svg-icon/action/alarm-add');
    export import ActionAlarm = __MaterialUI.Icons.ActionAlarm; // require('material-ui/lib/svg-icon/action/alarm');
    export import ActionAlarmOff = __MaterialUI.Icons.ActionAlarmOff; // require('material-ui/lib/svg-icon/action/alarm-off');
    export import ActionAlarmOn = __MaterialUI.Icons.ActionAlarmOn; // require('material-ui/lib/svg-icon/action/alarm-on');
    export import ActionAllOut = __MaterialUI.Icons.ActionAllOut; // require('material-ui/lib/svg-icon/action/all-out');
    export import ActionAndroid = __MaterialUI.Icons.ActionAndroid; // require('material-ui/lib/svg-icon/action/android');
    export import ActionAnnouncement = __MaterialUI.Icons.ActionAnnouncement; // require('material-ui/lib/svg-icon/action/announcement');
    export import ActionAspectRatio = __MaterialUI.Icons.ActionAspectRatio; // require('material-ui/lib/svg-icon/action/aspect-ratio');
    export import ActionAssessment = __MaterialUI.Icons.ActionAssessment; // require('material-ui/lib/svg-icon/action/assessment');
    export import ActionAssignmentInd = __MaterialUI.Icons.ActionAssignmentInd; // require('material-ui/lib/svg-icon/action/assignment-ind');
    export import ActionAssignmentLate = __MaterialUI.Icons.ActionAssignmentLate; // require('material-ui/lib/svg-icon/action/assignment-late');
    export import ActionAssignment = __MaterialUI.Icons.ActionAssignment; // require('material-ui/lib/svg-icon/action/assignment');
    export import ActionAssignmentReturned = __MaterialUI.Icons.ActionAssignmentReturned; // require('material-ui/lib/svg-icon/action/assignment-returned');
    export import ActionAssignmentReturn = __MaterialUI.Icons.ActionAssignmentReturn; // require('material-ui/lib/svg-icon/action/assignment-return');
    export import ActionAssignmentTurnedIn = __MaterialUI.Icons.ActionAssignmentTurnedIn; // require('material-ui/lib/svg-icon/action/assignment-turned-in');
    export import ActionAutorenew = __MaterialUI.Icons.ActionAutorenew; // require('material-ui/lib/svg-icon/action/autorenew');
    export import ActionBackup = __MaterialUI.Icons.ActionBackup; // require('material-ui/lib/svg-icon/action/backup');
    export import ActionBookmarkBorder = __MaterialUI.Icons.ActionBookmarkBorder; // require('material-ui/lib/svg-icon/action/bookmark-border');
    export import ActionBookmark = __MaterialUI.Icons.ActionBookmark; // require('material-ui/lib/svg-icon/action/bookmark');
    export import ActionBook = __MaterialUI.Icons.ActionBook; // require('material-ui/lib/svg-icon/action/book');
    export import ActionBugReport = __MaterialUI.Icons.ActionBugReport; // require('material-ui/lib/svg-icon/action/bug-report');
    export import ActionBuild = __MaterialUI.Icons.ActionBuild; // require('material-ui/lib/svg-icon/action/build');
    export import ActionCached = __MaterialUI.Icons.ActionCached; // require('material-ui/lib/svg-icon/action/cached');
    export import ActionCameraEnhance = __MaterialUI.Icons.ActionCameraEnhance; // require('material-ui/lib/svg-icon/action/camera-enhance');
    export import ActionCardGiftcard = __MaterialUI.Icons.ActionCardGiftcard; // require('material-ui/lib/svg-icon/action/card-giftcard');
    export import ActionCardMembership = __MaterialUI.Icons.ActionCardMembership; // require('material-ui/lib/svg-icon/action/card-membership');
    export import ActionCardTravel = __MaterialUI.Icons.ActionCardTravel; // require('material-ui/lib/svg-icon/action/card-travel');
    export import ActionChangeHistory = __MaterialUI.Icons.ActionChangeHistory; // require('material-ui/lib/svg-icon/action/change-history');
    export import ActionCheckCircle = __MaterialUI.Icons.ActionCheckCircle; // require('material-ui/lib/svg-icon/action/check-circle');
    export import ActionChromeReaderMode = __MaterialUI.Icons.ActionChromeReaderMode; // require('material-ui/lib/svg-icon/action/chrome-reader-mode');
    export import ActionClass = __MaterialUI.Icons.ActionClass; // require('material-ui/lib/svg-icon/action/class');
    export import ActionCode = __MaterialUI.Icons.ActionCode; // require('material-ui/lib/svg-icon/action/code');
    export import ActionCompareArrows = __MaterialUI.Icons.ActionCompareArrows; // require('material-ui/lib/svg-icon/action/compare-arrows');
    export import ActionCopyright = __MaterialUI.Icons.ActionCopyright; // require('material-ui/lib/svg-icon/action/copyright');
    export import ActionCreditCard = __MaterialUI.Icons.ActionCreditCard; // require('material-ui/lib/svg-icon/action/credit-card');
    export import ActionDashboard = __MaterialUI.Icons.ActionDashboard; // require('material-ui/lib/svg-icon/action/dashboard');
    export import ActionDateRange = __MaterialUI.Icons.ActionDateRange; // require('material-ui/lib/svg-icon/action/date-range');
    export import ActionDelete = __MaterialUI.Icons.ActionDelete; // require('material-ui/lib/svg-icon/action/delete');
    export import ActionDescription = __MaterialUI.Icons.ActionDescription; // require('material-ui/lib/svg-icon/action/description');
    export import ActionDns = __MaterialUI.Icons.ActionDns; // require('material-ui/lib/svg-icon/action/dns');
    export import ActionDoneAll = __MaterialUI.Icons.ActionDoneAll; // require('material-ui/lib/svg-icon/action/done-all');
    export import ActionDone = __MaterialUI.Icons.ActionDone; // require('material-ui/lib/svg-icon/action/done');
    export import ActionDonutLarge = __MaterialUI.Icons.ActionDonutLarge; // require('material-ui/lib/svg-icon/action/donut-large');
    export import ActionDonutSmall = __MaterialUI.Icons.ActionDonutSmall; // require('material-ui/lib/svg-icon/action/donut-small');
    export import ActionEject = __MaterialUI.Icons.ActionEject; // require('material-ui/lib/svg-icon/action/eject');
    export import ActionEvent = __MaterialUI.Icons.ActionEvent; // require('material-ui/lib/svg-icon/action/event');
    export import ActionEventSeat = __MaterialUI.Icons.ActionEventSeat; // require('material-ui/lib/svg-icon/action/event-seat');
    export import ActionExitToApp = __MaterialUI.Icons.ActionExitToApp; // require('material-ui/lib/svg-icon/action/exit-to-app');
    export import ActionExplore = __MaterialUI.Icons.ActionExplore; // require('material-ui/lib/svg-icon/action/explore');
    export import ActionExtension = __MaterialUI.Icons.ActionExtension; // require('material-ui/lib/svg-icon/action/extension');
    export import ActionFace = __MaterialUI.Icons.ActionFace; // require('material-ui/lib/svg-icon/action/face');
    export import ActionFavoriteBorder = __MaterialUI.Icons.ActionFavoriteBorder; // require('material-ui/lib/svg-icon/action/favorite-border');
    export import ActionFavorite = __MaterialUI.Icons.ActionFavorite; // require('material-ui/lib/svg-icon/action/favorite');
    export import ActionFeedback = __MaterialUI.Icons.ActionFeedback; // require('material-ui/lib/svg-icon/action/feedback');
    export import ActionFindInPage = __MaterialUI.Icons.ActionFindInPage; // require('material-ui/lib/svg-icon/action/find-in-page');
    export import ActionFindReplace = __MaterialUI.Icons.ActionFindReplace; // require('material-ui/lib/svg-icon/action/find-replace');
    export import ActionFingerprint = __MaterialUI.Icons.ActionFingerprint; // require('material-ui/lib/svg-icon/action/fingerprint');
    export import ActionFlightLand = __MaterialUI.Icons.ActionFlightLand; // require('material-ui/lib/svg-icon/action/flight-land');
    export import ActionFlightTakeoff = __MaterialUI.Icons.ActionFlightTakeoff; // require('material-ui/lib/svg-icon/action/flight-takeoff');
    export import ActionFlipToBack = __MaterialUI.Icons.ActionFlipToBack; // require('material-ui/lib/svg-icon/action/flip-to-back');
    export import ActionFlipToFront = __MaterialUI.Icons.ActionFlipToFront; // require('material-ui/lib/svg-icon/action/flip-to-front');
    export import ActionGavel = __MaterialUI.Icons.ActionGavel; // require('material-ui/lib/svg-icon/action/gavel');
    export import ActionGetApp = __MaterialUI.Icons.ActionGetApp; // require('material-ui/lib/svg-icon/action/get-app');
    export import ActionGif = __MaterialUI.Icons.ActionGif; // require('material-ui/lib/svg-icon/action/gif');
    export import ActionGrade = __MaterialUI.Icons.ActionGrade; // require('material-ui/lib/svg-icon/action/grade');
    export import ActionGroupWork = __MaterialUI.Icons.ActionGroupWork; // require('material-ui/lib/svg-icon/action/group-work');
    export import ActionHelp = __MaterialUI.Icons.ActionHelp; // require('material-ui/lib/svg-icon/action/help');
    export import ActionHelpOutline = __MaterialUI.Icons.ActionHelpOutline; // require('material-ui/lib/svg-icon/action/help-outline');
    export import ActionHighlightOff = __MaterialUI.Icons.ActionHighlightOff; // require('material-ui/lib/svg-icon/action/highlight-off');
    export import ActionHistory = __MaterialUI.Icons.ActionHistory; // require('material-ui/lib/svg-icon/action/history');
    export import ActionHome = __MaterialUI.Icons.ActionHome; // require('material-ui/lib/svg-icon/action/home');
    export import ActionHourglassEmpty = __MaterialUI.Icons.ActionHourglassEmpty; // require('material-ui/lib/svg-icon/action/hourglass-empty');
    export import ActionHourglassFull = __MaterialUI.Icons.ActionHourglassFull; // require('material-ui/lib/svg-icon/action/hourglass-full');
    export import ActionHttp = __MaterialUI.Icons.ActionHttp; // require('material-ui/lib/svg-icon/action/http');
    export import ActionHttps = __MaterialUI.Icons.ActionHttps; // require('material-ui/lib/svg-icon/action/https');
    export import ActionImportantDevices = __MaterialUI.Icons.ActionImportantDevices; // require('material-ui/lib/svg-icon/action/important-devices');
    export import ActionInfo = __MaterialUI.Icons.ActionInfo; // require('material-ui/lib/svg-icon/action/info');
    export import ActionInfoOutline = __MaterialUI.Icons.ActionInfoOutline; // require('material-ui/lib/svg-icon/action/info-outline');
    export import ActionInput = __MaterialUI.Icons.ActionInput; // require('material-ui/lib/svg-icon/action/input');
    export import ActionInvertColors = __MaterialUI.Icons.ActionInvertColors; // require('material-ui/lib/svg-icon/action/invert-colors');
    export import ActionLabel = __MaterialUI.Icons.ActionLabel; // require('material-ui/lib/svg-icon/action/label');
    export import ActionLabelOutline = __MaterialUI.Icons.ActionLabelOutline; // require('material-ui/lib/svg-icon/action/label-outline');
    export import ActionLanguage = __MaterialUI.Icons.ActionLanguage; // require('material-ui/lib/svg-icon/action/language');
    export import ActionLaunch = __MaterialUI.Icons.ActionLaunch; // require('material-ui/lib/svg-icon/action/launch');
    export import ActionLightbulbOutline = __MaterialUI.Icons.ActionLightbulbOutline; // require('material-ui/lib/svg-icon/action/lightbulb-outline');
    export import ActionLineStyle = __MaterialUI.Icons.ActionLineStyle; // require('material-ui/lib/svg-icon/action/line-style');
    export import ActionLineWeight = __MaterialUI.Icons.ActionLineWeight; // require('material-ui/lib/svg-icon/action/line-weight');
    export import ActionList = __MaterialUI.Icons.ActionList; // require('material-ui/lib/svg-icon/action/list');
    export import ActionLock = __MaterialUI.Icons.ActionLock; // require('material-ui/lib/svg-icon/action/lock');
    export import ActionLockOpen = __MaterialUI.Icons.ActionLockOpen; // require('material-ui/lib/svg-icon/action/lock-open');
    export import ActionLockOutline = __MaterialUI.Icons.ActionLockOutline; // require('material-ui/lib/svg-icon/action/lock-outline');
    export import ActionLoyalty = __MaterialUI.Icons.ActionLoyalty; // require('material-ui/lib/svg-icon/action/loyalty');
    export import ActionMarkunreadMailbox = __MaterialUI.Icons.ActionMarkunreadMailbox; // require('material-ui/lib/svg-icon/action/markunread-mailbox');
    export import ActionMotorcycle = __MaterialUI.Icons.ActionMotorcycle; // require('material-ui/lib/svg-icon/action/motorcycle');
    export import ActionNoteAdd = __MaterialUI.Icons.ActionNoteAdd; // require('material-ui/lib/svg-icon/action/note-add');
    export import ActionOfflinePin = __MaterialUI.Icons.ActionOfflinePin; // require('material-ui/lib/svg-icon/action/offline-pin');
    export import ActionOpacity = __MaterialUI.Icons.ActionOpacity; // require('material-ui/lib/svg-icon/action/opacity');
    export import ActionOpenInBrowser = __MaterialUI.Icons.ActionOpenInBrowser; // require('material-ui/lib/svg-icon/action/open-in-browser');
    export import ActionOpenInNew = __MaterialUI.Icons.ActionOpenInNew; // require('material-ui/lib/svg-icon/action/open-in-new');
    export import ActionOpenWith = __MaterialUI.Icons.ActionOpenWith; // require('material-ui/lib/svg-icon/action/open-with');
    export import ActionPageview = __MaterialUI.Icons.ActionPageview; // require('material-ui/lib/svg-icon/action/pageview');
    export import ActionPanTool = __MaterialUI.Icons.ActionPanTool; // require('material-ui/lib/svg-icon/action/pan-tool');
    export import ActionPayment = __MaterialUI.Icons.ActionPayment; // require('material-ui/lib/svg-icon/action/payment');
    export import ActionPermCameraMic = __MaterialUI.Icons.ActionPermCameraMic; // require('material-ui/lib/svg-icon/action/perm-camera-mic');
    export import ActionPermContactCalendar = __MaterialUI.Icons.ActionPermContactCalendar; // require('material-ui/lib/svg-icon/action/perm-contact-calendar');
    export import ActionPermDataSetting = __MaterialUI.Icons.ActionPermDataSetting; // require('material-ui/lib/svg-icon/action/perm-data-setting');
    export import ActionPermDeviceInformation = __MaterialUI.Icons.ActionPermDeviceInformation; // require('material-ui/lib/svg-icon/action/perm-device-information');
    export import ActionPermIdentity = __MaterialUI.Icons.ActionPermIdentity; // require('material-ui/lib/svg-icon/action/perm-identity');
    export import ActionPermMedia = __MaterialUI.Icons.ActionPermMedia; // require('material-ui/lib/svg-icon/action/perm-media');
    export import ActionPermPhoneMsg = __MaterialUI.Icons.ActionPermPhoneMsg; // require('material-ui/lib/svg-icon/action/perm-phone-msg');
    export import ActionPermScanWifi = __MaterialUI.Icons.ActionPermScanWifi; // require('material-ui/lib/svg-icon/action/perm-scan-wifi');
    export import ActionPets = __MaterialUI.Icons.ActionPets; // require('material-ui/lib/svg-icon/action/pets');
    export import ActionPictureInPictureAlt = __MaterialUI.Icons.ActionPictureInPictureAlt; // require('material-ui/lib/svg-icon/action/picture-in-picture-alt');
    export import ActionPictureInPicture = __MaterialUI.Icons.ActionPictureInPicture; // require('material-ui/lib/svg-icon/action/picture-in-picture');
    export import ActionPlayForWork = __MaterialUI.Icons.ActionPlayForWork; // require('material-ui/lib/svg-icon/action/play-for-work');
    export import ActionPolymer = __MaterialUI.Icons.ActionPolymer; // require('material-ui/lib/svg-icon/action/polymer');
    export import ActionPowerSettingsNew = __MaterialUI.Icons.ActionPowerSettingsNew; // require('material-ui/lib/svg-icon/action/power-settings-new');
    export import ActionPregnantWoman = __MaterialUI.Icons.ActionPregnantWoman; // require('material-ui/lib/svg-icon/action/pregnant-woman');
    export import ActionPrint = __MaterialUI.Icons.ActionPrint; // require('material-ui/lib/svg-icon/action/print');
    export import ActionQueryBuilder = __MaterialUI.Icons.ActionQueryBuilder; // require('material-ui/lib/svg-icon/action/query-builder');
    export import ActionQuestionAnswer = __MaterialUI.Icons.ActionQuestionAnswer; // require('material-ui/lib/svg-icon/action/question-answer');
    export import ActionReceipt = __MaterialUI.Icons.ActionReceipt; // require('material-ui/lib/svg-icon/action/receipt');
    export import ActionRecordVoiceOver = __MaterialUI.Icons.ActionRecordVoiceOver; // require('material-ui/lib/svg-icon/action/record-voice-over');
    export import ActionRedeem = __MaterialUI.Icons.ActionRedeem; // require('material-ui/lib/svg-icon/action/redeem');
    export import ActionReorder = __MaterialUI.Icons.ActionReorder; // require('material-ui/lib/svg-icon/action/reorder');
    export import ActionReportProblem = __MaterialUI.Icons.ActionReportProblem; // require('material-ui/lib/svg-icon/action/report-problem');
    export import ActionRestore = __MaterialUI.Icons.ActionRestore; // require('material-ui/lib/svg-icon/action/restore');
    export import ActionRoom = __MaterialUI.Icons.ActionRoom; // require('material-ui/lib/svg-icon/action/room');
    export import ActionRoundedCorner = __MaterialUI.Icons.ActionRoundedCorner; // require('material-ui/lib/svg-icon/action/rounded-corner');
    export import ActionRowing = __MaterialUI.Icons.ActionRowing; // require('material-ui/lib/svg-icon/action/rowing');
    export import ActionSchedule = __MaterialUI.Icons.ActionSchedule; // require('material-ui/lib/svg-icon/action/schedule');
    export import ActionSearch = __MaterialUI.Icons.ActionSearch; // require('material-ui/lib/svg-icon/action/search');
    export import ActionSettingsApplications = __MaterialUI.Icons.ActionSettingsApplications; // require('material-ui/lib/svg-icon/action/settings-applications');
    export import ActionSettingsBackupRestore = __MaterialUI.Icons.ActionSettingsBackupRestore; // require('material-ui/lib/svg-icon/action/settings-backup-restore');
    export import ActionSettingsBluetooth = __MaterialUI.Icons.ActionSettingsBluetooth; // require('material-ui/lib/svg-icon/action/settings-bluetooth');
    export import ActionSettingsBrightness = __MaterialUI.Icons.ActionSettingsBrightness; // require('material-ui/lib/svg-icon/action/settings-brightness');
    export import ActionSettingsCell = __MaterialUI.Icons.ActionSettingsCell; // require('material-ui/lib/svg-icon/action/settings-cell');
    export import ActionSettingsEthernet = __MaterialUI.Icons.ActionSettingsEthernet; // require('material-ui/lib/svg-icon/action/settings-ethernet');
    export import ActionSettingsInputAntenna = __MaterialUI.Icons.ActionSettingsInputAntenna; // require('material-ui/lib/svg-icon/action/settings-input-antenna');
    export import ActionSettingsInputComponent = __MaterialUI.Icons.ActionSettingsInputComponent; // require('material-ui/lib/svg-icon/action/settings-input-component');
    export import ActionSettingsInputComposite = __MaterialUI.Icons.ActionSettingsInputComposite; // require('material-ui/lib/svg-icon/action/settings-input-composite');
    export import ActionSettingsInputHdmi = __MaterialUI.Icons.ActionSettingsInputHdmi; // require('material-ui/lib/svg-icon/action/settings-input-hdmi');
    export import ActionSettingsInputSvideo = __MaterialUI.Icons.ActionSettingsInputSvideo; // require('material-ui/lib/svg-icon/action/settings-input-svideo');
    export import ActionSettings = __MaterialUI.Icons.ActionSettings; // require('material-ui/lib/svg-icon/action/settings');
    export import ActionSettingsOverscan = __MaterialUI.Icons.ActionSettingsOverscan; // require('material-ui/lib/svg-icon/action/settings-overscan');
    export import ActionSettingsPhone = __MaterialUI.Icons.ActionSettingsPhone; // require('material-ui/lib/svg-icon/action/settings-phone');
    export import ActionSettingsPower = __MaterialUI.Icons.ActionSettingsPower; // require('material-ui/lib/svg-icon/action/settings-power');
    export import ActionSettingsRemote = __MaterialUI.Icons.ActionSettingsRemote; // require('material-ui/lib/svg-icon/action/settings-remote');
    export import ActionSettingsVoice = __MaterialUI.Icons.ActionSettingsVoice; // require('material-ui/lib/svg-icon/action/settings-voice');
    export import ActionShop = __MaterialUI.Icons.ActionShop; // require('material-ui/lib/svg-icon/action/shop');
    export import ActionShoppingBasket = __MaterialUI.Icons.ActionShoppingBasket; // require('material-ui/lib/svg-icon/action/shopping-basket');
    export import ActionShoppingCart = __MaterialUI.Icons.ActionShoppingCart; // require('material-ui/lib/svg-icon/action/shopping-cart');
    export import ActionShopTwo = __MaterialUI.Icons.ActionShopTwo; // require('material-ui/lib/svg-icon/action/shop-two');
    export import ActionSpeakerNotes = __MaterialUI.Icons.ActionSpeakerNotes; // require('material-ui/lib/svg-icon/action/speaker-notes');
    export import ActionSpellcheck = __MaterialUI.Icons.ActionSpellcheck; // require('material-ui/lib/svg-icon/action/spellcheck');
    export import ActionStars = __MaterialUI.Icons.ActionStars; // require('material-ui/lib/svg-icon/action/stars');
    export import ActionStore = __MaterialUI.Icons.ActionStore; // require('material-ui/lib/svg-icon/action/store');
    export import ActionSubject = __MaterialUI.Icons.ActionSubject; // require('material-ui/lib/svg-icon/action/subject');
    export import ActionSupervisorAccount = __MaterialUI.Icons.ActionSupervisorAccount; // require('material-ui/lib/svg-icon/action/supervisor-account');
    export import ActionSwapHoriz = __MaterialUI.Icons.ActionSwapHoriz; // require('material-ui/lib/svg-icon/action/swap-horiz');
    export import ActionSwapVerticalCircle = __MaterialUI.Icons.ActionSwapVerticalCircle; // require('material-ui/lib/svg-icon/action/swap-vertical-circle');
    export import ActionSwapVert = __MaterialUI.Icons.ActionSwapVert; // require('material-ui/lib/svg-icon/action/swap-vert');
    export import ActionSystemUpdateAlt = __MaterialUI.Icons.ActionSystemUpdateAlt; // require('material-ui/lib/svg-icon/action/system-update-alt');
    export import ActionTab = __MaterialUI.Icons.ActionTab; // require('material-ui/lib/svg-icon/action/tab');
    export import ActionTabUnselected = __MaterialUI.Icons.ActionTabUnselected; // require('material-ui/lib/svg-icon/action/tab-unselected');
    export import ActionTheaters = __MaterialUI.Icons.ActionTheaters; // require('material-ui/lib/svg-icon/action/theaters');
    export import ActionThreeDRotation = __MaterialUI.Icons.ActionThreeDRotation; // require('material-ui/lib/svg-icon/action/three-d-rotation');
    export import ActionThumbDown = __MaterialUI.Icons.ActionThumbDown; // require('material-ui/lib/svg-icon/action/thumb-down');
    export import ActionThumbsUpDown = __MaterialUI.Icons.ActionThumbsUpDown; // require('material-ui/lib/svg-icon/action/thumbs-up-down');
    export import ActionThumbUp = __MaterialUI.Icons.ActionThumbUp; // require('material-ui/lib/svg-icon/action/thumb-up');
    export import ActionTimeline = __MaterialUI.Icons.ActionTimeline; // require('material-ui/lib/svg-icon/action/timeline');
    export import ActionToc = __MaterialUI.Icons.ActionToc; // require('material-ui/lib/svg-icon/action/toc');
    export import ActionToday = __MaterialUI.Icons.ActionToday; // require('material-ui/lib/svg-icon/action/today');
    export import ActionToll = __MaterialUI.Icons.ActionToll; // require('material-ui/lib/svg-icon/action/toll');
    export import ActionTouchApp = __MaterialUI.Icons.ActionTouchApp; // require('material-ui/lib/svg-icon/action/touch-app');
    export import ActionTrackChanges = __MaterialUI.Icons.ActionTrackChanges; // require('material-ui/lib/svg-icon/action/track-changes');
    export import ActionTranslate = __MaterialUI.Icons.ActionTranslate; // require('material-ui/lib/svg-icon/action/translate');
    export import ActionTrendingDown = __MaterialUI.Icons.ActionTrendingDown; // require('material-ui/lib/svg-icon/action/trending-down');
    export import ActionTrendingFlat = __MaterialUI.Icons.ActionTrendingFlat; // require('material-ui/lib/svg-icon/action/trending-flat');
    export import ActionTrendingUp = __MaterialUI.Icons.ActionTrendingUp; // require('material-ui/lib/svg-icon/action/trending-up');
    export import ActionTurnedIn = __MaterialUI.Icons.ActionTurnedIn; // require('material-ui/lib/svg-icon/action/turned-in');
    export import ActionTurnedInNot = __MaterialUI.Icons.ActionTurnedInNot; // require('material-ui/lib/svg-icon/action/turned-in-not');
    export import ActionUpdate = __MaterialUI.Icons.ActionUpdate; // require('material-ui/lib/svg-icon/action/update');
    export import ActionVerifiedUser = __MaterialUI.Icons.ActionVerifiedUser; // require('material-ui/lib/svg-icon/action/verified-user');
    export import ActionViewAgenda = __MaterialUI.Icons.ActionViewAgenda; // require('material-ui/lib/svg-icon/action/view-agenda');
    export import ActionViewArray = __MaterialUI.Icons.ActionViewArray; // require('material-ui/lib/svg-icon/action/view-array');
    export import ActionViewCarousel = __MaterialUI.Icons.ActionViewCarousel; // require('material-ui/lib/svg-icon/action/view-carousel');
    export import ActionViewColumn = __MaterialUI.Icons.ActionViewColumn; // require('material-ui/lib/svg-icon/action/view-column');
    export import ActionViewDay = __MaterialUI.Icons.ActionViewDay; // require('material-ui/lib/svg-icon/action/view-day');
    export import ActionViewHeadline = __MaterialUI.Icons.ActionViewHeadline; // require('material-ui/lib/svg-icon/action/view-headline');
    export import ActionViewList = __MaterialUI.Icons.ActionViewList; // require('material-ui/lib/svg-icon/action/view-list');
    export import ActionViewModule = __MaterialUI.Icons.ActionViewModule; // require('material-ui/lib/svg-icon/action/view-module');
    export import ActionViewQuilt = __MaterialUI.Icons.ActionViewQuilt; // require('material-ui/lib/svg-icon/action/view-quilt');
    export import ActionViewStream = __MaterialUI.Icons.ActionViewStream; // require('material-ui/lib/svg-icon/action/view-stream');
    export import ActionViewWeek = __MaterialUI.Icons.ActionViewWeek; // require('material-ui/lib/svg-icon/action/view-week');
    export import ActionVisibility = __MaterialUI.Icons.ActionVisibility; // require('material-ui/lib/svg-icon/action/visibility');
    export import ActionVisibilityOff = __MaterialUI.Icons.ActionVisibilityOff; // require('material-ui/lib/svg-icon/action/visibility-off');
    export import ActionWatchLater = __MaterialUI.Icons.ActionWatchLater; // require('material-ui/lib/svg-icon/action/watch-later');
    export import ActionWork = __MaterialUI.Icons.ActionWork; // require('material-ui/lib/svg-icon/action/work');
    export import ActionYoutubeSearchedFor = __MaterialUI.Icons.ActionYoutubeSearchedFor; // require('material-ui/lib/svg-icon/action/youtube-searched-for');
    export import ActionZoomIn = __MaterialUI.Icons.ActionZoomIn; // require('material-ui/lib/svg-icon/action/zoom-in');
    export import ActionZoomOut = __MaterialUI.Icons.ActionZoomOut; // require('material-ui/lib/svg-icon/action/zoom-out');
    export import AlertAddAlert = __MaterialUI.Icons.AlertAddAlert; // require('material-ui/lib/svg-icon/alert/add-alert');
    export import AlertError = __MaterialUI.Icons.AlertError; // require('material-ui/lib/svg-icon/alert/error');
    export import AlertErrorOutline = __MaterialUI.Icons.AlertErrorOutline; // require('material-ui/lib/svg-icon/alert/error-outline');
    export import AlertWarning = __MaterialUI.Icons.AlertWarning; // require('material-ui/lib/svg-icon/alert/warning');
    export import AvAddToQueue = __MaterialUI.Icons.AvAddToQueue; // require('material-ui/lib/svg-icon/av/add-to-queue');
    export import AvAirplay = __MaterialUI.Icons.AvAirplay; // require('material-ui/lib/svg-icon/av/airplay');
    export import AvAlbum = __MaterialUI.Icons.AvAlbum; // require('material-ui/lib/svg-icon/av/album');
    export import AvArtTrack = __MaterialUI.Icons.AvArtTrack; // require('material-ui/lib/svg-icon/av/art-track');
    export import AvAvTimer = __MaterialUI.Icons.AvAvTimer; // require('material-ui/lib/svg-icon/av/av-timer');
    export import AvClosedCaption = __MaterialUI.Icons.AvClosedCaption; // require('material-ui/lib/svg-icon/av/closed-caption');
    export import AvEqualizer = __MaterialUI.Icons.AvEqualizer; // require('material-ui/lib/svg-icon/av/equalizer');
    export import AvExplicit = __MaterialUI.Icons.AvExplicit; // require('material-ui/lib/svg-icon/av/explicit');
    export import AvFastForward = __MaterialUI.Icons.AvFastForward; // require('material-ui/lib/svg-icon/av/fast-forward');
    export import AvFastRewind = __MaterialUI.Icons.AvFastRewind; // require('material-ui/lib/svg-icon/av/fast-rewind');
    export import AvFiberDvr = __MaterialUI.Icons.AvFiberDvr; // require('material-ui/lib/svg-icon/av/fiber-dvr');
    export import AvFiberManualRecord = __MaterialUI.Icons.AvFiberManualRecord; // require('material-ui/lib/svg-icon/av/fiber-manual-record');
    export import AvFiberNew = __MaterialUI.Icons.AvFiberNew; // require('material-ui/lib/svg-icon/av/fiber-new');
    export import AvFiberPin = __MaterialUI.Icons.AvFiberPin; // require('material-ui/lib/svg-icon/av/fiber-pin');
    export import AvFiberSmartRecord = __MaterialUI.Icons.AvFiberSmartRecord; // require('material-ui/lib/svg-icon/av/fiber-smart-record');
    export import AvForward10 = __MaterialUI.Icons.AvForward10; // require('material-ui/lib/svg-icon/av/forward-10');
    export import AvForward30 = __MaterialUI.Icons.AvForward30; // require('material-ui/lib/svg-icon/av/forward-30');
    export import AvForward5 = __MaterialUI.Icons.AvForward5; // require('material-ui/lib/svg-icon/av/forward-5');
    export import AvGames = __MaterialUI.Icons.AvGames; // require('material-ui/lib/svg-icon/av/games');
    export import AvHd = __MaterialUI.Icons.AvHd; // require('material-ui/lib/svg-icon/av/hd');
    export import AvHearing = __MaterialUI.Icons.AvHearing; // require('material-ui/lib/svg-icon/av/hearing');
    export import AvHighQuality = __MaterialUI.Icons.AvHighQuality; // require('material-ui/lib/svg-icon/av/high-quality');
    export import AvLibraryAdd = __MaterialUI.Icons.AvLibraryAdd; // require('material-ui/lib/svg-icon/av/library-add');
    export import AvLibraryBooks = __MaterialUI.Icons.AvLibraryBooks; // require('material-ui/lib/svg-icon/av/library-books');
    export import AvLibraryMusic = __MaterialUI.Icons.AvLibraryMusic; // require('material-ui/lib/svg-icon/av/library-music');
    export import AvLoop = __MaterialUI.Icons.AvLoop; // require('material-ui/lib/svg-icon/av/loop');
    export import AvMic = __MaterialUI.Icons.AvMic; // require('material-ui/lib/svg-icon/av/mic');
    export import AvMicNone = __MaterialUI.Icons.AvMicNone; // require('material-ui/lib/svg-icon/av/mic-none');
    export import AvMicOff = __MaterialUI.Icons.AvMicOff; // require('material-ui/lib/svg-icon/av/mic-off');
    export import AvMovie = __MaterialUI.Icons.AvMovie; // require('material-ui/lib/svg-icon/av/movie');
    export import AvMusicVideo = __MaterialUI.Icons.AvMusicVideo; // require('material-ui/lib/svg-icon/av/music-video');
    export import AvNewReleases = __MaterialUI.Icons.AvNewReleases; // require('material-ui/lib/svg-icon/av/new-releases');
    export import AvNotInterested = __MaterialUI.Icons.AvNotInterested; // require('material-ui/lib/svg-icon/av/not-interested');
    export import AvPauseCircleFilled = __MaterialUI.Icons.AvPauseCircleFilled; // require('material-ui/lib/svg-icon/av/pause-circle-filled');
    export import AvPauseCircleOutline = __MaterialUI.Icons.AvPauseCircleOutline; // require('material-ui/lib/svg-icon/av/pause-circle-outline');
    export import AvPause = __MaterialUI.Icons.AvPause; // require('material-ui/lib/svg-icon/av/pause');
    export import AvPlayArrow = __MaterialUI.Icons.AvPlayArrow; // require('material-ui/lib/svg-icon/av/play-arrow');
    export import AvPlayCircleFilled = __MaterialUI.Icons.AvPlayCircleFilled; // require('material-ui/lib/svg-icon/av/play-circle-filled');
    export import AvPlayCircleOutline = __MaterialUI.Icons.AvPlayCircleOutline; // require('material-ui/lib/svg-icon/av/play-circle-outline');
    export import AvPlaylistAddCheck = __MaterialUI.Icons.AvPlaylistAddCheck; // require('material-ui/lib/svg-icon/av/playlist-add-check');
    export import AvPlaylistAdd = __MaterialUI.Icons.AvPlaylistAdd; // require('material-ui/lib/svg-icon/av/playlist-add');
    export import AvPlaylistPlay = __MaterialUI.Icons.AvPlaylistPlay; // require('material-ui/lib/svg-icon/av/playlist-play');
    export import AvQueue = __MaterialUI.Icons.AvQueue; // require('material-ui/lib/svg-icon/av/queue');
    export import AvQueueMusic = __MaterialUI.Icons.AvQueueMusic; // require('material-ui/lib/svg-icon/av/queue-music');
    export import AvQueuePlayNext = __MaterialUI.Icons.AvQueuePlayNext; // require('material-ui/lib/svg-icon/av/queue-play-next');
    export import AvRadio = __MaterialUI.Icons.AvRadio; // require('material-ui/lib/svg-icon/av/radio');
    export import AvRecentActors = __MaterialUI.Icons.AvRecentActors; // require('material-ui/lib/svg-icon/av/recent-actors');
    export import AvRemoveFromQueue = __MaterialUI.Icons.AvRemoveFromQueue; // require('material-ui/lib/svg-icon/av/remove-from-queue');
    export import AvRepeat = __MaterialUI.Icons.AvRepeat; // require('material-ui/lib/svg-icon/av/repeat');
    export import AvRepeatOne = __MaterialUI.Icons.AvRepeatOne; // require('material-ui/lib/svg-icon/av/repeat-one');
    export import AvReplay10 = __MaterialUI.Icons.AvReplay10; // require('material-ui/lib/svg-icon/av/replay-10');
    export import AvReplay30 = __MaterialUI.Icons.AvReplay30; // require('material-ui/lib/svg-icon/av/replay-30');
    export import AvReplay5 = __MaterialUI.Icons.AvReplay5; // require('material-ui/lib/svg-icon/av/replay-5');
    export import AvReplay = __MaterialUI.Icons.AvReplay; // require('material-ui/lib/svg-icon/av/replay');
    export import AvShuffle = __MaterialUI.Icons.AvShuffle; // require('material-ui/lib/svg-icon/av/shuffle');
    export import AvSkipNext = __MaterialUI.Icons.AvSkipNext; // require('material-ui/lib/svg-icon/av/skip-next');
    export import AvSkipPrevious = __MaterialUI.Icons.AvSkipPrevious; // require('material-ui/lib/svg-icon/av/skip-previous');
    export import AvSlowMotionVideo = __MaterialUI.Icons.AvSlowMotionVideo; // require('material-ui/lib/svg-icon/av/slow-motion-video');
    export import AvSnooze = __MaterialUI.Icons.AvSnooze; // require('material-ui/lib/svg-icon/av/snooze');
    export import AvSortByAlpha = __MaterialUI.Icons.AvSortByAlpha; // require('material-ui/lib/svg-icon/av/sort-by-alpha');
    export import AvStop = __MaterialUI.Icons.AvStop; // require('material-ui/lib/svg-icon/av/stop');
    export import AvSubscriptions = __MaterialUI.Icons.AvSubscriptions; // require('material-ui/lib/svg-icon/av/subscriptions');
    export import AvSubtitles = __MaterialUI.Icons.AvSubtitles; // require('material-ui/lib/svg-icon/av/subtitles');
    export import AvSurroundSound = __MaterialUI.Icons.AvSurroundSound; // require('material-ui/lib/svg-icon/av/surround-sound');
    export import AvVideocam = __MaterialUI.Icons.AvVideocam; // require('material-ui/lib/svg-icon/av/videocam');
    export import AvVideocamOff = __MaterialUI.Icons.AvVideocamOff; // require('material-ui/lib/svg-icon/av/videocam-off');
    export import AvVideoLibrary = __MaterialUI.Icons.AvVideoLibrary; // require('material-ui/lib/svg-icon/av/video-library');
    export import AvVolumeDown = __MaterialUI.Icons.AvVolumeDown; // require('material-ui/lib/svg-icon/av/volume-down');
    export import AvVolumeMute = __MaterialUI.Icons.AvVolumeMute; // require('material-ui/lib/svg-icon/av/volume-mute');
    export import AvVolumeOff = __MaterialUI.Icons.AvVolumeOff; // require('material-ui/lib/svg-icon/av/volume-off');
    export import AvVolumeUp = __MaterialUI.Icons.AvVolumeUp; // require('material-ui/lib/svg-icon/av/volume-up');
    export import AvWebAsset = __MaterialUI.Icons.AvWebAsset; // require('material-ui/lib/svg-icon/av/web-asset');
    export import AvWeb = __MaterialUI.Icons.AvWeb; // require('material-ui/lib/svg-icon/av/web');
    export import CommunicationBusiness = __MaterialUI.Icons.CommunicationBusiness; // require('material-ui/lib/svg-icon/communication/business');
    export import CommunicationCallEnd = __MaterialUI.Icons.CommunicationCallEnd; // require('material-ui/lib/svg-icon/communication/call-end');
    export import CommunicationCallMade = __MaterialUI.Icons.CommunicationCallMade; // require('material-ui/lib/svg-icon/communication/call-made');
    export import CommunicationCall = __MaterialUI.Icons.CommunicationCall; // require('material-ui/lib/svg-icon/communication/call');
    export import CommunicationCallMerge = __MaterialUI.Icons.CommunicationCallMerge; // require('material-ui/lib/svg-icon/communication/call-merge');
    export import CommunicationCallMissed = __MaterialUI.Icons.CommunicationCallMissed; // require('material-ui/lib/svg-icon/communication/call-missed');
    export import CommunicationCallMissedOutgoing = __MaterialUI.Icons.CommunicationCallMissedOutgoing; // require('material-ui/lib/svg-icon/communication/call-missed-outgoing');
    export import CommunicationCallReceived = __MaterialUI.Icons.CommunicationCallReceived; // require('material-ui/lib/svg-icon/communication/call-received');
    export import CommunicationCallSplit = __MaterialUI.Icons.CommunicationCallSplit; // require('material-ui/lib/svg-icon/communication/call-split');
    export import CommunicationChatBubble = __MaterialUI.Icons.CommunicationChatBubble; // require('material-ui/lib/svg-icon/communication/chat-bubble');
    export import CommunicationChatBubbleOutline = __MaterialUI.Icons.CommunicationChatBubbleOutline; // require('material-ui/lib/svg-icon/communication/chat-bubble-outline');
    export import CommunicationChat = __MaterialUI.Icons.CommunicationChat; // require('material-ui/lib/svg-icon/communication/chat');
    export import CommunicationClearAll = __MaterialUI.Icons.CommunicationClearAll; // require('material-ui/lib/svg-icon/communication/clear-all');
    export import CommunicationComment = __MaterialUI.Icons.CommunicationComment; // require('material-ui/lib/svg-icon/communication/comment');
    export import CommunicationContactMail = __MaterialUI.Icons.CommunicationContactMail; // require('material-ui/lib/svg-icon/communication/contact-mail');
    export import CommunicationContactPhone = __MaterialUI.Icons.CommunicationContactPhone; // require('material-ui/lib/svg-icon/communication/contact-phone');
    export import CommunicationContacts = __MaterialUI.Icons.CommunicationContacts; // require('material-ui/lib/svg-icon/communication/contacts');
    export import CommunicationDialerSip = __MaterialUI.Icons.CommunicationDialerSip; // require('material-ui/lib/svg-icon/communication/dialer-sip');
    export import CommunicationDialpad = __MaterialUI.Icons.CommunicationDialpad; // require('material-ui/lib/svg-icon/communication/dialpad');
    export import CommunicationEmail = __MaterialUI.Icons.CommunicationEmail; // require('material-ui/lib/svg-icon/communication/email');
    export import CommunicationForum = __MaterialUI.Icons.CommunicationForum; // require('material-ui/lib/svg-icon/communication/forum');
    export import CommunicationImportContacts = __MaterialUI.Icons.CommunicationImportContacts; // require('material-ui/lib/svg-icon/communication/import-contacts');
    export import CommunicationImportExport = __MaterialUI.Icons.CommunicationImportExport; // require('material-ui/lib/svg-icon/communication/import-export');
    export import CommunicationInvertColorsOff = __MaterialUI.Icons.CommunicationInvertColorsOff; // require('material-ui/lib/svg-icon/communication/invert-colors-off');
    export import CommunicationLiveHelp = __MaterialUI.Icons.CommunicationLiveHelp; // require('material-ui/lib/svg-icon/communication/live-help');
    export import CommunicationLocationOff = __MaterialUI.Icons.CommunicationLocationOff; // require('material-ui/lib/svg-icon/communication/location-off');
    export import CommunicationLocationOn = __MaterialUI.Icons.CommunicationLocationOn; // require('material-ui/lib/svg-icon/communication/location-on');
    export import CommunicationMailOutline = __MaterialUI.Icons.CommunicationMailOutline; // require('material-ui/lib/svg-icon/communication/mail-outline');
    export import CommunicationMessage = __MaterialUI.Icons.CommunicationMessage; // require('material-ui/lib/svg-icon/communication/message');
    export import CommunicationNoSim = __MaterialUI.Icons.CommunicationNoSim; // require('material-ui/lib/svg-icon/communication/no-sim');
    export import CommunicationPhonelinkErase = __MaterialUI.Icons.CommunicationPhonelinkErase; // require('material-ui/lib/svg-icon/communication/phonelink-erase');
    export import CommunicationPhonelinkLock = __MaterialUI.Icons.CommunicationPhonelinkLock; // require('material-ui/lib/svg-icon/communication/phonelink-lock');
    export import CommunicationPhonelinkRing = __MaterialUI.Icons.CommunicationPhonelinkRing; // require('material-ui/lib/svg-icon/communication/phonelink-ring');
    export import CommunicationPhonelinkSetup = __MaterialUI.Icons.CommunicationPhonelinkSetup; // require('material-ui/lib/svg-icon/communication/phonelink-setup');
    export import CommunicationPhone = __MaterialUI.Icons.CommunicationPhone; // require('material-ui/lib/svg-icon/communication/phone');
    export import CommunicationPortableWifiOff = __MaterialUI.Icons.CommunicationPortableWifiOff; // require('material-ui/lib/svg-icon/communication/portable-wifi-off');
    export import CommunicationPresentToAll = __MaterialUI.Icons.CommunicationPresentToAll; // require('material-ui/lib/svg-icon/communication/present-to-all');
    export import CommunicationRingVolume = __MaterialUI.Icons.CommunicationRingVolume; // require('material-ui/lib/svg-icon/communication/ring-volume');
    export import CommunicationScreenShare = __MaterialUI.Icons.CommunicationScreenShare; // require('material-ui/lib/svg-icon/communication/screen-share');
    export import CommunicationSpeakerPhone = __MaterialUI.Icons.CommunicationSpeakerPhone; // require('material-ui/lib/svg-icon/communication/speaker-phone');
    export import CommunicationStayCurrentLandscape = __MaterialUI.Icons.CommunicationStayCurrentLandscape; // require('material-ui/lib/svg-icon/communication/stay-current-landscape');
    export import CommunicationStayCurrentPortrait = __MaterialUI.Icons.CommunicationStayCurrentPortrait; // require('material-ui/lib/svg-icon/communication/stay-current-portrait');
    export import CommunicationStayPrimaryLandscape = __MaterialUI.Icons.CommunicationStayPrimaryLandscape; // require('material-ui/lib/svg-icon/communication/stay-primary-landscape');
    export import CommunicationStayPrimaryPortrait = __MaterialUI.Icons.CommunicationStayPrimaryPortrait; // require('material-ui/lib/svg-icon/communication/stay-primary-portrait');
    export import CommunicationStopScreenShare = __MaterialUI.Icons.CommunicationStopScreenShare; // require('material-ui/lib/svg-icon/communication/stop-screen-share');
    export import CommunicationSwapCalls = __MaterialUI.Icons.CommunicationSwapCalls; // require('material-ui/lib/svg-icon/communication/swap-calls');
    export import CommunicationTactMail = __MaterialUI.Icons.CommunicationTactMail; // require('material-ui/lib/svg-icon/communication/tact-mail');
    export import CommunicationTextsms = __MaterialUI.Icons.CommunicationTextsms; // require('material-ui/lib/svg-icon/communication/textsms');
    export import CommunicationVoicemail = __MaterialUI.Icons.CommunicationVoicemail; // require('material-ui/lib/svg-icon/communication/voicemail');
    export import CommunicationVpnKey = __MaterialUI.Icons.CommunicationVpnKey; // require('material-ui/lib/svg-icon/communication/vpn-key');
    export import ContentAddBox = __MaterialUI.Icons.ContentAddBox; // require('material-ui/lib/svg-icon/content/add-box');
    export import ContentAddCircle = __MaterialUI.Icons.ContentAddCircle; // require('material-ui/lib/svg-icon/content/add-circle');
    export import ContentAddCircleOutline = __MaterialUI.Icons.ContentAddCircleOutline; // require('material-ui/lib/svg-icon/content/add-circle-outline');
    export import ContentAdd = __MaterialUI.Icons.ContentAdd; // require('material-ui/lib/svg-icon/content/add');
    export import ContentArchive = __MaterialUI.Icons.ContentArchive; // require('material-ui/lib/svg-icon/content/archive');
    export import ContentBackspace = __MaterialUI.Icons.ContentBackspace; // require('material-ui/lib/svg-icon/content/backspace');
    export import ContentBlock = __MaterialUI.Icons.ContentBlock; // require('material-ui/lib/svg-icon/content/block');
    export import ContentClear = __MaterialUI.Icons.ContentClear; // require('material-ui/lib/svg-icon/content/clear');
    export import ContentContentCopy = __MaterialUI.Icons.ContentContentCopy; // require('material-ui/lib/svg-icon/content/content-copy');
    export import ContentContentCut = __MaterialUI.Icons.ContentContentCut; // require('material-ui/lib/svg-icon/content/content-cut');
    export import ContentContentPaste = __MaterialUI.Icons.ContentContentPaste; // require('material-ui/lib/svg-icon/content/content-paste');
    export import ContentCreate = __MaterialUI.Icons.ContentCreate; // require('material-ui/lib/svg-icon/content/create');
    export import ContentDrafts = __MaterialUI.Icons.ContentDrafts; // require('material-ui/lib/svg-icon/content/drafts');
    export import ContentFilterList = __MaterialUI.Icons.ContentFilterList; // require('material-ui/lib/svg-icon/content/filter-list');
    export import ContentFlag = __MaterialUI.Icons.ContentFlag; // require('material-ui/lib/svg-icon/content/flag');
    export import ContentFontDownload = __MaterialUI.Icons.ContentFontDownload; // require('material-ui/lib/svg-icon/content/font-download');
    export import ContentForward = __MaterialUI.Icons.ContentForward; // require('material-ui/lib/svg-icon/content/forward');
    export import ContentGesture = __MaterialUI.Icons.ContentGesture; // require('material-ui/lib/svg-icon/content/gesture');
    export import ContentInbox = __MaterialUI.Icons.ContentInbox; // require('material-ui/lib/svg-icon/content/inbox');
    export import ContentLink = __MaterialUI.Icons.ContentLink; // require('material-ui/lib/svg-icon/content/link');
    export import ContentMail = __MaterialUI.Icons.ContentMail; // require('material-ui/lib/svg-icon/content/mail');
    export import ContentMarkunread = __MaterialUI.Icons.ContentMarkunread; // require('material-ui/lib/svg-icon/content/markunread');
    export import ContentMoveToInbox = __MaterialUI.Icons.ContentMoveToInbox; // require('material-ui/lib/svg-icon/content/move-to-inbox');
    export import ContentNextWeek = __MaterialUI.Icons.ContentNextWeek; // require('material-ui/lib/svg-icon/content/next-week');
    export import ContentRedo = __MaterialUI.Icons.ContentRedo; // require('material-ui/lib/svg-icon/content/redo');
    export import ContentRemoveCircle = __MaterialUI.Icons.ContentRemoveCircle; // require('material-ui/lib/svg-icon/content/remove-circle');
    export import ContentRemoveCircleOutline = __MaterialUI.Icons.ContentRemoveCircleOutline; // require('material-ui/lib/svg-icon/content/remove-circle-outline');
    export import ContentRemove = __MaterialUI.Icons.ContentRemove; // require('material-ui/lib/svg-icon/content/remove');
    export import ContentReplyAll = __MaterialUI.Icons.ContentReplyAll; // require('material-ui/lib/svg-icon/content/reply-all');
    export import ContentReply = __MaterialUI.Icons.ContentReply; // require('material-ui/lib/svg-icon/content/reply');
    export import ContentReport = __MaterialUI.Icons.ContentReport; // require('material-ui/lib/svg-icon/content/report');
    export import ContentSave = __MaterialUI.Icons.ContentSave; // require('material-ui/lib/svg-icon/content/save');
    export import ContentSelectAll = __MaterialUI.Icons.ContentSelectAll; // require('material-ui/lib/svg-icon/content/select-all');
    export import ContentSend = __MaterialUI.Icons.ContentSend; // require('material-ui/lib/svg-icon/content/send');
    export import ContentSort = __MaterialUI.Icons.ContentSort; // require('material-ui/lib/svg-icon/content/sort');
    export import ContentTextFormat = __MaterialUI.Icons.ContentTextFormat; // require('material-ui/lib/svg-icon/content/text-format');
    export import ContentUnarchive = __MaterialUI.Icons.ContentUnarchive; // require('material-ui/lib/svg-icon/content/unarchive');
    export import ContentUndo = __MaterialUI.Icons.ContentUndo; // require('material-ui/lib/svg-icon/content/undo');
    export import ContentWeekend = __MaterialUI.Icons.ContentWeekend; // require('material-ui/lib/svg-icon/content/weekend');
    export import DeviceAccessAlarm = __MaterialUI.Icons.DeviceAccessAlarm; // require('material-ui/lib/svg-icon/device/access-alarm');
    export import DeviceAccessAlarms = __MaterialUI.Icons.DeviceAccessAlarms; // require('material-ui/lib/svg-icon/device/access-alarms');
    export import DeviceAccessTime = __MaterialUI.Icons.DeviceAccessTime; // require('material-ui/lib/svg-icon/device/access-time');
    export import DeviceAddAlarm = __MaterialUI.Icons.DeviceAddAlarm; // require('material-ui/lib/svg-icon/device/add-alarm');
    export import DeviceAirplanemodeActive = __MaterialUI.Icons.DeviceAirplanemodeActive; // require('material-ui/lib/svg-icon/device/airplanemode-active');
    export import DeviceAirplanemodeInactive = __MaterialUI.Icons.DeviceAirplanemodeInactive; // require('material-ui/lib/svg-icon/device/airplanemode-inactive');
    export import DeviceBattery20 = __MaterialUI.Icons.DeviceBattery20; // require('material-ui/lib/svg-icon/device/battery-20');
    export import DeviceBattery30 = __MaterialUI.Icons.DeviceBattery30; // require('material-ui/lib/svg-icon/device/battery-30');
    export import DeviceBattery50 = __MaterialUI.Icons.DeviceBattery50; // require('material-ui/lib/svg-icon/device/battery-50');
    export import DeviceBattery60 = __MaterialUI.Icons.DeviceBattery60; // require('material-ui/lib/svg-icon/device/battery-60');
    export import DeviceBattery80 = __MaterialUI.Icons.DeviceBattery80; // require('material-ui/lib/svg-icon/device/battery-80');
    export import DeviceBattery90 = __MaterialUI.Icons.DeviceBattery90; // require('material-ui/lib/svg-icon/device/battery-90');
    export import DeviceBatteryAlert = __MaterialUI.Icons.DeviceBatteryAlert; // require('material-ui/lib/svg-icon/device/battery-alert');
    export import DeviceBatteryCharging20 = __MaterialUI.Icons.DeviceBatteryCharging20; // require('material-ui/lib/svg-icon/device/battery-charging-20');
    export import DeviceBatteryCharging30 = __MaterialUI.Icons.DeviceBatteryCharging30; // require('material-ui/lib/svg-icon/device/battery-charging-30');
    export import DeviceBatteryCharging50 = __MaterialUI.Icons.DeviceBatteryCharging50; // require('material-ui/lib/svg-icon/device/battery-charging-50');
    export import DeviceBatteryCharging60 = __MaterialUI.Icons.DeviceBatteryCharging60; // require('material-ui/lib/svg-icon/device/battery-charging-60');
    export import DeviceBatteryCharging80 = __MaterialUI.Icons.DeviceBatteryCharging80; // require('material-ui/lib/svg-icon/device/battery-charging-80');
    export import DeviceBatteryCharging90 = __MaterialUI.Icons.DeviceBatteryCharging90; // require('material-ui/lib/svg-icon/device/battery-charging-90');
    export import DeviceBatteryChargingFull = __MaterialUI.Icons.DeviceBatteryChargingFull; // require('material-ui/lib/svg-icon/device/battery-charging-full');
    export import DeviceBatteryFull = __MaterialUI.Icons.DeviceBatteryFull; // require('material-ui/lib/svg-icon/device/battery-full');
    export import DeviceBatteryStd = __MaterialUI.Icons.DeviceBatteryStd; // require('material-ui/lib/svg-icon/device/battery-std');
    export import DeviceBatteryUnknown = __MaterialUI.Icons.DeviceBatteryUnknown; // require('material-ui/lib/svg-icon/device/battery-unknown');
    export import DeviceBluetoothConnected = __MaterialUI.Icons.DeviceBluetoothConnected; // require('material-ui/lib/svg-icon/device/bluetooth-connected');
    export import DeviceBluetoothDisabled = __MaterialUI.Icons.DeviceBluetoothDisabled; // require('material-ui/lib/svg-icon/device/bluetooth-disabled');
    export import DeviceBluetooth = __MaterialUI.Icons.DeviceBluetooth; // require('material-ui/lib/svg-icon/device/bluetooth');
    export import DeviceBluetoothSearching = __MaterialUI.Icons.DeviceBluetoothSearching; // require('material-ui/lib/svg-icon/device/bluetooth-searching');
    export import DeviceBrightnessAuto = __MaterialUI.Icons.DeviceBrightnessAuto; // require('material-ui/lib/svg-icon/device/brightness-auto');
    export import DeviceBrightnessHigh = __MaterialUI.Icons.DeviceBrightnessHigh; // require('material-ui/lib/svg-icon/device/brightness-high');
    export import DeviceBrightnessLow = __MaterialUI.Icons.DeviceBrightnessLow; // require('material-ui/lib/svg-icon/device/brightness-low');
    export import DeviceBrightnessMedium = __MaterialUI.Icons.DeviceBrightnessMedium; // require('material-ui/lib/svg-icon/device/brightness-medium');
    export import DeviceDataUsage = __MaterialUI.Icons.DeviceDataUsage; // require('material-ui/lib/svg-icon/device/data-usage');
    export import DeviceDeveloperMode = __MaterialUI.Icons.DeviceDeveloperMode; // require('material-ui/lib/svg-icon/device/developer-mode');
    export import DeviceDevices = __MaterialUI.Icons.DeviceDevices; // require('material-ui/lib/svg-icon/device/devices');
    export import DeviceDvr = __MaterialUI.Icons.DeviceDvr; // require('material-ui/lib/svg-icon/device/dvr');
    export import DeviceGpsFixed = __MaterialUI.Icons.DeviceGpsFixed; // require('material-ui/lib/svg-icon/device/gps-fixed');
    export import DeviceGpsNotFixed = __MaterialUI.Icons.DeviceGpsNotFixed; // require('material-ui/lib/svg-icon/device/gps-not-fixed');
    export import DeviceGpsOff = __MaterialUI.Icons.DeviceGpsOff; // require('material-ui/lib/svg-icon/device/gps-off');
    export import DeviceGraphicEq = __MaterialUI.Icons.DeviceGraphicEq; // require('material-ui/lib/svg-icon/device/graphic-eq');
    export import DeviceLocationDisabled = __MaterialUI.Icons.DeviceLocationDisabled; // require('material-ui/lib/svg-icon/device/location-disabled');
    export import DeviceLocationSearching = __MaterialUI.Icons.DeviceLocationSearching; // require('material-ui/lib/svg-icon/device/location-searching');
    export import DeviceNetworkCell = __MaterialUI.Icons.DeviceNetworkCell; // require('material-ui/lib/svg-icon/device/network-cell');
    export import DeviceNetworkWifi = __MaterialUI.Icons.DeviceNetworkWifi; // require('material-ui/lib/svg-icon/device/network-wifi');
    export import DeviceNfc = __MaterialUI.Icons.DeviceNfc; // require('material-ui/lib/svg-icon/device/nfc');
    export import DeviceScreenLockLandscape = __MaterialUI.Icons.DeviceScreenLockLandscape; // require('material-ui/lib/svg-icon/device/screen-lock-landscape');
    export import DeviceScreenLockPortrait = __MaterialUI.Icons.DeviceScreenLockPortrait; // require('material-ui/lib/svg-icon/device/screen-lock-portrait');
    export import DeviceScreenLockRotation = __MaterialUI.Icons.DeviceScreenLockRotation; // require('material-ui/lib/svg-icon/device/screen-lock-rotation');
    export import DeviceScreenRotation = __MaterialUI.Icons.DeviceScreenRotation; // require('material-ui/lib/svg-icon/device/screen-rotation');
    export import DeviceSdStorage = __MaterialUI.Icons.DeviceSdStorage; // require('material-ui/lib/svg-icon/device/sd-storage');
    export import DeviceSettingsSystemDaydream = __MaterialUI.Icons.DeviceSettingsSystemDaydream; // require('material-ui/lib/svg-icon/device/settings-system-daydream');
    export import DeviceSignalCellular0Bar = __MaterialUI.Icons.DeviceSignalCellular0Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-0-bar');
    export import DeviceSignalCellular1Bar = __MaterialUI.Icons.DeviceSignalCellular1Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-1-bar');
    export import DeviceSignalCellular2Bar = __MaterialUI.Icons.DeviceSignalCellular2Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-2-bar');
    export import DeviceSignalCellular3Bar = __MaterialUI.Icons.DeviceSignalCellular3Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-3-bar');
    export import DeviceSignalCellular4Bar = __MaterialUI.Icons.DeviceSignalCellular4Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-4-bar');
    export import DeviceSignalCellularConnectedNoInternet0Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet0Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-connected-no-internet-0-bar');
    export import DeviceSignalCellularConnectedNoInternet1Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet1Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-connected-no-internet-1-bar');
    export import DeviceSignalCellularConnectedNoInternet2Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet2Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-connected-no-internet-2-bar');
    export import DeviceSignalCellularConnectedNoInternet3Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet3Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-connected-no-internet-3-bar');
    export import DeviceSignalCellularConnectedNoInternet4Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet4Bar; // require('material-ui/lib/svg-icon/device/signal-cellular-connected-no-internet-4-bar');
    export import DeviceSignalCellularNoSim = __MaterialUI.Icons.DeviceSignalCellularNoSim; // require('material-ui/lib/svg-icon/device/signal-cellular-no-sim');
    export import DeviceSignalCellularNull = __MaterialUI.Icons.DeviceSignalCellularNull; // require('material-ui/lib/svg-icon/device/signal-cellular-null');
    export import DeviceSignalCellularOff = __MaterialUI.Icons.DeviceSignalCellularOff; // require('material-ui/lib/svg-icon/device/signal-cellular-off');
    export import DeviceSignalWifi0Bar = __MaterialUI.Icons.DeviceSignalWifi0Bar; // require('material-ui/lib/svg-icon/device/signal-wifi-0-bar');
    export import DeviceSignalWifi1BarLock = __MaterialUI.Icons.DeviceSignalWifi1BarLock; // require('material-ui/lib/svg-icon/device/signal-wifi-1-bar-lock');
    export import DeviceSignalWifi1Bar = __MaterialUI.Icons.DeviceSignalWifi1Bar; // require('material-ui/lib/svg-icon/device/signal-wifi-1-bar');
    export import DeviceSignalWifi2BarLock = __MaterialUI.Icons.DeviceSignalWifi2BarLock; // require('material-ui/lib/svg-icon/device/signal-wifi-2-bar-lock');
    export import DeviceSignalWifi2Bar = __MaterialUI.Icons.DeviceSignalWifi2Bar; // require('material-ui/lib/svg-icon/device/signal-wifi-2-bar');
    export import DeviceSignalWifi3BarLock = __MaterialUI.Icons.DeviceSignalWifi3BarLock; // require('material-ui/lib/svg-icon/device/signal-wifi-3-bar-lock');
    export import DeviceSignalWifi3Bar = __MaterialUI.Icons.DeviceSignalWifi3Bar; // require('material-ui/lib/svg-icon/device/signal-wifi-3-bar');
    export import DeviceSignalWifi4BarLock = __MaterialUI.Icons.DeviceSignalWifi4BarLock; // require('material-ui/lib/svg-icon/device/signal-wifi-4-bar-lock');
    export import DeviceSignalWifi4Bar = __MaterialUI.Icons.DeviceSignalWifi4Bar; // require('material-ui/lib/svg-icon/device/signal-wifi-4-bar');
    export import DeviceSignalWifiOff = __MaterialUI.Icons.DeviceSignalWifiOff; // require('material-ui/lib/svg-icon/device/signal-wifi-off');
    export import DeviceStorage = __MaterialUI.Icons.DeviceStorage; // require('material-ui/lib/svg-icon/device/storage');
    export import DeviceUsb = __MaterialUI.Icons.DeviceUsb; // require('material-ui/lib/svg-icon/device/usb');
    export import DeviceWallpaper = __MaterialUI.Icons.DeviceWallpaper; // require('material-ui/lib/svg-icon/device/wallpaper');
    export import DeviceWidgets = __MaterialUI.Icons.DeviceWidgets; // require('material-ui/lib/svg-icon/device/widgets');
    export import DeviceWifiLock = __MaterialUI.Icons.DeviceWifiLock; // require('material-ui/lib/svg-icon/device/wifi-lock');
    export import DeviceWifiTethering = __MaterialUI.Icons.DeviceWifiTethering; // require('material-ui/lib/svg-icon/device/wifi-tethering');
    export import EditorAttachFile = __MaterialUI.Icons.EditorAttachFile; // require('material-ui/lib/svg-icon/editor/attach-file');
    export import EditorAttachMoney = __MaterialUI.Icons.EditorAttachMoney; // require('material-ui/lib/svg-icon/editor/attach-money');
    export import EditorBorderAll = __MaterialUI.Icons.EditorBorderAll; // require('material-ui/lib/svg-icon/editor/border-all');
    export import EditorBorderBottom = __MaterialUI.Icons.EditorBorderBottom; // require('material-ui/lib/svg-icon/editor/border-bottom');
    export import EditorBorderClear = __MaterialUI.Icons.EditorBorderClear; // require('material-ui/lib/svg-icon/editor/border-clear');
    export import EditorBorderColor = __MaterialUI.Icons.EditorBorderColor; // require('material-ui/lib/svg-icon/editor/border-color');
    export import EditorBorderHorizontal = __MaterialUI.Icons.EditorBorderHorizontal; // require('material-ui/lib/svg-icon/editor/border-horizontal');
    export import EditorBorderInner = __MaterialUI.Icons.EditorBorderInner; // require('material-ui/lib/svg-icon/editor/border-inner');
    export import EditorBorderLeft = __MaterialUI.Icons.EditorBorderLeft; // require('material-ui/lib/svg-icon/editor/border-left');
    export import EditorBorderOuter = __MaterialUI.Icons.EditorBorderOuter; // require('material-ui/lib/svg-icon/editor/border-outer');
    export import EditorBorderRight = __MaterialUI.Icons.EditorBorderRight; // require('material-ui/lib/svg-icon/editor/border-right');
    export import EditorBorderStyle = __MaterialUI.Icons.EditorBorderStyle; // require('material-ui/lib/svg-icon/editor/border-style');
    export import EditorBorderTop = __MaterialUI.Icons.EditorBorderTop; // require('material-ui/lib/svg-icon/editor/border-top');
    export import EditorBorderVertical = __MaterialUI.Icons.EditorBorderVertical; // require('material-ui/lib/svg-icon/editor/border-vertical');
    export import EditorDragHandle = __MaterialUI.Icons.EditorDragHandle; // require('material-ui/lib/svg-icon/editor/drag-handle');
    export import EditorFormatAlignCenter = __MaterialUI.Icons.EditorFormatAlignCenter; // require('material-ui/lib/svg-icon/editor/format-align-center');
    export import EditorFormatAlignJustify = __MaterialUI.Icons.EditorFormatAlignJustify; // require('material-ui/lib/svg-icon/editor/format-align-justify');
    export import EditorFormatAlignLeft = __MaterialUI.Icons.EditorFormatAlignLeft; // require('material-ui/lib/svg-icon/editor/format-align-left');
    export import EditorFormatAlignRight = __MaterialUI.Icons.EditorFormatAlignRight; // require('material-ui/lib/svg-icon/editor/format-align-right');
    export import EditorFormatBold = __MaterialUI.Icons.EditorFormatBold; // require('material-ui/lib/svg-icon/editor/format-bold');
    export import EditorFormatClear = __MaterialUI.Icons.EditorFormatClear; // require('material-ui/lib/svg-icon/editor/format-clear');
    export import EditorFormatColorFill = __MaterialUI.Icons.EditorFormatColorFill; // require('material-ui/lib/svg-icon/editor/format-color-fill');
    export import EditorFormatColorReset = __MaterialUI.Icons.EditorFormatColorReset; // require('material-ui/lib/svg-icon/editor/format-color-reset');
    export import EditorFormatColorText = __MaterialUI.Icons.EditorFormatColorText; // require('material-ui/lib/svg-icon/editor/format-color-text');
    export import EditorFormatIndentDecrease = __MaterialUI.Icons.EditorFormatIndentDecrease; // require('material-ui/lib/svg-icon/editor/format-indent-decrease');
    export import EditorFormatIndentIncrease = __MaterialUI.Icons.EditorFormatIndentIncrease; // require('material-ui/lib/svg-icon/editor/format-indent-increase');
    export import EditorFormatItalic = __MaterialUI.Icons.EditorFormatItalic; // require('material-ui/lib/svg-icon/editor/format-italic');
    export import EditorFormatLineSpacing = __MaterialUI.Icons.EditorFormatLineSpacing; // require('material-ui/lib/svg-icon/editor/format-line-spacing');
    export import EditorFormatListBulleted = __MaterialUI.Icons.EditorFormatListBulleted; // require('material-ui/lib/svg-icon/editor/format-list-bulleted');
    export import EditorFormatListNumbered = __MaterialUI.Icons.EditorFormatListNumbered; // require('material-ui/lib/svg-icon/editor/format-list-numbered');
    export import EditorFormatPaint = __MaterialUI.Icons.EditorFormatPaint; // require('material-ui/lib/svg-icon/editor/format-paint');
    export import EditorFormatQuote = __MaterialUI.Icons.EditorFormatQuote; // require('material-ui/lib/svg-icon/editor/format-quote');
    export import EditorFormatShapes = __MaterialUI.Icons.EditorFormatShapes; // require('material-ui/lib/svg-icon/editor/format-shapes');
    export import EditorFormatSize = __MaterialUI.Icons.EditorFormatSize; // require('material-ui/lib/svg-icon/editor/format-size');
    export import EditorFormatStrikethrough = __MaterialUI.Icons.EditorFormatStrikethrough; // require('material-ui/lib/svg-icon/editor/format-strikethrough');
    export import EditorFormatTextdirectionLToR = __MaterialUI.Icons.EditorFormatTextdirectionLToR; // require('material-ui/lib/svg-icon/editor/format-textdirection-l-to-r');
    export import EditorFormatTextdirectionRToL = __MaterialUI.Icons.EditorFormatTextdirectionRToL; // require('material-ui/lib/svg-icon/editor/format-textdirection-r-to-l');
    export import EditorFormatUnderlined = __MaterialUI.Icons.EditorFormatUnderlined; // require('material-ui/lib/svg-icon/editor/format-underlined');
    export import EditorFunctions = __MaterialUI.Icons.EditorFunctions; // require('material-ui/lib/svg-icon/editor/functions');
    export import EditorHighlight = __MaterialUI.Icons.EditorHighlight; // require('material-ui/lib/svg-icon/editor/highlight');
    export import EditorInsertChart = __MaterialUI.Icons.EditorInsertChart; // require('material-ui/lib/svg-icon/editor/insert-chart');
    export import EditorInsertComment = __MaterialUI.Icons.EditorInsertComment; // require('material-ui/lib/svg-icon/editor/insert-comment');
    export import EditorInsertDriveFile = __MaterialUI.Icons.EditorInsertDriveFile; // require('material-ui/lib/svg-icon/editor/insert-drive-file');
    export import EditorInsertEmoticon = __MaterialUI.Icons.EditorInsertEmoticon; // require('material-ui/lib/svg-icon/editor/insert-emoticon');
    export import EditorInsertInvitation = __MaterialUI.Icons.EditorInsertInvitation; // require('material-ui/lib/svg-icon/editor/insert-invitation');
    export import EditorInsertLink = __MaterialUI.Icons.EditorInsertLink; // require('material-ui/lib/svg-icon/editor/insert-link');
    export import EditorInsertPhoto = __MaterialUI.Icons.EditorInsertPhoto; // require('material-ui/lib/svg-icon/editor/insert-photo');
    export import EditorLinearScale = __MaterialUI.Icons.EditorLinearScale; // require('material-ui/lib/svg-icon/editor/linear-scale');
    export import EditorMergeType = __MaterialUI.Icons.EditorMergeType; // require('material-ui/lib/svg-icon/editor/merge-type');
    export import EditorModeComment = __MaterialUI.Icons.EditorModeComment; // require('material-ui/lib/svg-icon/editor/mode-comment');
    export import EditorModeEdit = __MaterialUI.Icons.EditorModeEdit; // require('material-ui/lib/svg-icon/editor/mode-edit');
    export import EditorMoneyOff = __MaterialUI.Icons.EditorMoneyOff; // require('material-ui/lib/svg-icon/editor/money-off');
    export import EditorPublish = __MaterialUI.Icons.EditorPublish; // require('material-ui/lib/svg-icon/editor/publish');
    export import EditorShortText = __MaterialUI.Icons.EditorShortText; // require('material-ui/lib/svg-icon/editor/short-text');
    export import EditorSpaceBar = __MaterialUI.Icons.EditorSpaceBar; // require('material-ui/lib/svg-icon/editor/space-bar');
    export import EditorStrikethroughS = __MaterialUI.Icons.EditorStrikethroughS; // require('material-ui/lib/svg-icon/editor/strikethrough-s');
    export import EditorTextFields = __MaterialUI.Icons.EditorTextFields; // require('material-ui/lib/svg-icon/editor/text-fields');
    export import EditorVerticalAlignBottom = __MaterialUI.Icons.EditorVerticalAlignBottom; // require('material-ui/lib/svg-icon/editor/vertical-align-bottom');
    export import EditorVerticalAlignCenter = __MaterialUI.Icons.EditorVerticalAlignCenter; // require('material-ui/lib/svg-icon/editor/vertical-align-center');
    export import EditorVerticalAlignTop = __MaterialUI.Icons.EditorVerticalAlignTop; // require('material-ui/lib/svg-icon/editor/vertical-align-top');
    export import EditorWrapText = __MaterialUI.Icons.EditorWrapText; // require('material-ui/lib/svg-icon/editor/wrap-text');
    export import FileAttachment = __MaterialUI.Icons.FileAttachment; // require('material-ui/lib/svg-icon/file/attachment');
    export import FileCloudCircle = __MaterialUI.Icons.FileCloudCircle; // require('material-ui/lib/svg-icon/file/cloud-circle');
    export import FileCloudDone = __MaterialUI.Icons.FileCloudDone; // require('material-ui/lib/svg-icon/file/cloud-done');
    export import FileCloudDownload = __MaterialUI.Icons.FileCloudDownload; // require('material-ui/lib/svg-icon/file/cloud-download');
    export import FileCloud = __MaterialUI.Icons.FileCloud; // require('material-ui/lib/svg-icon/file/cloud');
    export import FileCloudOff = __MaterialUI.Icons.FileCloudOff; // require('material-ui/lib/svg-icon/file/cloud-off');
    export import FileCloudQueue = __MaterialUI.Icons.FileCloudQueue; // require('material-ui/lib/svg-icon/file/cloud-queue');
    export import FileCloudUpload = __MaterialUI.Icons.FileCloudUpload; // require('material-ui/lib/svg-icon/file/cloud-upload');
    export import FileCreateNewFolder = __MaterialUI.Icons.FileCreateNewFolder; // require('material-ui/lib/svg-icon/file/create-new-folder');
    export import FileFileDownload = __MaterialUI.Icons.FileFileDownload; // require('material-ui/lib/svg-icon/file/file-download');
    export import FileFileUpload = __MaterialUI.Icons.FileFileUpload; // require('material-ui/lib/svg-icon/file/file-upload');
    export import FileFolder = __MaterialUI.Icons.FileFolder; // require('material-ui/lib/svg-icon/file/folder');
    export import FileFolderOpen = __MaterialUI.Icons.FileFolderOpen; // require('material-ui/lib/svg-icon/file/folder-open');
    export import FileFolderShared = __MaterialUI.Icons.FileFolderShared; // require('material-ui/lib/svg-icon/file/folder-shared');
    export import HardwareCastConnected = __MaterialUI.Icons.HardwareCastConnected; // require('material-ui/lib/svg-icon/hardware/cast-connected');
    export import HardwareCast = __MaterialUI.Icons.HardwareCast; // require('material-ui/lib/svg-icon/hardware/cast');
    export import HardwareComputer = __MaterialUI.Icons.HardwareComputer; // require('material-ui/lib/svg-icon/hardware/computer');
    export import HardwareDesktopMac = __MaterialUI.Icons.HardwareDesktopMac; // require('material-ui/lib/svg-icon/hardware/desktop-mac');
    export import HardwareDesktopWindows = __MaterialUI.Icons.HardwareDesktopWindows; // require('material-ui/lib/svg-icon/hardware/desktop-windows');
    export import HardwareDeveloperBoard = __MaterialUI.Icons.HardwareDeveloperBoard; // require('material-ui/lib/svg-icon/hardware/developer-board');
    export import HardwareDeviceHub = __MaterialUI.Icons.HardwareDeviceHub; // require('material-ui/lib/svg-icon/hardware/device-hub');
    export import HardwareDevicesOther = __MaterialUI.Icons.HardwareDevicesOther; // require('material-ui/lib/svg-icon/hardware/devices-other');
    export import HardwareDock = __MaterialUI.Icons.HardwareDock; // require('material-ui/lib/svg-icon/hardware/dock');
    export import HardwareGamepad = __MaterialUI.Icons.HardwareGamepad; // require('material-ui/lib/svg-icon/hardware/gamepad');
    export import HardwareHeadset = __MaterialUI.Icons.HardwareHeadset; // require('material-ui/lib/svg-icon/hardware/headset');
    export import HardwareHeadsetMic = __MaterialUI.Icons.HardwareHeadsetMic; // require('material-ui/lib/svg-icon/hardware/headset-mic');
    export import HardwareKeyboardArrowDown = __MaterialUI.Icons.HardwareKeyboardArrowDown; // require('material-ui/lib/svg-icon/hardware/keyboard-arrow-down');
    export import HardwareKeyboardArrowLeft = __MaterialUI.Icons.HardwareKeyboardArrowLeft; // require('material-ui/lib/svg-icon/hardware/keyboard-arrow-left');
    export import HardwareKeyboardArrowRight = __MaterialUI.Icons.HardwareKeyboardArrowRight; // require('material-ui/lib/svg-icon/hardware/keyboard-arrow-right');
    export import HardwareKeyboardArrowUp = __MaterialUI.Icons.HardwareKeyboardArrowUp; // require('material-ui/lib/svg-icon/hardware/keyboard-arrow-up');
    export import HardwareKeyboardBackspace = __MaterialUI.Icons.HardwareKeyboardBackspace; // require('material-ui/lib/svg-icon/hardware/keyboard-backspace');
    export import HardwareKeyboardCapslock = __MaterialUI.Icons.HardwareKeyboardCapslock; // require('material-ui/lib/svg-icon/hardware/keyboard-capslock');
    export import HardwareKeyboardHide = __MaterialUI.Icons.HardwareKeyboardHide; // require('material-ui/lib/svg-icon/hardware/keyboard-hide');
    export import HardwareKeyboard = __MaterialUI.Icons.HardwareKeyboard; // require('material-ui/lib/svg-icon/hardware/keyboard');
    export import HardwareKeyboardReturn = __MaterialUI.Icons.HardwareKeyboardReturn; // require('material-ui/lib/svg-icon/hardware/keyboard-return');
    export import HardwareKeyboardTab = __MaterialUI.Icons.HardwareKeyboardTab; // require('material-ui/lib/svg-icon/hardware/keyboard-tab');
    export import HardwareKeyboardVoice = __MaterialUI.Icons.HardwareKeyboardVoice; // require('material-ui/lib/svg-icon/hardware/keyboard-voice');
    export import HardwareLaptopChromebook = __MaterialUI.Icons.HardwareLaptopChromebook; // require('material-ui/lib/svg-icon/hardware/laptop-chromebook');
    export import HardwareLaptopMac = __MaterialUI.Icons.HardwareLaptopMac; // require('material-ui/lib/svg-icon/hardware/laptop-mac');
    export import HardwareLaptop = __MaterialUI.Icons.HardwareLaptop; // require('material-ui/lib/svg-icon/hardware/laptop');
    export import HardwareLaptopWindows = __MaterialUI.Icons.HardwareLaptopWindows; // require('material-ui/lib/svg-icon/hardware/laptop-windows');
    export import HardwareMemory = __MaterialUI.Icons.HardwareMemory; // require('material-ui/lib/svg-icon/hardware/memory');
    export import HardwareMouse = __MaterialUI.Icons.HardwareMouse; // require('material-ui/lib/svg-icon/hardware/mouse');
    export import HardwarePhoneAndroid = __MaterialUI.Icons.HardwarePhoneAndroid; // require('material-ui/lib/svg-icon/hardware/phone-android');
    export import HardwarePhoneIphone = __MaterialUI.Icons.HardwarePhoneIphone; // require('material-ui/lib/svg-icon/hardware/phone-iphone');
    export import HardwarePhonelink = __MaterialUI.Icons.HardwarePhonelink; // require('material-ui/lib/svg-icon/hardware/phonelink');
    export import HardwarePhonelinkOff = __MaterialUI.Icons.HardwarePhonelinkOff; // require('material-ui/lib/svg-icon/hardware/phonelink-off');
    export import HardwarePowerInput = __MaterialUI.Icons.HardwarePowerInput; // require('material-ui/lib/svg-icon/hardware/power-input');
    export import HardwareRouter = __MaterialUI.Icons.HardwareRouter; // require('material-ui/lib/svg-icon/hardware/router');
    export import HardwareScanner = __MaterialUI.Icons.HardwareScanner; // require('material-ui/lib/svg-icon/hardware/scanner');
    export import HardwareSecurity = __MaterialUI.Icons.HardwareSecurity; // require('material-ui/lib/svg-icon/hardware/security');
    export import HardwareSimCard = __MaterialUI.Icons.HardwareSimCard; // require('material-ui/lib/svg-icon/hardware/sim-card');
    export import HardwareSmartphone = __MaterialUI.Icons.HardwareSmartphone; // require('material-ui/lib/svg-icon/hardware/smartphone');
    export import HardwareSpeakerGroup = __MaterialUI.Icons.HardwareSpeakerGroup; // require('material-ui/lib/svg-icon/hardware/speaker-group');
    export import HardwareSpeaker = __MaterialUI.Icons.HardwareSpeaker; // require('material-ui/lib/svg-icon/hardware/speaker');
    export import HardwareTabletAndroid = __MaterialUI.Icons.HardwareTabletAndroid; // require('material-ui/lib/svg-icon/hardware/tablet-android');
    export import HardwareTabletMac = __MaterialUI.Icons.HardwareTabletMac; // require('material-ui/lib/svg-icon/hardware/tablet-mac');
    export import HardwareTablet = __MaterialUI.Icons.HardwareTablet; // require('material-ui/lib/svg-icon/hardware/tablet');
    export import HardwareToys = __MaterialUI.Icons.HardwareToys; // require('material-ui/lib/svg-icon/hardware/toys');
    export import HardwareTv = __MaterialUI.Icons.HardwareTv; // require('material-ui/lib/svg-icon/hardware/tv');
    export import HardwareVideogameAsset = __MaterialUI.Icons.HardwareVideogameAsset; // require('material-ui/lib/svg-icon/hardware/videogame-asset');
    export import HardwareWatch = __MaterialUI.Icons.HardwareWatch; // require('material-ui/lib/svg-icon/hardware/watch');
    export import ImageAddAPhoto = __MaterialUI.Icons.ImageAddAPhoto; // require('material-ui/lib/svg-icon/image/add-a-photo');
    export import ImageAddToPhotos = __MaterialUI.Icons.ImageAddToPhotos; // require('material-ui/lib/svg-icon/image/add-to-photos');
    export import ImageAdjust = __MaterialUI.Icons.ImageAdjust; // require('material-ui/lib/svg-icon/image/adjust');
    export import ImageAssistant = __MaterialUI.Icons.ImageAssistant; // require('material-ui/lib/svg-icon/image/assistant');
    export import ImageAssistantPhoto = __MaterialUI.Icons.ImageAssistantPhoto; // require('material-ui/lib/svg-icon/image/assistant-photo');
    export import ImageAudiotrack = __MaterialUI.Icons.ImageAudiotrack; // require('material-ui/lib/svg-icon/image/audiotrack');
    export import ImageBlurCircular = __MaterialUI.Icons.ImageBlurCircular; // require('material-ui/lib/svg-icon/image/blur-circular');
    export import ImageBlurLinear = __MaterialUI.Icons.ImageBlurLinear; // require('material-ui/lib/svg-icon/image/blur-linear');
    export import ImageBlurOff = __MaterialUI.Icons.ImageBlurOff; // require('material-ui/lib/svg-icon/image/blur-off');
    export import ImageBlurOn = __MaterialUI.Icons.ImageBlurOn; // require('material-ui/lib/svg-icon/image/blur-on');
    export import ImageBrightness1 = __MaterialUI.Icons.ImageBrightness1; // require('material-ui/lib/svg-icon/image/brightness-1');
    export import ImageBrightness2 = __MaterialUI.Icons.ImageBrightness2; // require('material-ui/lib/svg-icon/image/brightness-2');
    export import ImageBrightness3 = __MaterialUI.Icons.ImageBrightness3; // require('material-ui/lib/svg-icon/image/brightness-3');
    export import ImageBrightness4 = __MaterialUI.Icons.ImageBrightness4; // require('material-ui/lib/svg-icon/image/brightness-4');
    export import ImageBrightness5 = __MaterialUI.Icons.ImageBrightness5; // require('material-ui/lib/svg-icon/image/brightness-5');
    export import ImageBrightness6 = __MaterialUI.Icons.ImageBrightness6; // require('material-ui/lib/svg-icon/image/brightness-6');
    export import ImageBrightness7 = __MaterialUI.Icons.ImageBrightness7; // require('material-ui/lib/svg-icon/image/brightness-7');
    export import ImageBrokenImage = __MaterialUI.Icons.ImageBrokenImage; // require('material-ui/lib/svg-icon/image/broken-image');
    export import ImageBrush = __MaterialUI.Icons.ImageBrush; // require('material-ui/lib/svg-icon/image/brush');
    export import ImageCameraAlt = __MaterialUI.Icons.ImageCameraAlt; // require('material-ui/lib/svg-icon/image/camera-alt');
    export import ImageCameraFront = __MaterialUI.Icons.ImageCameraFront; // require('material-ui/lib/svg-icon/image/camera-front');
    export import ImageCamera = __MaterialUI.Icons.ImageCamera; // require('material-ui/lib/svg-icon/image/camera');
    export import ImageCameraRear = __MaterialUI.Icons.ImageCameraRear; // require('material-ui/lib/svg-icon/image/camera-rear');
    export import ImageCameraRoll = __MaterialUI.Icons.ImageCameraRoll; // require('material-ui/lib/svg-icon/image/camera-roll');
    export import ImageCenterFocusStrong = __MaterialUI.Icons.ImageCenterFocusStrong; // require('material-ui/lib/svg-icon/image/center-focus-strong');
    export import ImageCenterFocusWeak = __MaterialUI.Icons.ImageCenterFocusWeak; // require('material-ui/lib/svg-icon/image/center-focus-weak');
    export import ImageCollectionsBookmark = __MaterialUI.Icons.ImageCollectionsBookmark; // require('material-ui/lib/svg-icon/image/collections-bookmark');
    export import ImageCollections = __MaterialUI.Icons.ImageCollections; // require('material-ui/lib/svg-icon/image/collections');
    export import ImageColorize = __MaterialUI.Icons.ImageColorize; // require('material-ui/lib/svg-icon/image/colorize');
    export import ImageColorLens = __MaterialUI.Icons.ImageColorLens; // require('material-ui/lib/svg-icon/image/color-lens');
    export import ImageCompare = __MaterialUI.Icons.ImageCompare; // require('material-ui/lib/svg-icon/image/compare');
    export import ImageControlPointDuplicate = __MaterialUI.Icons.ImageControlPointDuplicate; // require('material-ui/lib/svg-icon/image/control-point-duplicate');
    export import ImageControlPoint = __MaterialUI.Icons.ImageControlPoint; // require('material-ui/lib/svg-icon/image/control-point');
    export import ImageCrop169 = __MaterialUI.Icons.ImageCrop169; // require('material-ui/lib/svg-icon/image/crop-16-9');
    export import ImageCrop32 = __MaterialUI.Icons.ImageCrop32; // require('material-ui/lib/svg-icon/image/crop-3-2');
    export import ImageCrop54 = __MaterialUI.Icons.ImageCrop54; // require('material-ui/lib/svg-icon/image/crop-5-4');
    export import ImageCrop75 = __MaterialUI.Icons.ImageCrop75; // require('material-ui/lib/svg-icon/image/crop-7-5');
    export import ImageCropDin = __MaterialUI.Icons.ImageCropDin; // require('material-ui/lib/svg-icon/image/crop-din');
    export import ImageCropFree = __MaterialUI.Icons.ImageCropFree; // require('material-ui/lib/svg-icon/image/crop-free');
    export import ImageCropLandscape = __MaterialUI.Icons.ImageCropLandscape; // require('material-ui/lib/svg-icon/image/crop-landscape');
    export import ImageCrop = __MaterialUI.Icons.ImageCrop; // require('material-ui/lib/svg-icon/image/crop');
    export import ImageCropOriginal = __MaterialUI.Icons.ImageCropOriginal; // require('material-ui/lib/svg-icon/image/crop-original');
    export import ImageCropPortrait = __MaterialUI.Icons.ImageCropPortrait; // require('material-ui/lib/svg-icon/image/crop-portrait');
    export import ImageCropRotate = __MaterialUI.Icons.ImageCropRotate; // require('material-ui/lib/svg-icon/image/crop-rotate');
    export import ImageCropSquare = __MaterialUI.Icons.ImageCropSquare; // require('material-ui/lib/svg-icon/image/crop-square');
    export import ImageDehaze = __MaterialUI.Icons.ImageDehaze; // require('material-ui/lib/svg-icon/image/dehaze');
    export import ImageDetails = __MaterialUI.Icons.ImageDetails; // require('material-ui/lib/svg-icon/image/details');
    export import ImageEdit = __MaterialUI.Icons.ImageEdit; // require('material-ui/lib/svg-icon/image/edit');
    export import ImageExposure = __MaterialUI.Icons.ImageExposure; // require('material-ui/lib/svg-icon/image/exposure');
    export import ImageExposureNeg1 = __MaterialUI.Icons.ImageExposureNeg1; // require('material-ui/lib/svg-icon/image/exposure-neg-1');
    export import ImageExposureNeg2 = __MaterialUI.Icons.ImageExposureNeg2; // require('material-ui/lib/svg-icon/image/exposure-neg-2');
    export import ImageExposurePlus1 = __MaterialUI.Icons.ImageExposurePlus1; // require('material-ui/lib/svg-icon/image/exposure-plus-1');
    export import ImageExposurePlus2 = __MaterialUI.Icons.ImageExposurePlus2; // require('material-ui/lib/svg-icon/image/exposure-plus-2');
    export import ImageExposureZero = __MaterialUI.Icons.ImageExposureZero; // require('material-ui/lib/svg-icon/image/exposure-zero');
    export import ImageFilter1 = __MaterialUI.Icons.ImageFilter1; // require('material-ui/lib/svg-icon/image/filter-1');
    export import ImageFilter2 = __MaterialUI.Icons.ImageFilter2; // require('material-ui/lib/svg-icon/image/filter-2');
    export import ImageFilter3 = __MaterialUI.Icons.ImageFilter3; // require('material-ui/lib/svg-icon/image/filter-3');
    export import ImageFilter4 = __MaterialUI.Icons.ImageFilter4; // require('material-ui/lib/svg-icon/image/filter-4');
    export import ImageFilter5 = __MaterialUI.Icons.ImageFilter5; // require('material-ui/lib/svg-icon/image/filter-5');
    export import ImageFilter6 = __MaterialUI.Icons.ImageFilter6; // require('material-ui/lib/svg-icon/image/filter-6');
    export import ImageFilter7 = __MaterialUI.Icons.ImageFilter7; // require('material-ui/lib/svg-icon/image/filter-7');
    export import ImageFilter8 = __MaterialUI.Icons.ImageFilter8; // require('material-ui/lib/svg-icon/image/filter-8');
    export import ImageFilter9 = __MaterialUI.Icons.ImageFilter9; // require('material-ui/lib/svg-icon/image/filter-9');
    export import ImageFilter9Plus = __MaterialUI.Icons.ImageFilter9Plus; // require('material-ui/lib/svg-icon/image/filter-9-plus');
    export import ImageFilterBAndW = __MaterialUI.Icons.ImageFilterBAndW; // require('material-ui/lib/svg-icon/image/filter-b-and-w');
    export import ImageFilterCenterFocus = __MaterialUI.Icons.ImageFilterCenterFocus; // require('material-ui/lib/svg-icon/image/filter-center-focus');
    export import ImageFilterDrama = __MaterialUI.Icons.ImageFilterDrama; // require('material-ui/lib/svg-icon/image/filter-drama');
    export import ImageFilterFrames = __MaterialUI.Icons.ImageFilterFrames; // require('material-ui/lib/svg-icon/image/filter-frames');
    export import ImageFilterHdr = __MaterialUI.Icons.ImageFilterHdr; // require('material-ui/lib/svg-icon/image/filter-hdr');
    export import ImageFilter = __MaterialUI.Icons.ImageFilter; // require('material-ui/lib/svg-icon/image/filter');
    export import ImageFilterNone = __MaterialUI.Icons.ImageFilterNone; // require('material-ui/lib/svg-icon/image/filter-none');
    export import ImageFilterTiltShift = __MaterialUI.Icons.ImageFilterTiltShift; // require('material-ui/lib/svg-icon/image/filter-tilt-shift');
    export import ImageFilterVintage = __MaterialUI.Icons.ImageFilterVintage; // require('material-ui/lib/svg-icon/image/filter-vintage');
    export import ImageFlare = __MaterialUI.Icons.ImageFlare; // require('material-ui/lib/svg-icon/image/flare');
    export import ImageFlashAuto = __MaterialUI.Icons.ImageFlashAuto; // require('material-ui/lib/svg-icon/image/flash-auto');
    export import ImageFlashOff = __MaterialUI.Icons.ImageFlashOff; // require('material-ui/lib/svg-icon/image/flash-off');
    export import ImageFlashOn = __MaterialUI.Icons.ImageFlashOn; // require('material-ui/lib/svg-icon/image/flash-on');
    export import ImageFlip = __MaterialUI.Icons.ImageFlip; // require('material-ui/lib/svg-icon/image/flip');
    export import ImageGradient = __MaterialUI.Icons.ImageGradient; // require('material-ui/lib/svg-icon/image/gradient');
    export import ImageGrain = __MaterialUI.Icons.ImageGrain; // require('material-ui/lib/svg-icon/image/grain');
    export import ImageGridOff = __MaterialUI.Icons.ImageGridOff; // require('material-ui/lib/svg-icon/image/grid-off');
    export import ImageGridOn = __MaterialUI.Icons.ImageGridOn; // require('material-ui/lib/svg-icon/image/grid-on');
    export import ImageHdrOff = __MaterialUI.Icons.ImageHdrOff; // require('material-ui/lib/svg-icon/image/hdr-off');
    export import ImageHdrOn = __MaterialUI.Icons.ImageHdrOn; // require('material-ui/lib/svg-icon/image/hdr-on');
    export import ImageHdrStrong = __MaterialUI.Icons.ImageHdrStrong; // require('material-ui/lib/svg-icon/image/hdr-strong');
    export import ImageHdrWeak = __MaterialUI.Icons.ImageHdrWeak; // require('material-ui/lib/svg-icon/image/hdr-weak');
    export import ImageHealing = __MaterialUI.Icons.ImageHealing; // require('material-ui/lib/svg-icon/image/healing');
    export import ImageImageAspectRatio = __MaterialUI.Icons.ImageImageAspectRatio; // require('material-ui/lib/svg-icon/image/image-aspect-ratio');
    export import ImageImage = __MaterialUI.Icons.ImageImage; // require('material-ui/lib/svg-icon/image/image');
    export import ImageIso = __MaterialUI.Icons.ImageIso; // require('material-ui/lib/svg-icon/image/iso');
    export import ImageLandscape = __MaterialUI.Icons.ImageLandscape; // require('material-ui/lib/svg-icon/image/landscape');
    export import ImageLeakAdd = __MaterialUI.Icons.ImageLeakAdd; // require('material-ui/lib/svg-icon/image/leak-add');
    export import ImageLeakRemove = __MaterialUI.Icons.ImageLeakRemove; // require('material-ui/lib/svg-icon/image/leak-remove');
    export import ImageLens = __MaterialUI.Icons.ImageLens; // require('material-ui/lib/svg-icon/image/lens');
    export import ImageLinkedCamera = __MaterialUI.Icons.ImageLinkedCamera; // require('material-ui/lib/svg-icon/image/linked-camera');
    export import ImageLooks3 = __MaterialUI.Icons.ImageLooks3; // require('material-ui/lib/svg-icon/image/looks-3');
    export import ImageLooks4 = __MaterialUI.Icons.ImageLooks4; // require('material-ui/lib/svg-icon/image/looks-4');
    export import ImageLooks5 = __MaterialUI.Icons.ImageLooks5; // require('material-ui/lib/svg-icon/image/looks-5');
    export import ImageLooks6 = __MaterialUI.Icons.ImageLooks6; // require('material-ui/lib/svg-icon/image/looks-6');
    export import ImageLooks = __MaterialUI.Icons.ImageLooks; // require('material-ui/lib/svg-icon/image/looks');
    export import ImageLooksOne = __MaterialUI.Icons.ImageLooksOne; // require('material-ui/lib/svg-icon/image/looks-one');
    export import ImageLooksTwo = __MaterialUI.Icons.ImageLooksTwo; // require('material-ui/lib/svg-icon/image/looks-two');
    export import ImageLoupe = __MaterialUI.Icons.ImageLoupe; // require('material-ui/lib/svg-icon/image/loupe');
    export import ImageMonochromePhotos = __MaterialUI.Icons.ImageMonochromePhotos; // require('material-ui/lib/svg-icon/image/monochrome-photos');
    export import ImageMovieCreation = __MaterialUI.Icons.ImageMovieCreation; // require('material-ui/lib/svg-icon/image/movie-creation');
    export import ImageMovieFilter = __MaterialUI.Icons.ImageMovieFilter; // require('material-ui/lib/svg-icon/image/movie-filter');
    export import ImageMusicNote = __MaterialUI.Icons.ImageMusicNote; // require('material-ui/lib/svg-icon/image/music-note');
    export import ImageNature = __MaterialUI.Icons.ImageNature; // require('material-ui/lib/svg-icon/image/nature');
    export import ImageNaturePeople = __MaterialUI.Icons.ImageNaturePeople; // require('material-ui/lib/svg-icon/image/nature-people');
    export import ImageNavigateBefore = __MaterialUI.Icons.ImageNavigateBefore; // require('material-ui/lib/svg-icon/image/navigate-before');
    export import ImageNavigateNext = __MaterialUI.Icons.ImageNavigateNext; // require('material-ui/lib/svg-icon/image/navigate-next');
    export import ImagePalette = __MaterialUI.Icons.ImagePalette; // require('material-ui/lib/svg-icon/image/palette');
    export import ImagePanoramaFishEye = __MaterialUI.Icons.ImagePanoramaFishEye; // require('material-ui/lib/svg-icon/image/panorama-fish-eye');
    export import ImagePanoramaHorizontal = __MaterialUI.Icons.ImagePanoramaHorizontal; // require('material-ui/lib/svg-icon/image/panorama-horizontal');
    export import ImagePanorama = __MaterialUI.Icons.ImagePanorama; // require('material-ui/lib/svg-icon/image/panorama');
    export import ImagePanoramaVertical = __MaterialUI.Icons.ImagePanoramaVertical; // require('material-ui/lib/svg-icon/image/panorama-vertical');
    export import ImagePanoramaWideAngle = __MaterialUI.Icons.ImagePanoramaWideAngle; // require('material-ui/lib/svg-icon/image/panorama-wide-angle');
    export import ImagePhotoAlbum = __MaterialUI.Icons.ImagePhotoAlbum; // require('material-ui/lib/svg-icon/image/photo-album');
    export import ImagePhotoCamera = __MaterialUI.Icons.ImagePhotoCamera; // require('material-ui/lib/svg-icon/image/photo-camera');
    export import ImagePhotoFilter = __MaterialUI.Icons.ImagePhotoFilter; // require('material-ui/lib/svg-icon/image/photo-filter');
    export import ImagePhotoLibrary = __MaterialUI.Icons.ImagePhotoLibrary; // require('material-ui/lib/svg-icon/image/photo-library');
    export import ImagePhoto = __MaterialUI.Icons.ImagePhoto; // require('material-ui/lib/svg-icon/image/photo');
    export import ImagePhotoSizeSelectActual = __MaterialUI.Icons.ImagePhotoSizeSelectActual; // require('material-ui/lib/svg-icon/image/photo-size-select-actual');
    export import ImagePhotoSizeSelectLarge = __MaterialUI.Icons.ImagePhotoSizeSelectLarge; // require('material-ui/lib/svg-icon/image/photo-size-select-large');
    export import ImagePhotoSizeSelectSmall = __MaterialUI.Icons.ImagePhotoSizeSelectSmall; // require('material-ui/lib/svg-icon/image/photo-size-select-small');
    export import ImagePictureAsPdf = __MaterialUI.Icons.ImagePictureAsPdf; // require('material-ui/lib/svg-icon/image/picture-as-pdf');
    export import ImagePortrait = __MaterialUI.Icons.ImagePortrait; // require('material-ui/lib/svg-icon/image/portrait');
    export import ImageRemoveRedEye = __MaterialUI.Icons.ImageRemoveRedEye; // require('material-ui/lib/svg-icon/image/remove-red-eye');
    export import ImageRotate90DegreesCcw = __MaterialUI.Icons.ImageRotate90DegreesCcw; // require('material-ui/lib/svg-icon/image/rotate-90-degrees-ccw');
    export import ImageRotateLeft = __MaterialUI.Icons.ImageRotateLeft; // require('material-ui/lib/svg-icon/image/rotate-left');
    export import ImageRotateRight = __MaterialUI.Icons.ImageRotateRight; // require('material-ui/lib/svg-icon/image/rotate-right');
    export import ImageSlideshow = __MaterialUI.Icons.ImageSlideshow; // require('material-ui/lib/svg-icon/image/slideshow');
    export import ImageStraighten = __MaterialUI.Icons.ImageStraighten; // require('material-ui/lib/svg-icon/image/straighten');
    export import ImageStyle = __MaterialUI.Icons.ImageStyle; // require('material-ui/lib/svg-icon/image/style');
    export import ImageSwitchCamera = __MaterialUI.Icons.ImageSwitchCamera; // require('material-ui/lib/svg-icon/image/switch-camera');
    export import ImageSwitchVideo = __MaterialUI.Icons.ImageSwitchVideo; // require('material-ui/lib/svg-icon/image/switch-video');
    export import ImageTagFaces = __MaterialUI.Icons.ImageTagFaces; // require('material-ui/lib/svg-icon/image/tag-faces');
    export import ImageTexture = __MaterialUI.Icons.ImageTexture; // require('material-ui/lib/svg-icon/image/texture');
    export import ImageTimelapse = __MaterialUI.Icons.ImageTimelapse; // require('material-ui/lib/svg-icon/image/timelapse');
    export import ImageTimer10 = __MaterialUI.Icons.ImageTimer10; // require('material-ui/lib/svg-icon/image/timer-10');
    export import ImageTimer3 = __MaterialUI.Icons.ImageTimer3; // require('material-ui/lib/svg-icon/image/timer-3');
    export import ImageTimer = __MaterialUI.Icons.ImageTimer; // require('material-ui/lib/svg-icon/image/timer');
    export import ImageTimerOff = __MaterialUI.Icons.ImageTimerOff; // require('material-ui/lib/svg-icon/image/timer-off');
    export import ImageTonality = __MaterialUI.Icons.ImageTonality; // require('material-ui/lib/svg-icon/image/tonality');
    export import ImageTransform = __MaterialUI.Icons.ImageTransform; // require('material-ui/lib/svg-icon/image/transform');
    export import ImageTune = __MaterialUI.Icons.ImageTune; // require('material-ui/lib/svg-icon/image/tune');
    export import ImageViewComfy = __MaterialUI.Icons.ImageViewComfy; // require('material-ui/lib/svg-icon/image/view-comfy');
    export import ImageViewCompact = __MaterialUI.Icons.ImageViewCompact; // require('material-ui/lib/svg-icon/image/view-compact');
    export import ImageVignette = __MaterialUI.Icons.ImageVignette; // require('material-ui/lib/svg-icon/image/vignette');
    export import ImageWbAuto = __MaterialUI.Icons.ImageWbAuto; // require('material-ui/lib/svg-icon/image/wb-auto');
    export import ImageWbCloudy = __MaterialUI.Icons.ImageWbCloudy; // require('material-ui/lib/svg-icon/image/wb-cloudy');
    export import ImageWbIncandescent = __MaterialUI.Icons.ImageWbIncandescent; // require('material-ui/lib/svg-icon/image/wb-incandescent');
    export import ImageWbIridescent = __MaterialUI.Icons.ImageWbIridescent; // require('material-ui/lib/svg-icon/image/wb-iridescent');
    export import ImageWbSunny = __MaterialUI.Icons.ImageWbSunny; // require('material-ui/lib/svg-icon/image/wb-sunny');
    export import IndexGenerator = __MaterialUI.Icons.IndexGenerator; // require('material-ui/lib/svg-icon/index-generator');
    export import Index = __MaterialUI.Icons.Index; // require('material-ui/lib/svg-icon/index');
    export import MapsAddLocation = __MaterialUI.Icons.MapsAddLocation; // require('material-ui/lib/svg-icon/maps/add-location');
    export import MapsBeenhere = __MaterialUI.Icons.MapsBeenhere; // require('material-ui/lib/svg-icon/maps/beenhere');
    export import MapsDirectionsBike = __MaterialUI.Icons.MapsDirectionsBike; // require('material-ui/lib/svg-icon/maps/directions-bike');
    export import MapsDirectionsBoat = __MaterialUI.Icons.MapsDirectionsBoat; // require('material-ui/lib/svg-icon/maps/directions-boat');
    export import MapsDirectionsBus = __MaterialUI.Icons.MapsDirectionsBus; // require('material-ui/lib/svg-icon/maps/directions-bus');
    export import MapsDirectionsCar = __MaterialUI.Icons.MapsDirectionsCar; // require('material-ui/lib/svg-icon/maps/directions-car');
    export import MapsDirections = __MaterialUI.Icons.MapsDirections; // require('material-ui/lib/svg-icon/maps/directions');
    export import MapsDirectionsRailway = __MaterialUI.Icons.MapsDirectionsRailway; // require('material-ui/lib/svg-icon/maps/directions-railway');
    export import MapsDirectionsRun = __MaterialUI.Icons.MapsDirectionsRun; // require('material-ui/lib/svg-icon/maps/directions-run');
    export import MapsDirectionsSubway = __MaterialUI.Icons.MapsDirectionsSubway; // require('material-ui/lib/svg-icon/maps/directions-subway');
    export import MapsDirectionsTransit = __MaterialUI.Icons.MapsDirectionsTransit; // require('material-ui/lib/svg-icon/maps/directions-transit');
    export import MapsDirectionsWalk = __MaterialUI.Icons.MapsDirectionsWalk; // require('material-ui/lib/svg-icon/maps/directions-walk');
    export import MapsEditLocation = __MaterialUI.Icons.MapsEditLocation; // require('material-ui/lib/svg-icon/maps/edit-location');
    export import MapsFlight = __MaterialUI.Icons.MapsFlight; // require('material-ui/lib/svg-icon/maps/flight');
    export import MapsHotel = __MaterialUI.Icons.MapsHotel; // require('material-ui/lib/svg-icon/maps/hotel');
    export import MapsLayersClear = __MaterialUI.Icons.MapsLayersClear; // require('material-ui/lib/svg-icon/maps/layers-clear');
    export import MapsLayers = __MaterialUI.Icons.MapsLayers; // require('material-ui/lib/svg-icon/maps/layers');
    export import MapsLocalActivity = __MaterialUI.Icons.MapsLocalActivity; // require('material-ui/lib/svg-icon/maps/local-activity');
    export import MapsLocalAirport = __MaterialUI.Icons.MapsLocalAirport; // require('material-ui/lib/svg-icon/maps/local-airport');
    export import MapsLocalAtm = __MaterialUI.Icons.MapsLocalAtm; // require('material-ui/lib/svg-icon/maps/local-atm');
    export import MapsLocalBar = __MaterialUI.Icons.MapsLocalBar; // require('material-ui/lib/svg-icon/maps/local-bar');
    export import MapsLocalCafe = __MaterialUI.Icons.MapsLocalCafe; // require('material-ui/lib/svg-icon/maps/local-cafe');
    export import MapsLocalCarWash = __MaterialUI.Icons.MapsLocalCarWash; // require('material-ui/lib/svg-icon/maps/local-car-wash');
    export import MapsLocalConvenienceStore = __MaterialUI.Icons.MapsLocalConvenienceStore; // require('material-ui/lib/svg-icon/maps/local-convenience-store');
    export import MapsLocalDining = __MaterialUI.Icons.MapsLocalDining; // require('material-ui/lib/svg-icon/maps/local-dining');
    export import MapsLocalDrink = __MaterialUI.Icons.MapsLocalDrink; // require('material-ui/lib/svg-icon/maps/local-drink');
    export import MapsLocalFlorist = __MaterialUI.Icons.MapsLocalFlorist; // require('material-ui/lib/svg-icon/maps/local-florist');
    export import MapsLocalGasStation = __MaterialUI.Icons.MapsLocalGasStation; // require('material-ui/lib/svg-icon/maps/local-gas-station');
    export import MapsLocalGroceryStore = __MaterialUI.Icons.MapsLocalGroceryStore; // require('material-ui/lib/svg-icon/maps/local-grocery-store');
    export import MapsLocalHospital = __MaterialUI.Icons.MapsLocalHospital; // require('material-ui/lib/svg-icon/maps/local-hospital');
    export import MapsLocalHotel = __MaterialUI.Icons.MapsLocalHotel; // require('material-ui/lib/svg-icon/maps/local-hotel');
    export import MapsLocalLaundryService = __MaterialUI.Icons.MapsLocalLaundryService; // require('material-ui/lib/svg-icon/maps/local-laundry-service');
    export import MapsLocalLibrary = __MaterialUI.Icons.MapsLocalLibrary; // require('material-ui/lib/svg-icon/maps/local-library');
    export import MapsLocalMall = __MaterialUI.Icons.MapsLocalMall; // require('material-ui/lib/svg-icon/maps/local-mall');
    export import MapsLocalMovies = __MaterialUI.Icons.MapsLocalMovies; // require('material-ui/lib/svg-icon/maps/local-movies');
    export import MapsLocalOffer = __MaterialUI.Icons.MapsLocalOffer; // require('material-ui/lib/svg-icon/maps/local-offer');
    export import MapsLocalParking = __MaterialUI.Icons.MapsLocalParking; // require('material-ui/lib/svg-icon/maps/local-parking');
    export import MapsLocalPharmacy = __MaterialUI.Icons.MapsLocalPharmacy; // require('material-ui/lib/svg-icon/maps/local-pharmacy');
    export import MapsLocalPhone = __MaterialUI.Icons.MapsLocalPhone; // require('material-ui/lib/svg-icon/maps/local-phone');
    export import MapsLocalPizza = __MaterialUI.Icons.MapsLocalPizza; // require('material-ui/lib/svg-icon/maps/local-pizza');
    export import MapsLocalPlay = __MaterialUI.Icons.MapsLocalPlay; // require('material-ui/lib/svg-icon/maps/local-play');
    export import MapsLocalPostOffice = __MaterialUI.Icons.MapsLocalPostOffice; // require('material-ui/lib/svg-icon/maps/local-post-office');
    export import MapsLocalPrintshop = __MaterialUI.Icons.MapsLocalPrintshop; // require('material-ui/lib/svg-icon/maps/local-printshop');
    export import MapsLocalSee = __MaterialUI.Icons.MapsLocalSee; // require('material-ui/lib/svg-icon/maps/local-see');
    export import MapsLocalShipping = __MaterialUI.Icons.MapsLocalShipping; // require('material-ui/lib/svg-icon/maps/local-shipping');
    export import MapsLocalTaxi = __MaterialUI.Icons.MapsLocalTaxi; // require('material-ui/lib/svg-icon/maps/local-taxi');
    export import MapsMap = __MaterialUI.Icons.MapsMap; // require('material-ui/lib/svg-icon/maps/map');
    export import MapsMyLocation = __MaterialUI.Icons.MapsMyLocation; // require('material-ui/lib/svg-icon/maps/my-location');
    export import MapsNavigation = __MaterialUI.Icons.MapsNavigation; // require('material-ui/lib/svg-icon/maps/navigation');
    export import MapsNearMe = __MaterialUI.Icons.MapsNearMe; // require('material-ui/lib/svg-icon/maps/near-me');
    export import MapsPersonPinCircle = __MaterialUI.Icons.MapsPersonPinCircle; // require('material-ui/lib/svg-icon/maps/person-pin-circle');
    export import MapsPersonPin = __MaterialUI.Icons.MapsPersonPin; // require('material-ui/lib/svg-icon/maps/person-pin');
    export import MapsPinDrop = __MaterialUI.Icons.MapsPinDrop; // require('material-ui/lib/svg-icon/maps/pin-drop');
    export import MapsPlace = __MaterialUI.Icons.MapsPlace; // require('material-ui/lib/svg-icon/maps/place');
    export import MapsRateReview = __MaterialUI.Icons.MapsRateReview; // require('material-ui/lib/svg-icon/maps/rate-review');
    export import MapsRestaurantMenu = __MaterialUI.Icons.MapsRestaurantMenu; // require('material-ui/lib/svg-icon/maps/restaurant-menu');
    export import MapsSatellite = __MaterialUI.Icons.MapsSatellite; // require('material-ui/lib/svg-icon/maps/satellite');
    export import MapsStoreMallDirectory = __MaterialUI.Icons.MapsStoreMallDirectory; // require('material-ui/lib/svg-icon/maps/store-mall-directory');
    export import MapsTerrain = __MaterialUI.Icons.MapsTerrain; // require('material-ui/lib/svg-icon/maps/terrain');
    export import MapsTraffic = __MaterialUI.Icons.MapsTraffic; // require('material-ui/lib/svg-icon/maps/traffic');
    export import MapsZoomOutMap = __MaterialUI.Icons.MapsZoomOutMap; // require('material-ui/lib/svg-icon/maps/zoom-out-map');
    export import NavigationApps = __MaterialUI.Icons.NavigationApps; // require('material-ui/lib/svg-icon/navigation/apps');
    export import NavigationArrowBack = __MaterialUI.Icons.NavigationArrowBack; // require('material-ui/lib/svg-icon/navigation/arrow-back');
    export import NavigationArrowDownward = __MaterialUI.Icons.NavigationArrowDownward; // require('material-ui/lib/svg-icon/navigation/arrow-downward');
    export import NavigationArrowDropDownCircle = __MaterialUI.Icons.NavigationArrowDropDownCircle; // require('material-ui/lib/svg-icon/navigation/arrow-drop-down-circle');
    export import NavigationArrowDropDown = __MaterialUI.Icons.NavigationArrowDropDown; // require('material-ui/lib/svg-icon/navigation/arrow-drop-down');
    export import NavigationArrowDropRight = __MaterialUI.Icons.NavigationArrowDropRight; // require('material-ui/lib/svg-icon/navigation-arrow-drop-right');
    export import NavigationArrowDropUp = __MaterialUI.Icons.NavigationArrowDropUp; // require('material-ui/lib/svg-icon/navigation/arrow-drop-up');
    export import NavigationArrowForward = __MaterialUI.Icons.NavigationArrowForward; // require('material-ui/lib/svg-icon/navigation/arrow-forward');
    export import NavigationArrowUpward = __MaterialUI.Icons.NavigationArrowUpward; // require('material-ui/lib/svg-icon/navigation/arrow-upward');
    export import NavigationCancel = __MaterialUI.Icons.NavigationCancel; // require('material-ui/lib/svg-icon/navigation/cancel');
    export import NavigationCheck = __MaterialUI.Icons.NavigationCheck; // require('material-ui/lib/svg-icon/navigation/check');
    export import NavigationChevronLeft = __MaterialUI.Icons.NavigationChevronLeft; // require('material-ui/lib/svg-icon/navigation/chevron-left');
    export import NavigationChevronRight = __MaterialUI.Icons.NavigationChevronRight; // require('material-ui/lib/svg-icon/navigation/chevron-right');
    export import NavigationClose = __MaterialUI.Icons.NavigationClose; // require('material-ui/lib/svg-icon/navigation/close');
    export import NavigationExpandLess = __MaterialUI.Icons.NavigationExpandLess; // require('material-ui/lib/svg-icon/navigation/expand-less');
    export import NavigationExpandMore = __MaterialUI.Icons.NavigationExpandMore; // require('material-ui/lib/svg-icon/navigation/expand-more');
    export import NavigationFullscreenExit = __MaterialUI.Icons.NavigationFullscreenExit; // require('material-ui/lib/svg-icon/navigation/fullscreen-exit');
    export import NavigationFullscreen = __MaterialUI.Icons.NavigationFullscreen; // require('material-ui/lib/svg-icon/navigation/fullscreen');
    export import NavigationMenu = __MaterialUI.Icons.NavigationMenu; // require('material-ui/lib/svg-icon/navigation/menu');
    export import NavigationMoreHoriz = __MaterialUI.Icons.NavigationMoreHoriz; // require('material-ui/lib/svg-icon/navigation/more-horiz');
    export import NavigationMoreVert = __MaterialUI.Icons.NavigationMoreVert; // require('material-ui/lib/svg-icon/navigation/more-vert');
    export import NavigationRefresh = __MaterialUI.Icons.NavigationRefresh; // require('material-ui/lib/svg-icon/navigation/refresh');
    export import NavigationSubdirectoryArrowLeft = __MaterialUI.Icons.NavigationSubdirectoryArrowLeft; // require('material-ui/lib/svg-icon/navigation/subdirectory-arrow-left');
    export import NavigationSubdirectoryArrowRight = __MaterialUI.Icons.NavigationSubdirectoryArrowRight; // require('material-ui/lib/svg-icon/navigation/subdirectory-arrow-right');
    export import NavigationUnfoldLess = __MaterialUI.Icons.NavigationUnfoldLess; // require('material-ui/lib/svg-icon/navigation/unfold-less');
    export import NavigationUnfoldMore = __MaterialUI.Icons.NavigationUnfoldMore; // require('material-ui/lib/svg-icon/navigation/unfold-more');
    export import NotificationAdb = __MaterialUI.Icons.NotificationAdb; // require('material-ui/lib/svg-icon/notification/adb');
    export import NotificationAirlineSeatFlatAngled = __MaterialUI.Icons.NotificationAirlineSeatFlatAngled; // require('material-ui/lib/svg-icon/notification/airline-seat-flat-angled');
    export import NotificationAirlineSeatFlat = __MaterialUI.Icons.NotificationAirlineSeatFlat; // require('material-ui/lib/svg-icon/notification/airline-seat-flat');
    export import NotificationAirlineSeatIndividualSuite = __MaterialUI.Icons.NotificationAirlineSeatIndividualSuite; // require('material-ui/lib/svg-icon/notification/airline-seat-individual-suite');
    export import NotificationAirlineSeatLegroomExtra = __MaterialUI.Icons.NotificationAirlineSeatLegroomExtra; // require('material-ui/lib/svg-icon/notification/airline-seat-legroom-extra');
    export import NotificationAirlineSeatLegroomNormal = __MaterialUI.Icons.NotificationAirlineSeatLegroomNormal; // require('material-ui/lib/svg-icon/notification/airline-seat-legroom-normal');
    export import NotificationAirlineSeatLegroomReduced = __MaterialUI.Icons.NotificationAirlineSeatLegroomReduced; // require('material-ui/lib/svg-icon/notification/airline-seat-legroom-reduced');
    export import NotificationAirlineSeatReclineExtra = __MaterialUI.Icons.NotificationAirlineSeatReclineExtra; // require('material-ui/lib/svg-icon/notification/airline-seat-recline-extra');
    export import NotificationAirlineSeatReclineNormal = __MaterialUI.Icons.NotificationAirlineSeatReclineNormal; // require('material-ui/lib/svg-icon/notification/airline-seat-recline-normal');
    export import NotificationBluetoothAudio = __MaterialUI.Icons.NotificationBluetoothAudio; // require('material-ui/lib/svg-icon/notification/bluetooth-audio');
    export import NotificationConfirmationNumber = __MaterialUI.Icons.NotificationConfirmationNumber; // require('material-ui/lib/svg-icon/notification/confirmation-number');
    export import NotificationDiscFull = __MaterialUI.Icons.NotificationDiscFull; // require('material-ui/lib/svg-icon/notification/disc-full');
    export import NotificationDoNotDisturbAlt = __MaterialUI.Icons.NotificationDoNotDisturbAlt; // require('material-ui/lib/svg-icon/notification/do-not-disturb-alt');
    export import NotificationDoNotDisturb = __MaterialUI.Icons.NotificationDoNotDisturb; // require('material-ui/lib/svg-icon/notification/do-not-disturb');
    export import NotificationDriveEta = __MaterialUI.Icons.NotificationDriveEta; // require('material-ui/lib/svg-icon/notification/drive-eta');
    export import NotificationEnhancedEncryption = __MaterialUI.Icons.NotificationEnhancedEncryption; // require('material-ui/lib/svg-icon/notification/enhanced-encryption');
    export import NotificationEventAvailable = __MaterialUI.Icons.NotificationEventAvailable; // require('material-ui/lib/svg-icon/notification/event-available');
    export import NotificationEventBusy = __MaterialUI.Icons.NotificationEventBusy; // require('material-ui/lib/svg-icon/notification/event-busy');
    export import NotificationEventNote = __MaterialUI.Icons.NotificationEventNote; // require('material-ui/lib/svg-icon/notification/event-note');
    export import NotificationFolderSpecial = __MaterialUI.Icons.NotificationFolderSpecial; // require('material-ui/lib/svg-icon/notification/folder-special');
    export import NotificationLiveTv = __MaterialUI.Icons.NotificationLiveTv; // require('material-ui/lib/svg-icon/notification/live-tv');
    export import NotificationMms = __MaterialUI.Icons.NotificationMms; // require('material-ui/lib/svg-icon/notification/mms');
    export import NotificationMore = __MaterialUI.Icons.NotificationMore; // require('material-ui/lib/svg-icon/notification/more');
    export import NotificationNetworkCheck = __MaterialUI.Icons.NotificationNetworkCheck; // require('material-ui/lib/svg-icon/notification/network-check');
    export import NotificationNetworkLocked = __MaterialUI.Icons.NotificationNetworkLocked; // require('material-ui/lib/svg-icon/notification/network-locked');
    export import NotificationNoEncryption = __MaterialUI.Icons.NotificationNoEncryption; // require('material-ui/lib/svg-icon/notification/no-encryption');
    export import NotificationOndemandVideo = __MaterialUI.Icons.NotificationOndemandVideo; // require('material-ui/lib/svg-icon/notification/ondemand-video');
    export import NotificationPersonalVideo = __MaterialUI.Icons.NotificationPersonalVideo; // require('material-ui/lib/svg-icon/notification/personal-video');
    export import NotificationPhoneBluetoothSpeaker = __MaterialUI.Icons.NotificationPhoneBluetoothSpeaker; // require('material-ui/lib/svg-icon/notification/phone-bluetooth-speaker');
    export import NotificationPhoneForwarded = __MaterialUI.Icons.NotificationPhoneForwarded; // require('material-ui/lib/svg-icon/notification/phone-forwarded');
    export import NotificationPhoneInTalk = __MaterialUI.Icons.NotificationPhoneInTalk; // require('material-ui/lib/svg-icon/notification/phone-in-talk');
    export import NotificationPhoneLocked = __MaterialUI.Icons.NotificationPhoneLocked; // require('material-ui/lib/svg-icon/notification/phone-locked');
    export import NotificationPhoneMissed = __MaterialUI.Icons.NotificationPhoneMissed; // require('material-ui/lib/svg-icon/notification/phone-missed');
    export import NotificationPhonePaused = __MaterialUI.Icons.NotificationPhonePaused; // require('material-ui/lib/svg-icon/notification/phone-paused');
    export import NotificationPower = __MaterialUI.Icons.NotificationPower; // require('material-ui/lib/svg-icon/notification/power');
    export import NotificationRvHookup = __MaterialUI.Icons.NotificationRvHookup; // require('material-ui/lib/svg-icon/notification/rv-hookup');
    export import NotificationSdCard = __MaterialUI.Icons.NotificationSdCard; // require('material-ui/lib/svg-icon/notification/sd-card');
    export import NotificationSimCardAlert = __MaterialUI.Icons.NotificationSimCardAlert; // require('material-ui/lib/svg-icon/notification/sim-card-alert');
    export import NotificationSmsFailed = __MaterialUI.Icons.NotificationSmsFailed; // require('material-ui/lib/svg-icon/notification/sms-failed');
    export import NotificationSms = __MaterialUI.Icons.NotificationSms; // require('material-ui/lib/svg-icon/notification/sms');
    export import NotificationSyncDisabled = __MaterialUI.Icons.NotificationSyncDisabled; // require('material-ui/lib/svg-icon/notification/sync-disabled');
    export import NotificationSync = __MaterialUI.Icons.NotificationSync; // require('material-ui/lib/svg-icon/notification/sync');
    export import NotificationSyncProblem = __MaterialUI.Icons.NotificationSyncProblem; // require('material-ui/lib/svg-icon/notification/sync-problem');
    export import NotificationSystemUpdate = __MaterialUI.Icons.NotificationSystemUpdate; // require('material-ui/lib/svg-icon/notification/system-update');
    export import NotificationTapAndPlay = __MaterialUI.Icons.NotificationTapAndPlay; // require('material-ui/lib/svg-icon/notification/tap-and-play');
    export import NotificationTimeToLeave = __MaterialUI.Icons.NotificationTimeToLeave; // require('material-ui/lib/svg-icon/notification/time-to-leave');
    export import NotificationVibration = __MaterialUI.Icons.NotificationVibration; // require('material-ui/lib/svg-icon/notification/vibration');
    export import NotificationVoiceChat = __MaterialUI.Icons.NotificationVoiceChat; // require('material-ui/lib/svg-icon/notification/voice-chat');
    export import NotificationVpnLock = __MaterialUI.Icons.NotificationVpnLock; // require('material-ui/lib/svg-icon/notification/vpn-lock');
    export import NotificationWc = __MaterialUI.Icons.NotificationWc; // require('material-ui/lib/svg-icon/notification/wc');
    export import NotificationWifi = __MaterialUI.Icons.NotificationWifi; // require('material-ui/lib/svg-icon/notification/wifi');
    export import PlacesAcUnit = __MaterialUI.Icons.PlacesAcUnit; // require('material-ui/lib/svg-icon/places/ac-unit');
    export import PlacesAirportShuttle = __MaterialUI.Icons.PlacesAirportShuttle; // require('material-ui/lib/svg-icon/places/airport-shuttle');
    export import PlacesAllInclusive = __MaterialUI.Icons.PlacesAllInclusive; // require('material-ui/lib/svg-icon/places/all-inclusive');
    export import PlacesBeachAccess = __MaterialUI.Icons.PlacesBeachAccess; // require('material-ui/lib/svg-icon/places/beach-access');
    export import PlacesBusinessCenter = __MaterialUI.Icons.PlacesBusinessCenter; // require('material-ui/lib/svg-icon/places/business-center');
    export import PlacesCasino = __MaterialUI.Icons.PlacesCasino; // require('material-ui/lib/svg-icon/places/casino');
    export import PlacesChildCare = __MaterialUI.Icons.PlacesChildCare; // require('material-ui/lib/svg-icon/places/child-care');
    export import PlacesChildFriendly = __MaterialUI.Icons.PlacesChildFriendly; // require('material-ui/lib/svg-icon/places/child-friendly');
    export import PlacesFitnessCenter = __MaterialUI.Icons.PlacesFitnessCenter; // require('material-ui/lib/svg-icon/places/fitness-center');
    export import PlacesFreeBreakfast = __MaterialUI.Icons.PlacesFreeBreakfast; // require('material-ui/lib/svg-icon/places/free-breakfast');
    export import PlacesGolfCourse = __MaterialUI.Icons.PlacesGolfCourse; // require('material-ui/lib/svg-icon/places/golf-course');
    export import PlacesHotTub = __MaterialUI.Icons.PlacesHotTub; // require('material-ui/lib/svg-icon/places/hot-tub');
    export import PlacesKitchen = __MaterialUI.Icons.PlacesKitchen; // require('material-ui/lib/svg-icon/places/kitchen');
    export import PlacesPool = __MaterialUI.Icons.PlacesPool; // require('material-ui/lib/svg-icon/places/pool');
    export import PlacesRoomService = __MaterialUI.Icons.PlacesRoomService; // require('material-ui/lib/svg-icon/places/room-service');
    export import PlacesSmokeFree = __MaterialUI.Icons.PlacesSmokeFree; // require('material-ui/lib/svg-icon/places/smoke-free');
    export import PlacesSmokingRooms = __MaterialUI.Icons.PlacesSmokingRooms; // require('material-ui/lib/svg-icon/places/smoking-rooms');
    export import PlacesSpa = __MaterialUI.Icons.PlacesSpa; // require('material-ui/lib/svg-icon/places/spa');
    export import SocialCake = __MaterialUI.Icons.SocialCake; // require('material-ui/lib/svg-icon/social/cake');
    export import SocialDomain = __MaterialUI.Icons.SocialDomain; // require('material-ui/lib/svg-icon/social/domain');
    export import SocialGroupAdd = __MaterialUI.Icons.SocialGroupAdd; // require('material-ui/lib/svg-icon/social/group-add');
    export import SocialGroup = __MaterialUI.Icons.SocialGroup; // require('material-ui/lib/svg-icon/social/group');
    export import SocialLocationCity = __MaterialUI.Icons.SocialLocationCity; // require('material-ui/lib/svg-icon/social/location-city');
    export import SocialMoodBad = __MaterialUI.Icons.SocialMoodBad; // require('material-ui/lib/svg-icon/social/mood-bad');
    export import SocialMood = __MaterialUI.Icons.SocialMood; // require('material-ui/lib/svg-icon/social/mood');
    export import SocialNotificationsActive = __MaterialUI.Icons.SocialNotificationsActive; // require('material-ui/lib/svg-icon/social/notifications-active');
    export import SocialNotifications = __MaterialUI.Icons.SocialNotifications; // require('material-ui/lib/svg-icon/social/notifications');
    export import SocialNotificationsNone = __MaterialUI.Icons.SocialNotificationsNone; // require('material-ui/lib/svg-icon/social/notifications-none');
    export import SocialNotificationsOff = __MaterialUI.Icons.SocialNotificationsOff; // require('material-ui/lib/svg-icon/social/notifications-off');
    export import SocialNotificationsPaused = __MaterialUI.Icons.SocialNotificationsPaused; // require('material-ui/lib/svg-icon/social/notifications-paused');
    export import SocialPages = __MaterialUI.Icons.SocialPages; // require('material-ui/lib/svg-icon/social/pages');
    export import SocialPartyMode = __MaterialUI.Icons.SocialPartyMode; // require('material-ui/lib/svg-icon/social/party-mode');
    export import SocialPeople = __MaterialUI.Icons.SocialPeople; // require('material-ui/lib/svg-icon/social/people');
    export import SocialPeopleOutline = __MaterialUI.Icons.SocialPeopleOutline; // require('material-ui/lib/svg-icon/social/people-outline');
    export import SocialPersonAdd = __MaterialUI.Icons.SocialPersonAdd; // require('material-ui/lib/svg-icon/social/person-add');
    export import SocialPerson = __MaterialUI.Icons.SocialPerson; // require('material-ui/lib/svg-icon/social/person');
    export import SocialPersonOutline = __MaterialUI.Icons.SocialPersonOutline; // require('material-ui/lib/svg-icon/social/person-outline');
    export import SocialPlusOne = __MaterialUI.Icons.SocialPlusOne; // require('material-ui/lib/svg-icon/social/plus-one');
    export import SocialPoll = __MaterialUI.Icons.SocialPoll; // require('material-ui/lib/svg-icon/social/poll');
    export import SocialPublic = __MaterialUI.Icons.SocialPublic; // require('material-ui/lib/svg-icon/social/public');
    export import SocialSchool = __MaterialUI.Icons.SocialSchool; // require('material-ui/lib/svg-icon/social/school');
    export import SocialShare = __MaterialUI.Icons.SocialShare; // require('material-ui/lib/svg-icon/social/share');
    export import SocialWhatshot = __MaterialUI.Icons.SocialWhatshot; // require('material-ui/lib/svg-icon/social/whatshot');
    export import ToggleCheckBox = __MaterialUI.Icons.ToggleCheckBox; // require('material-ui/lib/svg-icon/toggle/check-box');
    export import ToggleCheckBoxOutlineBlank = __MaterialUI.Icons.ToggleCheckBoxOutlineBlank; // require('material-ui/lib/svg-icon/toggle/check-box-outline-blank');
    export import ToggleIndeterminateCheckBox = __MaterialUI.Icons.ToggleIndeterminateCheckBox; // require('material-ui/lib/svg-icon/toggle/indeterminate-check-box');
    export import ToggleRadioButtonChecked = __MaterialUI.Icons.ToggleRadioButtonChecked; // require('material-ui/lib/svg-icon/toggle/radio-button-checked');
    export import ToggleRadioButtonUnchecked = __MaterialUI.Icons.ToggleRadioButtonUnchecked; // require('material-ui/lib/svg-icon/toggle/radio-button-unchecked');
    export import ToggleStarBorder = __MaterialUI.Icons.ToggleStarBorder; // require('material-ui/lib/svg-icon/toggle/star-border');
    export import ToggleStarHalf = __MaterialUI.Icons.ToggleStarHalf; // require('material-ui/lib/svg-icon/toggle/star-half');
    export import ToggleStar = __MaterialUI.Icons.ToggleStar; // require('material-ui/lib/svg-icon/toggle/star');

    // export type definitions
    export type TouchTapEvent = __MaterialUI.TouchTapEvent;
    export type TouchTapEventHandler = __MaterialUI.TouchTapEventHandler;
    export type DialogAction = __MaterialUI.DialogAction;
}

declare namespace __MaterialUI {
    export import React = __React;

    // ReactLink is from "react/addons"
    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    // What's common between React.TouchEvent and React.MouseEvent
    interface TouchTapEvent extends React.SyntheticEvent {
        altKey: boolean;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
    }

    // What's common between React.TouchEventHandler and React.MouseEventHandler
    interface TouchTapEventHandler extends React.EventHandler<TouchTapEvent> { }

    // more specific than React.HTMLAttributes

    interface AppBarProps extends React.Props<AppBar> {
        iconClassNameLeft?: string;
        iconClassNameRight?: string;
        iconElementLeft?: React.ReactElement<any>;
        iconElementRight?: React.ReactElement<any>;
        iconStyleRight?: string;
        style?: React.CSSProperties;
        showMenuIconButton?: boolean;
        title?: React.ReactNode;
        zDepth?: number;

        onLeftIconButtonTouchTap?: TouchTapEventHandler;
        onRightIconButtonTouchTap?: TouchTapEventHandler;
    }
    export class AppBar extends React.Component<AppBarProps, {}>{
    }

    interface AppCanvasProps extends React.Props<AppCanvas> {
    }
    export class AppCanvas extends React.Component<AppCanvasProps, {}> {
    }

    interface AutoCompleteProps extends React.Props<AutoComplete> {
        animated?: boolean;
        fullWidth?: boolean;
        searchText?: string;
        errorText?: string;
        floatingLabelText?: string;
        dataSource?: any;
        onUpdateInput?: (text: string) => void;
        onNewRequest?: (text: string) => void;
        anchorOrigin?: string;
        disableFocusRipple?: boolean;
        errorStyle?: any;
        filter?: (i: any) => boolean;
        hintText?: string;
        listStyle?: any;
        menuCloseDelay?: number;
        menuProps?: any;
        menuStyle?: any;
        open?: boolean;
        showAllItems?: boolean;
        style?: any;
        targetOrigin?: string;
        touchTapCloseDelay?: number;
        updateWhenFocused?: boolean;
    }
    export class AutoComplete extends React.Component<AutoCompleteProps, {}> {
    }

    interface AvatarProps extends React.Props<Avatar> {
        icon?: React.ReactElement<any>;
        backgroundColor?: string;
        color?: string;
        size?: number;
        src?: string;
        style?: React.CSSProperties;
    }
    export class Avatar extends React.Component<AvatarProps, {}> {
    }

    interface BadgeProps extends React.Props<Badge> {
        badgeContent: React.ReactElement<any> | string | number;
        primary?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
        badgeStyle?: React.CSSProperties;
    }
    export class Badge extends React.Component<BadgeProps, {}> {
    }

    interface BeforeAfterWrapperProps extends React.Props<BeforeAfterWrapper> {
        beforeStyle?: React.CSSProperties;
        afterStyle?: React.CSSProperties;
        beforeElementType?: string;
        afterElementType?: string;
        elementType?: string;
    }
    export class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps, {}> {
    }

    namespace Card {

        interface CardProps extends React.Props<Card> {
            expandable?: boolean;
            initiallyExpanded?: boolean;
            onExpandedChange?: (isExpanded: boolean) => void;
            style?: React.CSSProperties;
        }
        export class Card extends React.Component<CardProps, {}> {
        }

        interface CardActionsProps extends React.Props<CardActions> {
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class CardActions extends React.Component<CardActionsProps, {}> {
        }

        interface CardExpandableProps extends React.Props<CardExpandable> {
            onExpanding?: (isExpanded: boolean) => void;
            expanded?: boolean;
            style?: React.CSSProperties;
        }
        export class CardExpandable extends React.Component<CardExpandableProps, {}> {
        }

        interface CardHeaderProps extends React.Props<CardHeader> {
            expandable?: boolean;
            showExpandableButton?: boolean;
            title?: string | React.ReactElement<any>;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
            subtitle?: string | React.ReactElement<any>;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            avatar: React.ReactElement<any> | string;
        }
        export class CardHeader extends React.Component<CardHeaderProps, {}> {
        }

        interface CardMediaProps extends React.Props<CardMedia> {
            expandable?: boolean;
            overlay?: React.ReactNode;
            overlayStyle?: React.CSSProperties;
            overlayContainerStyle?: React.CSSProperties;
            overlayContentStyle?: React.CSSProperties;
            mediaStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardMedia extends React.Component<CardMediaProps, {}> {
        }

        interface CardTextProps extends React.Props<CardText> {
            expandable?: boolean;
            color?: string;
            style?: React.CSSProperties;
        }
        export class CardText extends React.Component<CardTextProps, {}> {
        }

        interface CardTitleProps extends React.Props<CardTitle> {
            expandable?: boolean;
            showExpandableButton?: boolean;
            title?: string | React.ReactElement<any>;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
            subtitle?: string | React.ReactElement<any>;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardTitle extends React.Component<CardTitleProps, {}> {
        }
    }

    // what's not commonly overridden by Checkbox, RadioButton, or Toggle
    interface CommonEnhancedSwitchProps<T> extends React.HTMLAttributes, React.Props<T> {
        // <input/> is root element
        id?: string;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        rippleStyle?: React.CSSProperties;
        thumbStyle?: React.CSSProperties;
        trackStyle?: React.CSSProperties;
        name?: string;
        value?: string;
        label?: string;
        required?: boolean;
        disabled?: boolean;
        defaultSwitched?: boolean;
        disableFocusRipple?: boolean;
        disableTouchRipple?: boolean;
    }

    interface EnhancedSwitchProps extends CommonEnhancedSwitchProps<EnhancedSwitch> {
        // <input/> is root element
        inputType: string;
        switchElement: React.ReactElement<any>;
        onParentShouldUpdate: (isInputChecked: boolean) => void;
        switched: boolean;
        rippleColor?: string;
        onSwitch?: (e: React.MouseEvent, isInputChecked: boolean) => void;
        labelPosition?: string;
    }
    export class EnhancedSwitch extends React.Component<EnhancedSwitchProps, {}> {
        isSwitched(): boolean;
        setSwitched(newSwitchedValue: boolean): void;
        getValue(): any;
        isKeyboardFocused(): boolean;
    }

    interface CheckboxProps extends CommonEnhancedSwitchProps<Checkbox> {
        // <EnhancedSwitch/> is root element
        checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
        defaultChecked?: boolean;
        iconStyle?: React.CSSProperties;
        label?: string;
        labelStyle?: React.CSSProperties;
        labelPosition?: string;
        style?: React.CSSProperties;
        checked?: boolean;
        unCheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon

        disabled?: boolean;
        valueLink?: ReactLink<boolean>;
        checkedLink?: ReactLink<boolean>;

        onCheck?: (event: React.MouseEvent, checked: boolean) => void;
    }
    export class Checkbox extends React.Component<CheckboxProps, {}> {
        isChecked(): void;
        setChecked(newCheckedValue: boolean): void;
    }

    interface CircularProgressProps extends React.Props<CircularProgress> {
        mode?: string;
        value?: number;
        min?: number;
        max?: number;
        size?: number;
        color?: string;
        innerStyle?: React.CSSProperties;
        style?: React.CSSProperties;

    }
    export class CircularProgress extends React.Component<CircularProgressProps, {}> {
    }

    interface ClearFixProps extends React.Props<ClearFix> {
    }
    export class ClearFix extends React.Component<ClearFixProps, {}> {
    }

    namespace DatePicker {
        interface DatePickerProps extends React.Props<DatePicker> {
            autoOk?: boolean;
            defaultDate?: Date;
            formatDate?: string;
            hintText?: string;
            floatingLabelText?: string;
            hideToolbarYearChange?: boolean;
            maxDate?: Date;
            minDate?: Date;
            mode?: string;
            onDismiss?: () => void;

            // e is always null
            onChange?: (e: any, d: Date) => void;

            onFocus?: React.FocusEventHandler;
            onShow?: () => void;
            onTouchTap?: React.TouchEventHandler;
            shouldDisableDate?: (day: Date) => boolean;
            showYearSelector?: boolean;
            textFieldStyle?: React.CSSProperties;
        }
        export class DatePicker extends React.Component<DatePickerProps, {}> {
        }

        interface DatePickerDialogProps extends React.Props<DatePickerDialog> {
            disableYearSelection?: boolean;
            initialDate?: Date;
            maxDate?: Date;
            minDate?: Date;
            onAccept?: (d: Date) => void;
            onClickAway?: () => void;
            onDismiss?: () => void;
            onShow?: () => void;
            shouldDisableDate?: (day: Date) => boolean;
            showYearSelector?: boolean;
        }
        export class DatePickerDialog extends React.Component<DatePickerDialogProps, {}> {
        }
    }

    export interface DialogAction {
        id?: string;
        text: string;
        ref?: string;

        onTouchTap?: TouchTapEventHandler;
        onClick?: React.MouseEventHandler;
    }
    interface DialogProps extends React.Props<Dialog> {
        actions?: Array<DialogAction | React.ReactElement<any>>;
        actionFocus?: string;
        autoDetectWindowHeight?: boolean;
        autoScrollBodyContent?: boolean;
        style?: React.CSSProperties;
        bodyStyle?: React.CSSProperties;
        contentClassName?: string;
        contentInnerStyle?: React.CSSProperties;
        contentStyle?: React.CSSProperties;
        modal?: boolean;
        openImmediately?: boolean;
        repositionOnUpdate?: boolean;
        title?: React.ReactNode;
        defaultOpen?: boolean;
        open?: boolean;

        onClickAway?: () => void;
        onDismiss?: () => void;
        onShow?: () => void;
        onRequestClose?: (buttonClicked: boolean) => void;
    }
    export class Dialog extends React.Component<DialogProps, {}> {
        dismiss(): void;
        show(): void;
        isOpen(): boolean;
    }

    interface DividerProps extends React.Props<Divider> {
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Divider extends React.Component<DividerProps, {}>{
    }

    interface DropDownIconProps extends React.Props<DropDownIcon> {
        menuItems: Menu.MenuItemRequest[];
        closeOnMenuItemTouchTap?: boolean;
        iconStyle?: React.CSSProperties;
        iconClassName?: string;
        iconLigature?: string;

        onChange?: Menu.ItemTapEventHandler;
    }
    export class DropDownIcon extends React.Component<DropDownIconProps, {}> {
    }

    interface DropDownMenuProps extends React.Props<DropDownMenu> {
        displayMember?: string;
        valueMember?: string;
        autoWidth?: boolean;
        menuItems: Menu.MenuItemRequest[];
        menuItemStyle?: React.CSSProperties;
        selectedIndex?: number;
        underlineStyle?: React.CSSProperties;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        disabled?: boolean;
        valueLink?: ReactLink<any>;
        value?: any;

        onChange?: Menu.ItemTapEventHandler;
    }
    export class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
    }

    // non generally overridden elements of EnhancedButton
    interface SharedEnhancedButtonProps<T> extends React.HTMLAttributes, React.Props<T> {
        centerRipple?: boolean;
        containerElement?: string | React.ReactElement<any>;
        disabled?: boolean;
        disableFocusRipple?: boolean;
        disableKeyboardFocus?: boolean;
        disableTouchRipple?: boolean;
        keyboardFocused?: boolean;
        linkButton?: boolean;
        focusRippleColor?: string;
        focusRippleOpacity?: number;
        touchRippleOpacity?: number;
        tabIndex?: number;

        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onKeyDown?: React.KeyboardEventHandler;
        onKeyUp?: React.KeyboardEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onTouchStart?: React.TouchEventHandler;
        onTouchEnd?: React.TouchEventHandler;
        onTouchTap?: TouchTapEventHandler;
    }

    interface EnhancedButtonProps extends SharedEnhancedButtonProps<EnhancedButton> {
        touchRippleColor?: string;
        focusRippleColor?: string;
        style?: React.CSSProperties;
    }
    export class EnhancedButton extends React.Component<EnhancedButtonProps, {}> {
    }

    interface FlatButtonProps extends SharedEnhancedButtonProps<FlatButton> {
        hoverColor?: string;
        label?: string;
        labelPosition?: string;
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        primary?: boolean;
        secondary?: boolean;
        rippleColor?: string;
        style?: React.CSSProperties;
    }
    export class FlatButton extends React.Component<FlatButtonProps, {}> {
    }

    interface FloatingActionButtonProps extends SharedEnhancedButtonProps<FloatingActionButton> {
        backgroundColor?: string;
        disabled?: boolean;
        disabledColor?: string;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        mini?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class FloatingActionButton extends React.Component<FloatingActionButtonProps, {}> {
    }

    interface FontIconProps extends React.Props<FontIcon> {
        color?: string;
        hoverColor?: string;
        onMouseLeave?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        style?: React.CSSProperties;
        className?: string;
    }
    export class FontIcon extends React.Component<FontIconProps, {}> {
    }

    interface IconButtonProps extends SharedEnhancedButtonProps<IconButton> {
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        tooltip?: string;
        tooltipPosition?: string;
        tooltipStyles?: React.CSSProperties;
        touch?: boolean;

        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
    }
    export class IconButton extends React.Component<IconButtonProps, {}> {
    }

    interface LeftNavProps extends React.Props<LeftNav> {
        disableSwipeToOpen?: boolean;
        docked?: boolean;
        open?: boolean;
        header?: React.ReactElement<any>;
        menuItems?: Menu.MenuItemRequest[];
        onChange?: Menu.ItemTapEventHandler;
        onNavOpen?: () => void;
        onNavClose?: () => void;
        onRequestChange?: (t: boolean) => void;
        openRight?: Boolean;
        selectedIndex?: number;
        menuItemClassName?: string;
        menuItemClassNameSubheader?: string;
        menuItemClassNameLink?: string;
        style?: React.CSSProperties;
    }
    export class LeftNav extends React.Component<LeftNavProps, {}> {
      toggle(): void;
    }

    interface LinearProgressProps extends React.Props<LinearProgress> {
        mode?: string;
        value?: number;
        min?: number;
        max?: number;
    }
    export class LinearProgress extends React.Component<LinearProgressProps, {}> {
    }

    namespace Lists {
        interface ListProps extends React.Props<List> {
            insetSubheader?: boolean;
            subheader?: string;
            subheaderStyle?: React.CSSProperties;
            zDepth?: number;
            style?: React.CSSProperties;
        }
        export class List extends React.Component<ListProps, {}> {
        }

        interface ListDividerProps extends React.Props<ListDivider> {
            inset?: boolean;
        }
        export class ListDivider extends React.Component<ListDividerProps, {}> {
        }

        interface ListItemProps extends React.Props<ListItem> {
            autoGenerateNestedIndicator?: boolean;
            disableKeyboardFocus?: boolean;
            initiallyOpen?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            innerStyle?: React.CSSProperties;
            leftAvatar?: React.ReactElement<any>;
            leftCheckbox?: React.ReactElement<any>;
            leftIcon?: React.ReactElement<any>;
            nestedLevel?: number;
            nestedItems?: React.ReactElement<any>[];
            onKeyboardFocus?: React.FocusEventHandler;
            onNestedListToggle?: (item: ListItem) => void;
            onClick?: React.MouseEventHandler;
            rightAvatar?: React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            rightIconButton?: React.ReactElement<any>;
            rightToggle?: React.ReactElement<any>;
            primaryText?: React.ReactNode;
            secondaryText?: React.ReactNode;
            secondaryTextLines?: number;
            style?: React.CSSProperties;
        }
        export class ListItem extends React.Component<ListItemProps, {}> {
        }
    }

    // Old menu implementation.  Being replaced by new "menus".
    namespace Menu {
        interface ItemTapEventHandler {
            (e: TouchTapEvent, index: number, menuItem: MenuItemRequest): void;
        }

        // almost extends MenuItemProps, but certain required items are generated in Menu and not passed here.
        interface MenuItemRequest extends React.Props<MenuItem> {
            // use value from MenuItem.Types.*
            type?: string;

            text?: string;
            data?: string;
            payload?: string;
            icon?: React.ReactElement<any>;
            attribute?: string;
            number?: string;
            toggle?: boolean;
            onTouchTap?: TouchTapEventHandler;
            isDisabled?: boolean;
            style?: React.CSSProperties;

            // for MenuItems.Types.NESTED
            items?: MenuItemRequest[];

            // for custom text or payloads
            [propertyName: string]: any;
        }

        interface MenuProps extends React.Props<Menu> {
            index: number;
            text?: string;
            menuItems: MenuItemRequest[];
            zDepth?: number;
            active?: boolean;
            onItemTap?: ItemTapEventHandler;
            menuItemStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class Menu extends React.Component<MenuProps, {}> {
        }

        interface MenuItemProps extends React.Props<MenuItem> {
            index: number;
            icon?: React.ReactElement<any>;
            iconClassName?: string;
            iconRightClassName?: string;
            iconStyle?: React.CSSProperties;
            iconRightStyle?: React.CSSProperties;
            attribute?: string;
            number?: string;
            data?: string;
            toggle?: boolean;
            onTouchTap?: (e: React.MouseEvent, key: number) => void;
            onToggle?: (e: React.MouseEvent, key: number, toggled: boolean) => void;
            selected?: boolean;
            active?: boolean;
            style?: React.CSSProperties;
            value?: any;
        }
        export class MenuItem extends React.Component<MenuItemProps, {}> {
            static Types: { LINK: string, SUBHEADER: string, NESTED: string, }
        }
    }

    export namespace Mixins {
        interface ClickAwayable extends React.Mixin<any, any> {
        }
        var ClickAwayable: ClickAwayable;

        interface WindowListenable extends React.Mixin<any, any> {
        }
        var WindowListenable: WindowListenable;

        interface StylePropable extends React.Mixin<any, any> {
        }
        var StylePropable: StylePropable

        interface StyleResizable extends React.Mixin<any, any> {
        }
        var StyleResizable: StyleResizable
    }

    interface OverlayProps extends React.Props<Overlay> {
        autoLockScrolling?: boolean;
        show?: boolean;
        transitionEnabled?: boolean;
    }
    export class Overlay extends React.Component<OverlayProps, {}> {
    }

    interface PaperProps extends React.HTMLAttributes, React.Props<Paper> {
        circle?: boolean;
        rounded?: boolean;
        transitionEnabled?: boolean;
        zDepth?: number;
    }
    export class Paper extends React.Component<PaperProps, {}> {
    }

    interface RadioButtonProps extends CommonEnhancedSwitchProps<RadioButton> {
        // <EnhancedSwitch/> is root element
        defaultChecked?: boolean;
        iconStyle?: React.CSSProperties;
        label?: string;
        labelStyle?: React.CSSProperties;
        labelPosition?: string;
        style?: React.CSSProperties;
        value?: string;

        onCheck?: (e: React.FormEvent, selected: string) => void;
    }
    export class RadioButton extends React.Component<RadioButtonProps, {}> {
    }

    interface RadioButtonGroupProps extends React.Props<RadioButtonGroup> {
        defaultSelected?: string;
        labelPosition?: string;
        name: string;
        style?: React.CSSProperties;
        valueSelected?: string;

        onChange?: (e: React.FormEvent, selected: string) => void;
    }
    export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, {}> {
        getSelectedValue(): string;
        setSelectedValue(newSelectionValue: string): void;
        clearValue(): void;
    }

    interface RaisedButtonProps extends SharedEnhancedButtonProps<RaisedButton> {
        className?: string;
        disabled?: boolean;
        label?: string;
        primary?: boolean;
        secondary?: boolean;
        labelStyle?: React.CSSProperties;
        backgroundColor?: string;
        labelColor?: string;
        disabledBackgroundColor?: string;
        disabledLabelColor?: string;
        fullWidth?: boolean;
    }
    export class RaisedButton extends React.Component<RaisedButtonProps, {}> {
    }

    interface RefreshIndicatorProps extends React.Props<RefreshIndicator> {
        left: number;
        percentage?: number;
        size?: number;
        status?: string;
        top: number;
        style?: React.CSSProperties;
    }
    export class RefreshIndicator extends React.Component<RefreshIndicatorProps, {}> {
    }

    namespace Ripples {
        interface CircleRippleProps extends React.Props<CircleRipple> {
            color?: string;
            opacity?: number;
            style?: React.CSSProperties;
        }
        export class CircleRipple extends React.Component<CircleRippleProps, {}> {
        }

        interface FocusRippleProps extends React.Props<FocusRipple> {
            color?: string;
            style?: React.CSSProperties;
            innerStyle?: React.CSSProperties;
            opacity?: number;
            show?: boolean;
        }
        export class FocusRipple extends React.Component<FocusRippleProps, {}> {
        }

        interface TouchRippleProps extends React.Props<TouchRipple> {
            centerRipple?: boolean;
            color?: string;
            opacity?: number;
            style?: React.CSSProperties;
        }
        export class TouchRipple extends React.Component<TouchRippleProps, {}> {
        }
    }

    interface SelectFieldProps extends React.Props<SelectField> {
        // passed to TextField
        errorStyle?: React.CSSProperties;
        errorText?: string;
        floatingLabelText?: string;
        floatingLabelStyle?: React.CSSProperties;
        fullWidth?: boolean;
        hintText?: string | React.ReactElement<any>;

        // passed to DropDownMenu
        displayMember?: string;
        valueMember?: string;
        autoWidth?: boolean;
        menuItems: Menu.MenuItemRequest[];
        menuItemStyle?: React.CSSProperties;
        selectedIndex?: number;
        underlineStyle?: React.CSSProperties;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        disabled?: boolean;
        valueLink?: ReactLink<any>;
        value?: number;

        onChange?: Menu.ItemTapEventHandler;
        onEnterKeyDown?: React.KeyboardEventHandler;

        // own properties
        selectFieldRoot?: string;
        multiLine?: boolean;
        type?: string;
        rows?: number;
        inputStyle?: React.CSSProperties;
    }
    export class SelectField extends React.Component<SelectFieldProps, {}> {
    }

    interface SliderProps extends React.Props<Slider> {
        name: string;
        defaultValue?: number;
        description?: string;
        error?: string;
        max?: number;
        min?: number;
        required?: boolean;
        step?: number;
        value?: number;
        style?: React.CSSProperties;
    }
    export class Slider extends React.Component<SliderProps, {}> {
    }

    interface SvgIconProps extends React.Props<SvgIcon> {
        color?: string;
        hoverColor?: string;
        viewBox?: string;
        style?: React.CSSProperties;
    }
    export class SvgIcon extends React.Component<SvgIconProps, {}> {
    }

    export namespace Icons {
      interface ActionWorkProps extends React.Props<ActionWork> {}
      export class ActionWork extends React.Component<ActionWorkProps, {}> {}

      interface ActionCameraEnhanceProps extends React.Props<ActionCameraEnhance> {}
      export class ActionCameraEnhance extends React.Component<ActionCameraEnhanceProps, {}> {}

      interface ActionFlipToBackProps extends React.Props<ActionFlipToBack> {}
      export class ActionFlipToBack extends React.Component<ActionFlipToBackProps, {}> {}

      interface ActionFeedbackProps extends React.Props<ActionFeedback> {}
      export class ActionFeedback extends React.Component<ActionFeedbackProps, {}> {}

      interface ActionAssignmentTurnedInProps extends React.Props<ActionAssignmentTurnedIn> {}
      export class ActionAssignmentTurnedIn extends React.Component<ActionAssignmentTurnedInProps, {}> {}

      interface ActionTrackChangesProps extends React.Props<ActionTrackChanges> {}
      export class ActionTrackChanges extends React.Component<ActionTrackChangesProps, {}> {}

      interface ActionViewStreamProps extends React.Props<ActionViewStream> {}
      export class ActionViewStream extends React.Component<ActionViewStreamProps, {}> {}

      interface ActionOpenInBrowserProps extends React.Props<ActionOpenInBrowser> {}
      export class ActionOpenInBrowser extends React.Component<ActionOpenInBrowserProps, {}> {}

      interface ActionViewHeadlineProps extends React.Props<ActionViewHeadline> {}
      export class ActionViewHeadline extends React.Component<ActionViewHeadlineProps, {}> {}

      interface ActionAlarmAddProps extends React.Props<ActionAlarmAdd> {}
      export class ActionAlarmAdd extends React.Component<ActionAlarmAddProps, {}> {}

      interface ActionHistoryProps extends React.Props<ActionHistory> {}
      export class ActionHistory extends React.Component<ActionHistoryProps, {}> {}

      interface ActionPermDeviceInformationProps extends React.Props<ActionPermDeviceInformation> {}
      export class ActionPermDeviceInformation extends React.Component<ActionPermDeviceInformationProps, {}> {}

      interface ActionReorderProps extends React.Props<ActionReorder> {}
      export class ActionReorder extends React.Component<ActionReorderProps, {}> {}

      interface ActionAssignmentProps extends React.Props<ActionAssignment> {}
      export class ActionAssignment extends React.Component<ActionAssignmentProps, {}> {}

      interface ActionShoppingCartProps extends React.Props<ActionShoppingCart> {}
      export class ActionShoppingCart extends React.Component<ActionShoppingCartProps, {}> {}

      interface ActionFaceProps extends React.Props<ActionFace> {}
      export class ActionFace extends React.Component<ActionFaceProps, {}> {}

      interface ActionEventProps extends React.Props<ActionEvent> {}
      export class ActionEvent extends React.Component<ActionEventProps, {}> {}

      interface ActionViewWeekProps extends React.Props<ActionViewWeek> {}
      export class ActionViewWeek extends React.Component<ActionViewWeekProps, {}> {}

      interface ActionRoundedCornerProps extends React.Props<ActionRoundedCorner> {}
      export class ActionRoundedCorner extends React.Component<ActionRoundedCornerProps, {}> {}

      interface ActionViewCarouselProps extends React.Props<ActionViewCarousel> {}
      export class ActionViewCarousel extends React.Component<ActionViewCarouselProps, {}> {}

      interface ActionTollProps extends React.Props<ActionToll> {}
      export class ActionToll extends React.Component<ActionTollProps, {}> {}

      interface ActionHomeProps extends React.Props<ActionHome> {}
      export class ActionHome extends React.Component<ActionHomeProps, {}> {}

      interface ActionSubjectProps extends React.Props<ActionSubject> {}
      export class ActionSubject extends React.Component<ActionSubjectProps, {}> {}

      interface ActionLockProps extends React.Props<ActionLock> {}
      export class ActionLock extends React.Component<ActionLockProps, {}> {}

      interface ActionVisibilityOffProps extends React.Props<ActionVisibilityOff> {}
      export class ActionVisibilityOff extends React.Component<ActionVisibilityOffProps, {}> {}

      interface ActionOpacityProps extends React.Props<ActionOpacity> {}
      export class ActionOpacity extends React.Component<ActionOpacityProps, {}> {}

      interface ActionDnsProps extends React.Props<ActionDns> {}
      export class ActionDns extends React.Component<ActionDnsProps, {}> {}

      interface ActionOpenWithProps extends React.Props<ActionOpenWith> {}
      export class ActionOpenWith extends React.Component<ActionOpenWithProps, {}> {}

      interface ActionSystemUpdateAltProps extends React.Props<ActionSystemUpdateAlt> {}
      export class ActionSystemUpdateAlt extends React.Component<ActionSystemUpdateAltProps, {}> {}

      interface ActionPictureInPictureAltProps extends React.Props<ActionPictureInPictureAlt> {}
      export class ActionPictureInPictureAlt extends React.Component<ActionPictureInPictureAltProps, {}> {}

      interface ActionBookmarkBorderProps extends React.Props<ActionBookmarkBorder> {}
      export class ActionBookmarkBorder extends React.Component<ActionBookmarkBorderProps, {}> {}

      interface ActionSettingsProps extends React.Props<ActionSettings> {}
      export class ActionSettings extends React.Component<ActionSettingsProps, {}> {}

      interface ActionDashboardProps extends React.Props<ActionDashboard> {}
      export class ActionDashboard extends React.Component<ActionDashboardProps, {}> {}

      interface ActionDoneAllProps extends React.Props<ActionDoneAll> {}
      export class ActionDoneAll extends React.Component<ActionDoneAllProps, {}> {}

      interface ActionAspectRatioProps extends React.Props<ActionAspectRatio> {}
      export class ActionAspectRatio extends React.Component<ActionAspectRatioProps, {}> {}

      interface ActionVerifiedUserProps extends React.Props<ActionVerifiedUser> {}
      export class ActionVerifiedUser extends React.Component<ActionVerifiedUserProps, {}> {}

      interface ActionUpdateProps extends React.Props<ActionUpdate> {}
      export class ActionUpdate extends React.Component<ActionUpdateProps, {}> {}

      interface ActionQueryBuilderProps extends React.Props<ActionQueryBuilder> {}
      export class ActionQueryBuilder extends React.Component<ActionQueryBuilderProps, {}> {}

      interface ActionSupervisorAccountProps extends React.Props<ActionSupervisorAccount> {}
      export class ActionSupervisorAccount extends React.Component<ActionSupervisorAccountProps, {}> {}

      interface ActionPolymerProps extends React.Props<ActionPolymer> {}
      export class ActionPolymer extends React.Component<ActionPolymerProps, {}> {}

      interface ActionAccessibleProps extends React.Props<ActionAccessible> {}
      export class ActionAccessible extends React.Component<ActionAccessibleProps, {}> {}

      interface ActionHighlightOffProps extends React.Props<ActionHighlightOff> {}
      export class ActionHighlightOff extends React.Component<ActionHighlightOffProps, {}> {}

      interface ActionPowerSettingsNewProps extends React.Props<ActionPowerSettingsNew> {}
      export class ActionPowerSettingsNew extends React.Component<ActionPowerSettingsNewProps, {}> {}

      interface ActionChromeReaderModeProps extends React.Props<ActionChromeReaderMode> {}
      export class ActionChromeReaderMode extends React.Component<ActionChromeReaderModeProps, {}> {}

      interface ActionPermCameraMicProps extends React.Props<ActionPermCameraMic> {}
      export class ActionPermCameraMic extends React.Component<ActionPermCameraMicProps, {}> {}

      interface ActionTouchAppProps extends React.Props<ActionTouchApp> {}
      export class ActionTouchApp extends React.Component<ActionTouchAppProps, {}> {}

      interface ActionReceiptProps extends React.Props<ActionReceipt> {}
      export class ActionReceipt extends React.Component<ActionReceiptProps, {}> {}

      interface ActionAssignmentLateProps extends React.Props<ActionAssignmentLate> {}
      export class ActionAssignmentLate extends React.Component<ActionAssignmentLateProps, {}> {}

      interface ActionAlarmOffProps extends React.Props<ActionAlarmOff> {}
      export class ActionAlarmOff extends React.Component<ActionAlarmOffProps, {}> {}

      interface ActionTocProps extends React.Props<ActionToc> {}
      export class ActionToc extends React.Component<ActionTocProps, {}> {}

      interface ActionSettingsBluetoothProps extends React.Props<ActionSettingsBluetooth> {}
      export class ActionSettingsBluetooth extends React.Component<ActionSettingsBluetoothProps, {}> {}

      interface ActionSettingsBrightnessProps extends React.Props<ActionSettingsBrightness> {}
      export class ActionSettingsBrightness extends React.Component<ActionSettingsBrightnessProps, {}> {}

      interface ActionDonutSmallProps extends React.Props<ActionDonutSmall> {}
      export class ActionDonutSmall extends React.Component<ActionDonutSmallProps, {}> {}

      interface ActionZoomOutProps extends React.Props<ActionZoomOut> {}
      export class ActionZoomOut extends React.Component<ActionZoomOutProps, {}> {}

      interface ActionLoyaltyProps extends React.Props<ActionLoyalty> {}
      export class ActionLoyalty extends React.Component<ActionLoyaltyProps, {}> {}

      interface ActionSearchProps extends React.Props<ActionSearch> {}
      export class ActionSearch extends React.Component<ActionSearchProps, {}> {}

      interface ActionAccountBalanceWalletProps extends React.Props<ActionAccountBalanceWallet> {}
      export class ActionAccountBalanceWallet extends React.Component<ActionAccountBalanceWalletProps, {}> {}

      interface ActionDateRangeProps extends React.Props<ActionDateRange> {}
      export class ActionDateRange extends React.Component<ActionDateRangeProps, {}> {}

      interface ActionAlarmOnProps extends React.Props<ActionAlarmOn> {}
      export class ActionAlarmOn extends React.Component<ActionAlarmOnProps, {}> {}

      interface ActionViewQuiltProps extends React.Props<ActionViewQuilt> {}
      export class ActionViewQuilt extends React.Component<ActionViewQuiltProps, {}> {}

      interface ActionLaunchProps extends React.Props<ActionLaunch> {}
      export class ActionLaunch extends React.Component<ActionLaunchProps, {}> {}

      interface ActionVisibilityProps extends React.Props<ActionVisibility> {}
      export class ActionVisibility extends React.Component<ActionVisibilityProps, {}> {}

      interface ActionFlightLandProps extends React.Props<ActionFlightLand> {}
      export class ActionFlightLand extends React.Component<ActionFlightLandProps, {}> {}

      interface ActionCardTravelProps extends React.Props<ActionCardTravel> {}
      export class ActionCardTravel extends React.Component<ActionCardTravelProps, {}> {}

      interface ActionGetAppProps extends React.Props<ActionGetApp> {}
      export class ActionGetApp extends React.Component<ActionGetAppProps, {}> {}

      interface ActionMarkunreadMailboxProps extends React.Props<ActionMarkunreadMailbox> {}
      export class ActionMarkunreadMailbox extends React.Component<ActionMarkunreadMailboxProps, {}> {}

      interface ActionViewAgendaProps extends React.Props<ActionViewAgenda> {}
      export class ActionViewAgenda extends React.Component<ActionViewAgendaProps, {}> {}

      interface ActionTimelineProps extends React.Props<ActionTimeline> {}
      export class ActionTimeline extends React.Component<ActionTimelineProps, {}> {}

      interface ActionSettingsRemoteProps extends React.Props<ActionSettingsRemote> {}
      export class ActionSettingsRemote extends React.Component<ActionSettingsRemoteProps, {}> {}

      interface ActionInputProps extends React.Props<ActionInput> {}
      export class ActionInput extends React.Component<ActionInputProps, {}> {}

      interface ActionRecordVoiceOverProps extends React.Props<ActionRecordVoiceOver> {}
      export class ActionRecordVoiceOver extends React.Component<ActionRecordVoiceOverProps, {}> {}

      interface ActionBackupProps extends React.Props<ActionBackup> {}
      export class ActionBackup extends React.Component<ActionBackupProps, {}> {}

      interface ActionLanguageProps extends React.Props<ActionLanguage> {}
      export class ActionLanguage extends React.Component<ActionLanguageProps, {}> {}

      interface ActionPlayForWorkProps extends React.Props<ActionPlayForWork> {}
      export class ActionPlayForWork extends React.Component<ActionPlayForWorkProps, {}> {}

      interface ActionGifProps extends React.Props<ActionGif> {}
      export class ActionGif extends React.Component<ActionGifProps, {}> {}

      interface ActionTheatersProps extends React.Props<ActionTheaters> {}
      export class ActionTheaters extends React.Component<ActionTheatersProps, {}> {}

      interface ActionOfflinePinProps extends React.Props<ActionOfflinePin> {}
      export class ActionOfflinePin extends React.Component<ActionOfflinePinProps, {}> {}

      interface ActionAssignmentReturnProps extends React.Props<ActionAssignmentReturn> {}
      export class ActionAssignmentReturn extends React.Component<ActionAssignmentReturnProps, {}> {}

      interface ActionPrintProps extends React.Props<ActionPrint> {}
      export class ActionPrint extends React.Component<ActionPrintProps, {}> {}

      interface ActionSettingsOverscanProps extends React.Props<ActionSettingsOverscan> {}
      export class ActionSettingsOverscan extends React.Component<ActionSettingsOverscanProps, {}> {}

      interface ActionStoreProps extends React.Props<ActionStore> {}
      export class ActionStore extends React.Component<ActionStoreProps, {}> {}

      interface ActionExitToAppProps extends React.Props<ActionExitToApp> {}
      export class ActionExitToApp extends React.Component<ActionExitToAppProps, {}> {}

      interface ActionAccountBalanceProps extends React.Props<ActionAccountBalance> {}
      export class ActionAccountBalance extends React.Component<ActionAccountBalanceProps, {}> {}

      interface ActionGradeProps extends React.Props<ActionGrade> {}
      export class ActionGrade extends React.Component<ActionGradeProps, {}> {}

      interface ActionPictureInPictureProps extends React.Props<ActionPictureInPicture> {}
      export class ActionPictureInPicture extends React.Component<ActionPictureInPictureProps, {}> {}

      interface ActionCopyrightProps extends React.Props<ActionCopyright> {}
      export class ActionCopyright extends React.Component<ActionCopyrightProps, {}> {}

      interface ActionDonutLargeProps extends React.Props<ActionDonutLarge> {}
      export class ActionDonutLarge extends React.Component<ActionDonutLargeProps, {}> {}

      interface ActionLockOpenProps extends React.Props<ActionLockOpen> {}
      export class ActionLockOpen extends React.Component<ActionLockOpenProps, {}> {}

      interface ActionPermMediaProps extends React.Props<ActionPermMedia> {}
      export class ActionPermMedia extends React.Component<ActionPermMediaProps, {}> {}

      interface ActionAllOutProps extends React.Props<ActionAllOut> {}
      export class ActionAllOut extends React.Component<ActionAllOutProps, {}> {}

      interface ActionCheckCircleProps extends React.Props<ActionCheckCircle> {}
      export class ActionCheckCircle extends React.Component<ActionCheckCircleProps, {}> {}

      interface ActionSwapVerticalCircleProps extends React.Props<ActionSwapVerticalCircle> {}
      export class ActionSwapVerticalCircle extends React.Component<ActionSwapVerticalCircleProps, {}> {}

      interface ActionSettingsInputSvideoProps extends React.Props<ActionSettingsInputSvideo> {}
      export class ActionSettingsInputSvideo extends React.Component<ActionSettingsInputSvideoProps, {}> {}

      interface ActionWatchLaterProps extends React.Props<ActionWatchLater> {}
      export class ActionWatchLater extends React.Component<ActionWatchLaterProps, {}> {}

      interface ActionQuestionAnswerProps extends React.Props<ActionQuestionAnswer> {}
      export class ActionQuestionAnswer extends React.Component<ActionQuestionAnswerProps, {}> {}

      interface ActionAssignmentIndProps extends React.Props<ActionAssignmentInd> {}
      export class ActionAssignmentInd extends React.Component<ActionAssignmentIndProps, {}> {}

      interface ActionCodeProps extends React.Props<ActionCode> {}
      export class ActionCode extends React.Component<ActionCodeProps, {}> {}

      interface ActionTurnedInNotProps extends React.Props<ActionTurnedInNot> {}
      export class ActionTurnedInNot extends React.Component<ActionTurnedInNotProps, {}> {}

      interface ActionLineWeightProps extends React.Props<ActionLineWeight> {}
      export class ActionLineWeight extends React.Component<ActionLineWeightProps, {}> {}

      interface ActionRestoreProps extends React.Props<ActionRestore> {}
      export class ActionRestore extends React.Component<ActionRestoreProps, {}> {}

      interface ActionTabProps extends React.Props<ActionTab> {}
      export class ActionTab extends React.Component<ActionTabProps, {}> {}

      interface ActionOpenInNewProps extends React.Props<ActionOpenInNew> {}
      export class ActionOpenInNew extends React.Component<ActionOpenInNewProps, {}> {}

      interface ActionTurnedInProps extends React.Props<ActionTurnedIn> {}
      export class ActionTurnedIn extends React.Component<ActionTurnedInProps, {}> {}

      interface ActionSettingsInputHdmiProps extends React.Props<ActionSettingsInputHdmi> {}
      export class ActionSettingsInputHdmi extends React.Component<ActionSettingsInputHdmiProps, {}> {}

      interface ActionFavoriteBorderProps extends React.Props<ActionFavoriteBorder> {}
      export class ActionFavoriteBorder extends React.Component<ActionFavoriteBorderProps, {}> {}

      interface ActionDoneProps extends React.Props<ActionDone> {}
      export class ActionDone extends React.Component<ActionDoneProps, {}> {}

      interface ActionPaymentProps extends React.Props<ActionPayment> {}
      export class ActionPayment extends React.Component<ActionPaymentProps, {}> {}

      interface ActionAnnouncementProps extends React.Props<ActionAnnouncement> {}
      export class ActionAnnouncement extends React.Component<ActionAnnouncementProps, {}> {}

      interface ActionFindInPageProps extends React.Props<ActionFindInPage> {}
      export class ActionFindInPage extends React.Component<ActionFindInPageProps, {}> {}

      interface ActionThumbsUpDownProps extends React.Props<ActionThumbsUpDown> {}
      export class ActionThumbsUpDown extends React.Component<ActionThumbsUpDownProps, {}> {}

      interface ActionExploreProps extends React.Props<ActionExplore> {}
      export class ActionExplore extends React.Component<ActionExploreProps, {}> {}

      interface ActionTodayProps extends React.Props<ActionToday> {}
      export class ActionToday extends React.Component<ActionTodayProps, {}> {}

      interface ActionSettingsPowerProps extends React.Props<ActionSettingsPower> {}
      export class ActionSettingsPower extends React.Component<ActionSettingsPowerProps, {}> {}

      interface ActionGavelProps extends React.Props<ActionGavel> {}
      export class ActionGavel extends React.Component<ActionGavelProps, {}> {}

      interface ActionBuildProps extends React.Props<ActionBuild> {}
      export class ActionBuild extends React.Component<ActionBuildProps, {}> {}

      interface ActionRowingProps extends React.Props<ActionRowing> {}
      export class ActionRowing extends React.Component<ActionRowingProps, {}> {}

      interface ActionLabelProps extends React.Props<ActionLabel> {}
      export class ActionLabel extends React.Component<ActionLabelProps, {}> {}

      interface ActionCardGiftcardProps extends React.Props<ActionCardGiftcard> {}
      export class ActionCardGiftcard extends React.Component<ActionCardGiftcardProps, {}> {}

      interface ActionThumbUpProps extends React.Props<ActionThumbUp> {}
      export class ActionThumbUp extends React.Component<ActionThumbUpProps, {}> {}

      interface ActionShoppingBasketProps extends React.Props<ActionShoppingBasket> {}
      export class ActionShoppingBasket extends React.Component<ActionShoppingBasketProps, {}> {}

      interface ActionSwapHorizProps extends React.Props<ActionSwapHoriz> {}
      export class ActionSwapHoriz extends React.Component<ActionSwapHorizProps, {}> {}

      interface ActionHelpOutlineProps extends React.Props<ActionHelpOutline> {}
      export class ActionHelpOutline extends React.Component<ActionHelpOutlineProps, {}> {}

      interface ActionPregnantWomanProps extends React.Props<ActionPregnantWoman> {}
      export class ActionPregnantWoman extends React.Component<ActionPregnantWomanProps, {}> {}

      interface ActionHelpProps extends React.Props<ActionHelp> {}
      export class ActionHelp extends React.Component<ActionHelpProps, {}> {}

      interface ActionSettingsInputAntennaProps extends React.Props<ActionSettingsInputAntenna> {}
      export class ActionSettingsInputAntenna extends React.Component<ActionSettingsInputAntennaProps, {}> {}

      interface ActionFindReplaceProps extends React.Props<ActionFindReplace> {}
      export class ActionFindReplace extends React.Component<ActionFindReplaceProps, {}> {}

      interface ActionShopProps extends React.Props<ActionShop> {}
      export class ActionShop extends React.Component<ActionShopProps, {}> {}

      interface ActionChangeHistoryProps extends React.Props<ActionChangeHistory> {}
      export class ActionChangeHistory extends React.Component<ActionChangeHistoryProps, {}> {}

      interface ActionInfoProps extends React.Props<ActionInfo> {}
      export class ActionInfo extends React.Component<ActionInfoProps, {}> {}

      interface ActionTrendingDownProps extends React.Props<ActionTrendingDown> {}
      export class ActionTrendingDown extends React.Component<ActionTrendingDownProps, {}> {}

      interface ActionFlightTakeoffProps extends React.Props<ActionFlightTakeoff> {}
      export class ActionFlightTakeoff extends React.Component<ActionFlightTakeoffProps, {}> {}

      interface ActionAlarmProps extends React.Props<ActionAlarm> {}
      export class ActionAlarm extends React.Component<ActionAlarmProps, {}> {}

      interface ActionSpellcheckProps extends React.Props<ActionSpellcheck> {}
      export class ActionSpellcheck extends React.Component<ActionSpellcheckProps, {}> {}

      interface ActionSettingsInputComponentProps extends React.Props<ActionSettingsInputComponent> {}
      export class ActionSettingsInputComponent extends React.Component<ActionSettingsInputComponentProps, {}> {}

      interface ActionSettingsApplicationsProps extends React.Props<ActionSettingsApplications> {}
      export class ActionSettingsApplications extends React.Component<ActionSettingsApplicationsProps, {}> {}

      interface ActionRoomProps extends React.Props<ActionRoom> {}
      export class ActionRoom extends React.Component<ActionRoomProps, {}> {}

      interface ActionBookProps extends React.Props<ActionBook> {}
      export class ActionBook extends React.Component<ActionBookProps, {}> {}

      interface ActionClassProps extends React.Props<ActionClass> {}
      export class ActionClass extends React.Component<ActionClassProps, {}> {}

      interface ActionGroupWorkProps extends React.Props<ActionGroupWork> {}
      export class ActionGroupWork extends React.Component<ActionGroupWorkProps, {}> {}

      interface ActionHourglassFullProps extends React.Props<ActionHourglassFull> {}
      export class ActionHourglassFull extends React.Component<ActionHourglassFullProps, {}> {}

      interface ActionAssessmentProps extends React.Props<ActionAssessment> {}
      export class ActionAssessment extends React.Component<ActionAssessmentProps, {}> {}

      interface ActionYoutubeSearchedForProps extends React.Props<ActionYoutubeSearchedFor> {}
      export class ActionYoutubeSearchedFor extends React.Component<ActionYoutubeSearchedForProps, {}> {}

      interface ActionEjectProps extends React.Props<ActionEject> {}
      export class ActionEject extends React.Component<ActionEjectProps, {}> {}

      interface ActionTrendingUpProps extends React.Props<ActionTrendingUp> {}
      export class ActionTrendingUp extends React.Component<ActionTrendingUpProps, {}> {}

      interface ActionHttpProps extends React.Props<ActionHttp> {}
      export class ActionHttp extends React.Component<ActionHttpProps, {}> {}

      interface ActionStarsProps extends React.Props<ActionStars> {}
      export class ActionStars extends React.Component<ActionStarsProps, {}> {}

      interface ActionAutorenewProps extends React.Props<ActionAutorenew> {}
      export class ActionAutorenew extends React.Component<ActionAutorenewProps, {}> {}

      interface ActionSettingsEthernetProps extends React.Props<ActionSettingsEthernet> {}
      export class ActionSettingsEthernet extends React.Component<ActionSettingsEthernetProps, {}> {}

      interface ActionLabelOutlineProps extends React.Props<ActionLabelOutline> {}
      export class ActionLabelOutline extends React.Component<ActionLabelOutlineProps, {}> {}

      interface ActionSettingsPhoneProps extends React.Props<ActionSettingsPhone> {}
      export class ActionSettingsPhone extends React.Component<ActionSettingsPhoneProps, {}> {}

      interface ActionInfoOutlineProps extends React.Props<ActionInfoOutline> {}
      export class ActionInfoOutline extends React.Component<ActionInfoOutlineProps, {}> {}

      interface ActionLockOutlineProps extends React.Props<ActionLockOutline> {}
      export class ActionLockOutline extends React.Component<ActionLockOutlineProps, {}> {}

      interface ActionSettingsInputCompositeProps extends React.Props<ActionSettingsInputComposite> {}
      export class ActionSettingsInputComposite extends React.Component<ActionSettingsInputCompositeProps, {}> {}

      interface ActionInvertColorsProps extends React.Props<ActionInvertColors> {}
      export class ActionInvertColors extends React.Component<ActionInvertColorsProps, {}> {}

      interface ActionBookmarkProps extends React.Props<ActionBookmark> {}
      export class ActionBookmark extends React.Component<ActionBookmarkProps, {}> {}

      interface ActionAddShoppingCartProps extends React.Props<ActionAddShoppingCart> {}
      export class ActionAddShoppingCart extends React.Component<ActionAddShoppingCartProps, {}> {}

      interface ActionBugReportProps extends React.Props<ActionBugReport> {}
      export class ActionBugReport extends React.Component<ActionBugReportProps, {}> {}

      interface ActionCachedProps extends React.Props<ActionCached> {}
      export class ActionCached extends React.Component<ActionCachedProps, {}> {}

      interface ActionViewDayProps extends React.Props<ActionViewDay> {}
      export class ActionViewDay extends React.Component<ActionViewDayProps, {}> {}

      interface ActionFingerprintProps extends React.Props<ActionFingerprint> {}
      export class ActionFingerprint extends React.Component<ActionFingerprintProps, {}> {}

      interface ActionAccessibilityProps extends React.Props<ActionAccessibility> {}
      export class ActionAccessibility extends React.Component<ActionAccessibilityProps, {}> {}

      interface ActionPermDataSettingProps extends React.Props<ActionPermDataSetting> {}
      export class ActionPermDataSetting extends React.Component<ActionPermDataSettingProps, {}> {}

      interface ActionSettingsBackupRestoreProps extends React.Props<ActionSettingsBackupRestore> {}
      export class ActionSettingsBackupRestore extends React.Component<ActionSettingsBackupRestoreProps, {}> {}

      interface ActionZoomInProps extends React.Props<ActionZoomIn> {}
      export class ActionZoomIn extends React.Component<ActionZoomInProps, {}> {}

      interface ActionPermIdentityProps extends React.Props<ActionPermIdentity> {}
      export class ActionPermIdentity extends React.Component<ActionPermIdentityProps, {}> {}

      interface ActionFavoriteProps extends React.Props<ActionFavorite> {}
      export class ActionFavorite extends React.Component<ActionFavoriteProps, {}> {}

      interface ActionThumbDownProps extends React.Props<ActionThumbDown> {}
      export class ActionThumbDown extends React.Component<ActionThumbDownProps, {}> {}

      interface ActionAssignmentReturnedProps extends React.Props<ActionAssignmentReturned> {}
      export class ActionAssignmentReturned extends React.Component<ActionAssignmentReturnedProps, {}> {}

      interface ActionAccountBoxProps extends React.Props<ActionAccountBox> {}
      export class ActionAccountBox extends React.Component<ActionAccountBoxProps, {}> {}

      interface ActionExtensionProps extends React.Props<ActionExtension> {}
      export class ActionExtension extends React.Component<ActionExtensionProps, {}> {}

      interface ActionPageviewProps extends React.Props<ActionPageview> {}
      export class ActionPageview extends React.Component<ActionPageviewProps, {}> {}

      interface ActionHttpsProps extends React.Props<ActionHttps> {}
      export class ActionHttps extends React.Component<ActionHttpsProps, {}> {}

      interface ActionTranslateProps extends React.Props<ActionTranslate> {}
      export class ActionTranslate extends React.Component<ActionTranslateProps, {}> {}

      interface ActionThreeDRotationProps extends React.Props<ActionThreeDRotation> {}
      export class ActionThreeDRotation extends React.Component<ActionThreeDRotationProps, {}> {}

      interface ActionTabUnselectedProps extends React.Props<ActionTabUnselected> {}
      export class ActionTabUnselected extends React.Component<ActionTabUnselectedProps, {}> {}

      interface ActionDescriptionProps extends React.Props<ActionDescription> {}
      export class ActionDescription extends React.Component<ActionDescriptionProps, {}> {}

      interface ActionNoteAddProps extends React.Props<ActionNoteAdd> {}
      export class ActionNoteAdd extends React.Component<ActionNoteAddProps, {}> {}

      interface ActionPermScanWifiProps extends React.Props<ActionPermScanWifi> {}
      export class ActionPermScanWifi extends React.Component<ActionPermScanWifiProps, {}> {}

      interface ActionPetsProps extends React.Props<ActionPets> {}
      export class ActionPets extends React.Component<ActionPetsProps, {}> {}

      interface ActionViewArrayProps extends React.Props<ActionViewArray> {}
      export class ActionViewArray extends React.Component<ActionViewArrayProps, {}> {}

      interface ActionShopTwoProps extends React.Props<ActionShopTwo> {}
      export class ActionShopTwo extends React.Component<ActionShopTwoProps, {}> {}

      interface ActionLineStyleProps extends React.Props<ActionLineStyle> {}
      export class ActionLineStyle extends React.Component<ActionLineStyleProps, {}> {}

      interface ActionLightbulbOutlineProps extends React.Props<ActionLightbulbOutline> {}
      export class ActionLightbulbOutline extends React.Component<ActionLightbulbOutlineProps, {}> {}

      interface ActionReportProblemProps extends React.Props<ActionReportProblem> {}
      export class ActionReportProblem extends React.Component<ActionReportProblemProps, {}> {}

      interface ActionSwapVertProps extends React.Props<ActionSwapVert> {}
      export class ActionSwapVert extends React.Component<ActionSwapVertProps, {}> {}

      interface ActionListProps extends React.Props<ActionList> {}
      export class ActionList extends React.Component<ActionListProps, {}> {}

      interface ActionSettingsVoiceProps extends React.Props<ActionSettingsVoice> {}
      export class ActionSettingsVoice extends React.Component<ActionSettingsVoiceProps, {}> {}

      interface ActionViewListProps extends React.Props<ActionViewList> {}
      export class ActionViewList extends React.Component<ActionViewListProps, {}> {}

      interface ActionPanToolProps extends React.Props<ActionPanTool> {}
      export class ActionPanTool extends React.Component<ActionPanToolProps, {}> {}

      interface ActionImportantDevicesProps extends React.Props<ActionImportantDevices> {}
      export class ActionImportantDevices extends React.Component<ActionImportantDevicesProps, {}> {}

      interface ActionRedeemProps extends React.Props<ActionRedeem> {}
      export class ActionRedeem extends React.Component<ActionRedeemProps, {}> {}

      interface ActionFlipToFrontProps extends React.Props<ActionFlipToFront> {}
      export class ActionFlipToFront extends React.Component<ActionFlipToFrontProps, {}> {}

      interface ActionAndroidProps extends React.Props<ActionAndroid> {}
      export class ActionAndroid extends React.Component<ActionAndroidProps, {}> {}

      interface ActionAccountCircleProps extends React.Props<ActionAccountCircle> {}
      export class ActionAccountCircle extends React.Component<ActionAccountCircleProps, {}> {}

      interface ActionEventSeatProps extends React.Props<ActionEventSeat> {}
      export class ActionEventSeat extends React.Component<ActionEventSeatProps, {}> {}

      interface ActionPermContactCalendarProps extends React.Props<ActionPermContactCalendar> {}
      export class ActionPermContactCalendar extends React.Component<ActionPermContactCalendarProps, {}> {}

      interface ActionPermPhoneMsgProps extends React.Props<ActionPermPhoneMsg> {}
      export class ActionPermPhoneMsg extends React.Component<ActionPermPhoneMsgProps, {}> {}

      interface ActionDeleteProps extends React.Props<ActionDelete> {}
      export class ActionDelete extends React.Component<ActionDeleteProps, {}> {}

      interface ActionCardMembershipProps extends React.Props<ActionCardMembership> {}
      export class ActionCardMembership extends React.Component<ActionCardMembershipProps, {}> {}

      interface ActionHourglassEmptyProps extends React.Props<ActionHourglassEmpty> {}
      export class ActionHourglassEmpty extends React.Component<ActionHourglassEmptyProps, {}> {}

      interface ActionScheduleProps extends React.Props<ActionSchedule> {}
      export class ActionSchedule extends React.Component<ActionScheduleProps, {}> {}

      interface ActionTrendingFlatProps extends React.Props<ActionTrendingFlat> {}
      export class ActionTrendingFlat extends React.Component<ActionTrendingFlatProps, {}> {}

      interface ActionMotorcycleProps extends React.Props<ActionMotorcycle> {}
      export class ActionMotorcycle extends React.Component<ActionMotorcycleProps, {}> {}

      interface ActionViewColumnProps extends React.Props<ActionViewColumn> {}
      export class ActionViewColumn extends React.Component<ActionViewColumnProps, {}> {}

      interface ActionSettingsCellProps extends React.Props<ActionSettingsCell> {}
      export class ActionSettingsCell extends React.Component<ActionSettingsCellProps, {}> {}

      interface ActionCreditCardProps extends React.Props<ActionCreditCard> {}
      export class ActionCreditCard extends React.Component<ActionCreditCardProps, {}> {}

      interface ActionViewModuleProps extends React.Props<ActionViewModule> {}
      export class ActionViewModule extends React.Component<ActionViewModuleProps, {}> {}

      interface ActionCompareArrowsProps extends React.Props<ActionCompareArrows> {}
      export class ActionCompareArrows extends React.Component<ActionCompareArrowsProps, {}> {}

      interface ActionSpeakerNotesProps extends React.Props<ActionSpeakerNotes> {}
      export class ActionSpeakerNotes extends React.Component<ActionSpeakerNotesProps, {}> {}

      interface SocialPersonProps extends React.Props<SocialPerson> {}
      export class SocialPerson extends React.Component<SocialPersonProps, {}> {}

      interface SocialNotificationsNoneProps extends React.Props<SocialNotificationsNone> {}
      export class SocialNotificationsNone extends React.Component<SocialNotificationsNoneProps, {}> {}

      interface SocialDomainProps extends React.Props<SocialDomain> {}
      export class SocialDomain extends React.Component<SocialDomainProps, {}> {}

      interface SocialNotificationsPausedProps extends React.Props<SocialNotificationsPaused> {}
      export class SocialNotificationsPaused extends React.Component<SocialNotificationsPausedProps, {}> {}

      interface SocialPersonOutlineProps extends React.Props<SocialPersonOutline> {}
      export class SocialPersonOutline extends React.Component<SocialPersonOutlineProps, {}> {}

      interface SocialPlusOneProps extends React.Props<SocialPlusOne> {}
      export class SocialPlusOne extends React.Component<SocialPlusOneProps, {}> {}

      interface SocialNotificationsActiveProps extends React.Props<SocialNotificationsActive> {}
      export class SocialNotificationsActive extends React.Component<SocialNotificationsActiveProps, {}> {}

      interface SocialShareProps extends React.Props<SocialShare> {}
      export class SocialShare extends React.Component<SocialShareProps, {}> {}

      interface SocialWhatshotProps extends React.Props<SocialWhatshot> {}
      export class SocialWhatshot extends React.Component<SocialWhatshotProps, {}> {}

      interface SocialPollProps extends React.Props<SocialPoll> {}
      export class SocialPoll extends React.Component<SocialPollProps, {}> {}

      interface SocialPagesProps extends React.Props<SocialPages> {}
      export class SocialPages extends React.Component<SocialPagesProps, {}> {}

      interface SocialNotificationsOffProps extends React.Props<SocialNotificationsOff> {}
      export class SocialNotificationsOff extends React.Component<SocialNotificationsOffProps, {}> {}

      interface SocialNotificationsProps extends React.Props<SocialNotifications> {}
      export class SocialNotifications extends React.Component<SocialNotificationsProps, {}> {}

      interface SocialSchoolProps extends React.Props<SocialSchool> {}
      export class SocialSchool extends React.Component<SocialSchoolProps, {}> {}

      interface SocialCakeProps extends React.Props<SocialCake> {}
      export class SocialCake extends React.Component<SocialCakeProps, {}> {}

      interface SocialPeopleOutlineProps extends React.Props<SocialPeopleOutline> {}
      export class SocialPeopleOutline extends React.Component<SocialPeopleOutlineProps, {}> {}

      interface SocialLocationCityProps extends React.Props<SocialLocationCity> {}
      export class SocialLocationCity extends React.Component<SocialLocationCityProps, {}> {}

      interface SocialPublicProps extends React.Props<SocialPublic> {}
      export class SocialPublic extends React.Component<SocialPublicProps, {}> {}

      interface SocialMoodBadProps extends React.Props<SocialMoodBad> {}
      export class SocialMoodBad extends React.Component<SocialMoodBadProps, {}> {}

      interface SocialPeopleProps extends React.Props<SocialPeople> {}
      export class SocialPeople extends React.Component<SocialPeopleProps, {}> {}

      interface SocialMoodProps extends React.Props<SocialMood> {}
      export class SocialMood extends React.Component<SocialMoodProps, {}> {}

      interface SocialPartyModeProps extends React.Props<SocialPartyMode> {}
      export class SocialPartyMode extends React.Component<SocialPartyModeProps, {}> {}

      interface SocialGroupProps extends React.Props<SocialGroup> {}
      export class SocialGroup extends React.Component<SocialGroupProps, {}> {}

      interface SocialPersonAddProps extends React.Props<SocialPersonAdd> {}
      export class SocialPersonAdd extends React.Component<SocialPersonAddProps, {}> {}

      interface SocialGroupAddProps extends React.Props<SocialGroupAdd> {}
      export class SocialGroupAdd extends React.Component<SocialGroupAddProps, {}> {}

      interface MapsEditLocationProps extends React.Props<MapsEditLocation> {}
      export class MapsEditLocation extends React.Component<MapsEditLocationProps, {}> {}

      interface MapsLocalAirportProps extends React.Props<MapsLocalAirport> {}
      export class MapsLocalAirport extends React.Component<MapsLocalAirportProps, {}> {}

      interface MapsLocalPhoneProps extends React.Props<MapsLocalPhone> {}
      export class MapsLocalPhone extends React.Component<MapsLocalPhoneProps, {}> {}

      interface MapsDirectionsCarProps extends React.Props<MapsDirectionsCar> {}
      export class MapsDirectionsCar extends React.Component<MapsDirectionsCarProps, {}> {}

      interface MapsLocalDrinkProps extends React.Props<MapsLocalDrink> {}
      export class MapsLocalDrink extends React.Component<MapsLocalDrinkProps, {}> {}

      interface MapsLocalGasStationProps extends React.Props<MapsLocalGasStation> {}
      export class MapsLocalGasStation extends React.Component<MapsLocalGasStationProps, {}> {}

      interface MapsStoreMallDirectoryProps extends React.Props<MapsStoreMallDirectory> {}
      export class MapsStoreMallDirectory extends React.Component<MapsStoreMallDirectoryProps, {}> {}

      interface MapsAddLocationProps extends React.Props<MapsAddLocation> {}
      export class MapsAddLocation extends React.Component<MapsAddLocationProps, {}> {}

      interface MapsLocalLaundryServiceProps extends React.Props<MapsLocalLaundryService> {}
      export class MapsLocalLaundryService extends React.Component<MapsLocalLaundryServiceProps, {}> {}

      interface MapsLocalHotelProps extends React.Props<MapsLocalHotel> {}
      export class MapsLocalHotel extends React.Component<MapsLocalHotelProps, {}> {}

      interface MapsLocalPizzaProps extends React.Props<MapsLocalPizza> {}
      export class MapsLocalPizza extends React.Component<MapsLocalPizzaProps, {}> {}

      interface MapsPersonPinCircleProps extends React.Props<MapsPersonPinCircle> {}
      export class MapsPersonPinCircle extends React.Component<MapsPersonPinCircleProps, {}> {}

      interface MapsTerrainProps extends React.Props<MapsTerrain> {}
      export class MapsTerrain extends React.Component<MapsTerrainProps, {}> {}

      interface MapsDirectionsSubwayProps extends React.Props<MapsDirectionsSubway> {}
      export class MapsDirectionsSubway extends React.Component<MapsDirectionsSubwayProps, {}> {}

      interface MapsLocalBarProps extends React.Props<MapsLocalBar> {}
      export class MapsLocalBar extends React.Component<MapsLocalBarProps, {}> {}

      interface MapsLocalCarWashProps extends React.Props<MapsLocalCarWash> {}
      export class MapsLocalCarWash extends React.Component<MapsLocalCarWashProps, {}> {}

      interface MapsRestaurantMenuProps extends React.Props<MapsRestaurantMenu> {}
      export class MapsRestaurantMenu extends React.Component<MapsRestaurantMenuProps, {}> {}

      interface MapsNearMeProps extends React.Props<MapsNearMe> {}
      export class MapsNearMe extends React.Component<MapsNearMeProps, {}> {}

      interface MapsDirectionsProps extends React.Props<MapsDirections> {}
      export class MapsDirections extends React.Component<MapsDirectionsProps, {}> {}

      interface MapsMyLocationProps extends React.Props<MapsMyLocation> {}
      export class MapsMyLocation extends React.Component<MapsMyLocationProps, {}> {}

      interface MapsLocalConvenienceStoreProps extends React.Props<MapsLocalConvenienceStore> {}
      export class MapsLocalConvenienceStore extends React.Component<MapsLocalConvenienceStoreProps, {}> {}

      interface MapsLocalOfferProps extends React.Props<MapsLocalOffer> {}
      export class MapsLocalOffer extends React.Component<MapsLocalOfferProps, {}> {}

      interface MapsLocalFloristProps extends React.Props<MapsLocalFlorist> {}
      export class MapsLocalFlorist extends React.Component<MapsLocalFloristProps, {}> {}

      interface MapsLocalShippingProps extends React.Props<MapsLocalShipping> {}
      export class MapsLocalShipping extends React.Component<MapsLocalShippingProps, {}> {}

      interface MapsLocalTaxiProps extends React.Props<MapsLocalTaxi> {}
      export class MapsLocalTaxi extends React.Component<MapsLocalTaxiProps, {}> {}

      interface MapsDirectionsWalkProps extends React.Props<MapsDirectionsWalk> {}
      export class MapsDirectionsWalk extends React.Component<MapsDirectionsWalkProps, {}> {}

      interface MapsLocalHospitalProps extends React.Props<MapsLocalHospital> {}
      export class MapsLocalHospital extends React.Component<MapsLocalHospitalProps, {}> {}

      interface MapsLayersProps extends React.Props<MapsLayers> {}
      export class MapsLayers extends React.Component<MapsLayersProps, {}> {}

      interface MapsDirectionsRunProps extends React.Props<MapsDirectionsRun> {}
      export class MapsDirectionsRun extends React.Component<MapsDirectionsRunProps, {}> {}

      interface MapsRateReviewProps extends React.Props<MapsRateReview> {}
      export class MapsRateReview extends React.Component<MapsRateReviewProps, {}> {}

      interface MapsLocalDiningProps extends React.Props<MapsLocalDining> {}
      export class MapsLocalDining extends React.Component<MapsLocalDiningProps, {}> {}

      interface MapsLocalPostOfficeProps extends React.Props<MapsLocalPostOffice> {}
      export class MapsLocalPostOffice extends React.Component<MapsLocalPostOfficeProps, {}> {}

      interface MapsPinDropProps extends React.Props<MapsPinDrop> {}
      export class MapsPinDrop extends React.Component<MapsPinDropProps, {}> {}

      interface MapsDirectionsBoatProps extends React.Props<MapsDirectionsBoat> {}
      export class MapsDirectionsBoat extends React.Component<MapsDirectionsBoatProps, {}> {}

      interface MapsLocalSeeProps extends React.Props<MapsLocalSee> {}
      export class MapsLocalSee extends React.Component<MapsLocalSeeProps, {}> {}

      interface MapsMapProps extends React.Props<MapsMap> {}
      export class MapsMap extends React.Component<MapsMapProps, {}> {}

      interface MapsFlightProps extends React.Props<MapsFlight> {}
      export class MapsFlight extends React.Component<MapsFlightProps, {}> {}

      interface MapsPersonPinProps extends React.Props<MapsPersonPin> {}
      export class MapsPersonPin extends React.Component<MapsPersonPinProps, {}> {}

      interface MapsSatelliteProps extends React.Props<MapsSatellite> {}
      export class MapsSatellite extends React.Component<MapsSatelliteProps, {}> {}

      interface MapsLocalPrintshopProps extends React.Props<MapsLocalPrintshop> {}
      export class MapsLocalPrintshop extends React.Component<MapsLocalPrintshopProps, {}> {}

      interface MapsNavigationProps extends React.Props<MapsNavigation> {}
      export class MapsNavigation extends React.Component<MapsNavigationProps, {}> {}

      interface MapsDirectionsRailwayProps extends React.Props<MapsDirectionsRailway> {}
      export class MapsDirectionsRailway extends React.Component<MapsDirectionsRailwayProps, {}> {}

      interface MapsLocalAtmProps extends React.Props<MapsLocalAtm> {}
      export class MapsLocalAtm extends React.Component<MapsLocalAtmProps, {}> {}

      interface MapsDirectionsTransitProps extends React.Props<MapsDirectionsTransit> {}
      export class MapsDirectionsTransit extends React.Component<MapsDirectionsTransitProps, {}> {}

      interface MapsLocalParkingProps extends React.Props<MapsLocalParking> {}
      export class MapsLocalParking extends React.Component<MapsLocalParkingProps, {}> {}

      interface MapsLocalCafeProps extends React.Props<MapsLocalCafe> {}
      export class MapsLocalCafe extends React.Component<MapsLocalCafeProps, {}> {}

      interface MapsLocalMallProps extends React.Props<MapsLocalMall> {}
      export class MapsLocalMall extends React.Component<MapsLocalMallProps, {}> {}

      interface MapsZoomOutMapProps extends React.Props<MapsZoomOutMap> {}
      export class MapsZoomOutMap extends React.Component<MapsZoomOutMapProps, {}> {}

      interface MapsLocalActivityProps extends React.Props<MapsLocalActivity> {}
      export class MapsLocalActivity extends React.Component<MapsLocalActivityProps, {}> {}

      interface MapsLocalGroceryStoreProps extends React.Props<MapsLocalGroceryStore> {}
      export class MapsLocalGroceryStore extends React.Component<MapsLocalGroceryStoreProps, {}> {}

      interface MapsLocalPharmacyProps extends React.Props<MapsLocalPharmacy> {}
      export class MapsLocalPharmacy extends React.Component<MapsLocalPharmacyProps, {}> {}

      interface MapsLocalMoviesProps extends React.Props<MapsLocalMovies> {}
      export class MapsLocalMovies extends React.Component<MapsLocalMoviesProps, {}> {}

      interface MapsPlaceProps extends React.Props<MapsPlace> {}
      export class MapsPlace extends React.Component<MapsPlaceProps, {}> {}

      interface MapsLayersClearProps extends React.Props<MapsLayersClear> {}
      export class MapsLayersClear extends React.Component<MapsLayersClearProps, {}> {}

      interface MapsHotelProps extends React.Props<MapsHotel> {}
      export class MapsHotel extends React.Component<MapsHotelProps, {}> {}

      interface MapsDirectionsBikeProps extends React.Props<MapsDirectionsBike> {}
      export class MapsDirectionsBike extends React.Component<MapsDirectionsBikeProps, {}> {}

      interface MapsLocalLibraryProps extends React.Props<MapsLocalLibrary> {}
      export class MapsLocalLibrary extends React.Component<MapsLocalLibraryProps, {}> {}

      interface MapsLocalPlayProps extends React.Props<MapsLocalPlay> {}
      export class MapsLocalPlay extends React.Component<MapsLocalPlayProps, {}> {}

      interface MapsDirectionsBusProps extends React.Props<MapsDirectionsBus> {}
      export class MapsDirectionsBus extends React.Component<MapsDirectionsBusProps, {}> {}

      interface MapsTrafficProps extends React.Props<MapsTraffic> {}
      export class MapsTraffic extends React.Component<MapsTrafficProps, {}> {}

      interface MapsBeenhereProps extends React.Props<MapsBeenhere> {}
      export class MapsBeenhere extends React.Component<MapsBeenhereProps, {}> {}

      interface CommunicationCallReceivedProps extends React.Props<CommunicationCallReceived> {}
      export class CommunicationCallReceived extends React.Component<CommunicationCallReceivedProps, {}> {}

      interface CommunicationDialpadProps extends React.Props<CommunicationDialpad> {}
      export class CommunicationDialpad extends React.Component<CommunicationDialpadProps, {}> {}

      interface CommunicationForumProps extends React.Props<CommunicationForum> {}
      export class CommunicationForum extends React.Component<CommunicationForumProps, {}> {}

      interface CommunicationNoSimProps extends React.Props<CommunicationNoSim> {}
      export class CommunicationNoSim extends React.Component<CommunicationNoSimProps, {}> {}

      interface CommunicationChatProps extends React.Props<CommunicationChat> {}
      export class CommunicationChat extends React.Component<CommunicationChatProps, {}> {}

      interface CommunicationStayPrimaryLandscapeProps extends React.Props<CommunicationStayPrimaryLandscape> {}
      export class CommunicationStayPrimaryLandscape extends React.Component<CommunicationStayPrimaryLandscapeProps, {}> {}

      interface CommunicationPhonelinkSetupProps extends React.Props<CommunicationPhonelinkSetup> {}
      export class CommunicationPhonelinkSetup extends React.Component<CommunicationPhonelinkSetupProps, {}> {}

      interface CommunicationRingVolumeProps extends React.Props<CommunicationRingVolume> {}
      export class CommunicationRingVolume extends React.Component<CommunicationRingVolumeProps, {}> {}

      interface CommunicationPhonelinkLockProps extends React.Props<CommunicationPhonelinkLock> {}
      export class CommunicationPhonelinkLock extends React.Component<CommunicationPhonelinkLockProps, {}> {}

      interface CommunicationContactsProps extends React.Props<CommunicationContacts> {}
      export class CommunicationContacts extends React.Component<CommunicationContactsProps, {}> {}

      interface CommunicationCallMissedProps extends React.Props<CommunicationCallMissed> {}
      export class CommunicationCallMissed extends React.Component<CommunicationCallMissedProps, {}> {}

      interface CommunicationContactMailProps extends React.Props<CommunicationContactMail> {}
      export class CommunicationContactMail extends React.Component<CommunicationContactMailProps, {}> {}

      interface CommunicationPortableWifiOffProps extends React.Props<CommunicationPortableWifiOff> {}
      export class CommunicationPortableWifiOff extends React.Component<CommunicationPortableWifiOffProps, {}> {}

      interface CommunicationCallMergeProps extends React.Props<CommunicationCallMerge> {}
      export class CommunicationCallMerge extends React.Component<CommunicationCallMergeProps, {}> {}

      interface CommunicationTactMailProps extends React.Props<CommunicationTactMail> {}
      export class CommunicationTactMail extends React.Component<CommunicationTactMailProps, {}> {}

      interface CommunicationStopScreenShareProps extends React.Props<CommunicationStopScreenShare> {}
      export class CommunicationStopScreenShare extends React.Component<CommunicationStopScreenShareProps, {}> {}

      interface CommunicationVpnKeyProps extends React.Props<CommunicationVpnKey> {}
      export class CommunicationVpnKey extends React.Component<CommunicationVpnKeyProps, {}> {}

      interface CommunicationSwapCallsProps extends React.Props<CommunicationSwapCalls> {}
      export class CommunicationSwapCalls extends React.Component<CommunicationSwapCallsProps, {}> {}

      interface CommunicationDialerSipProps extends React.Props<CommunicationDialerSip> {}
      export class CommunicationDialerSip extends React.Component<CommunicationDialerSipProps, {}> {}

      interface CommunicationBusinessProps extends React.Props<CommunicationBusiness> {}
      export class CommunicationBusiness extends React.Component<CommunicationBusinessProps, {}> {}

      interface CommunicationPhonelinkEraseProps extends React.Props<CommunicationPhonelinkErase> {}
      export class CommunicationPhonelinkErase extends React.Component<CommunicationPhonelinkEraseProps, {}> {}

      interface CommunicationCallProps extends React.Props<CommunicationCall> {}
      export class CommunicationCall extends React.Component<CommunicationCallProps, {}> {}

      interface CommunicationScreenShareProps extends React.Props<CommunicationScreenShare> {}
      export class CommunicationScreenShare extends React.Component<CommunicationScreenShareProps, {}> {}

      interface CommunicationClearAllProps extends React.Props<CommunicationClearAll> {}
      export class CommunicationClearAll extends React.Component<CommunicationClearAllProps, {}> {}

      interface CommunicationChatBubbleOutlineProps extends React.Props<CommunicationChatBubbleOutline> {}
      export class CommunicationChatBubbleOutline extends React.Component<CommunicationChatBubbleOutlineProps, {}> {}

      interface CommunicationCallMissedOutgoingProps extends React.Props<CommunicationCallMissedOutgoing> {}
      export class CommunicationCallMissedOutgoing extends React.Component<CommunicationCallMissedOutgoingProps, {}> {}

      interface CommunicationStayPrimaryPortraitProps extends React.Props<CommunicationStayPrimaryPortrait> {}
      export class CommunicationStayPrimaryPortrait extends React.Component<CommunicationStayPrimaryPortraitProps, {}> {}

      interface CommunicationStayCurrentPortraitProps extends React.Props<CommunicationStayCurrentPortrait> {}
      export class CommunicationStayCurrentPortrait extends React.Component<CommunicationStayCurrentPortraitProps, {}> {}

      interface CommunicationVoicemailProps extends React.Props<CommunicationVoicemail> {}
      export class CommunicationVoicemail extends React.Component<CommunicationVoicemailProps, {}> {}

      interface CommunicationSpeakerPhoneProps extends React.Props<CommunicationSpeakerPhone> {}
      export class CommunicationSpeakerPhone extends React.Component<CommunicationSpeakerPhoneProps, {}> {}

      interface CommunicationCallSplitProps extends React.Props<CommunicationCallSplit> {}
      export class CommunicationCallSplit extends React.Component<CommunicationCallSplitProps, {}> {}

      interface CommunicationLiveHelpProps extends React.Props<CommunicationLiveHelp> {}
      export class CommunicationLiveHelp extends React.Component<CommunicationLiveHelpProps, {}> {}

      interface CommunicationCallMadeProps extends React.Props<CommunicationCallMade> {}
      export class CommunicationCallMade extends React.Component<CommunicationCallMadeProps, {}> {}

      interface CommunicationPhoneProps extends React.Props<CommunicationPhone> {}
      export class CommunicationPhone extends React.Component<CommunicationPhoneProps, {}> {}

      interface CommunicationTextsmsProps extends React.Props<CommunicationTextsms> {}
      export class CommunicationTextsms extends React.Component<CommunicationTextsmsProps, {}> {}

      interface CommunicationMessageProps extends React.Props<CommunicationMessage> {}
      export class CommunicationMessage extends React.Component<CommunicationMessageProps, {}> {}

      interface CommunicationImportExportProps extends React.Props<CommunicationImportExport> {}
      export class CommunicationImportExport extends React.Component<CommunicationImportExportProps, {}> {}

      interface CommunicationImportContactsProps extends React.Props<CommunicationImportContacts> {}
      export class CommunicationImportContacts extends React.Component<CommunicationImportContactsProps, {}> {}

      interface CommunicationPhonelinkRingProps extends React.Props<CommunicationPhonelinkRing> {}
      export class CommunicationPhonelinkRing extends React.Component<CommunicationPhonelinkRingProps, {}> {}

      interface CommunicationPresentToAllProps extends React.Props<CommunicationPresentToAll> {}
      export class CommunicationPresentToAll extends React.Component<CommunicationPresentToAllProps, {}> {}

      interface CommunicationContactPhoneProps extends React.Props<CommunicationContactPhone> {}
      export class CommunicationContactPhone extends React.Component<CommunicationContactPhoneProps, {}> {}

      interface CommunicationInvertColorsOffProps extends React.Props<CommunicationInvertColorsOff> {}
      export class CommunicationInvertColorsOff extends React.Component<CommunicationInvertColorsOffProps, {}> {}

      interface CommunicationCommentProps extends React.Props<CommunicationComment> {}
      export class CommunicationComment extends React.Component<CommunicationCommentProps, {}> {}

      interface CommunicationChatBubbleProps extends React.Props<CommunicationChatBubble> {}
      export class CommunicationChatBubble extends React.Component<CommunicationChatBubbleProps, {}> {}

      interface CommunicationMailOutlineProps extends React.Props<CommunicationMailOutline> {}
      export class CommunicationMailOutline extends React.Component<CommunicationMailOutlineProps, {}> {}

      interface CommunicationLocationOnProps extends React.Props<CommunicationLocationOn> {}
      export class CommunicationLocationOn extends React.Component<CommunicationLocationOnProps, {}> {}

      interface CommunicationStayCurrentLandscapeProps extends React.Props<CommunicationStayCurrentLandscape> {}
      export class CommunicationStayCurrentLandscape extends React.Component<CommunicationStayCurrentLandscapeProps, {}> {}

      interface CommunicationLocationOffProps extends React.Props<CommunicationLocationOff> {}
      export class CommunicationLocationOff extends React.Component<CommunicationLocationOffProps, {}> {}

      interface CommunicationEmailProps extends React.Props<CommunicationEmail> {}
      export class CommunicationEmail extends React.Component<CommunicationEmailProps, {}> {}

      interface CommunicationCallEndProps extends React.Props<CommunicationCallEnd> {}
      export class CommunicationCallEnd extends React.Component<CommunicationCallEndProps, {}> {}

      interface ToggleCheckBoxProps extends React.Props<ToggleCheckBox> {}
      export class ToggleCheckBox extends React.Component<ToggleCheckBoxProps, {}> {}

      interface ToggleStarHalfProps extends React.Props<ToggleStarHalf> {}
      export class ToggleStarHalf extends React.Component<ToggleStarHalfProps, {}> {}

      interface ToggleCheckBoxOutlineBlankProps extends React.Props<ToggleCheckBoxOutlineBlank> {}
      export class ToggleCheckBoxOutlineBlank extends React.Component<ToggleCheckBoxOutlineBlankProps, {}> {}

      interface ToggleStarProps extends React.Props<ToggleStar> {}
      export class ToggleStar extends React.Component<ToggleStarProps, {}> {}

      interface ToggleStarBorderProps extends React.Props<ToggleStarBorder> {}
      export class ToggleStarBorder extends React.Component<ToggleStarBorderProps, {}> {}

      interface ToggleRadioButtonUncheckedProps extends React.Props<ToggleRadioButtonUnchecked> {}
      export class ToggleRadioButtonUnchecked extends React.Component<ToggleRadioButtonUncheckedProps, {}> {}

      interface ToggleIndeterminateCheckBoxProps extends React.Props<ToggleIndeterminateCheckBox> {}
      export class ToggleIndeterminateCheckBox extends React.Component<ToggleIndeterminateCheckBoxProps, {}> {}

      interface ToggleRadioButtonCheckedProps extends React.Props<ToggleRadioButtonChecked> {}
      export class ToggleRadioButtonChecked extends React.Component<ToggleRadioButtonCheckedProps, {}> {}

      interface IndexProps extends React.Props<Index> {}
      export class Index extends React.Component<IndexProps, {}> {}

      interface IndexGeneratorProps extends React.Props<IndexGenerator> {}
      export class IndexGenerator extends React.Component<IndexGeneratorProps, {}> {}

      interface AlertWarningProps extends React.Props<AlertWarning> {}
      export class AlertWarning extends React.Component<AlertWarningProps, {}> {}

      interface AlertAddAlertProps extends React.Props<AlertAddAlert> {}
      export class AlertAddAlert extends React.Component<AlertAddAlertProps, {}> {}

      interface AlertErrorOutlineProps extends React.Props<AlertErrorOutline> {}
      export class AlertErrorOutline extends React.Component<AlertErrorOutlineProps, {}> {}

      interface AlertErrorProps extends React.Props<AlertError> {}
      export class AlertError extends React.Component<AlertErrorProps, {}> {}

      interface FileFileUploadProps extends React.Props<FileFileUpload> {}
      export class FileFileUpload extends React.Component<FileFileUploadProps, {}> {}

      interface FileCloudUploadProps extends React.Props<FileCloudUpload> {}
      export class FileCloudUpload extends React.Component<FileCloudUploadProps, {}> {}

      interface FileCloudDoneProps extends React.Props<FileCloudDone> {}
      export class FileCloudDone extends React.Component<FileCloudDoneProps, {}> {}

      interface FileFolderOpenProps extends React.Props<FileFolderOpen> {}
      export class FileFolderOpen extends React.Component<FileFolderOpenProps, {}> {}

      interface FileCloudOffProps extends React.Props<FileCloudOff> {}
      export class FileCloudOff extends React.Component<FileCloudOffProps, {}> {}

      interface FileCloudQueueProps extends React.Props<FileCloudQueue> {}
      export class FileCloudQueue extends React.Component<FileCloudQueueProps, {}> {}

      interface FileFolderSharedProps extends React.Props<FileFolderShared> {}
      export class FileFolderShared extends React.Component<FileFolderSharedProps, {}> {}

      interface FileCloudCircleProps extends React.Props<FileCloudCircle> {}
      export class FileCloudCircle extends React.Component<FileCloudCircleProps, {}> {}

      interface FileFolderProps extends React.Props<FileFolder> {}
      export class FileFolder extends React.Component<FileFolderProps, {}> {}

      interface FileAttachmentProps extends React.Props<FileAttachment> {}
      export class FileAttachment extends React.Component<FileAttachmentProps, {}> {}

      interface FileCreateNewFolderProps extends React.Props<FileCreateNewFolder> {}
      export class FileCreateNewFolder extends React.Component<FileCreateNewFolderProps, {}> {}

      interface FileCloudDownloadProps extends React.Props<FileCloudDownload> {}
      export class FileCloudDownload extends React.Component<FileCloudDownloadProps, {}> {}

      interface FileCloudProps extends React.Props<FileCloud> {}
      export class FileCloud extends React.Component<FileCloudProps, {}> {}

      interface FileFileDownloadProps extends React.Props<FileFileDownload> {}
      export class FileFileDownload extends React.Component<FileFileDownloadProps, {}> {}

      interface NavigationArrowDropRightProps extends React.Props<NavigationArrowDropRight> {}
      export class NavigationArrowDropRight extends React.Component<NavigationArrowDropRightProps, {}> {}

      interface HardwareKeyboardProps extends React.Props<HardwareKeyboard> {}
      export class HardwareKeyboard extends React.Component<HardwareKeyboardProps, {}> {}

      interface HardwareToysProps extends React.Props<HardwareToys> {}
      export class HardwareToys extends React.Component<HardwareToysProps, {}> {}

      interface HardwareDockProps extends React.Props<HardwareDock> {}
      export class HardwareDock extends React.Component<HardwareDockProps, {}> {}

      interface HardwareHeadsetProps extends React.Props<HardwareHeadset> {}
      export class HardwareHeadset extends React.Component<HardwareHeadsetProps, {}> {}

      interface HardwareKeyboardVoiceProps extends React.Props<HardwareKeyboardVoice> {}
      export class HardwareKeyboardVoice extends React.Component<HardwareKeyboardVoiceProps, {}> {}

      interface HardwarePhonelinkOffProps extends React.Props<HardwarePhonelinkOff> {}
      export class HardwarePhonelinkOff extends React.Component<HardwarePhonelinkOffProps, {}> {}

      interface HardwareSpeakerGroupProps extends React.Props<HardwareSpeakerGroup> {}
      export class HardwareSpeakerGroup extends React.Component<HardwareSpeakerGroupProps, {}> {}

      interface HardwareDesktopWindowsProps extends React.Props<HardwareDesktopWindows> {}
      export class HardwareDesktopWindows extends React.Component<HardwareDesktopWindowsProps, {}> {}

      interface HardwareLaptopMacProps extends React.Props<HardwareLaptopMac> {}
      export class HardwareLaptopMac extends React.Component<HardwareLaptopMacProps, {}> {}

      interface HardwareKeyboardReturnProps extends React.Props<HardwareKeyboardReturn> {}
      export class HardwareKeyboardReturn extends React.Component<HardwareKeyboardReturnProps, {}> {}

      interface HardwareGamepadProps extends React.Props<HardwareGamepad> {}
      export class HardwareGamepad extends React.Component<HardwareGamepadProps, {}> {}

      interface HardwareKeyboardArrowUpProps extends React.Props<HardwareKeyboardArrowUp> {}
      export class HardwareKeyboardArrowUp extends React.Component<HardwareKeyboardArrowUpProps, {}> {}

      interface HardwareLaptopProps extends React.Props<HardwareLaptop> {}
      export class HardwareLaptop extends React.Component<HardwareLaptopProps, {}> {}

      interface HardwarePhoneIphoneProps extends React.Props<HardwarePhoneIphone> {}
      export class HardwarePhoneIphone extends React.Component<HardwarePhoneIphoneProps, {}> {}

      interface HardwareMemoryProps extends React.Props<HardwareMemory> {}
      export class HardwareMemory extends React.Component<HardwareMemoryProps, {}> {}

      interface HardwareSecurityProps extends React.Props<HardwareSecurity> {}
      export class HardwareSecurity extends React.Component<HardwareSecurityProps, {}> {}

      interface HardwareKeyboardCapslockProps extends React.Props<HardwareKeyboardCapslock> {}
      export class HardwareKeyboardCapslock extends React.Component<HardwareKeyboardCapslockProps, {}> {}

      interface HardwareSimCardProps extends React.Props<HardwareSimCard> {}
      export class HardwareSimCard extends React.Component<HardwareSimCardProps, {}> {}

      interface HardwareDevicesOtherProps extends React.Props<HardwareDevicesOther> {}
      export class HardwareDevicesOther extends React.Component<HardwareDevicesOtherProps, {}> {}

      interface HardwareTabletAndroidProps extends React.Props<HardwareTabletAndroid> {}
      export class HardwareTabletAndroid extends React.Component<HardwareTabletAndroidProps, {}> {}

      interface HardwareKeyboardArrowRightProps extends React.Props<HardwareKeyboardArrowRight> {}
      export class HardwareKeyboardArrowRight extends React.Component<HardwareKeyboardArrowRightProps, {}> {}

      interface HardwareKeyboardTabProps extends React.Props<HardwareKeyboardTab> {}
      export class HardwareKeyboardTab extends React.Component<HardwareKeyboardTabProps, {}> {}

      interface HardwareWatchProps extends React.Props<HardwareWatch> {}
      export class HardwareWatch extends React.Component<HardwareWatchProps, {}> {}

      interface HardwareSpeakerProps extends React.Props<HardwareSpeaker> {}
      export class HardwareSpeaker extends React.Component<HardwareSpeakerProps, {}> {}

      interface HardwarePhonelinkProps extends React.Props<HardwarePhonelink> {}
      export class HardwarePhonelink extends React.Component<HardwarePhonelinkProps, {}> {}

      interface HardwareLaptopWindowsProps extends React.Props<HardwareLaptopWindows> {}
      export class HardwareLaptopWindows extends React.Component<HardwareLaptopWindowsProps, {}> {}

      interface HardwareTvProps extends React.Props<HardwareTv> {}
      export class HardwareTv extends React.Component<HardwareTvProps, {}> {}

      interface HardwareHeadsetMicProps extends React.Props<HardwareHeadsetMic> {}
      export class HardwareHeadsetMic extends React.Component<HardwareHeadsetMicProps, {}> {}

      interface HardwareVideogameAssetProps extends React.Props<HardwareVideogameAsset> {}
      export class HardwareVideogameAsset extends React.Component<HardwareVideogameAssetProps, {}> {}

      interface HardwareKeyboardArrowDownProps extends React.Props<HardwareKeyboardArrowDown> {}
      export class HardwareKeyboardArrowDown extends React.Component<HardwareKeyboardArrowDownProps, {}> {}

      interface HardwareKeyboardHideProps extends React.Props<HardwareKeyboardHide> {}
      export class HardwareKeyboardHide extends React.Component<HardwareKeyboardHideProps, {}> {}

      interface HardwareScannerProps extends React.Props<HardwareScanner> {}
      export class HardwareScanner extends React.Component<HardwareScannerProps, {}> {}

      interface HardwareLaptopChromebookProps extends React.Props<HardwareLaptopChromebook> {}
      export class HardwareLaptopChromebook extends React.Component<HardwareLaptopChromebookProps, {}> {}

      interface HardwareTabletMacProps extends React.Props<HardwareTabletMac> {}
      export class HardwareTabletMac extends React.Component<HardwareTabletMacProps, {}> {}

      interface HardwareCastProps extends React.Props<HardwareCast> {}
      export class HardwareCast extends React.Component<HardwareCastProps, {}> {}

      interface HardwareCastConnectedProps extends React.Props<HardwareCastConnected> {}
      export class HardwareCastConnected extends React.Component<HardwareCastConnectedProps, {}> {}

      interface HardwareKeyboardArrowLeftProps extends React.Props<HardwareKeyboardArrowLeft> {}
      export class HardwareKeyboardArrowLeft extends React.Component<HardwareKeyboardArrowLeftProps, {}> {}

      interface HardwarePhoneAndroidProps extends React.Props<HardwarePhoneAndroid> {}
      export class HardwarePhoneAndroid extends React.Component<HardwarePhoneAndroidProps, {}> {}

      interface HardwareComputerProps extends React.Props<HardwareComputer> {}
      export class HardwareComputer extends React.Component<HardwareComputerProps, {}> {}

      interface HardwarePowerInputProps extends React.Props<HardwarePowerInput> {}
      export class HardwarePowerInput extends React.Component<HardwarePowerInputProps, {}> {}

      interface HardwareSmartphoneProps extends React.Props<HardwareSmartphone> {}
      export class HardwareSmartphone extends React.Component<HardwareSmartphoneProps, {}> {}

      interface HardwareRouterProps extends React.Props<HardwareRouter> {}
      export class HardwareRouter extends React.Component<HardwareRouterProps, {}> {}

      interface HardwareKeyboardBackspaceProps extends React.Props<HardwareKeyboardBackspace> {}
      export class HardwareKeyboardBackspace extends React.Component<HardwareKeyboardBackspaceProps, {}> {}

      interface HardwareDeveloperBoardProps extends React.Props<HardwareDeveloperBoard> {}
      export class HardwareDeveloperBoard extends React.Component<HardwareDeveloperBoardProps, {}> {}

      interface HardwareDeviceHubProps extends React.Props<HardwareDeviceHub> {}
      export class HardwareDeviceHub extends React.Component<HardwareDeviceHubProps, {}> {}

      interface HardwareMouseProps extends React.Props<HardwareMouse> {}
      export class HardwareMouse extends React.Component<HardwareMouseProps, {}> {}

      interface HardwareDesktopMacProps extends React.Props<HardwareDesktopMac> {}
      export class HardwareDesktopMac extends React.Component<HardwareDesktopMacProps, {}> {}

      interface HardwareTabletProps extends React.Props<HardwareTablet> {}
      export class HardwareTablet extends React.Component<HardwareTabletProps, {}> {}

      interface ContentAddBoxProps extends React.Props<ContentAddBox> {}
      export class ContentAddBox extends React.Component<ContentAddBoxProps, {}> {}

      interface ContentFilterListProps extends React.Props<ContentFilterList> {}
      export class ContentFilterList extends React.Component<ContentFilterListProps, {}> {}

      interface ContentSaveProps extends React.Props<ContentSave> {}
      export class ContentSave extends React.Component<ContentSaveProps, {}> {}

      interface ContentUnarchiveProps extends React.Props<ContentUnarchive> {}
      export class ContentUnarchive extends React.Component<ContentUnarchiveProps, {}> {}

      interface ContentLinkProps extends React.Props<ContentLink> {}
      export class ContentLink extends React.Component<ContentLinkProps, {}> {}

      interface ContentSortProps extends React.Props<ContentSort> {}
      export class ContentSort extends React.Component<ContentSortProps, {}> {}

      interface ContentTextFormatProps extends React.Props<ContentTextFormat> {}
      export class ContentTextFormat extends React.Component<ContentTextFormatProps, {}> {}

      interface ContentAddProps extends React.Props<ContentAdd> {}
      export class ContentAdd extends React.Component<ContentAddProps, {}> {}

      interface ContentSendProps extends React.Props<ContentSend> {}
      export class ContentSend extends React.Component<ContentSendProps, {}> {}

      interface ContentGestureProps extends React.Props<ContentGesture> {}
      export class ContentGesture extends React.Component<ContentGestureProps, {}> {}

      interface ContentArchiveProps extends React.Props<ContentArchive> {}
      export class ContentArchive extends React.Component<ContentArchiveProps, {}> {}

      interface ContentWeekendProps extends React.Props<ContentWeekend> {}
      export class ContentWeekend extends React.Component<ContentWeekendProps, {}> {}

      interface ContentMarkunreadProps extends React.Props<ContentMarkunread> {}
      export class ContentMarkunread extends React.Component<ContentMarkunreadProps, {}> {}

      interface ContentCreateProps extends React.Props<ContentCreate> {}
      export class ContentCreate extends React.Component<ContentCreateProps, {}> {}

      interface ContentContentCutProps extends React.Props<ContentContentCut> {}
      export class ContentContentCut extends React.Component<ContentContentCutProps, {}> {}

      interface ContentClearProps extends React.Props<ContentClear> {}
      export class ContentClear extends React.Component<ContentClearProps, {}> {}

      interface ContentRedoProps extends React.Props<ContentRedo> {}
      export class ContentRedo extends React.Component<ContentRedoProps, {}> {}

      interface ContentBlockProps extends React.Props<ContentBlock> {}
      export class ContentBlock extends React.Component<ContentBlockProps, {}> {}

      interface ContentForwardProps extends React.Props<ContentForward> {}
      export class ContentForward extends React.Component<ContentForwardProps, {}> {}

      interface ContentMailProps extends React.Props<ContentMail> {}
      export class ContentMail extends React.Component<ContentMailProps, {}> {}

      interface ContentInboxProps extends React.Props<ContentInbox> {}
      export class ContentInbox extends React.Component<ContentInboxProps, {}> {}

      interface ContentRemoveCircleProps extends React.Props<ContentRemoveCircle> {}
      export class ContentRemoveCircle extends React.Component<ContentRemoveCircleProps, {}> {}

      interface ContentMoveToInboxProps extends React.Props<ContentMoveToInbox> {}
      export class ContentMoveToInbox extends React.Component<ContentMoveToInboxProps, {}> {}

      interface ContentFlagProps extends React.Props<ContentFlag> {}
      export class ContentFlag extends React.Component<ContentFlagProps, {}> {}

      interface ContentReplyAllProps extends React.Props<ContentReplyAll> {}
      export class ContentReplyAll extends React.Component<ContentReplyAllProps, {}> {}

      interface ContentRemoveProps extends React.Props<ContentRemove> {}
      export class ContentRemove extends React.Component<ContentRemoveProps, {}> {}

      interface ContentNextWeekProps extends React.Props<ContentNextWeek> {}
      export class ContentNextWeek extends React.Component<ContentNextWeekProps, {}> {}

      interface ContentUndoProps extends React.Props<ContentUndo> {}
      export class ContentUndo extends React.Component<ContentUndoProps, {}> {}

      interface ContentFontDownloadProps extends React.Props<ContentFontDownload> {}
      export class ContentFontDownload extends React.Component<ContentFontDownloadProps, {}> {}

      interface ContentRemoveCircleOutlineProps extends React.Props<ContentRemoveCircleOutline> {}
      export class ContentRemoveCircleOutline extends React.Component<ContentRemoveCircleOutlineProps, {}> {}

      interface ContentBackspaceProps extends React.Props<ContentBackspace> {}
      export class ContentBackspace extends React.Component<ContentBackspaceProps, {}> {}

      interface ContentReplyProps extends React.Props<ContentReply> {}
      export class ContentReply extends React.Component<ContentReplyProps, {}> {}

      interface ContentReportProps extends React.Props<ContentReport> {}
      export class ContentReport extends React.Component<ContentReportProps, {}> {}

      interface ContentAddCircleProps extends React.Props<ContentAddCircle> {}
      export class ContentAddCircle extends React.Component<ContentAddCircleProps, {}> {}

      interface ContentContentCopyProps extends React.Props<ContentContentCopy> {}
      export class ContentContentCopy extends React.Component<ContentContentCopyProps, {}> {}

      interface ContentContentPasteProps extends React.Props<ContentContentPaste> {}
      export class ContentContentPaste extends React.Component<ContentContentPasteProps, {}> {}

      interface ContentSelectAllProps extends React.Props<ContentSelectAll> {}
      export class ContentSelectAll extends React.Component<ContentSelectAllProps, {}> {}

      interface ContentAddCircleOutlineProps extends React.Props<ContentAddCircleOutline> {}
      export class ContentAddCircleOutline extends React.Component<ContentAddCircleOutlineProps, {}> {}

      interface ContentDraftsProps extends React.Props<ContentDrafts> {}
      export class ContentDrafts extends React.Component<ContentDraftsProps, {}> {}

      interface EditorWrapTextProps extends React.Props<EditorWrapText> {}
      export class EditorWrapText extends React.Component<EditorWrapTextProps, {}> {}

      interface EditorFormatSizeProps extends React.Props<EditorFormatSize> {}
      export class EditorFormatSize extends React.Component<EditorFormatSizeProps, {}> {}

      interface EditorFunctionsProps extends React.Props<EditorFunctions> {}
      export class EditorFunctions extends React.Component<EditorFunctionsProps, {}> {}

      interface EditorFormatBoldProps extends React.Props<EditorFormatBold> {}
      export class EditorFormatBold extends React.Component<EditorFormatBoldProps, {}> {}

      interface EditorFormatAlignCenterProps extends React.Props<EditorFormatAlignCenter> {}
      export class EditorFormatAlignCenter extends React.Component<EditorFormatAlignCenterProps, {}> {}

      interface EditorModeCommentProps extends React.Props<EditorModeComment> {}
      export class EditorModeComment extends React.Component<EditorModeCommentProps, {}> {}

      interface EditorMoneyOffProps extends React.Props<EditorMoneyOff> {}
      export class EditorMoneyOff extends React.Component<EditorMoneyOffProps, {}> {}

      interface EditorFormatTextdirectionRToLProps extends React.Props<EditorFormatTextdirectionRToL> {}
      export class EditorFormatTextdirectionRToL extends React.Component<EditorFormatTextdirectionRToLProps, {}> {}

      interface EditorInsertDriveFileProps extends React.Props<EditorInsertDriveFile> {}
      export class EditorInsertDriveFile extends React.Component<EditorInsertDriveFileProps, {}> {}

      interface EditorHighlightProps extends React.Props<EditorHighlight> {}
      export class EditorHighlight extends React.Component<EditorHighlightProps, {}> {}

      interface EditorFormatClearProps extends React.Props<EditorFormatClear> {}
      export class EditorFormatClear extends React.Component<EditorFormatClearProps, {}> {}

      interface EditorBorderStyleProps extends React.Props<EditorBorderStyle> {}
      export class EditorBorderStyle extends React.Component<EditorBorderStyleProps, {}> {}

      interface EditorFormatShapesProps extends React.Props<EditorFormatShapes> {}
      export class EditorFormatShapes extends React.Component<EditorFormatShapesProps, {}> {}

      interface EditorFormatPaintProps extends React.Props<EditorFormatPaint> {}
      export class EditorFormatPaint extends React.Component<EditorFormatPaintProps, {}> {}

      interface EditorLinearScaleProps extends React.Props<EditorLinearScale> {}
      export class EditorLinearScale extends React.Component<EditorLinearScaleProps, {}> {}

      interface EditorInsertPhotoProps extends React.Props<EditorInsertPhoto> {}
      export class EditorInsertPhoto extends React.Component<EditorInsertPhotoProps, {}> {}

      interface EditorDragHandleProps extends React.Props<EditorDragHandle> {}
      export class EditorDragHandle extends React.Component<EditorDragHandleProps, {}> {}

      interface EditorMergeTypeProps extends React.Props<EditorMergeType> {}
      export class EditorMergeType extends React.Component<EditorMergeTypeProps, {}> {}

      interface EditorAttachMoneyProps extends React.Props<EditorAttachMoney> {}
      export class EditorAttachMoney extends React.Component<EditorAttachMoneyProps, {}> {}

      interface EditorBorderVerticalProps extends React.Props<EditorBorderVertical> {}
      export class EditorBorderVertical extends React.Component<EditorBorderVerticalProps, {}> {}

      interface EditorFormatIndentDecreaseProps extends React.Props<EditorFormatIndentDecrease> {}
      export class EditorFormatIndentDecrease extends React.Component<EditorFormatIndentDecreaseProps, {}> {}

      interface EditorInsertEmoticonProps extends React.Props<EditorInsertEmoticon> {}
      export class EditorInsertEmoticon extends React.Component<EditorInsertEmoticonProps, {}> {}

      interface EditorInsertInvitationProps extends React.Props<EditorInsertInvitation> {}
      export class EditorInsertInvitation extends React.Component<EditorInsertInvitationProps, {}> {}

      interface EditorFormatColorFillProps extends React.Props<EditorFormatColorFill> {}
      export class EditorFormatColorFill extends React.Component<EditorFormatColorFillProps, {}> {}

      interface EditorModeEditProps extends React.Props<EditorModeEdit> {}
      export class EditorModeEdit extends React.Component<EditorModeEditProps, {}> {}

      interface EditorVerticalAlignBottomProps extends React.Props<EditorVerticalAlignBottom> {}
      export class EditorVerticalAlignBottom extends React.Component<EditorVerticalAlignBottomProps, {}> {}

      interface EditorFormatAlignJustifyProps extends React.Props<EditorFormatAlignJustify> {}
      export class EditorFormatAlignJustify extends React.Component<EditorFormatAlignJustifyProps, {}> {}

      interface EditorAttachFileProps extends React.Props<EditorAttachFile> {}
      export class EditorAttachFile extends React.Component<EditorAttachFileProps, {}> {}

      interface EditorSpaceBarProps extends React.Props<EditorSpaceBar> {}
      export class EditorSpaceBar extends React.Component<EditorSpaceBarProps, {}> {}

      interface EditorBorderClearProps extends React.Props<EditorBorderClear> {}
      export class EditorBorderClear extends React.Component<EditorBorderClearProps, {}> {}

      interface EditorShortTextProps extends React.Props<EditorShortText> {}
      export class EditorShortText extends React.Component<EditorShortTextProps, {}> {}

      interface EditorInsertLinkProps extends React.Props<EditorInsertLink> {}
      export class EditorInsertLink extends React.Component<EditorInsertLinkProps, {}> {}

      interface EditorFormatListNumberedProps extends React.Props<EditorFormatListNumbered> {}
      export class EditorFormatListNumbered extends React.Component<EditorFormatListNumberedProps, {}> {}

      interface EditorFormatQuoteProps extends React.Props<EditorFormatQuote> {}
      export class EditorFormatQuote extends React.Component<EditorFormatQuoteProps, {}> {}

      interface EditorBorderLeftProps extends React.Props<EditorBorderLeft> {}
      export class EditorBorderLeft extends React.Component<EditorBorderLeftProps, {}> {}

      interface EditorFormatUnderlinedProps extends React.Props<EditorFormatUnderlined> {}
      export class EditorFormatUnderlined extends React.Component<EditorFormatUnderlinedProps, {}> {}

      interface EditorTextFieldsProps extends React.Props<EditorTextFields> {}
      export class EditorTextFields extends React.Component<EditorTextFieldsProps, {}> {}

      interface EditorFormatItalicProps extends React.Props<EditorFormatItalic> {}
      export class EditorFormatItalic extends React.Component<EditorFormatItalicProps, {}> {}

      interface EditorPublishProps extends React.Props<EditorPublish> {}
      export class EditorPublish extends React.Component<EditorPublishProps, {}> {}

      interface EditorBorderTopProps extends React.Props<EditorBorderTop> {}
      export class EditorBorderTop extends React.Component<EditorBorderTopProps, {}> {}

      interface EditorFormatIndentIncreaseProps extends React.Props<EditorFormatIndentIncrease> {}
      export class EditorFormatIndentIncrease extends React.Component<EditorFormatIndentIncreaseProps, {}> {}

      interface EditorBorderBottomProps extends React.Props<EditorBorderBottom> {}
      export class EditorBorderBottom extends React.Component<EditorBorderBottomProps, {}> {}

      interface EditorFormatAlignRightProps extends React.Props<EditorFormatAlignRight> {}
      export class EditorFormatAlignRight extends React.Component<EditorFormatAlignRightProps, {}> {}

      interface EditorBorderRightProps extends React.Props<EditorBorderRight> {}
      export class EditorBorderRight extends React.Component<EditorBorderRightProps, {}> {}

      interface EditorInsertCommentProps extends React.Props<EditorInsertComment> {}
      export class EditorInsertComment extends React.Component<EditorInsertCommentProps, {}> {}

      interface EditorStrikethroughSProps extends React.Props<EditorStrikethroughS> {}
      export class EditorStrikethroughS extends React.Component<EditorStrikethroughSProps, {}> {}

      interface EditorFormatStrikethroughProps extends React.Props<EditorFormatStrikethrough> {}
      export class EditorFormatStrikethrough extends React.Component<EditorFormatStrikethroughProps, {}> {}

      interface EditorInsertChartProps extends React.Props<EditorInsertChart> {}
      export class EditorInsertChart extends React.Component<EditorInsertChartProps, {}> {}

      interface EditorFormatColorResetProps extends React.Props<EditorFormatColorReset> {}
      export class EditorFormatColorReset extends React.Component<EditorFormatColorResetProps, {}> {}

      interface EditorBorderInnerProps extends React.Props<EditorBorderInner> {}
      export class EditorBorderInner extends React.Component<EditorBorderInnerProps, {}> {}

      interface EditorFormatColorTextProps extends React.Props<EditorFormatColorText> {}
      export class EditorFormatColorText extends React.Component<EditorFormatColorTextProps, {}> {}

      interface EditorBorderHorizontalProps extends React.Props<EditorBorderHorizontal> {}
      export class EditorBorderHorizontal extends React.Component<EditorBorderHorizontalProps, {}> {}

      interface EditorFormatListBulletedProps extends React.Props<EditorFormatListBulleted> {}
      export class EditorFormatListBulleted extends React.Component<EditorFormatListBulletedProps, {}> {}

      interface EditorBorderOuterProps extends React.Props<EditorBorderOuter> {}
      export class EditorBorderOuter extends React.Component<EditorBorderOuterProps, {}> {}

      interface EditorFormatAlignLeftProps extends React.Props<EditorFormatAlignLeft> {}
      export class EditorFormatAlignLeft extends React.Component<EditorFormatAlignLeftProps, {}> {}

      interface EditorBorderColorProps extends React.Props<EditorBorderColor> {}
      export class EditorBorderColor extends React.Component<EditorBorderColorProps, {}> {}

      interface EditorFormatTextdirectionLToRProps extends React.Props<EditorFormatTextdirectionLToR> {}
      export class EditorFormatTextdirectionLToR extends React.Component<EditorFormatTextdirectionLToRProps, {}> {}

      interface EditorVerticalAlignCenterProps extends React.Props<EditorVerticalAlignCenter> {}
      export class EditorVerticalAlignCenter extends React.Component<EditorVerticalAlignCenterProps, {}> {}

      interface EditorVerticalAlignTopProps extends React.Props<EditorVerticalAlignTop> {}
      export class EditorVerticalAlignTop extends React.Component<EditorVerticalAlignTopProps, {}> {}

      interface EditorFormatLineSpacingProps extends React.Props<EditorFormatLineSpacing> {}
      export class EditorFormatLineSpacing extends React.Component<EditorFormatLineSpacingProps, {}> {}

      interface EditorBorderAllProps extends React.Props<EditorBorderAll> {}
      export class EditorBorderAll extends React.Component<EditorBorderAllProps, {}> {}

      interface DeviceScreenLockPortraitProps extends React.Props<DeviceScreenLockPortrait> {}
      export class DeviceScreenLockPortrait extends React.Component<DeviceScreenLockPortraitProps, {}> {}

      interface DeviceSignalCellularOffProps extends React.Props<DeviceSignalCellularOff> {}
      export class DeviceSignalCellularOff extends React.Component<DeviceSignalCellularOffProps, {}> {}

      interface DeviceBluetoothSearchingProps extends React.Props<DeviceBluetoothSearching> {}
      export class DeviceBluetoothSearching extends React.Component<DeviceBluetoothSearchingProps, {}> {}

      interface DeviceSignalCellular3BarProps extends React.Props<DeviceSignalCellular3Bar> {}
      export class DeviceSignalCellular3Bar extends React.Component<DeviceSignalCellular3BarProps, {}> {}

      interface DeviceNetworkCellProps extends React.Props<DeviceNetworkCell> {}
      export class DeviceNetworkCell extends React.Component<DeviceNetworkCellProps, {}> {}

      interface DeviceSignalCellularNoSimProps extends React.Props<DeviceSignalCellularNoSim> {}
      export class DeviceSignalCellularNoSim extends React.Component<DeviceSignalCellularNoSimProps, {}> {}

      interface DeviceSignalWifi2BarProps extends React.Props<DeviceSignalWifi2Bar> {}
      export class DeviceSignalWifi2Bar extends React.Component<DeviceSignalWifi2BarProps, {}> {}

      interface DeviceDevicesProps extends React.Props<DeviceDevices> {}
      export class DeviceDevices extends React.Component<DeviceDevicesProps, {}> {}

      interface DeviceBattery90Props extends React.Props<DeviceBattery90> {}
      export class DeviceBattery90 extends React.Component<DeviceBattery90Props, {}> {}

      interface DeviceBatteryCharging80Props extends React.Props<DeviceBatteryCharging80> {}
      export class DeviceBatteryCharging80 extends React.Component<DeviceBatteryCharging80Props, {}> {}

      interface DeviceLocationSearchingProps extends React.Props<DeviceLocationSearching> {}
      export class DeviceLocationSearching extends React.Component<DeviceLocationSearchingProps, {}> {}

      interface DeviceWallpaperProps extends React.Props<DeviceWallpaper> {}
      export class DeviceWallpaper extends React.Component<DeviceWallpaperProps, {}> {}

      interface DeviceScreenLockRotationProps extends React.Props<DeviceScreenLockRotation> {}
      export class DeviceScreenLockRotation extends React.Component<DeviceScreenLockRotationProps, {}> {}

      interface DeviceScreenLockLandscapeProps extends React.Props<DeviceScreenLockLandscape> {}
      export class DeviceScreenLockLandscape extends React.Component<DeviceScreenLockLandscapeProps, {}> {}

      interface DeviceBatteryCharging20Props extends React.Props<DeviceBatteryCharging20> {}
      export class DeviceBatteryCharging20 extends React.Component<DeviceBatteryCharging20Props, {}> {}

      interface DeviceUsbProps extends React.Props<DeviceUsb> {}
      export class DeviceUsb extends React.Component<DeviceUsbProps, {}> {}

      interface DeviceAirplanemodeActiveProps extends React.Props<DeviceAirplanemodeActive> {}
      export class DeviceAirplanemodeActive extends React.Component<DeviceAirplanemodeActiveProps, {}> {}

      interface DeviceNetworkWifiProps extends React.Props<DeviceNetworkWifi> {}
      export class DeviceNetworkWifi extends React.Component<DeviceNetworkWifiProps, {}> {}

      interface DeviceGraphicEqProps extends React.Props<DeviceGraphicEq> {}
      export class DeviceGraphicEq extends React.Component<DeviceGraphicEqProps, {}> {}

      interface DeviceBluetoothConnectedProps extends React.Props<DeviceBluetoothConnected> {}
      export class DeviceBluetoothConnected extends React.Component<DeviceBluetoothConnectedProps, {}> {}

      interface DeviceGpsFixedProps extends React.Props<DeviceGpsFixed> {}
      export class DeviceGpsFixed extends React.Component<DeviceGpsFixedProps, {}> {}

      interface DeviceSignalCellularConnectedNoInternet4BarProps extends React.Props<DeviceSignalCellularConnectedNoInternet4Bar> {}
      export class DeviceSignalCellularConnectedNoInternet4Bar extends React.Component<DeviceSignalCellularConnectedNoInternet4BarProps, {}> {}

      interface DeviceBrightnessMediumProps extends React.Props<DeviceBrightnessMedium> {}
      export class DeviceBrightnessMedium extends React.Component<DeviceBrightnessMediumProps, {}> {}

      interface DeviceSignalCellularConnectedNoInternet3BarProps extends React.Props<DeviceSignalCellularConnectedNoInternet3Bar> {}
      export class DeviceSignalCellularConnectedNoInternet3Bar extends React.Component<DeviceSignalCellularConnectedNoInternet3BarProps, {}> {}

      interface DeviceSignalWifi3BarLockProps extends React.Props<DeviceSignalWifi3BarLock> {}
      export class DeviceSignalWifi3BarLock extends React.Component<DeviceSignalWifi3BarLockProps, {}> {}

      interface DeviceBattery80Props extends React.Props<DeviceBattery80> {}
      export class DeviceBattery80 extends React.Component<DeviceBattery80Props, {}> {}

      interface DeviceWifiLockProps extends React.Props<DeviceWifiLock> {}
      export class DeviceWifiLock extends React.Component<DeviceWifiLockProps, {}> {}

      interface DeviceSignalWifi2BarLockProps extends React.Props<DeviceSignalWifi2BarLock> {}
      export class DeviceSignalWifi2BarLock extends React.Component<DeviceSignalWifi2BarLockProps, {}> {}

      interface DeviceBluetoothProps extends React.Props<DeviceBluetooth> {}
      export class DeviceBluetooth extends React.Component<DeviceBluetoothProps, {}> {}

      interface DeviceAccessTimeProps extends React.Props<DeviceAccessTime> {}
      export class DeviceAccessTime extends React.Component<DeviceAccessTimeProps, {}> {}

      interface DeviceBatteryCharging30Props extends React.Props<DeviceBatteryCharging30> {}
      export class DeviceBatteryCharging30 extends React.Component<DeviceBatteryCharging30Props, {}> {}

      interface DeviceSignalWifiOffProps extends React.Props<DeviceSignalWifiOff> {}
      export class DeviceSignalWifiOff extends React.Component<DeviceSignalWifiOffProps, {}> {}

      interface DeviceDvrProps extends React.Props<DeviceDvr> {}
      export class DeviceDvr extends React.Component<DeviceDvrProps, {}> {}

      interface DeviceBattery60Props extends React.Props<DeviceBattery60> {}
      export class DeviceBattery60 extends React.Component<DeviceBattery60Props, {}> {}

      interface DeviceAccessAlarmProps extends React.Props<DeviceAccessAlarm> {}
      export class DeviceAccessAlarm extends React.Component<DeviceAccessAlarmProps, {}> {}

      interface DeviceNfcProps extends React.Props<DeviceNfc> {}
      export class DeviceNfc extends React.Component<DeviceNfcProps, {}> {}

      interface DeviceDataUsageProps extends React.Props<DeviceDataUsage> {}
      export class DeviceDataUsage extends React.Component<DeviceDataUsageProps, {}> {}

      interface DeviceAccessAlarmsProps extends React.Props<DeviceAccessAlarms> {}
      export class DeviceAccessAlarms extends React.Component<DeviceAccessAlarmsProps, {}> {}

      interface DeviceBatteryFullProps extends React.Props<DeviceBatteryFull> {}
      export class DeviceBatteryFull extends React.Component<DeviceBatteryFullProps, {}> {}

      interface DeviceBatteryChargingFullProps extends React.Props<DeviceBatteryChargingFull> {}
      export class DeviceBatteryChargingFull extends React.Component<DeviceBatteryChargingFullProps, {}> {}

      interface DeviceSettingsSystemDaydreamProps extends React.Props<DeviceSettingsSystemDaydream> {}
      export class DeviceSettingsSystemDaydream extends React.Component<DeviceSettingsSystemDaydreamProps, {}> {}

      interface DeviceBatteryStdProps extends React.Props<DeviceBatteryStd> {}
      export class DeviceBatteryStd extends React.Component<DeviceBatteryStdProps, {}> {}

      interface DeviceBatteryUnknownProps extends React.Props<DeviceBatteryUnknown> {}
      export class DeviceBatteryUnknown extends React.Component<DeviceBatteryUnknownProps, {}> {}

      interface DeviceAddAlarmProps extends React.Props<DeviceAddAlarm> {}
      export class DeviceAddAlarm extends React.Component<DeviceAddAlarmProps, {}> {}

      interface DeviceStorageProps extends React.Props<DeviceStorage> {}
      export class DeviceStorage extends React.Component<DeviceStorageProps, {}> {}

      interface DeviceBatteryCharging90Props extends React.Props<DeviceBatteryCharging90> {}
      export class DeviceBatteryCharging90 extends React.Component<DeviceBatteryCharging90Props, {}> {}

      interface DeviceScreenRotationProps extends React.Props<DeviceScreenRotation> {}
      export class DeviceScreenRotation extends React.Component<DeviceScreenRotationProps, {}> {}

      interface DeviceSignalWifi4BarProps extends React.Props<DeviceSignalWifi4Bar> {}
      export class DeviceSignalWifi4Bar extends React.Component<DeviceSignalWifi4BarProps, {}> {}

      interface DeviceBatteryCharging50Props extends React.Props<DeviceBatteryCharging50> {}
      export class DeviceBatteryCharging50 extends React.Component<DeviceBatteryCharging50Props, {}> {}

      interface DeviceBattery30Props extends React.Props<DeviceBattery30> {}
      export class DeviceBattery30 extends React.Component<DeviceBattery30Props, {}> {}

      interface DeviceSignalCellularConnectedNoInternet0BarProps extends React.Props<DeviceSignalCellularConnectedNoInternet0Bar> {}
      export class DeviceSignalCellularConnectedNoInternet0Bar extends React.Component<DeviceSignalCellularConnectedNoInternet0BarProps, {}> {}

      interface DeviceBatteryAlertProps extends React.Props<DeviceBatteryAlert> {}
      export class DeviceBatteryAlert extends React.Component<DeviceBatteryAlertProps, {}> {}

      interface DeviceSignalWifi1BarProps extends React.Props<DeviceSignalWifi1Bar> {}
      export class DeviceSignalWifi1Bar extends React.Component<DeviceSignalWifi1BarProps, {}> {}

      interface DeviceSignalCellular4BarProps extends React.Props<DeviceSignalCellular4Bar> {}
      export class DeviceSignalCellular4Bar extends React.Component<DeviceSignalCellular4BarProps, {}> {}

      interface DeviceWifiTetheringProps extends React.Props<DeviceWifiTethering> {}
      export class DeviceWifiTethering extends React.Component<DeviceWifiTetheringProps, {}> {}

      interface DeviceSignalWifi0BarProps extends React.Props<DeviceSignalWifi0Bar> {}
      export class DeviceSignalWifi0Bar extends React.Component<DeviceSignalWifi0BarProps, {}> {}

      interface DeviceBrightnessAutoProps extends React.Props<DeviceBrightnessAuto> {}
      export class DeviceBrightnessAuto extends React.Component<DeviceBrightnessAutoProps, {}> {}

      interface DeviceLocationDisabledProps extends React.Props<DeviceLocationDisabled> {}
      export class DeviceLocationDisabled extends React.Component<DeviceLocationDisabledProps, {}> {}

      interface DeviceSignalWifi3BarProps extends React.Props<DeviceSignalWifi3Bar> {}
      export class DeviceSignalWifi3Bar extends React.Component<DeviceSignalWifi3BarProps, {}> {}

      interface DeviceGpsNotFixedProps extends React.Props<DeviceGpsNotFixed> {}
      export class DeviceGpsNotFixed extends React.Component<DeviceGpsNotFixedProps, {}> {}

      interface DeviceSignalCellular1BarProps extends React.Props<DeviceSignalCellular1Bar> {}
      export class DeviceSignalCellular1Bar extends React.Component<DeviceSignalCellular1BarProps, {}> {}

      interface DeviceBatteryCharging60Props extends React.Props<DeviceBatteryCharging60> {}
      export class DeviceBatteryCharging60 extends React.Component<DeviceBatteryCharging60Props, {}> {}

      interface DeviceGpsOffProps extends React.Props<DeviceGpsOff> {}
      export class DeviceGpsOff extends React.Component<DeviceGpsOffProps, {}> {}

      interface DeviceSignalCellularNullProps extends React.Props<DeviceSignalCellularNull> {}
      export class DeviceSignalCellularNull extends React.Component<DeviceSignalCellularNullProps, {}> {}

      interface DeviceBrightnessLowProps extends React.Props<DeviceBrightnessLow> {}
      export class DeviceBrightnessLow extends React.Component<DeviceBrightnessLowProps, {}> {}

      interface DeviceSdStorageProps extends React.Props<DeviceSdStorage> {}
      export class DeviceSdStorage extends React.Component<DeviceSdStorageProps, {}> {}

      interface DeviceAirplanemodeInactiveProps extends React.Props<DeviceAirplanemodeInactive> {}
      export class DeviceAirplanemodeInactive extends React.Component<DeviceAirplanemodeInactiveProps, {}> {}

      interface DeviceWidgetsProps extends React.Props<DeviceWidgets> {}
      export class DeviceWidgets extends React.Component<DeviceWidgetsProps, {}> {}

      interface DeviceBrightnessHighProps extends React.Props<DeviceBrightnessHigh> {}
      export class DeviceBrightnessHigh extends React.Component<DeviceBrightnessHighProps, {}> {}

      interface DeviceBattery20Props extends React.Props<DeviceBattery20> {}
      export class DeviceBattery20 extends React.Component<DeviceBattery20Props, {}> {}

      interface DeviceBluetoothDisabledProps extends React.Props<DeviceBluetoothDisabled> {}
      export class DeviceBluetoothDisabled extends React.Component<DeviceBluetoothDisabledProps, {}> {}

      interface DeviceSignalWifi4BarLockProps extends React.Props<DeviceSignalWifi4BarLock> {}
      export class DeviceSignalWifi4BarLock extends React.Component<DeviceSignalWifi4BarLockProps, {}> {}

      interface DeviceDeveloperModeProps extends React.Props<DeviceDeveloperMode> {}
      export class DeviceDeveloperMode extends React.Component<DeviceDeveloperModeProps, {}> {}

      interface DeviceBattery50Props extends React.Props<DeviceBattery50> {}
      export class DeviceBattery50 extends React.Component<DeviceBattery50Props, {}> {}

      interface DeviceSignalCellularConnectedNoInternet1BarProps extends React.Props<DeviceSignalCellularConnectedNoInternet1Bar> {}
      export class DeviceSignalCellularConnectedNoInternet1Bar extends React.Component<DeviceSignalCellularConnectedNoInternet1BarProps, {}> {}

      interface DeviceSignalCellular2BarProps extends React.Props<DeviceSignalCellular2Bar> {}
      export class DeviceSignalCellular2Bar extends React.Component<DeviceSignalCellular2BarProps, {}> {}

      interface DeviceSignalCellularConnectedNoInternet2BarProps extends React.Props<DeviceSignalCellularConnectedNoInternet2Bar> {}
      export class DeviceSignalCellularConnectedNoInternet2Bar extends React.Component<DeviceSignalCellularConnectedNoInternet2BarProps, {}> {}

      interface DeviceSignalCellular0BarProps extends React.Props<DeviceSignalCellular0Bar> {}
      export class DeviceSignalCellular0Bar extends React.Component<DeviceSignalCellular0BarProps, {}> {}

      interface DeviceSignalWifi1BarLockProps extends React.Props<DeviceSignalWifi1BarLock> {}
      export class DeviceSignalWifi1BarLock extends React.Component<DeviceSignalWifi1BarLockProps, {}> {}

      interface NavigationArrowForwardProps extends React.Props<NavigationArrowForward> {}
      export class NavigationArrowForward extends React.Component<NavigationArrowForwardProps, {}> {}

      interface NavigationUnfoldMoreProps extends React.Props<NavigationUnfoldMore> {}
      export class NavigationUnfoldMore extends React.Component<NavigationUnfoldMoreProps, {}> {}

      interface NavigationArrowDropDownProps extends React.Props<NavigationArrowDropDown> {}
      export class NavigationArrowDropDown extends React.Component<NavigationArrowDropDownProps, {}> {}

      interface NavigationArrowBackProps extends React.Props<NavigationArrowBack> {}
      export class NavigationArrowBack extends React.Component<NavigationArrowBackProps, {}> {}

      interface NavigationArrowDownwardProps extends React.Props<NavigationArrowDownward> {}
      export class NavigationArrowDownward extends React.Component<NavigationArrowDownwardProps, {}> {}

      interface NavigationFullscreenProps extends React.Props<NavigationFullscreen> {}
      export class NavigationFullscreen extends React.Component<NavigationFullscreenProps, {}> {}

      interface NavigationUnfoldLessProps extends React.Props<NavigationUnfoldLess> {}
      export class NavigationUnfoldLess extends React.Component<NavigationUnfoldLessProps, {}> {}

      interface NavigationChevronRightProps extends React.Props<NavigationChevronRight> {}
      export class NavigationChevronRight extends React.Component<NavigationChevronRightProps, {}> {}

      interface NavigationArrowDropDownCircleProps extends React.Props<NavigationArrowDropDownCircle> {}
      export class NavigationArrowDropDownCircle extends React.Component<NavigationArrowDropDownCircleProps, {}> {}

      interface NavigationCheckProps extends React.Props<NavigationCheck> {}
      export class NavigationCheck extends React.Component<NavigationCheckProps, {}> {}

      interface NavigationFullscreenExitProps extends React.Props<NavigationFullscreenExit> {}
      export class NavigationFullscreenExit extends React.Component<NavigationFullscreenExitProps, {}> {}

      interface NavigationChevronLeftProps extends React.Props<NavigationChevronLeft> {}
      export class NavigationChevronLeft extends React.Component<NavigationChevronLeftProps, {}> {}

      interface NavigationMenuProps extends React.Props<NavigationMenu> {}
      export class NavigationMenu extends React.Component<NavigationMenuProps, {}> {}

      interface NavigationAppsProps extends React.Props<NavigationApps> {}
      export class NavigationApps extends React.Component<NavigationAppsProps, {}> {}

      interface NavigationArrowUpwardProps extends React.Props<NavigationArrowUpward> {}
      export class NavigationArrowUpward extends React.Component<NavigationArrowUpwardProps, {}> {}

      interface NavigationCloseProps extends React.Props<NavigationClose> {}
      export class NavigationClose extends React.Component<NavigationCloseProps, {}> {}

      interface NavigationMoreHorizProps extends React.Props<NavigationMoreHoriz> {}
      export class NavigationMoreHoriz extends React.Component<NavigationMoreHorizProps, {}> {}

      interface NavigationCancelProps extends React.Props<NavigationCancel> {}
      export class NavigationCancel extends React.Component<NavigationCancelProps, {}> {}

      interface NavigationSubdirectoryArrowRightProps extends React.Props<NavigationSubdirectoryArrowRight> {}
      export class NavigationSubdirectoryArrowRight extends React.Component<NavigationSubdirectoryArrowRightProps, {}> {}

      interface NavigationExpandMoreProps extends React.Props<NavigationExpandMore> {}
      export class NavigationExpandMore extends React.Component<NavigationExpandMoreProps, {}> {}

      interface NavigationArrowDropUpProps extends React.Props<NavigationArrowDropUp> {}
      export class NavigationArrowDropUp extends React.Component<NavigationArrowDropUpProps, {}> {}

      interface NavigationSubdirectoryArrowLeftProps extends React.Props<NavigationSubdirectoryArrowLeft> {}
      export class NavigationSubdirectoryArrowLeft extends React.Component<NavigationSubdirectoryArrowLeftProps, {}> {}

      interface NavigationExpandLessProps extends React.Props<NavigationExpandLess> {}
      export class NavigationExpandLess extends React.Component<NavigationExpandLessProps, {}> {}

      interface NavigationRefreshProps extends React.Props<NavigationRefresh> {}
      export class NavigationRefresh extends React.Component<NavigationRefreshProps, {}> {}

      interface NavigationMoreVertProps extends React.Props<NavigationMoreVert> {}
      export class NavigationMoreVert extends React.Component<NavigationMoreVertProps, {}> {}

      interface NotificationRvHookupProps extends React.Props<NotificationRvHookup> {}
      export class NotificationRvHookup extends React.Component<NotificationRvHookupProps, {}> {}

      interface NotificationNoEncryptionProps extends React.Props<NotificationNoEncryption> {}
      export class NotificationNoEncryption extends React.Component<NotificationNoEncryptionProps, {}> {}

      interface NotificationPhoneForwardedProps extends React.Props<NotificationPhoneForwarded> {}
      export class NotificationPhoneForwarded extends React.Component<NotificationPhoneForwardedProps, {}> {}

      interface NotificationAirlineSeatFlatAngledProps extends React.Props<NotificationAirlineSeatFlatAngled> {}
      export class NotificationAirlineSeatFlatAngled extends React.Component<NotificationAirlineSeatFlatAngledProps, {}> {}

      interface NotificationTimeToLeaveProps extends React.Props<NotificationTimeToLeave> {}
      export class NotificationTimeToLeave extends React.Component<NotificationTimeToLeaveProps, {}> {}

      interface NotificationAirlineSeatLegroomExtraProps extends React.Props<NotificationAirlineSeatLegroomExtra> {}
      export class NotificationAirlineSeatLegroomExtra extends React.Component<NotificationAirlineSeatLegroomExtraProps, {}> {}

      interface NotificationAirlineSeatReclineExtraProps extends React.Props<NotificationAirlineSeatReclineExtra> {}
      export class NotificationAirlineSeatReclineExtra extends React.Component<NotificationAirlineSeatReclineExtraProps, {}> {}

      interface NotificationAirlineSeatIndividualSuiteProps extends React.Props<NotificationAirlineSeatIndividualSuite> {}
      export class NotificationAirlineSeatIndividualSuite extends React.Component<NotificationAirlineSeatIndividualSuiteProps, {}> {}

      interface NotificationVibrationProps extends React.Props<NotificationVibration> {}
      export class NotificationVibration extends React.Component<NotificationVibrationProps, {}> {}

      interface NotificationSimCardAlertProps extends React.Props<NotificationSimCardAlert> {}
      export class NotificationSimCardAlert extends React.Component<NotificationSimCardAlertProps, {}> {}

      interface NotificationSmsFailedProps extends React.Props<NotificationSmsFailed> {}
      export class NotificationSmsFailed extends React.Component<NotificationSmsFailedProps, {}> {}

      interface NotificationAirlineSeatFlatProps extends React.Props<NotificationAirlineSeatFlat> {}
      export class NotificationAirlineSeatFlat extends React.Component<NotificationAirlineSeatFlatProps, {}> {}

      interface NotificationDoNotDisturbProps extends React.Props<NotificationDoNotDisturb> {}
      export class NotificationDoNotDisturb extends React.Component<NotificationDoNotDisturbProps, {}> {}

      interface NotificationSyncProblemProps extends React.Props<NotificationSyncProblem> {}
      export class NotificationSyncProblem extends React.Component<NotificationSyncProblemProps, {}> {}

      interface NotificationEventAvailableProps extends React.Props<NotificationEventAvailable> {}
      export class NotificationEventAvailable extends React.Component<NotificationEventAvailableProps, {}> {}

      interface NotificationNetworkCheckProps extends React.Props<NotificationNetworkCheck> {}
      export class NotificationNetworkCheck extends React.Component<NotificationNetworkCheckProps, {}> {}

      interface NotificationSmsProps extends React.Props<NotificationSms> {}
      export class NotificationSms extends React.Component<NotificationSmsProps, {}> {}

      interface NotificationDiscFullProps extends React.Props<NotificationDiscFull> {}
      export class NotificationDiscFull extends React.Component<NotificationDiscFullProps, {}> {}

      interface NotificationDoNotDisturbAltProps extends React.Props<NotificationDoNotDisturbAlt> {}
      export class NotificationDoNotDisturbAlt extends React.Component<NotificationDoNotDisturbAltProps, {}> {}

      interface NotificationSystemUpdateProps extends React.Props<NotificationSystemUpdate> {}
      export class NotificationSystemUpdate extends React.Component<NotificationSystemUpdateProps, {}> {}

      interface NotificationPhoneBluetoothSpeakerProps extends React.Props<NotificationPhoneBluetoothSpeaker> {}
      export class NotificationPhoneBluetoothSpeaker extends React.Component<NotificationPhoneBluetoothSpeakerProps, {}> {}

      interface NotificationOndemandVideoProps extends React.Props<NotificationOndemandVideo> {}
      export class NotificationOndemandVideo extends React.Component<NotificationOndemandVideoProps, {}> {}

      interface NotificationPowerProps extends React.Props<NotificationPower> {}
      export class NotificationPower extends React.Component<NotificationPowerProps, {}> {}

      interface NotificationPhoneLockedProps extends React.Props<NotificationPhoneLocked> {}
      export class NotificationPhoneLocked extends React.Component<NotificationPhoneLockedProps, {}> {}

      interface NotificationSdCardProps extends React.Props<NotificationSdCard> {}
      export class NotificationSdCard extends React.Component<NotificationSdCardProps, {}> {}

      interface NotificationEventBusyProps extends React.Props<NotificationEventBusy> {}
      export class NotificationEventBusy extends React.Component<NotificationEventBusyProps, {}> {}

      interface NotificationPersonalVideoProps extends React.Props<NotificationPersonalVideo> {}
      export class NotificationPersonalVideo extends React.Component<NotificationPersonalVideoProps, {}> {}

      interface NotificationAirlineSeatLegroomNormalProps extends React.Props<NotificationAirlineSeatLegroomNormal> {}
      export class NotificationAirlineSeatLegroomNormal extends React.Component<NotificationAirlineSeatLegroomNormalProps, {}> {}

      interface NotificationPhoneInTalkProps extends React.Props<NotificationPhoneInTalk> {}
      export class NotificationPhoneInTalk extends React.Component<NotificationPhoneInTalkProps, {}> {}

      interface NotificationAirlineSeatLegroomReducedProps extends React.Props<NotificationAirlineSeatLegroomReduced> {}
      export class NotificationAirlineSeatLegroomReduced extends React.Component<NotificationAirlineSeatLegroomReducedProps, {}> {}

      interface NotificationPhonePausedProps extends React.Props<NotificationPhonePaused> {}
      export class NotificationPhonePaused extends React.Component<NotificationPhonePausedProps, {}> {}

      interface NotificationSyncDisabledProps extends React.Props<NotificationSyncDisabled> {}
      export class NotificationSyncDisabled extends React.Component<NotificationSyncDisabledProps, {}> {}

      interface NotificationEnhancedEncryptionProps extends React.Props<NotificationEnhancedEncryption> {}
      export class NotificationEnhancedEncryption extends React.Component<NotificationEnhancedEncryptionProps, {}> {}

      interface NotificationMmsProps extends React.Props<NotificationMms> {}
      export class NotificationMms extends React.Component<NotificationMmsProps, {}> {}

      interface NotificationDriveEtaProps extends React.Props<NotificationDriveEta> {}
      export class NotificationDriveEta extends React.Component<NotificationDriveEtaProps, {}> {}

      interface NotificationVoiceChatProps extends React.Props<NotificationVoiceChat> {}
      export class NotificationVoiceChat extends React.Component<NotificationVoiceChatProps, {}> {}

      interface NotificationWifiProps extends React.Props<NotificationWifi> {}
      export class NotificationWifi extends React.Component<NotificationWifiProps, {}> {}

      interface NotificationAirlineSeatReclineNormalProps extends React.Props<NotificationAirlineSeatReclineNormal> {}
      export class NotificationAirlineSeatReclineNormal extends React.Component<NotificationAirlineSeatReclineNormalProps, {}> {}

      interface NotificationMoreProps extends React.Props<NotificationMore> {}
      export class NotificationMore extends React.Component<NotificationMoreProps, {}> {}

      interface NotificationVpnLockProps extends React.Props<NotificationVpnLock> {}
      export class NotificationVpnLock extends React.Component<NotificationVpnLockProps, {}> {}

      interface NotificationEventNoteProps extends React.Props<NotificationEventNote> {}
      export class NotificationEventNote extends React.Component<NotificationEventNoteProps, {}> {}

      interface NotificationConfirmationNumberProps extends React.Props<NotificationConfirmationNumber> {}
      export class NotificationConfirmationNumber extends React.Component<NotificationConfirmationNumberProps, {}> {}

      interface NotificationNetworkLockedProps extends React.Props<NotificationNetworkLocked> {}
      export class NotificationNetworkLocked extends React.Component<NotificationNetworkLockedProps, {}> {}

      interface NotificationAdbProps extends React.Props<NotificationAdb> {}
      export class NotificationAdb extends React.Component<NotificationAdbProps, {}> {}

      interface NotificationBluetoothAudioProps extends React.Props<NotificationBluetoothAudio> {}
      export class NotificationBluetoothAudio extends React.Component<NotificationBluetoothAudioProps, {}> {}

      interface NotificationWcProps extends React.Props<NotificationWc> {}
      export class NotificationWc extends React.Component<NotificationWcProps, {}> {}

      interface NotificationTapAndPlayProps extends React.Props<NotificationTapAndPlay> {}
      export class NotificationTapAndPlay extends React.Component<NotificationTapAndPlayProps, {}> {}

      interface NotificationFolderSpecialProps extends React.Props<NotificationFolderSpecial> {}
      export class NotificationFolderSpecial extends React.Component<NotificationFolderSpecialProps, {}> {}

      interface NotificationLiveTvProps extends React.Props<NotificationLiveTv> {}
      export class NotificationLiveTv extends React.Component<NotificationLiveTvProps, {}> {}

      interface NotificationSyncProps extends React.Props<NotificationSync> {}
      export class NotificationSync extends React.Component<NotificationSyncProps, {}> {}

      interface NotificationPhoneMissedProps extends React.Props<NotificationPhoneMissed> {}
      export class NotificationPhoneMissed extends React.Component<NotificationPhoneMissedProps, {}> {}

      interface AvSkipPreviousProps extends React.Props<AvSkipPrevious> {}
      export class AvSkipPrevious extends React.Component<AvSkipPreviousProps, {}> {}

      interface AvVolumeOffProps extends React.Props<AvVolumeOff> {}
      export class AvVolumeOff extends React.Component<AvVolumeOffProps, {}> {}

      interface AvSubscriptionsProps extends React.Props<AvSubscriptions> {}
      export class AvSubscriptions extends React.Component<AvSubscriptionsProps, {}> {}

      interface AvPlayArrowProps extends React.Props<AvPlayArrow> {}
      export class AvPlayArrow extends React.Component<AvPlayArrowProps, {}> {}

      interface AvPlayCircleOutlineProps extends React.Props<AvPlayCircleOutline> {}
      export class AvPlayCircleOutline extends React.Component<AvPlayCircleOutlineProps, {}> {}

      interface AvReplay30Props extends React.Props<AvReplay30> {}
      export class AvReplay30 extends React.Component<AvReplay30Props, {}> {}

      interface AvVideocamProps extends React.Props<AvVideocam> {}
      export class AvVideocam extends React.Component<AvVideocamProps, {}> {}

      interface AvReplay5Props extends React.Props<AvReplay5> {}
      export class AvReplay5 extends React.Component<AvReplay5Props, {}> {}

      interface AvForward10Props extends React.Props<AvForward10> {}
      export class AvForward10 extends React.Component<AvForward10Props, {}> {}

      interface AvRecentActorsProps extends React.Props<AvRecentActors> {}
      export class AvRecentActors extends React.Component<AvRecentActorsProps, {}> {}

      interface AvReplay10Props extends React.Props<AvReplay10> {}
      export class AvReplay10 extends React.Component<AvReplay10Props, {}> {}

      interface AvRepeatProps extends React.Props<AvRepeat> {}
      export class AvRepeat extends React.Component<AvRepeatProps, {}> {}

      interface AvQueueMusicProps extends React.Props<AvQueueMusic> {}
      export class AvQueueMusic extends React.Component<AvQueueMusicProps, {}> {}

      interface AvFiberPinProps extends React.Props<AvFiberPin> {}
      export class AvFiberPin extends React.Component<AvFiberPinProps, {}> {}

      interface AvNewReleasesProps extends React.Props<AvNewReleases> {}
      export class AvNewReleases extends React.Component<AvNewReleasesProps, {}> {}

      interface AvFiberNewProps extends React.Props<AvFiberNew> {}
      export class AvFiberNew extends React.Component<AvFiberNewProps, {}> {}

      interface AvFiberManualRecordProps extends React.Props<AvFiberManualRecord> {}
      export class AvFiberManualRecord extends React.Component<AvFiberManualRecordProps, {}> {}

      interface AvHearingProps extends React.Props<AvHearing> {}
      export class AvHearing extends React.Component<AvHearingProps, {}> {}

      interface AvLoopProps extends React.Props<AvLoop> {}
      export class AvLoop extends React.Component<AvLoopProps, {}> {}

      interface AvVolumeUpProps extends React.Props<AvVolumeUp> {}
      export class AvVolumeUp extends React.Component<AvVolumeUpProps, {}> {}

      interface AvHighQualityProps extends React.Props<AvHighQuality> {}
      export class AvHighQuality extends React.Component<AvHighQualityProps, {}> {}

      interface AvSurroundSoundProps extends React.Props<AvSurroundSound> {}
      export class AvSurroundSound extends React.Component<AvSurroundSoundProps, {}> {}

      interface AvEqualizerProps extends React.Props<AvEqualizer> {}
      export class AvEqualizer extends React.Component<AvEqualizerProps, {}> {}

      interface AvMusicVideoProps extends React.Props<AvMusicVideo> {}
      export class AvMusicVideo extends React.Component<AvMusicVideoProps, {}> {}

      interface AvShuffleProps extends React.Props<AvShuffle> {}
      export class AvShuffle extends React.Component<AvShuffleProps, {}> {}

      interface AvVolumeDownProps extends React.Props<AvVolumeDown> {}
      export class AvVolumeDown extends React.Component<AvVolumeDownProps, {}> {}

      interface AvRadioProps extends React.Props<AvRadio> {}
      export class AvRadio extends React.Component<AvRadioProps, {}> {}

      interface AvWebAssetProps extends React.Props<AvWebAsset> {}
      export class AvWebAsset extends React.Component<AvWebAssetProps, {}> {}

      interface AvReplayProps extends React.Props<AvReplay> {}
      export class AvReplay extends React.Component<AvReplayProps, {}> {}

      interface AvQueuePlayNextProps extends React.Props<AvQueuePlayNext> {}
      export class AvQueuePlayNext extends React.Component<AvQueuePlayNextProps, {}> {}

      interface AvClosedCaptionProps extends React.Props<AvClosedCaption> {}
      export class AvClosedCaption extends React.Component<AvClosedCaptionProps, {}> {}

      interface AvFiberDvrProps extends React.Props<AvFiberDvr> {}
      export class AvFiberDvr extends React.Component<AvFiberDvrProps, {}> {}

      interface AvExplicitProps extends React.Props<AvExplicit> {}
      export class AvExplicit extends React.Component<AvExplicitProps, {}> {}

      interface AvGamesProps extends React.Props<AvGames> {}
      export class AvGames extends React.Component<AvGamesProps, {}> {}

      interface AvVideocamOffProps extends React.Props<AvVideocamOff> {}
      export class AvVideocamOff extends React.Component<AvVideocamOffProps, {}> {}

      interface AvHdProps extends React.Props<AvHd> {}
      export class AvHd extends React.Component<AvHdProps, {}> {}

      interface AvFastRewindProps extends React.Props<AvFastRewind> {}
      export class AvFastRewind extends React.Component<AvFastRewindProps, {}> {}

      interface AvAddToQueueProps extends React.Props<AvAddToQueue> {}
      export class AvAddToQueue extends React.Component<AvAddToQueueProps, {}> {}

      interface AvMovieProps extends React.Props<AvMovie> {}
      export class AvMovie extends React.Component<AvMovieProps, {}> {}

      interface AvLibraryBooksProps extends React.Props<AvLibraryBooks> {}
      export class AvLibraryBooks extends React.Component<AvLibraryBooksProps, {}> {}

      interface AvArtTrackProps extends React.Props<AvArtTrack> {}
      export class AvArtTrack extends React.Component<AvArtTrackProps, {}> {}

      interface AvWebProps extends React.Props<AvWeb> {}
      export class AvWeb extends React.Component<AvWebProps, {}> {}

      interface AvPlayCircleFilledProps extends React.Props<AvPlayCircleFilled> {}
      export class AvPlayCircleFilled extends React.Component<AvPlayCircleFilledProps, {}> {}

      interface AvSnoozeProps extends React.Props<AvSnooze> {}
      export class AvSnooze extends React.Component<AvSnoozeProps, {}> {}

      interface AvForward5Props extends React.Props<AvForward5> {}
      export class AvForward5 extends React.Component<AvForward5Props, {}> {}

      interface AvSortByAlphaProps extends React.Props<AvSortByAlpha> {}
      export class AvSortByAlpha extends React.Component<AvSortByAlphaProps, {}> {}

      interface AvPauseCircleFilledProps extends React.Props<AvPauseCircleFilled> {}
      export class AvPauseCircleFilled extends React.Component<AvPauseCircleFilledProps, {}> {}

      interface AvFiberSmartRecordProps extends React.Props<AvFiberSmartRecord> {}
      export class AvFiberSmartRecord extends React.Component<AvFiberSmartRecordProps, {}> {}

      interface AvStopProps extends React.Props<AvStop> {}
      export class AvStop extends React.Component<AvStopProps, {}> {}

      interface AvPlaylistPlayProps extends React.Props<AvPlaylistPlay> {}
      export class AvPlaylistPlay extends React.Component<AvPlaylistPlayProps, {}> {}

      interface AvLibraryAddProps extends React.Props<AvLibraryAdd> {}
      export class AvLibraryAdd extends React.Component<AvLibraryAddProps, {}> {}

      interface AvVolumeMuteProps extends React.Props<AvVolumeMute> {}
      export class AvVolumeMute extends React.Component<AvVolumeMuteProps, {}> {}

      interface AvSkipNextProps extends React.Props<AvSkipNext> {}
      export class AvSkipNext extends React.Component<AvSkipNextProps, {}> {}

      interface AvForward30Props extends React.Props<AvForward30> {}
      export class AvForward30 extends React.Component<AvForward30Props, {}> {}

      interface AvPlaylistAddProps extends React.Props<AvPlaylistAdd> {}
      export class AvPlaylistAdd extends React.Component<AvPlaylistAddProps, {}> {}

      interface AvAlbumProps extends React.Props<AvAlbum> {}
      export class AvAlbum extends React.Component<AvAlbumProps, {}> {}

      interface AvVideoLibraryProps extends React.Props<AvVideoLibrary> {}
      export class AvVideoLibrary extends React.Component<AvVideoLibraryProps, {}> {}

      interface AvLibraryMusicProps extends React.Props<AvLibraryMusic> {}
      export class AvLibraryMusic extends React.Component<AvLibraryMusicProps, {}> {}

      interface AvNotInterestedProps extends React.Props<AvNotInterested> {}
      export class AvNotInterested extends React.Component<AvNotInterestedProps, {}> {}

      interface AvPlaylistAddCheckProps extends React.Props<AvPlaylistAddCheck> {}
      export class AvPlaylistAddCheck extends React.Component<AvPlaylistAddCheckProps, {}> {}

      interface AvMicNoneProps extends React.Props<AvMicNone> {}
      export class AvMicNone extends React.Component<AvMicNoneProps, {}> {}

      interface AvPauseProps extends React.Props<AvPause> {}
      export class AvPause extends React.Component<AvPauseProps, {}> {}

      interface AvRemoveFromQueueProps extends React.Props<AvRemoveFromQueue> {}
      export class AvRemoveFromQueue extends React.Component<AvRemoveFromQueueProps, {}> {}

      interface AvSlowMotionVideoProps extends React.Props<AvSlowMotionVideo> {}
      export class AvSlowMotionVideo extends React.Component<AvSlowMotionVideoProps, {}> {}

      interface AvSubtitlesProps extends React.Props<AvSubtitles> {}
      export class AvSubtitles extends React.Component<AvSubtitlesProps, {}> {}

      interface AvMicOffProps extends React.Props<AvMicOff> {}
      export class AvMicOff extends React.Component<AvMicOffProps, {}> {}

      interface AvRepeatOneProps extends React.Props<AvRepeatOne> {}
      export class AvRepeatOne extends React.Component<AvRepeatOneProps, {}> {}

      interface AvQueueProps extends React.Props<AvQueue> {}
      export class AvQueue extends React.Component<AvQueueProps, {}> {}

      interface AvFastForwardProps extends React.Props<AvFastForward> {}
      export class AvFastForward extends React.Component<AvFastForwardProps, {}> {}

      interface AvMicProps extends React.Props<AvMic> {}
      export class AvMic extends React.Component<AvMicProps, {}> {}

      interface AvAvTimerProps extends React.Props<AvAvTimer> {}
      export class AvAvTimer extends React.Component<AvAvTimerProps, {}> {}

      interface AvPauseCircleOutlineProps extends React.Props<AvPauseCircleOutline> {}
      export class AvPauseCircleOutline extends React.Component<AvPauseCircleOutlineProps, {}> {}

      interface AvAirplayProps extends React.Props<AvAirplay> {}
      export class AvAirplay extends React.Component<AvAirplayProps, {}> {}

      interface ImageCameraRearProps extends React.Props<ImageCameraRear> {}
      export class ImageCameraRear extends React.Component<ImageCameraRearProps, {}> {}

      interface ImageAddAPhotoProps extends React.Props<ImageAddAPhoto> {}
      export class ImageAddAPhoto extends React.Component<ImageAddAPhotoProps, {}> {}

      interface ImagePortraitProps extends React.Props<ImagePortrait> {}
      export class ImagePortrait extends React.Component<ImagePortraitProps, {}> {}

      interface ImageLooksProps extends React.Props<ImageLooks> {}
      export class ImageLooks extends React.Component<ImageLooksProps, {}> {}

      interface ImageExposureNeg2Props extends React.Props<ImageExposureNeg2> {}
      export class ImageExposureNeg2 extends React.Component<ImageExposureNeg2Props, {}> {}

      interface ImageWbCloudyProps extends React.Props<ImageWbCloudy> {}
      export class ImageWbCloudy extends React.Component<ImageWbCloudyProps, {}> {}

      interface ImageSwitchVideoProps extends React.Props<ImageSwitchVideo> {}
      export class ImageSwitchVideo extends React.Component<ImageSwitchVideoProps, {}> {}

      interface ImageWbAutoProps extends React.Props<ImageWbAuto> {}
      export class ImageWbAuto extends React.Component<ImageWbAutoProps, {}> {}

      interface ImageFilterCenterFocusProps extends React.Props<ImageFilterCenterFocus> {}
      export class ImageFilterCenterFocus extends React.Component<ImageFilterCenterFocusProps, {}> {}

      interface ImageCrop75Props extends React.Props<ImageCrop75> {}
      export class ImageCrop75 extends React.Component<ImageCrop75Props, {}> {}

      interface ImageCrop32Props extends React.Props<ImageCrop32> {}
      export class ImageCrop32 extends React.Component<ImageCrop32Props, {}> {}

      interface ImageAssistantPhotoProps extends React.Props<ImageAssistantPhoto> {}
      export class ImageAssistantPhoto extends React.Component<ImageAssistantPhotoProps, {}> {}

      interface ImageLooksOneProps extends React.Props<ImageLooksOne> {}
      export class ImageLooksOne extends React.Component<ImageLooksOneProps, {}> {}

      interface ImageCollectionsBookmarkProps extends React.Props<ImageCollectionsBookmark> {}
      export class ImageCollectionsBookmark extends React.Component<ImageCollectionsBookmarkProps, {}> {}

      interface ImageImageAspectRatioProps extends React.Props<ImageImageAspectRatio> {}
      export class ImageImageAspectRatio extends React.Component<ImageImageAspectRatioProps, {}> {}

      interface ImageBrushProps extends React.Props<ImageBrush> {}
      export class ImageBrush extends React.Component<ImageBrushProps, {}> {}

      interface ImageLinkedCameraProps extends React.Props<ImageLinkedCamera> {}
      export class ImageLinkedCamera extends React.Component<ImageLinkedCameraProps, {}> {}

      interface ImageFilter1Props extends React.Props<ImageFilter1> {}
      export class ImageFilter1 extends React.Component<ImageFilter1Props, {}> {}

      interface ImageEditProps extends React.Props<ImageEdit> {}
      export class ImageEdit extends React.Component<ImageEditProps, {}> {}

      interface ImageTimelapseProps extends React.Props<ImageTimelapse> {}
      export class ImageTimelapse extends React.Component<ImageTimelapseProps, {}> {}

      interface ImageNatureProps extends React.Props<ImageNature> {}
      export class ImageNature extends React.Component<ImageNatureProps, {}> {}

      interface ImageMonochromePhotosProps extends React.Props<ImageMonochromePhotos> {}
      export class ImageMonochromePhotos extends React.Component<ImageMonochromePhotosProps, {}> {}

      interface ImageBrightness6Props extends React.Props<ImageBrightness6> {}
      export class ImageBrightness6 extends React.Component<ImageBrightness6Props, {}> {}

      interface ImageMusicNoteProps extends React.Props<ImageMusicNote> {}
      export class ImageMusicNote extends React.Component<ImageMusicNoteProps, {}> {}

      interface ImageCollectionsProps extends React.Props<ImageCollections> {}
      export class ImageCollections extends React.Component<ImageCollectionsProps, {}> {}

      interface ImageWbSunnyProps extends React.Props<ImageWbSunny> {}
      export class ImageWbSunny extends React.Component<ImageWbSunnyProps, {}> {}

      interface ImageHdrStrongProps extends React.Props<ImageHdrStrong> {}
      export class ImageHdrStrong extends React.Component<ImageHdrStrongProps, {}> {}

      interface ImagePanoramaVerticalProps extends React.Props<ImagePanoramaVertical> {}
      export class ImagePanoramaVertical extends React.Component<ImagePanoramaVerticalProps, {}> {}

      interface ImageNavigateNextProps extends React.Props<ImageNavigateNext> {}
      export class ImageNavigateNext extends React.Component<ImageNavigateNextProps, {}> {}

      interface ImageLooks4Props extends React.Props<ImageLooks4> {}
      export class ImageLooks4 extends React.Component<ImageLooks4Props, {}> {}

      interface ImageFilter4Props extends React.Props<ImageFilter4> {}
      export class ImageFilter4 extends React.Component<ImageFilter4Props, {}> {}

      interface ImageBrightness1Props extends React.Props<ImageBrightness1> {}
      export class ImageBrightness1 extends React.Component<ImageBrightness1Props, {}> {}

      interface ImageExposurePlus1Props extends React.Props<ImageExposurePlus1> {}
      export class ImageExposurePlus1 extends React.Component<ImageExposurePlus1Props, {}> {}

      interface ImageTimer3Props extends React.Props<ImageTimer3> {}
      export class ImageTimer3 extends React.Component<ImageTimer3Props, {}> {}

      interface ImageExposureZeroProps extends React.Props<ImageExposureZero> {}
      export class ImageExposureZero extends React.Component<ImageExposureZeroProps, {}> {}

      interface ImageBlurLinearProps extends React.Props<ImageBlurLinear> {}
      export class ImageBlurLinear extends React.Component<ImageBlurLinearProps, {}> {}

      interface ImagePhotoLibraryProps extends React.Props<ImagePhotoLibrary> {}
      export class ImagePhotoLibrary extends React.Component<ImagePhotoLibraryProps, {}> {}

      interface ImageFilterDramaProps extends React.Props<ImageFilterDrama> {}
      export class ImageFilterDrama extends React.Component<ImageFilterDramaProps, {}> {}

      interface ImageDehazeProps extends React.Props<ImageDehaze> {}
      export class ImageDehaze extends React.Component<ImageDehazeProps, {}> {}

      interface ImageControlPointDuplicateProps extends React.Props<ImageControlPointDuplicate> {}
      export class ImageControlPointDuplicate extends React.Component<ImageControlPointDuplicateProps, {}> {}

      interface ImageImageProps extends React.Props<ImageImage> {}
      export class ImageImage extends React.Component<ImageImageProps, {}> {}

      interface ImageFlashAutoProps extends React.Props<ImageFlashAuto> {}
      export class ImageFlashAuto extends React.Component<ImageFlashAutoProps, {}> {}

      interface ImageRotate90DegreesCcwProps extends React.Props<ImageRotate90DegreesCcw> {}
      export class ImageRotate90DegreesCcw extends React.Component<ImageRotate90DegreesCcwProps, {}> {}

      interface ImageBlurCircularProps extends React.Props<ImageBlurCircular> {}
      export class ImageBlurCircular extends React.Component<ImageBlurCircularProps, {}> {}

      interface ImageFilter3Props extends React.Props<ImageFilter3> {}
      export class ImageFilter3 extends React.Component<ImageFilter3Props, {}> {}

      interface ImageExposurePlus2Props extends React.Props<ImageExposurePlus2> {}
      export class ImageExposurePlus2 extends React.Component<ImageExposurePlus2Props, {}> {}

      interface ImageFlashOnProps extends React.Props<ImageFlashOn> {}
      export class ImageFlashOn extends React.Component<ImageFlashOnProps, {}> {}

      interface ImageViewComfyProps extends React.Props<ImageViewComfy> {}
      export class ImageViewComfy extends React.Component<ImageViewComfyProps, {}> {}

      interface ImageColorizeProps extends React.Props<ImageColorize> {}
      export class ImageColorize extends React.Component<ImageColorizeProps, {}> {}

      interface ImageBrightness4Props extends React.Props<ImageBrightness4> {}
      export class ImageBrightness4 extends React.Component<ImageBrightness4Props, {}> {}

      interface ImageCropFreeProps extends React.Props<ImageCropFree> {}
      export class ImageCropFree extends React.Component<ImageCropFreeProps, {}> {}

      interface ImageVignetteProps extends React.Props<ImageVignette> {}
      export class ImageVignette extends React.Component<ImageVignetteProps, {}> {}

      interface ImageTagFacesProps extends React.Props<ImageTagFaces> {}
      export class ImageTagFaces extends React.Component<ImageTagFacesProps, {}> {}

      interface ImageBrightness7Props extends React.Props<ImageBrightness7> {}
      export class ImageBrightness7 extends React.Component<ImageBrightness7Props, {}> {}

      interface ImageHealingProps extends React.Props<ImageHealing> {}
      export class ImageHealing extends React.Component<ImageHealingProps, {}> {}

      interface ImageNaturePeopleProps extends React.Props<ImageNaturePeople> {}
      export class ImageNaturePeople extends React.Component<ImageNaturePeopleProps, {}> {}

      interface ImageGradientProps extends React.Props<ImageGradient> {}
      export class ImageGradient extends React.Component<ImageGradientProps, {}> {}

      interface ImageFlashOffProps extends React.Props<ImageFlashOff> {}
      export class ImageFlashOff extends React.Component<ImageFlashOffProps, {}> {}

      interface ImageMovieCreationProps extends React.Props<ImageMovieCreation> {}
      export class ImageMovieCreation extends React.Component<ImageMovieCreationProps, {}> {}

      interface ImageLeakAddProps extends React.Props<ImageLeakAdd> {}
      export class ImageLeakAdd extends React.Component<ImageLeakAddProps, {}> {}

      interface ImageFilter5Props extends React.Props<ImageFilter5> {}
      export class ImageFilter5 extends React.Component<ImageFilter5Props, {}> {}

      interface ImagePhotoProps extends React.Props<ImagePhoto> {}
      export class ImagePhoto extends React.Component<ImagePhotoProps, {}> {}

      interface ImageColorLensProps extends React.Props<ImageColorLens> {}
      export class ImageColorLens extends React.Component<ImageColorLensProps, {}> {}

      interface ImageBrokenImageProps extends React.Props<ImageBrokenImage> {}
      export class ImageBrokenImage extends React.Component<ImageBrokenImageProps, {}> {}

      interface ImageLooks6Props extends React.Props<ImageLooks6> {}
      export class ImageLooks6 extends React.Component<ImageLooks6Props, {}> {}

      interface ImagePictureAsPdfProps extends React.Props<ImagePictureAsPdf> {}
      export class ImagePictureAsPdf extends React.Component<ImagePictureAsPdfProps, {}> {}

      interface ImagePaletteProps extends React.Props<ImagePalette> {}
      export class ImagePalette extends React.Component<ImagePaletteProps, {}> {}

      interface ImageCropLandscapeProps extends React.Props<ImageCropLandscape> {}
      export class ImageCropLandscape extends React.Component<ImageCropLandscapeProps, {}> {}

      interface ImageGridOnProps extends React.Props<ImageGridOn> {}
      export class ImageGridOn extends React.Component<ImageGridOnProps, {}> {}

      interface ImageSlideshowProps extends React.Props<ImageSlideshow> {}
      export class ImageSlideshow extends React.Component<ImageSlideshowProps, {}> {}

      interface ImageBrightness3Props extends React.Props<ImageBrightness3> {}
      export class ImageBrightness3 extends React.Component<ImageBrightness3Props, {}> {}

      interface ImageStyleProps extends React.Props<ImageStyle> {}
      export class ImageStyle extends React.Component<ImageStyleProps, {}> {}

      interface ImageFilterVintageProps extends React.Props<ImageFilterVintage> {}
      export class ImageFilterVintage extends React.Component<ImageFilterVintageProps, {}> {}

      interface ImageTuneProps extends React.Props<ImageTune> {}
      export class ImageTune extends React.Component<ImageTuneProps, {}> {}

      interface ImageCameraProps extends React.Props<ImageCamera> {}
      export class ImageCamera extends React.Component<ImageCameraProps, {}> {}

      interface ImageTimerProps extends React.Props<ImageTimer> {}
      export class ImageTimer extends React.Component<ImageTimerProps, {}> {}

      interface ImageLandscapeProps extends React.Props<ImageLandscape> {}
      export class ImageLandscape extends React.Component<ImageLandscapeProps, {}> {}

      interface ImageCrop169Props extends React.Props<ImageCrop169> {}
      export class ImageCrop169 extends React.Component<ImageCrop169Props, {}> {}

      interface ImageAddToPhotosProps extends React.Props<ImageAddToPhotos> {}
      export class ImageAddToPhotos extends React.Component<ImageAddToPhotosProps, {}> {}

      interface ImageWbIncandescentProps extends React.Props<ImageWbIncandescent> {}
      export class ImageWbIncandescent extends React.Component<ImageWbIncandescentProps, {}> {}

      interface ImageHdrWeakProps extends React.Props<ImageHdrWeak> {}
      export class ImageHdrWeak extends React.Component<ImageHdrWeakProps, {}> {}

      interface ImageDetailsProps extends React.Props<ImageDetails> {}
      export class ImageDetails extends React.Component<ImageDetailsProps, {}> {}

      interface ImageViewCompactProps extends React.Props<ImageViewCompact> {}
      export class ImageViewCompact extends React.Component<ImageViewCompactProps, {}> {}

      interface ImageBrightness5Props extends React.Props<ImageBrightness5> {}
      export class ImageBrightness5 extends React.Component<ImageBrightness5Props, {}> {}

      interface ImageCenterFocusWeakProps extends React.Props<ImageCenterFocusWeak> {}
      export class ImageCenterFocusWeak extends React.Component<ImageCenterFocusWeakProps, {}> {}

      interface ImageAdjustProps extends React.Props<ImageAdjust> {}
      export class ImageAdjust extends React.Component<ImageAdjustProps, {}> {}

      interface ImageCameraFrontProps extends React.Props<ImageCameraFront> {}
      export class ImageCameraFront extends React.Component<ImageCameraFrontProps, {}> {}

      interface ImageTransformProps extends React.Props<ImageTransform> {}
      export class ImageTransform extends React.Component<ImageTransformProps, {}> {}

      interface ImageFilterProps extends React.Props<ImageFilter> {}
      export class ImageFilter extends React.Component<ImageFilterProps, {}> {}

      interface ImageGrainProps extends React.Props<ImageGrain> {}
      export class ImageGrain extends React.Component<ImageGrainProps, {}> {}

      interface ImageFilter9PlusProps extends React.Props<ImageFilter9Plus> {}
      export class ImageFilter9Plus extends React.Component<ImageFilter9PlusProps, {}> {}

      interface ImageLooks5Props extends React.Props<ImageLooks5> {}
      export class ImageLooks5 extends React.Component<ImageLooks5Props, {}> {}

      interface ImageHdrOnProps extends React.Props<ImageHdrOn> {}
      export class ImageHdrOn extends React.Component<ImageHdrOnProps, {}> {}

      interface ImageAudiotrackProps extends React.Props<ImageAudiotrack> {}
      export class ImageAudiotrack extends React.Component<ImageAudiotrackProps, {}> {}

      interface ImageCompareProps extends React.Props<ImageCompare> {}
      export class ImageCompare extends React.Component<ImageCompareProps, {}> {}

      interface ImageCropProps extends React.Props<ImageCrop> {}
      export class ImageCrop extends React.Component<ImageCropProps, {}> {}

      interface ImageTextureProps extends React.Props<ImageTexture> {}
      export class ImageTexture extends React.Component<ImageTextureProps, {}> {}

      interface ImageMovieFilterProps extends React.Props<ImageMovieFilter> {}
      export class ImageMovieFilter extends React.Component<ImageMovieFilterProps, {}> {}

      interface ImageExposureProps extends React.Props<ImageExposure> {}
      export class ImageExposure extends React.Component<ImageExposureProps, {}> {}

      interface ImageFilterBAndWProps extends React.Props<ImageFilterBAndW> {}
      export class ImageFilterBAndW extends React.Component<ImageFilterBAndWProps, {}> {}

      interface ImagePhotoSizeSelectActualProps extends React.Props<ImagePhotoSizeSelectActual> {}
      export class ImagePhotoSizeSelectActual extends React.Component<ImagePhotoSizeSelectActualProps, {}> {}

      interface ImageCrop54Props extends React.Props<ImageCrop54> {}
      export class ImageCrop54 extends React.Component<ImageCrop54Props, {}> {}

      interface ImageBrightness2Props extends React.Props<ImageBrightness2> {}
      export class ImageBrightness2 extends React.Component<ImageBrightness2Props, {}> {}

      interface ImageTonalityProps extends React.Props<ImageTonality> {}
      export class ImageTonality extends React.Component<ImageTonalityProps, {}> {}

      interface ImagePanoramaWideAngleProps extends React.Props<ImagePanoramaWideAngle> {}
      export class ImagePanoramaWideAngle extends React.Component<ImagePanoramaWideAngleProps, {}> {}

      interface ImageFlipProps extends React.Props<ImageFlip> {}
      export class ImageFlip extends React.Component<ImageFlipProps, {}> {}

      interface ImageFilter9Props extends React.Props<ImageFilter9> {}
      export class ImageFilter9 extends React.Component<ImageFilter9Props, {}> {}

      interface ImageBlurOnProps extends React.Props<ImageBlurOn> {}
      export class ImageBlurOn extends React.Component<ImageBlurOnProps, {}> {}

      interface ImageAssistantProps extends React.Props<ImageAssistant> {}
      export class ImageAssistant extends React.Component<ImageAssistantProps, {}> {}

      interface ImageLensProps extends React.Props<ImageLens> {}
      export class ImageLens extends React.Component<ImageLensProps, {}> {}

      interface ImageSwitchCameraProps extends React.Props<ImageSwitchCamera> {}
      export class ImageSwitchCamera extends React.Component<ImageSwitchCameraProps, {}> {}

      interface ImagePhotoFilterProps extends React.Props<ImagePhotoFilter> {}
      export class ImagePhotoFilter extends React.Component<ImagePhotoFilterProps, {}> {}

      interface ImageWbIridescentProps extends React.Props<ImageWbIridescent> {}
      export class ImageWbIridescent extends React.Component<ImageWbIridescentProps, {}> {}

      interface ImageCropSquareProps extends React.Props<ImageCropSquare> {}
      export class ImageCropSquare extends React.Component<ImageCropSquareProps, {}> {}

      interface ImageTimer10Props extends React.Props<ImageTimer10> {}
      export class ImageTimer10 extends React.Component<ImageTimer10Props, {}> {}

      interface ImageRotateRightProps extends React.Props<ImageRotateRight> {}
      export class ImageRotateRight extends React.Component<ImageRotateRightProps, {}> {}

      interface ImageGridOffProps extends React.Props<ImageGridOff> {}
      export class ImageGridOff extends React.Component<ImageGridOffProps, {}> {}

      interface ImageFilter7Props extends React.Props<ImageFilter7> {}
      export class ImageFilter7 extends React.Component<ImageFilter7Props, {}> {}

      interface ImageLoupeProps extends React.Props<ImageLoupe> {}
      export class ImageLoupe extends React.Component<ImageLoupeProps, {}> {}

      interface ImageFilter6Props extends React.Props<ImageFilter6> {}
      export class ImageFilter6 extends React.Component<ImageFilter6Props, {}> {}

      interface ImageFilterTiltShiftProps extends React.Props<ImageFilterTiltShift> {}
      export class ImageFilterTiltShift extends React.Component<ImageFilterTiltShiftProps, {}> {}

      interface ImageCropDinProps extends React.Props<ImageCropDin> {}
      export class ImageCropDin extends React.Component<ImageCropDinProps, {}> {}

      interface ImageCenterFocusStrongProps extends React.Props<ImageCenterFocusStrong> {}
      export class ImageCenterFocusStrong extends React.Component<ImageCenterFocusStrongProps, {}> {}

      interface ImageRotateLeftProps extends React.Props<ImageRotateLeft> {}
      export class ImageRotateLeft extends React.Component<ImageRotateLeftProps, {}> {}

      interface ImageFilterHdrProps extends React.Props<ImageFilterHdr> {}
      export class ImageFilterHdr extends React.Component<ImageFilterHdrProps, {}> {}

      interface ImageTimerOffProps extends React.Props<ImageTimerOff> {}
      export class ImageTimerOff extends React.Component<ImageTimerOffProps, {}> {}

      interface ImageStraightenProps extends React.Props<ImageStraighten> {}
      export class ImageStraighten extends React.Component<ImageStraightenProps, {}> {}

      interface ImageExposureNeg1Props extends React.Props<ImageExposureNeg1> {}
      export class ImageExposureNeg1 extends React.Component<ImageExposureNeg1Props, {}> {}

      interface ImageNavigateBeforeProps extends React.Props<ImageNavigateBefore> {}
      export class ImageNavigateBefore extends React.Component<ImageNavigateBeforeProps, {}> {}

      interface ImageIsoProps extends React.Props<ImageIso> {}
      export class ImageIso extends React.Component<ImageIsoProps, {}> {}

      interface ImagePhotoAlbumProps extends React.Props<ImagePhotoAlbum> {}
      export class ImagePhotoAlbum extends React.Component<ImagePhotoAlbumProps, {}> {}

      interface ImageCropRotateProps extends React.Props<ImageCropRotate> {}
      export class ImageCropRotate extends React.Component<ImageCropRotateProps, {}> {}

      interface ImageRemoveRedEyeProps extends React.Props<ImageRemoveRedEye> {}
      export class ImageRemoveRedEye extends React.Component<ImageRemoveRedEyeProps, {}> {}

      interface ImageCropPortraitProps extends React.Props<ImageCropPortrait> {}
      export class ImageCropPortrait extends React.Component<ImageCropPortraitProps, {}> {}

      interface ImageCameraAltProps extends React.Props<ImageCameraAlt> {}
      export class ImageCameraAlt extends React.Component<ImageCameraAltProps, {}> {}

      interface ImageControlPointProps extends React.Props<ImageControlPoint> {}
      export class ImageControlPoint extends React.Component<ImageControlPointProps, {}> {}

      interface ImagePanoramaProps extends React.Props<ImagePanorama> {}
      export class ImagePanorama extends React.Component<ImagePanoramaProps, {}> {}

      interface ImagePanoramaFishEyeProps extends React.Props<ImagePanoramaFishEye> {}
      export class ImagePanoramaFishEye extends React.Component<ImagePanoramaFishEyeProps, {}> {}

      interface ImageFilter8Props extends React.Props<ImageFilter8> {}
      export class ImageFilter8 extends React.Component<ImageFilter8Props, {}> {}

      interface ImageLooksTwoProps extends React.Props<ImageLooksTwo> {}
      export class ImageLooksTwo extends React.Component<ImageLooksTwoProps, {}> {}

      interface ImagePanoramaHorizontalProps extends React.Props<ImagePanoramaHorizontal> {}
      export class ImagePanoramaHorizontal extends React.Component<ImagePanoramaHorizontalProps, {}> {}

      interface ImageLooks3Props extends React.Props<ImageLooks3> {}
      export class ImageLooks3 extends React.Component<ImageLooks3Props, {}> {}

      interface ImageFilterNoneProps extends React.Props<ImageFilterNone> {}
      export class ImageFilterNone extends React.Component<ImageFilterNoneProps, {}> {}

      interface ImagePhotoSizeSelectLargeProps extends React.Props<ImagePhotoSizeSelectLarge> {}
      export class ImagePhotoSizeSelectLarge extends React.Component<ImagePhotoSizeSelectLargeProps, {}> {}

      interface ImageBlurOffProps extends React.Props<ImageBlurOff> {}
      export class ImageBlurOff extends React.Component<ImageBlurOffProps, {}> {}

      interface ImageCameraRollProps extends React.Props<ImageCameraRoll> {}
      export class ImageCameraRoll extends React.Component<ImageCameraRollProps, {}> {}

      interface ImageLeakRemoveProps extends React.Props<ImageLeakRemove> {}
      export class ImageLeakRemove extends React.Component<ImageLeakRemoveProps, {}> {}

      interface ImageFilterFramesProps extends React.Props<ImageFilterFrames> {}
      export class ImageFilterFrames extends React.Component<ImageFilterFramesProps, {}> {}

      interface ImageFlareProps extends React.Props<ImageFlare> {}
      export class ImageFlare extends React.Component<ImageFlareProps, {}> {}

      interface ImagePhotoSizeSelectSmallProps extends React.Props<ImagePhotoSizeSelectSmall> {}
      export class ImagePhotoSizeSelectSmall extends React.Component<ImagePhotoSizeSelectSmallProps, {}> {}

      interface ImagePhotoCameraProps extends React.Props<ImagePhotoCamera> {}
      export class ImagePhotoCamera extends React.Component<ImagePhotoCameraProps, {}> {}

      interface ImageHdrOffProps extends React.Props<ImageHdrOff> {}
      export class ImageHdrOff extends React.Component<ImageHdrOffProps, {}> {}

      interface ImageFilter2Props extends React.Props<ImageFilter2> {}
      export class ImageFilter2 extends React.Component<ImageFilter2Props, {}> {}

      interface ImageCropOriginalProps extends React.Props<ImageCropOriginal> {}
      export class ImageCropOriginal extends React.Component<ImageCropOriginalProps, {}> {}

      interface PlacesKitchenProps extends React.Props<PlacesKitchen> {}
      export class PlacesKitchen extends React.Component<PlacesKitchenProps, {}> {}

      interface PlacesSpaProps extends React.Props<PlacesSpa> {}
      export class PlacesSpa extends React.Component<PlacesSpaProps, {}> {}

      interface PlacesAllInclusiveProps extends React.Props<PlacesAllInclusive> {}
      export class PlacesAllInclusive extends React.Component<PlacesAllInclusiveProps, {}> {}

      interface PlacesAcUnitProps extends React.Props<PlacesAcUnit> {}
      export class PlacesAcUnit extends React.Component<PlacesAcUnitProps, {}> {}

      interface PlacesChildCareProps extends React.Props<PlacesChildCare> {}
      export class PlacesChildCare extends React.Component<PlacesChildCareProps, {}> {}

      interface PlacesGolfCourseProps extends React.Props<PlacesGolfCourse> {}
      export class PlacesGolfCourse extends React.Component<PlacesGolfCourseProps, {}> {}

      interface PlacesBusinessCenterProps extends React.Props<PlacesBusinessCenter> {}
      export class PlacesBusinessCenter extends React.Component<PlacesBusinessCenterProps, {}> {}

      interface PlacesFreeBreakfastProps extends React.Props<PlacesFreeBreakfast> {}
      export class PlacesFreeBreakfast extends React.Component<PlacesFreeBreakfastProps, {}> {}

      interface PlacesFitnessCenterProps extends React.Props<PlacesFitnessCenter> {}
      export class PlacesFitnessCenter extends React.Component<PlacesFitnessCenterProps, {}> {}

      interface PlacesPoolProps extends React.Props<PlacesPool> {}
      export class PlacesPool extends React.Component<PlacesPoolProps, {}> {}

      interface PlacesChildFriendlyProps extends React.Props<PlacesChildFriendly> {}
      export class PlacesChildFriendly extends React.Component<PlacesChildFriendlyProps, {}> {}

      interface PlacesCasinoProps extends React.Props<PlacesCasino> {}
      export class PlacesCasino extends React.Component<PlacesCasinoProps, {}> {}

      interface PlacesHotTubProps extends React.Props<PlacesHotTub> {}
      export class PlacesHotTub extends React.Component<PlacesHotTubProps, {}> {}

      interface PlacesSmokeFreeProps extends React.Props<PlacesSmokeFree> {}
      export class PlacesSmokeFree extends React.Component<PlacesSmokeFreeProps, {}> {}

      interface PlacesRoomServiceProps extends React.Props<PlacesRoomService> {}
      export class PlacesRoomService extends React.Component<PlacesRoomServiceProps, {}> {}

      interface PlacesSmokingRoomsProps extends React.Props<PlacesSmokingRooms> {}
      export class PlacesSmokingRooms extends React.Component<PlacesSmokingRoomsProps, {}> {}

      interface PlacesBeachAccessProps extends React.Props<PlacesBeachAccess> {}
      export class PlacesBeachAccess extends React.Component<PlacesBeachAccessProps, {}> {}

      interface PlacesAirportShuttleProps extends React.Props<PlacesAirportShuttle> {}
      export class PlacesAirportShuttle extends React.Component<PlacesAirportShuttleProps, {}> {}
    }

    export namespace Styles {
        interface AutoPrefix {
            all(styles: React.CSSProperties): React.CSSProperties;
            set(style: React.CSSProperties, key: string, value: string | number): void;
            single(key: string): string;
            singleHyphened(key: string): string;
        }
        export var AutoPrefix: AutoPrefix;

        interface Spacing {
            iconSize?: number;

            desktopGutter?: number;
            desktopGutterMore?: number;
            desktopGutterLess?: number;
            desktopGutterMini?: number;
            desktopKeylineIncrement?: number;
            desktopDropDownMenuItemHeight?: number;
            desktopDropDownMenuFontSize?: number;
            desktopLeftNavMenuItemHeight?: number;
            desktopSubheaderHeight?: number;
            desktopToolbarHeight?: number;
        }
        export var Spacing: Spacing;

        interface ThemePalette {
            primary1Color?: string;
            primary2Color?: string;
            primary3Color?: string;
            accent1Color?: string;
            accent2Color?: string;
            accent3Color?: string;
            textColor?: string;
            canvasColor?: string;
            borderColor?: string;
            disabledColor?: string;
            alternateTextColor?: string;
        }
        interface MuiTheme {
            rawTheme: RawTheme;
            static: boolean;
            appBar?: {
                color?: string,
                textColor?: string,
                height?: number
            },
            avatar?: {
                borderColor?: string;
            }
            button?: {
                height?: number,
                minWidth?: number,
                iconButtonSize?: number
            },
            checkbox?: {
                boxColor?: string,
                checkedColor?: string,
                requiredColor?: string,
                disabledColor?: string,
                labelColor?: string,
                labelDisabledColor?: string
            },
            datePicker?: {
                color?: string,
                textColor?: string,
                calendarTextColor?: string,
                selectColor?: string,
                selectTextColor?: string,
            },
            dropDownMenu?: {
                accentColor?: string,
            },
            flatButton?: {
                color?: string,
                textColor?: string,
                primaryTextColor?: string,
                secondaryTextColor?: string,
                disabledColor?: string
            },
            floatingActionButton?: {
                buttonSize?: number,
                miniSize?: number,
                color?: string,
                iconColor?: string,
                secondaryColor?: string,
                secondaryIconColor?: string,
                disabledColor?: string,
                disabledTextColor?: string
            },
            inkBar?: {
                backgroundColor?: string;
            },
            leftNav?: {
                width?: number,
                color?: string,
            },
            listItem?: {
                nestedLevelDepth?: number;
            },
            menu?: {
                backgroundColor?: string,
                containerBackgroundColor?: string,
            },
            menuItem?: {
                dataHeight?: number,
                height?: number,
                hoverColor?: string,
                padding?: number,
                selectedTextColor?: string,
            },
            menuSubheader?: {
                padding?: number,
                borderColor?: string,
                textColor?: string,
            },
            paper?: {
                backgroundColor?: string,
            },
            radioButton?: {
                borderColor?: string,
                backgroundColor?: string,
                checkedColor?: string,
                requiredColor?: string,
                disabledColor?: string,
                size?: number,
                labelColor?: string,
                labelDisabledColor?: string
            },
            raisedButton?: {
                color?: string,
                textColor?: string,
                primaryColor?: string,
                primaryTextColor?: string,
                secondaryColor?: string,
                secondaryTextColor?: string,
                disabledColor?: string,
                disabledTextColor?: string
            },
            refreshIndicator?: {
                strokeColor?: string;
                loadingStrokeColor?: string;
            };
            slider?: {
                trackSize?: number,
                trackColor?: string,
                trackColorSelected?: string,
                handleSize?: number,
                handleSizeActive?: number,
                handleSizeDisabled?: number,
                handleColorZero?: string,
                handleFillColor?: string,
                selectionColor?: string,
                rippleColor?: string,
            },
            snackbar?: {
                textColor?: string,
                backgroundColor?: string,
                actionColor?: string,
            },
            table?: {
                backgroundColor?: string;
            };
            tableHeader?: {
                borderColor?: string;
            };
            tableHeaderColumn?: {
                textColor?: string;
            };
            tableFooter?: {
                borderColor?: string;
                textColor?: string;
            };
            tableRow?: {
                hoverColor?: string;
                stripeColor?: string;
                selectedColor?: string;
                textColor?: string;
                borderColor?: string;
            };
            tableRowColumn?: {
                height?: number;
                spacing?: number;
            };
            timePicker?: {
                color?: string;
                textColor?: string;
                accentColor?: string;
                clockColor?: string;
                selectColor?: string;
                selectTextColor?: string;
            };
            toggle?: {
                thumbOnColor?: string,
                thumbOffColor?: string,
                thumbDisabledColor?: string,
                thumbRequiredColor?: string,
                trackOnColor?: string,
                trackOffColor?: string,
                trackDisabledColor?: string,
                trackRequiredColor?: string,
                labelColor?: string,
                labelDisabledColor?: string
            },
            toolbar?: {
                backgroundColor?: string,
                height?: number,
                titleFontSize?: number,
                iconColor?: string,
                separatorColor?: string,
                menuHoverColor?: string,
            };
            tabs?: {
                backgroundColor?: string;
            };
            textField?: {
                textColor?: string;
                hintColor?: string;
                floatingLabelColor?: string;
                disabledTextColor?: string;
                errorColor?: string;
                focusColor?: string;
                backgroundColor?: string;
                borderColor?: string;
            };
            isRtl: boolean;
        }

        interface RawTheme {
            spacing: Spacing;
            fontFamily?: string;
            palette: ThemePalette;
        }

        export function ThemeDecorator(muiTheme: Styles.MuiTheme): <T>(Component: T) => T;

        interface ThemeManager {
            getMuiTheme(rawTheme: RawTheme): MuiTheme;
            modifyRawThemeSpacing(muiTheme: MuiTheme, newSpacing: Spacing): MuiTheme;
            modifyRawThemePalette(muiTheme: MuiTheme, newPaletteKeys: ThemePalette): MuiTheme;
            modifyRawThemeFontFamily(muiTheme: MuiTheme, newFontFamily: string): MuiTheme;
        }
        export var ThemeManager: ThemeManager;

        interface Transitions {
            easeOut(duration?: string, property?: string | string[], delay?: string, easeFunction?: string): string;
            create(duration?: string, property?: string, delay?: string, easeFunction?: string): string;
            easeOutFunction: string;
            easeInOutFunction: string;
        }
        export var Transitions: Transitions;

        interface Typography {
            textFullBlack: string;
            textDarkBlack: string;
            textLightBlack: string;
            textMinBlack: string;
            textFullWhite: string;
            textDarkWhite: string;
            textLightWhite: string;

            // font weight
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightMedium: number;

            fontStyleButtonFontSize: number;
        }
        export var Typography: Typography;

        export var DarkRawTheme: RawTheme;
        export var LightRawTheme: RawTheme;
    }

    interface SnackbarProps extends React.Props<Snackbar> {
        message: string;
        action?: string;
        autoHideDuration?: number;
        onActionTouchTap?: React.TouchEventHandler;
        onShow?: () => void;
        onDismiss?: () => void;
        openOnMount?: boolean;
        style?: React.CSSProperties;
    }
    export class Snackbar extends React.Component<SnackbarProps, {}> {
    }

    namespace Tabs {
        interface TabProps extends React.Props<Tab> {
            label?: string;
            value?: string;
            selected?: boolean;
            width?: string;
            style?: React.CSSProperties;

            // Called by Tabs component
            onActive?: (tab: Tab) => void;

            onTouchTap?: (value: string, e: TouchTapEvent, tab: Tab) => void;
        }
        export class Tab extends React.Component<TabProps, {}> {
        }

        interface TabsProps extends React.Props<Tabs> {
            contentContainerStyle?: React.CSSProperties;
            initialSelectedIndex?: number;
            inkBarStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            tabItemContainerStyle?: React.CSSProperties;
            tabWidth?: number;
            value?: string | number;
            tabTemplate?: __React.ComponentClass<any>;

            onChange?: (value: string | number, e: React.FormEvent, tab: Tab) => void;
        }
        export class Tabs extends React.Component<TabsProps, {}> {
        }
    }

    namespace Table {
        interface TableProps extends React.Props<Table> {
            allRowsSelected?: boolean;
            fixedFooter?: boolean;
            fixedHeader?: boolean;
            height?: string;
            multiSelectable?: boolean;
            onCellClick?: (row: number, column: number) => void;
            onCellHover?: (row: number, column: number) => void;
            onCellHoverExit?: (row: number, column: number) => void;
            onRowHover?: (row: number) => void;
            onRowHoverExit?: (row: number) => void;
            onRowSelection?: (selectedRows: number[]) => void;
            selectable?: boolean;
            style?: React.CSSProperties;
        }
        export class Table extends React.Component<TableProps, {}> {
        }

        interface TableBodyProps extends React.Props<TableBody> {
            allRowsSelected?: boolean;
            deselectOnClickaway?: boolean;
            displayRowCheckbox?: boolean;
            multiSelectable?: boolean;
            onCellClick?: (row: number, column: number) => void;
            onCellHover?: (row: number, column: number) => void;
            onCellHoverExit?: (row: number, column: number) => void;
            onRowHover?: (row: number) => void;
            onRowHoverExit?: (row: number) => void;
            onRowSelection?: (selectedRows: number[]) => void;
            preScanRows?: boolean;
            selectable?: boolean;
            showRowHover?: boolean;
            stripedRows?: boolean;
            style?: React.CSSProperties;
        }
        export class TableBody extends React.Component<TableBodyProps, {}> {
        }

        interface TableFooterProps extends React.Props<TableFooter> {
            adjustForCheckbox?: boolean;
            style?: React.CSSProperties;
        }
        export class TableFooter extends React.Component<TableFooterProps, {}> {
        }

        interface TableHeaderProps extends React.Props<TableHeader> {
            adjustForCheckbox?: boolean;
            displaySelectAll?: boolean;
            enableSelectAll?: boolean;
            onSelectAll?: (event: React.MouseEvent) => void;
            selectAllSelected?: boolean;
            style?: React.CSSProperties;
        }
        export class TableHeader extends React.Component<TableHeaderProps, {}> {
        }

        interface TableHeaderColumnProps extends React.Props<TableHeaderColumn> {
            columnNumber?: number;
            onClick?: (e: React.MouseEvent, column: number) => void;
            tooltip?: string;
            tooltipStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class TableHeaderColumn extends React.Component<TableHeaderColumnProps, {}> {
        }

        interface TableRowProps extends React.Props<TableRow> {
            displayBorder?: boolean;
            hoverable?: boolean;
            onCellClick?: (e: React.MouseEvent, row: number, column: number) => void;
            onCellHover?: (e: React.MouseEvent, row: number, column: number) => void;
            onCellHoverExit?: (e: React.MouseEvent, row: number, column: number) => void;
            onRowClick?: (e: React.MouseEvent, row: number) => void;
            onRowHover?: (e: React.MouseEvent, row: number) => void;
            onRowHoverExit?: (e: React.MouseEvent, row: number) => void;
            rowNumber?: number;
            selectable?: boolean;
            selected?: boolean;
            striped?: boolean;
            style?: React.CSSProperties;
        }
        export class TableRow extends React.Component<TableRowProps, {}> {
        }

        interface TableRowColumnProps extends React.Props<TableRowColumn> {
            columnNumber?: number;
            hoverable?: boolean;
            onHover?: (e: React.MouseEvent, column: number) => void;
            onHoverExit?: (e: React.MouseEvent, column: number) => void;
            style?: React.CSSProperties;
        }
        export class TableRowColumn extends React.Component<TableRowColumnProps, {}> {
        }
    }

    interface ThemeWrapperProps extends React.Props<ThemeWrapper> {
        theme: Styles.MuiTheme;
    }
    export class ThemeWrapper extends React.Component<ThemeWrapperProps, {}> {
    }

    interface ToggleProps extends CommonEnhancedSwitchProps<Toggle> {
        // <EnhancedSwitch/> is root element

        elementStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void;
        toggled?: boolean;
        defaultToggled?: boolean;
    }
    export class Toggle extends React.Component<ToggleProps, {}> {
        isToggled(): boolean;
        setToggled(newToggledValue: boolean): void;
    }

    interface TimePickerProps extends React.Props<TimePicker> {
        defaultTime?: Date;
        format?: string;
        pedantic?: boolean;
        style?: __React.CSSProperties;
        textFieldStye?: __React.CSSProperties;
        autoOk?: boolean;
        openDialog?: () => void;
        onFocus?: React.FocusEventHandler;
        onTouchTap?: TouchTapEventHandler;
        onChange?: (e: any, time: Date) => void;
        onShow?: () => void;
        onDismiss?: () => void;
    }
    export class TimePicker extends React.Component<TimePickerProps, {}> {
    }

    interface TextFieldProps extends React.Props<TextField> {
        errorStyle?: React.CSSProperties;
        errorText?: string;
        floatingLabelText?: string;
        floatingLabelStyle?: React.CSSProperties;
        fullWidth?: boolean;
        hintText?: string | React.ReactElement<any>;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        onEnterKeyDown?: React.KeyboardEventHandler;
        style?: React.CSSProperties;
        rows?: number,
        underlineStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineDisabledStyle?: React.CSSProperties;
        type?: string;
        hintStyle?: React.CSSProperties;

        disabled?: boolean;
        isRtl?: boolean;
        value?: string;
        defaultValue?: string;
        valueLink?: ReactLink<string>;

        onBlur?: React.FocusEventHandler;
        onChange?: React.FormEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
    }
    export class TextField extends React.Component<TextFieldProps, {}> {
        blur(): void;
        clearValue(): void;
        focus(): void;
        getValue(): string;
        setErrorText(newErrorText: string): void;
        setValue(newValue: string): void;
    }

    namespace Toolbar {
        interface ToolbarProps extends React.Props<Toolbar> {
            style?: React.CSSProperties;
        }
        export class Toolbar extends React.Component<ToolbarProps, {}> {
        }

        interface ToolbarGroupProps extends React.Props<ToolbarGroup> {
            float?: string;
            style?: React.CSSProperties;
            firstChild?: boolean;
        }
        export class ToolbarGroup extends React.Component<ToolbarGroupProps, {}> {
        }

        interface ToolbarSeparatorProps extends React.Props<ToolbarSeparator> {
            style?: React.CSSProperties;
        }
        export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps, {}> {
        }

        interface ToolbarTitleProps extends React.HTMLAttributes, React.Props<ToolbarTitle> {
            text?: string;
            style?: React.CSSProperties;
        }
        export class ToolbarTitle extends React.Component<ToolbarTitleProps, {}> {
        }
    }

    interface TooltipProps extends React.Props<Tooltip> {
        label: string;
        show?: boolean;
        touch?: boolean;
        verticalPosition?: string;
        horizontalPosition?: string;
    }
    export class Tooltip extends React.Component<TooltipProps, {}> {
    }

    export namespace Utils {
        interface ContrastLevel {
            range: [number, number];
            color: string;
        }
        interface ColorManipulator {
            fade(color: string, amount: string | number): string;
            lighten(color: string, amount: string | number): string;
            darken(color: string, amount: string | number): string;
            contrastRatio(background: string, foreground: string): number;
            contrastRatioLevel(background: string, foreground: string): ContrastLevel;
        }
        export var ColorManipulator: ColorManipulator;

        interface CssEvent {
            transitionEndEventName(): string;
            animationEndEventName(): string;
            onTransitionEnd(el: Element, callback: () => void): void;
            onAnimationEnd(el: Element, callback: () => void): void;
        }
        export var CssEvent: CssEvent;

        interface Dom {
            isDescendant(parent: Node, child: Node): boolean;
            offset(el: Element): { top: number, left: number };
            getStyleAttributeAsNumber(el: HTMLElement, attr: string): number;
            addClass(el: Element, className: string): void;
            removeClass(el: Element, className: string): void;
            hasClass(el: Element, className: string): boolean;
            toggleClass(el: Element, className: string): void;
            forceRedraw(el: HTMLElement): void;
            withoutTransition(el: HTMLElement, callback: () => void): void;
        }
        export var Dom: Dom;

        interface Events {
            once(el: Element, type: string, callback: EventListener): void;
            on(el: Element, type: string, callback: EventListener): void;
            off(el: Element, type: string, callback: EventListener): void;
            isKeyboard(e: Event): boolean;
        }
        export var Events: Events;

        function Extend<T, S1>(base: T, override: S1): (T & S1);

        interface ImmutabilityHelper {
            merge(base: any, ...args: any[]): any;
            mergeItem(obj: any, key: any, newValueObject: any): any;
            push(array: any[], obj: any): any[];
            shift(array: any[]): any[];
        }
        export var ImmutabilityHelper: ImmutabilityHelper;

        interface KeyCode {
            DOWN: number;
            ESC: number;
            ENTER: number;
            LEFT: number;
            RIGHT: number;
            SPACE: number;
            TAB: number;
            UP: number;
        }
        var KeyCode: KeyCode;

        interface KeyLine {
            Desktop: {
                GUTTER: number;
                GUTTER_LESS: number;
                INCREMENT: number;
                MENU_ITEM_HEIGHT: number;
            };

            getIncrementalDim(dim: number): number;
        }
        export var KeyLine: KeyLine;

        interface UniqueId {
            generate(): string;
        }
        export var UniqueId: UniqueId;

        interface Styles {
            mergeAndPrefix(base: any, ...args: any[]): React.CSSProperties;
        }
        export var Styles: Styles;
    }

    // New menus available only through requiring directly to the end file
    namespace Menus {
        interface DropDownMenuProps extends React.Props<DropDownMenu> {
          autoWidth?: boolean;
          children?: React.ReactElement<MenuItem>[];
          className?: string;
          disabled?: boolean;
          iconStyle?: any;
          labelStyle?: any;
          maxHeight?: number;
          menuStyle?: any;
          onChange?: Menu.ItemTapEventHandler;
          openImmediately?: boolean;
          style?: any;
          underlineStyle?:  any;
          value?: any;
        }

        export class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
        }

        interface IconMenuProps extends React.Props<IconMenu> {
            closeOnItemTouchTap?: boolean;
            desktop?: boolean;
            iconButtonElement: React.ReactElement<IconButtonProps>;
            openDirection?: string;
            menuStyle?: React.CSSProperties;
            multiple?: boolean;
            value?: string | Array<string>;
            width?: string | number;
            touchTapCloseDelay?: number;
            style?: React.CSSProperties;

            onKeyboardFocus?: React.FocusEventHandler;
            onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void;
            onChange?: (e: React.FormEvent, value: string | Array<string>) => void;
        }
        export class IconMenu extends React.Component<IconMenuProps, {}> {
        }

        interface MenuProps extends React.Props<Menu> {
            animated?: boolean;
            autoWidth?: boolean;
            desktop?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            openDirection?: string;
            value?: string | Array<string>;
            width?: string | number;
            zDepth?: number;
            style?: React.CSSProperties;
        }
        export class Menu extends React.Component<MenuProps, {}>{
        }

        interface MenuItemProps extends React.Props<MenuItem> {
            checked?: boolean;
            desktop?: boolean;
            disabled?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftIcon?: React.ReactElement<any>;
            primaryText?: string | React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            value?: any;
            style?: React.CSSProperties;

            onEscKeyDown?: React.KeyboardEventHandler;
            onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void;
            onChange?: (e: React.FormEvent, value: string) => void;
        }
        export class MenuItem extends React.Component<MenuItemProps, {}>{
        }
    }

    namespace GridList {

        interface GridListProps extends React.Props<GridList> {
            cols?: number;
            padding?: number;
            cellHeight?: number;
            style?: React.CSSProperties;
        }

        export class GridList extends React.Component<GridListProps, {}>{
        }

        interface GridTileProps extends React.Props<GridTile> {
            title?: string;
            subtitle?: __React.ReactNode;
            titlePosition?: string; //"top"|"bottom"
            titleBackground?: string;
            actionIcon?: __React.ReactElement<any>;
            actionPosition?: string; //"left"|"right"
            cols?: number;
            rows?: number;
            rootClass?: string | __React.Component<any,any>;
            style?: React.CSSProperties;
        }

        export class GridTile extends React.Component<GridTileProps, {}>{
        }

    }
}    // __MaterialUI

declare module 'material-ui/lib/app-bar' {
    export import AppBar = __MaterialUI.AppBar;
    export default AppBar;
}

declare module 'material-ui/lib/auto-complete' {
    export import AutoComplete = __MaterialUI.AutoComplete;
    export default AutoComplete;
}

declare module 'material-ui/lib/app-canvas' {
    export import AppCanvas = __MaterialUI.AppCanvas;
    export default AppCanvas;
}

declare module 'material-ui/lib/avatar' {
    export import Avatar = __MaterialUI.Avatar;
    export default Avatar;
}

declare module "material-ui/lib/badge" {
    export import Badge = __MaterialUI.Badge;
    export default Badge;
}

declare module 'material-ui/lib/before-after-wrapper' {
    export import BeforeAfterWrapper = __MaterialUI.BeforeAfterWrapper;
    export default BeforeAfterWrapper;
}

declare module 'material-ui/lib/card/card' {
    export import Card = __MaterialUI.Card.Card;
    export default Card;
}

declare module 'material-ui/lib/card/card-actions' {
    export import CardActions = __MaterialUI.Card.CardActions;
    export default CardActions;
}

declare module 'material-ui/lib/card/card-expandable' {
    export import CardExpandable = __MaterialUI.Card.CardExpandable;
    export default CardExpandable;
}

declare module 'material-ui/lib/card/card-header' {
    export import CardHeader = __MaterialUI.Card.CardHeader;
    export default CardHeader;
}

declare module 'material-ui/lib/card/card-media' {
    export import CardMedia = __MaterialUI.Card.CardMedia;
    export default CardMedia;
}

declare module 'material-ui/lib/card/card-text' {
    export import CardText = __MaterialUI.Card.CardText;
    export default CardText;
}

declare module 'material-ui/lib/card/card-title' {
    export import CardTitle = __MaterialUI.Card.CardTitle;
    export default CardTitle;
}

declare module 'material-ui/lib/checkbox' {
    export import Checkbox = __MaterialUI.Checkbox;
    export default Checkbox;
}

declare module 'material-ui/lib/circular-progress' {
    export import CircularProgress = __MaterialUI.CircularProgress;
    export default CircularProgress;
}

declare module 'material-ui/lib/clearfix' {
    export import ClearFix = __MaterialUI.ClearFix;
    export default ClearFix;
}

declare module 'material-ui/lib/date-picker/date-picker' {
    export import DatePicker = __MaterialUI.DatePicker.DatePicker;
    export default DatePicker;
}

declare module 'material-ui/lib/date-picker/date-picker-dialog' {
    export import DatePickerDialog = __MaterialUI.DatePicker.DatePickerDialog;
    export default DatePickerDialog;
}

declare module 'material-ui/lib/dialog' {
    export import Dialog = __MaterialUI.Dialog;
    export default Dialog;
}

declare module 'material-ui/lib/drop-down-icon' {
    export import DropDownIcon = __MaterialUI.DropDownIcon;
    export default DropDownIcon;
}

declare module 'material-ui/lib/drop-down-menu' {
    export import DropDownMenu = __MaterialUI.DropDownMenu;
    export default DropDownMenu;
}

declare module 'material-ui/lib/DropDownMenu/DropDownMenu' {
    export import DropDownMenu = __MaterialUI.Menus.DropDownMenu;
    export default DropDownMenu;
}

declare module 'material-ui/lib/enhanced-button' {
    export import EnhancedButton = __MaterialUI.EnhancedButton;
    export default EnhancedButton;
}

declare module 'material-ui/lib/flat-button' {
    export import FlatButton = __MaterialUI.FlatButton;
    export default FlatButton;
}

declare module 'material-ui/lib/floating-action-button' {
    export import FloatingActionButton = __MaterialUI.FloatingActionButton;
    export default FloatingActionButton;
}

declare module 'material-ui/lib/font-icon' {
    export import FontIcon = __MaterialUI.FontIcon;
    export default FontIcon;
}

declare module 'material-ui/lib/icon-button' {
    export import IconButton = __MaterialUI.IconButton;
    export default IconButton;
}

declare module 'material-ui/lib/left-nav' {
    export import LeftNav = __MaterialUI.LeftNav;
    export default LeftNav;
}

declare module 'material-ui/lib/linear-progress' {
    export import LinearProgress = __MaterialUI.LinearProgress;
    export default LinearProgress;
}

declare module 'material-ui/lib/lists/list' {
    export import List = __MaterialUI.Lists.List;
    export default List;
}

declare module 'material-ui/lib/lists/list-divider' {
    export import ListDivider = __MaterialUI.Lists.ListDivider;
    export default ListDivider;
}

declare module 'material-ui/lib/lists/list-item' {
    export import ListItem = __MaterialUI.Lists.ListItem;
    export default ListItem;
}

declare module 'material-ui/lib/menu/menu' {
    export import Menu = __MaterialUI.Menu.Menu;
    export default Menu;
}

declare module 'material-ui/lib/menu/menu-item' {
    export import MenuItem = __MaterialUI.Menu.MenuItem;
    export default MenuItem;
}

declare module 'material-ui/lib/mixins/' {
    export import ClickAwayable = __MaterialUI.Mixins.ClickAwayable; // require('material-ui/lib/mixins/click-awayable');
    export import WindowListenable = __MaterialUI.Mixins.WindowListenable; // require('material-ui/lib/mixins/window-listenable');
    export import StylePropable = __MaterialUI.Mixins.StylePropable; // require('material-ui/lib/mixins/style-propable');
    export import StyleResizable = __MaterialUI.Mixins.StyleResizable; // require('material-ui/lib/mixins/style-resizable');
}

declare module 'material-ui/lib/mixins/click-awayable' {
    export import ClickAwayable = __MaterialUI.Mixins.ClickAwayable;
    export default ClickAwayable;
}

declare module 'material-ui/lib/mixins/window-listenable' {
    export import WindowListenable = __MaterialUI.Mixins.WindowListenable;
    export default WindowListenable;
}

declare module 'material-ui/lib/mixins/style-propable' {
    export import StylePropable = __MaterialUI.Mixins.StylePropable;
    export default StylePropable;
}

declare module 'material-ui/lib/mixins/style-resizable' {
    export import StyleResizable = __MaterialUI.Mixins.StyleResizable;
    export default StyleResizable;
}

declare module 'material-ui/lib/overlay' {
    export import Overlay = __MaterialUI.Overlay;
    export default Overlay;
}

declare module 'material-ui/lib/paper' {
    export import Paper = __MaterialUI.Paper;
    export default Paper;
}

declare module 'material-ui/lib/radio-button' {
    export import RadioButton = __MaterialUI.RadioButton;
    export default RadioButton;
}

declare module 'material-ui/lib/radio-button-group' {
    export import RadioButtonGroup = __MaterialUI.RadioButtonGroup;
    export default RadioButtonGroup;
}

declare module 'material-ui/lib/raised-button' {
    export import RaisedButton = __MaterialUI.RaisedButton;
    export default RaisedButton;
}

declare module 'material-ui/lib/refresh-indicator' {
    export import RefreshIndicator = __MaterialUI.RefreshIndicator;
    export default RefreshIndicator;
}

declare module 'material-ui/lib/ripples/' {
    export import CircleRipple = __MaterialUI.Ripples.CircleRipple;
    export import FocusRipple = __MaterialUI.Ripples.FocusRipple;
    export import TouchRipple = __MaterialUI.Ripples.TouchRipple;
}

declare module 'material-ui/lib/select-field' {
    export import SelectField = __MaterialUI.SelectField;
    export default SelectField;
}

declare module 'material-ui/lib/slider' {
    export import Slider = __MaterialUI.Slider;
    export default Slider;
}

declare module 'material-ui/lib/svg-icon' {
    export import SvgIcon = __MaterialUI.SvgIcon;
    export default SvgIcon;
}

declare module 'material-ui/lib/svg-icons/action/work' {
  export import ActionWork = __MaterialUI.Icons.ActionWork;
  export default ActionWork;
}

declare module 'material-ui/lib/svg-icons/action/camera-enhance' {
  export import ActionCameraEnhance = __MaterialUI.Icons.ActionCameraEnhance;
  export default ActionCameraEnhance;
}

declare module 'material-ui/lib/svg-icons/action/flip-to-back' {
  export import ActionFlipToBack = __MaterialUI.Icons.ActionFlipToBack;
  export default ActionFlipToBack;
}

declare module 'material-ui/lib/svg-icons/action/feedback' {
  export import ActionFeedback = __MaterialUI.Icons.ActionFeedback;
  export default ActionFeedback;
}

declare module 'material-ui/lib/svg-icons/action/assignment-turned-in' {
  export import ActionAssignmentTurnedIn = __MaterialUI.Icons.ActionAssignmentTurnedIn;
  export default ActionAssignmentTurnedIn;
}

declare module 'material-ui/lib/svg-icons/action/track-changes' {
  export import ActionTrackChanges = __MaterialUI.Icons.ActionTrackChanges;
  export default ActionTrackChanges;
}

declare module 'material-ui/lib/svg-icons/action/view-stream' {
  export import ActionViewStream = __MaterialUI.Icons.ActionViewStream;
  export default ActionViewStream;
}

declare module 'material-ui/lib/svg-icons/action/open-in-browser' {
  export import ActionOpenInBrowser = __MaterialUI.Icons.ActionOpenInBrowser;
  export default ActionOpenInBrowser;
}

declare module 'material-ui/lib/svg-icons/action/view-headline' {
  export import ActionViewHeadline = __MaterialUI.Icons.ActionViewHeadline;
  export default ActionViewHeadline;
}

declare module 'material-ui/lib/svg-icons/action/alarm-add' {
  export import ActionAlarmAdd = __MaterialUI.Icons.ActionAlarmAdd;
  export default ActionAlarmAdd;
}

declare module 'material-ui/lib/svg-icons/action/history' {
  export import ActionHistory = __MaterialUI.Icons.ActionHistory;
  export default ActionHistory;
}

declare module 'material-ui/lib/svg-icons/action/perm-device-information' {
  export import ActionPermDeviceInformation = __MaterialUI.Icons.ActionPermDeviceInformation;
  export default ActionPermDeviceInformation;
}

declare module 'material-ui/lib/svg-icons/action/reorder' {
  export import ActionReorder = __MaterialUI.Icons.ActionReorder;
  export default ActionReorder;
}

declare module 'material-ui/lib/svg-icons/action/assignment' {
  export import ActionAssignment = __MaterialUI.Icons.ActionAssignment;
  export default ActionAssignment;
}

declare module 'material-ui/lib/svg-icons/action/shopping-cart' {
  export import ActionShoppingCart = __MaterialUI.Icons.ActionShoppingCart;
  export default ActionShoppingCart;
}

declare module 'material-ui/lib/svg-icons/action/face' {
  export import ActionFace = __MaterialUI.Icons.ActionFace;
  export default ActionFace;
}

declare module 'material-ui/lib/svg-icons/action/event' {
  export import ActionEvent = __MaterialUI.Icons.ActionEvent;
  export default ActionEvent;
}

declare module 'material-ui/lib/svg-icons/action/view-week' {
  export import ActionViewWeek = __MaterialUI.Icons.ActionViewWeek;
  export default ActionViewWeek;
}

declare module 'material-ui/lib/svg-icons/action/rounded-corner' {
  export import ActionRoundedCorner = __MaterialUI.Icons.ActionRoundedCorner;
  export default ActionRoundedCorner;
}

declare module 'material-ui/lib/svg-icons/action/view-carousel' {
  export import ActionViewCarousel = __MaterialUI.Icons.ActionViewCarousel;
  export default ActionViewCarousel;
}

declare module 'material-ui/lib/svg-icons/action/toll' {
  export import ActionToll = __MaterialUI.Icons.ActionToll;
  export default ActionToll;
}

declare module 'material-ui/lib/svg-icons/action/home' {
  export import ActionHome = __MaterialUI.Icons.ActionHome;
  export default ActionHome;
}

declare module 'material-ui/lib/svg-icons/action/subject' {
  export import ActionSubject = __MaterialUI.Icons.ActionSubject;
  export default ActionSubject;
}

declare module 'material-ui/lib/svg-icons/action/lock' {
  export import ActionLock = __MaterialUI.Icons.ActionLock;
  export default ActionLock;
}

declare module 'material-ui/lib/svg-icons/action/visibility-off' {
  export import ActionVisibilityOff = __MaterialUI.Icons.ActionVisibilityOff;
  export default ActionVisibilityOff;
}

declare module 'material-ui/lib/svg-icons/action/opacity' {
  export import ActionOpacity = __MaterialUI.Icons.ActionOpacity;
  export default ActionOpacity;
}

declare module 'material-ui/lib/svg-icons/action/dns' {
  export import ActionDns = __MaterialUI.Icons.ActionDns;
  export default ActionDns;
}

declare module 'material-ui/lib/svg-icons/action/open-with' {
  export import ActionOpenWith = __MaterialUI.Icons.ActionOpenWith;
  export default ActionOpenWith;
}

declare module 'material-ui/lib/svg-icons/action/system-update-alt' {
  export import ActionSystemUpdateAlt = __MaterialUI.Icons.ActionSystemUpdateAlt;
  export default ActionSystemUpdateAlt;
}

declare module 'material-ui/lib/svg-icons/action/picture-in-picture-alt' {
  export import ActionPictureInPictureAlt = __MaterialUI.Icons.ActionPictureInPictureAlt;
  export default ActionPictureInPictureAlt;
}

declare module 'material-ui/lib/svg-icons/action/bookmark-border' {
  export import ActionBookmarkBorder = __MaterialUI.Icons.ActionBookmarkBorder;
  export default ActionBookmarkBorder;
}

declare module 'material-ui/lib/svg-icons/action/settings' {
  export import ActionSettings = __MaterialUI.Icons.ActionSettings;
  export default ActionSettings;
}

declare module 'material-ui/lib/svg-icons/action/dashboard' {
  export import ActionDashboard = __MaterialUI.Icons.ActionDashboard;
  export default ActionDashboard;
}

declare module 'material-ui/lib/svg-icons/action/done-all' {
  export import ActionDoneAll = __MaterialUI.Icons.ActionDoneAll;
  export default ActionDoneAll;
}

declare module 'material-ui/lib/svg-icons/action/aspect-ratio' {
  export import ActionAspectRatio = __MaterialUI.Icons.ActionAspectRatio;
  export default ActionAspectRatio;
}

declare module 'material-ui/lib/svg-icons/action/verified-user' {
  export import ActionVerifiedUser = __MaterialUI.Icons.ActionVerifiedUser;
  export default ActionVerifiedUser;
}

declare module 'material-ui/lib/svg-icons/action/update' {
  export import ActionUpdate = __MaterialUI.Icons.ActionUpdate;
  export default ActionUpdate;
}

declare module 'material-ui/lib/svg-icons/action/query-builder' {
  export import ActionQueryBuilder = __MaterialUI.Icons.ActionQueryBuilder;
  export default ActionQueryBuilder;
}

declare module 'material-ui/lib/svg-icons/action/supervisor-account' {
  export import ActionSupervisorAccount = __MaterialUI.Icons.ActionSupervisorAccount;
  export default ActionSupervisorAccount;
}

declare module 'material-ui/lib/svg-icons/action/polymer' {
  export import ActionPolymer = __MaterialUI.Icons.ActionPolymer;
  export default ActionPolymer;
}

declare module 'material-ui/lib/svg-icons/action/accessible' {
  export import ActionAccessible = __MaterialUI.Icons.ActionAccessible;
  export default ActionAccessible;
}

declare module 'material-ui/lib/svg-icons/action/highlight-off' {
  export import ActionHighlightOff = __MaterialUI.Icons.ActionHighlightOff;
  export default ActionHighlightOff;
}

declare module 'material-ui/lib/svg-icons/action/power-settings-new' {
  export import ActionPowerSettingsNew = __MaterialUI.Icons.ActionPowerSettingsNew;
  export default ActionPowerSettingsNew;
}

declare module 'material-ui/lib/svg-icons/action/chrome-reader-mode' {
  export import ActionChromeReaderMode = __MaterialUI.Icons.ActionChromeReaderMode;
  export default ActionChromeReaderMode;
}

declare module 'material-ui/lib/svg-icons/action/perm-camera-mic' {
  export import ActionPermCameraMic = __MaterialUI.Icons.ActionPermCameraMic;
  export default ActionPermCameraMic;
}

declare module 'material-ui/lib/svg-icons/action/touch-app' {
  export import ActionTouchApp = __MaterialUI.Icons.ActionTouchApp;
  export default ActionTouchApp;
}

declare module 'material-ui/lib/svg-icons/action/receipt' {
  export import ActionReceipt = __MaterialUI.Icons.ActionReceipt;
  export default ActionReceipt;
}

declare module 'material-ui/lib/svg-icons/action/assignment-late' {
  export import ActionAssignmentLate = __MaterialUI.Icons.ActionAssignmentLate;
  export default ActionAssignmentLate;
}

declare module 'material-ui/lib/svg-icons/action/alarm-off' {
  export import ActionAlarmOff = __MaterialUI.Icons.ActionAlarmOff;
  export default ActionAlarmOff;
}

declare module 'material-ui/lib/svg-icons/action/toc' {
  export import ActionToc = __MaterialUI.Icons.ActionToc;
  export default ActionToc;
}

declare module 'material-ui/lib/svg-icons/action/settings-bluetooth' {
  export import ActionSettingsBluetooth = __MaterialUI.Icons.ActionSettingsBluetooth;
  export default ActionSettingsBluetooth;
}

declare module 'material-ui/lib/svg-icons/action/settings-brightness' {
  export import ActionSettingsBrightness = __MaterialUI.Icons.ActionSettingsBrightness;
  export default ActionSettingsBrightness;
}

declare module 'material-ui/lib/svg-icons/action/donut-small' {
  export import ActionDonutSmall = __MaterialUI.Icons.ActionDonutSmall;
  export default ActionDonutSmall;
}

declare module 'material-ui/lib/svg-icons/action/zoom-out' {
  export import ActionZoomOut = __MaterialUI.Icons.ActionZoomOut;
  export default ActionZoomOut;
}

declare module 'material-ui/lib/svg-icons/action/loyalty' {
  export import ActionLoyalty = __MaterialUI.Icons.ActionLoyalty;
  export default ActionLoyalty;
}

declare module 'material-ui/lib/svg-icons/action/search' {
  export import ActionSearch = __MaterialUI.Icons.ActionSearch;
  export default ActionSearch;
}

declare module 'material-ui/lib/svg-icons/action/account-balance-wallet' {
  export import ActionAccountBalanceWallet = __MaterialUI.Icons.ActionAccountBalanceWallet;
  export default ActionAccountBalanceWallet;
}

declare module 'material-ui/lib/svg-icons/action/date-range' {
  export import ActionDateRange = __MaterialUI.Icons.ActionDateRange;
  export default ActionDateRange;
}

declare module 'material-ui/lib/svg-icons/action/alarm-on' {
  export import ActionAlarmOn = __MaterialUI.Icons.ActionAlarmOn;
  export default ActionAlarmOn;
}

declare module 'material-ui/lib/svg-icons/action/view-quilt' {
  export import ActionViewQuilt = __MaterialUI.Icons.ActionViewQuilt;
  export default ActionViewQuilt;
}

declare module 'material-ui/lib/svg-icons/action/launch' {
  export import ActionLaunch = __MaterialUI.Icons.ActionLaunch;
  export default ActionLaunch;
}

declare module 'material-ui/lib/svg-icons/action/visibility' {
  export import ActionVisibility = __MaterialUI.Icons.ActionVisibility;
  export default ActionVisibility;
}

declare module 'material-ui/lib/svg-icons/action/flight-land' {
  export import ActionFlightLand = __MaterialUI.Icons.ActionFlightLand;
  export default ActionFlightLand;
}

declare module 'material-ui/lib/svg-icons/action/card-travel' {
  export import ActionCardTravel = __MaterialUI.Icons.ActionCardTravel;
  export default ActionCardTravel;
}

declare module 'material-ui/lib/svg-icons/action/get-app' {
  export import ActionGetApp = __MaterialUI.Icons.ActionGetApp;
  export default ActionGetApp;
}

declare module 'material-ui/lib/svg-icons/action/markunread-mailbox' {
  export import ActionMarkunreadMailbox = __MaterialUI.Icons.ActionMarkunreadMailbox;
  export default ActionMarkunreadMailbox;
}

declare module 'material-ui/lib/svg-icons/action/view-agenda' {
  export import ActionViewAgenda = __MaterialUI.Icons.ActionViewAgenda;
  export default ActionViewAgenda;
}

declare module 'material-ui/lib/svg-icons/action/timeline' {
  export import ActionTimeline = __MaterialUI.Icons.ActionTimeline;
  export default ActionTimeline;
}

declare module 'material-ui/lib/svg-icons/action/settings-remote' {
  export import ActionSettingsRemote = __MaterialUI.Icons.ActionSettingsRemote;
  export default ActionSettingsRemote;
}

declare module 'material-ui/lib/svg-icons/action/input' {
  export import ActionInput = __MaterialUI.Icons.ActionInput;
  export default ActionInput;
}

declare module 'material-ui/lib/svg-icons/action/record-voice-over' {
  export import ActionRecordVoiceOver = __MaterialUI.Icons.ActionRecordVoiceOver;
  export default ActionRecordVoiceOver;
}

declare module 'material-ui/lib/svg-icons/action/backup' {
  export import ActionBackup = __MaterialUI.Icons.ActionBackup;
  export default ActionBackup;
}

declare module 'material-ui/lib/svg-icons/action/language' {
  export import ActionLanguage = __MaterialUI.Icons.ActionLanguage;
  export default ActionLanguage;
}

declare module 'material-ui/lib/svg-icons/action/play-for-work' {
  export import ActionPlayForWork = __MaterialUI.Icons.ActionPlayForWork;
  export default ActionPlayForWork;
}

declare module 'material-ui/lib/svg-icons/action/gif' {
  export import ActionGif = __MaterialUI.Icons.ActionGif;
  export default ActionGif;
}

declare module 'material-ui/lib/svg-icons/action/theaters' {
  export import ActionTheaters = __MaterialUI.Icons.ActionTheaters;
  export default ActionTheaters;
}

declare module 'material-ui/lib/svg-icons/action/offline-pin' {
  export import ActionOfflinePin = __MaterialUI.Icons.ActionOfflinePin;
  export default ActionOfflinePin;
}

declare module 'material-ui/lib/svg-icons/action/assignment-return' {
  export import ActionAssignmentReturn = __MaterialUI.Icons.ActionAssignmentReturn;
  export default ActionAssignmentReturn;
}

declare module 'material-ui/lib/svg-icons/action/print' {
  export import ActionPrint = __MaterialUI.Icons.ActionPrint;
  export default ActionPrint;
}

declare module 'material-ui/lib/svg-icons/action/settings-overscan' {
  export import ActionSettingsOverscan = __MaterialUI.Icons.ActionSettingsOverscan;
  export default ActionSettingsOverscan;
}

declare module 'material-ui/lib/svg-icons/action/store' {
  export import ActionStore = __MaterialUI.Icons.ActionStore;
  export default ActionStore;
}

declare module 'material-ui/lib/svg-icons/action/exit-to-app' {
  export import ActionExitToApp = __MaterialUI.Icons.ActionExitToApp;
  export default ActionExitToApp;
}

declare module 'material-ui/lib/svg-icons/action/account-balance' {
  export import ActionAccountBalance = __MaterialUI.Icons.ActionAccountBalance;
  export default ActionAccountBalance;
}

declare module 'material-ui/lib/svg-icons/action/grade' {
  export import ActionGrade = __MaterialUI.Icons.ActionGrade;
  export default ActionGrade;
}

declare module 'material-ui/lib/svg-icons/action/picture-in-picture' {
  export import ActionPictureInPicture = __MaterialUI.Icons.ActionPictureInPicture;
  export default ActionPictureInPicture;
}

declare module 'material-ui/lib/svg-icons/action/copyright' {
  export import ActionCopyright = __MaterialUI.Icons.ActionCopyright;
  export default ActionCopyright;
}

declare module 'material-ui/lib/svg-icons/action/donut-large' {
  export import ActionDonutLarge = __MaterialUI.Icons.ActionDonutLarge;
  export default ActionDonutLarge;
}

declare module 'material-ui/lib/svg-icons/action/lock-open' {
  export import ActionLockOpen = __MaterialUI.Icons.ActionLockOpen;
  export default ActionLockOpen;
}

declare module 'material-ui/lib/svg-icons/action/perm-media' {
  export import ActionPermMedia = __MaterialUI.Icons.ActionPermMedia;
  export default ActionPermMedia;
}

declare module 'material-ui/lib/svg-icons/action/all-out' {
  export import ActionAllOut = __MaterialUI.Icons.ActionAllOut;
  export default ActionAllOut;
}

declare module 'material-ui/lib/svg-icons/action/check-circle' {
  export import ActionCheckCircle = __MaterialUI.Icons.ActionCheckCircle;
  export default ActionCheckCircle;
}

declare module 'material-ui/lib/svg-icons/action/swap-vertical-circle' {
  export import ActionSwapVerticalCircle = __MaterialUI.Icons.ActionSwapVerticalCircle;
  export default ActionSwapVerticalCircle;
}

declare module 'material-ui/lib/svg-icons/action/settings-input-svideo' {
  export import ActionSettingsInputSvideo = __MaterialUI.Icons.ActionSettingsInputSvideo;
  export default ActionSettingsInputSvideo;
}

declare module 'material-ui/lib/svg-icons/action/watch-later' {
  export import ActionWatchLater = __MaterialUI.Icons.ActionWatchLater;
  export default ActionWatchLater;
}

declare module 'material-ui/lib/svg-icons/action/question-answer' {
  export import ActionQuestionAnswer = __MaterialUI.Icons.ActionQuestionAnswer;
  export default ActionQuestionAnswer;
}

declare module 'material-ui/lib/svg-icons/action/assignment-ind' {
  export import ActionAssignmentInd = __MaterialUI.Icons.ActionAssignmentInd;
  export default ActionAssignmentInd;
}

declare module 'material-ui/lib/svg-icons/action/code' {
  export import ActionCode = __MaterialUI.Icons.ActionCode;
  export default ActionCode;
}

declare module 'material-ui/lib/svg-icons/action/turned-in-not' {
  export import ActionTurnedInNot = __MaterialUI.Icons.ActionTurnedInNot;
  export default ActionTurnedInNot;
}

declare module 'material-ui/lib/svg-icons/action/line-weight' {
  export import ActionLineWeight = __MaterialUI.Icons.ActionLineWeight;
  export default ActionLineWeight;
}

declare module 'material-ui/lib/svg-icons/action/restore' {
  export import ActionRestore = __MaterialUI.Icons.ActionRestore;
  export default ActionRestore;
}

declare module 'material-ui/lib/svg-icons/action/tab' {
  export import ActionTab = __MaterialUI.Icons.ActionTab;
  export default ActionTab;
}

declare module 'material-ui/lib/svg-icons/action/open-in-new' {
  export import ActionOpenInNew = __MaterialUI.Icons.ActionOpenInNew;
  export default ActionOpenInNew;
}

declare module 'material-ui/lib/svg-icons/action/turned-in' {
  export import ActionTurnedIn = __MaterialUI.Icons.ActionTurnedIn;
  export default ActionTurnedIn;
}

declare module 'material-ui/lib/svg-icons/action/settings-input-hdmi' {
  export import ActionSettingsInputHdmi = __MaterialUI.Icons.ActionSettingsInputHdmi;
  export default ActionSettingsInputHdmi;
}

declare module 'material-ui/lib/svg-icons/action/favorite-border' {
  export import ActionFavoriteBorder = __MaterialUI.Icons.ActionFavoriteBorder;
  export default ActionFavoriteBorder;
}

declare module 'material-ui/lib/svg-icons/action/done' {
  export import ActionDone = __MaterialUI.Icons.ActionDone;
  export default ActionDone;
}

declare module 'material-ui/lib/svg-icons/action/payment' {
  export import ActionPayment = __MaterialUI.Icons.ActionPayment;
  export default ActionPayment;
}

declare module 'material-ui/lib/svg-icons/action/announcement' {
  export import ActionAnnouncement = __MaterialUI.Icons.ActionAnnouncement;
  export default ActionAnnouncement;
}

declare module 'material-ui/lib/svg-icons/action/find-in-page' {
  export import ActionFindInPage = __MaterialUI.Icons.ActionFindInPage;
  export default ActionFindInPage;
}

declare module 'material-ui/lib/svg-icons/action/thumbs-up-down' {
  export import ActionThumbsUpDown = __MaterialUI.Icons.ActionThumbsUpDown;
  export default ActionThumbsUpDown;
}

declare module 'material-ui/lib/svg-icons/action/explore' {
  export import ActionExplore = __MaterialUI.Icons.ActionExplore;
  export default ActionExplore;
}

declare module 'material-ui/lib/svg-icons/action/today' {
  export import ActionToday = __MaterialUI.Icons.ActionToday;
  export default ActionToday;
}

declare module 'material-ui/lib/svg-icons/action/settings-power' {
  export import ActionSettingsPower = __MaterialUI.Icons.ActionSettingsPower;
  export default ActionSettingsPower;
}

declare module 'material-ui/lib/svg-icons/action/gavel' {
  export import ActionGavel = __MaterialUI.Icons.ActionGavel;
  export default ActionGavel;
}

declare module 'material-ui/lib/svg-icons/action/build' {
  export import ActionBuild = __MaterialUI.Icons.ActionBuild;
  export default ActionBuild;
}

declare module 'material-ui/lib/svg-icons/action/rowing' {
  export import ActionRowing = __MaterialUI.Icons.ActionRowing;
  export default ActionRowing;
}

declare module 'material-ui/lib/svg-icons/action/label' {
  export import ActionLabel = __MaterialUI.Icons.ActionLabel;
  export default ActionLabel;
}

declare module 'material-ui/lib/svg-icons/action/card-giftcard' {
  export import ActionCardGiftcard = __MaterialUI.Icons.ActionCardGiftcard;
  export default ActionCardGiftcard;
}

declare module 'material-ui/lib/svg-icons/action/thumb-up' {
  export import ActionThumbUp = __MaterialUI.Icons.ActionThumbUp;
  export default ActionThumbUp;
}

declare module 'material-ui/lib/svg-icons/action/shopping-basket' {
  export import ActionShoppingBasket = __MaterialUI.Icons.ActionShoppingBasket;
  export default ActionShoppingBasket;
}

declare module 'material-ui/lib/svg-icons/action/swap-horiz' {
  export import ActionSwapHoriz = __MaterialUI.Icons.ActionSwapHoriz;
  export default ActionSwapHoriz;
}

declare module 'material-ui/lib/svg-icons/action/help-outline' {
  export import ActionHelpOutline = __MaterialUI.Icons.ActionHelpOutline;
  export default ActionHelpOutline;
}

declare module 'material-ui/lib/svg-icons/action/pregnant-woman' {
  export import ActionPregnantWoman = __MaterialUI.Icons.ActionPregnantWoman;
  export default ActionPregnantWoman;
}

declare module 'material-ui/lib/svg-icons/action/help' {
  export import ActionHelp = __MaterialUI.Icons.ActionHelp;
  export default ActionHelp;
}

declare module 'material-ui/lib/svg-icons/action/settings-input-antenna' {
  export import ActionSettingsInputAntenna = __MaterialUI.Icons.ActionSettingsInputAntenna;
  export default ActionSettingsInputAntenna;
}

declare module 'material-ui/lib/svg-icons/action/find-replace' {
  export import ActionFindReplace = __MaterialUI.Icons.ActionFindReplace;
  export default ActionFindReplace;
}

declare module 'material-ui/lib/svg-icons/action/shop' {
  export import ActionShop = __MaterialUI.Icons.ActionShop;
  export default ActionShop;
}

declare module 'material-ui/lib/svg-icons/action/change-history' {
  export import ActionChangeHistory = __MaterialUI.Icons.ActionChangeHistory;
  export default ActionChangeHistory;
}

declare module 'material-ui/lib/svg-icons/action/info' {
  export import ActionInfo = __MaterialUI.Icons.ActionInfo;
  export default ActionInfo;
}

declare module 'material-ui/lib/svg-icons/action/trending-down' {
  export import ActionTrendingDown = __MaterialUI.Icons.ActionTrendingDown;
  export default ActionTrendingDown;
}

declare module 'material-ui/lib/svg-icons/action/flight-takeoff' {
  export import ActionFlightTakeoff = __MaterialUI.Icons.ActionFlightTakeoff;
  export default ActionFlightTakeoff;
}

declare module 'material-ui/lib/svg-icons/action/alarm' {
  export import ActionAlarm = __MaterialUI.Icons.ActionAlarm;
  export default ActionAlarm;
}

declare module 'material-ui/lib/svg-icons/action/spellcheck' {
  export import ActionSpellcheck = __MaterialUI.Icons.ActionSpellcheck;
  export default ActionSpellcheck;
}

declare module 'material-ui/lib/svg-icons/action/settings-input-component' {
  export import ActionSettingsInputComponent = __MaterialUI.Icons.ActionSettingsInputComponent;
  export default ActionSettingsInputComponent;
}

declare module 'material-ui/lib/svg-icons/action/settings-applications' {
  export import ActionSettingsApplications = __MaterialUI.Icons.ActionSettingsApplications;
  export default ActionSettingsApplications;
}

declare module 'material-ui/lib/svg-icons/action/room' {
  export import ActionRoom = __MaterialUI.Icons.ActionRoom;
  export default ActionRoom;
}

declare module 'material-ui/lib/svg-icons/action/book' {
  export import ActionBook = __MaterialUI.Icons.ActionBook;
  export default ActionBook;
}

declare module 'material-ui/lib/svg-icons/action/class' {
  export import ActionClass = __MaterialUI.Icons.ActionClass;
  export default ActionClass;
}

declare module 'material-ui/lib/svg-icons/action/group-work' {
  export import ActionGroupWork = __MaterialUI.Icons.ActionGroupWork;
  export default ActionGroupWork;
}

declare module 'material-ui/lib/svg-icons/action/hourglass-full' {
  export import ActionHourglassFull = __MaterialUI.Icons.ActionHourglassFull;
  export default ActionHourglassFull;
}

declare module 'material-ui/lib/svg-icons/action/assessment' {
  export import ActionAssessment = __MaterialUI.Icons.ActionAssessment;
  export default ActionAssessment;
}

declare module 'material-ui/lib/svg-icons/action/youtube-searched-for' {
  export import ActionYoutubeSearchedFor = __MaterialUI.Icons.ActionYoutubeSearchedFor;
  export default ActionYoutubeSearchedFor;
}

declare module 'material-ui/lib/svg-icons/action/eject' {
  export import ActionEject = __MaterialUI.Icons.ActionEject;
  export default ActionEject;
}

declare module 'material-ui/lib/svg-icons/action/trending-up' {
  export import ActionTrendingUp = __MaterialUI.Icons.ActionTrendingUp;
  export default ActionTrendingUp;
}

declare module 'material-ui/lib/svg-icons/action/http' {
  export import ActionHttp = __MaterialUI.Icons.ActionHttp;
  export default ActionHttp;
}

declare module 'material-ui/lib/svg-icons/action/stars' {
  export import ActionStars = __MaterialUI.Icons.ActionStars;
  export default ActionStars;
}

declare module 'material-ui/lib/svg-icons/action/autorenew' {
  export import ActionAutorenew = __MaterialUI.Icons.ActionAutorenew;
  export default ActionAutorenew;
}

declare module 'material-ui/lib/svg-icons/action/settings-ethernet' {
  export import ActionSettingsEthernet = __MaterialUI.Icons.ActionSettingsEthernet;
  export default ActionSettingsEthernet;
}

declare module 'material-ui/lib/svg-icons/action/label-outline' {
  export import ActionLabelOutline = __MaterialUI.Icons.ActionLabelOutline;
  export default ActionLabelOutline;
}

declare module 'material-ui/lib/svg-icons/action/settings-phone' {
  export import ActionSettingsPhone = __MaterialUI.Icons.ActionSettingsPhone;
  export default ActionSettingsPhone;
}

declare module 'material-ui/lib/svg-icons/action/info-outline' {
  export import ActionInfoOutline = __MaterialUI.Icons.ActionInfoOutline;
  export default ActionInfoOutline;
}

declare module 'material-ui/lib/svg-icons/action/lock-outline' {
  export import ActionLockOutline = __MaterialUI.Icons.ActionLockOutline;
  export default ActionLockOutline;
}

declare module 'material-ui/lib/svg-icons/action/settings-input-composite' {
  export import ActionSettingsInputComposite = __MaterialUI.Icons.ActionSettingsInputComposite;
  export default ActionSettingsInputComposite;
}

declare module 'material-ui/lib/svg-icons/action/invert-colors' {
  export import ActionInvertColors = __MaterialUI.Icons.ActionInvertColors;
  export default ActionInvertColors;
}

declare module 'material-ui/lib/svg-icons/action/bookmark' {
  export import ActionBookmark = __MaterialUI.Icons.ActionBookmark;
  export default ActionBookmark;
}

declare module 'material-ui/lib/svg-icons/action/add-shopping-cart' {
  export import ActionAddShoppingCart = __MaterialUI.Icons.ActionAddShoppingCart;
  export default ActionAddShoppingCart;
}

declare module 'material-ui/lib/svg-icons/action/bug-report' {
  export import ActionBugReport = __MaterialUI.Icons.ActionBugReport;
  export default ActionBugReport;
}

declare module 'material-ui/lib/svg-icons/action/cached' {
  export import ActionCached = __MaterialUI.Icons.ActionCached;
  export default ActionCached;
}

declare module 'material-ui/lib/svg-icons/action/view-day' {
  export import ActionViewDay = __MaterialUI.Icons.ActionViewDay;
  export default ActionViewDay;
}

declare module 'material-ui/lib/svg-icons/action/fingerprint' {
  export import ActionFingerprint = __MaterialUI.Icons.ActionFingerprint;
  export default ActionFingerprint;
}

declare module 'material-ui/lib/svg-icons/action/accessibility' {
  export import ActionAccessibility = __MaterialUI.Icons.ActionAccessibility;
  export default ActionAccessibility;
}

declare module 'material-ui/lib/svg-icons/action/perm-data-setting' {
  export import ActionPermDataSetting = __MaterialUI.Icons.ActionPermDataSetting;
  export default ActionPermDataSetting;
}

declare module 'material-ui/lib/svg-icons/action/settings-backup-restore' {
  export import ActionSettingsBackupRestore = __MaterialUI.Icons.ActionSettingsBackupRestore;
  export default ActionSettingsBackupRestore;
}

declare module 'material-ui/lib/svg-icons/action/zoom-in' {
  export import ActionZoomIn = __MaterialUI.Icons.ActionZoomIn;
  export default ActionZoomIn;
}

declare module 'material-ui/lib/svg-icons/action/perm-identity' {
  export import ActionPermIdentity = __MaterialUI.Icons.ActionPermIdentity;
  export default ActionPermIdentity;
}

declare module 'material-ui/lib/svg-icons/action/favorite' {
  export import ActionFavorite = __MaterialUI.Icons.ActionFavorite;
  export default ActionFavorite;
}

declare module 'material-ui/lib/svg-icons/action/thumb-down' {
  export import ActionThumbDown = __MaterialUI.Icons.ActionThumbDown;
  export default ActionThumbDown;
}

declare module 'material-ui/lib/svg-icons/action/assignment-returned' {
  export import ActionAssignmentReturned = __MaterialUI.Icons.ActionAssignmentReturned;
  export default ActionAssignmentReturned;
}

declare module 'material-ui/lib/svg-icons/action/account-box' {
  export import ActionAccountBox = __MaterialUI.Icons.ActionAccountBox;
  export default ActionAccountBox;
}

declare module 'material-ui/lib/svg-icons/action/extension' {
  export import ActionExtension = __MaterialUI.Icons.ActionExtension;
  export default ActionExtension;
}

declare module 'material-ui/lib/svg-icons/action/pageview' {
  export import ActionPageview = __MaterialUI.Icons.ActionPageview;
  export default ActionPageview;
}

declare module 'material-ui/lib/svg-icons/action/https' {
  export import ActionHttps = __MaterialUI.Icons.ActionHttps;
  export default ActionHttps;
}

declare module 'material-ui/lib/svg-icons/action/translate' {
  export import ActionTranslate = __MaterialUI.Icons.ActionTranslate;
  export default ActionTranslate;
}

declare module 'material-ui/lib/svg-icons/action/three-d-rotation' {
  export import ActionThreeDRotation = __MaterialUI.Icons.ActionThreeDRotation;
  export default ActionThreeDRotation;
}

declare module 'material-ui/lib/svg-icons/action/tab-unselected' {
  export import ActionTabUnselected = __MaterialUI.Icons.ActionTabUnselected;
  export default ActionTabUnselected;
}

declare module 'material-ui/lib/svg-icons/action/description' {
  export import ActionDescription = __MaterialUI.Icons.ActionDescription;
  export default ActionDescription;
}

declare module 'material-ui/lib/svg-icons/action/note-add' {
  export import ActionNoteAdd = __MaterialUI.Icons.ActionNoteAdd;
  export default ActionNoteAdd;
}

declare module 'material-ui/lib/svg-icons/action/perm-scan-wifi' {
  export import ActionPermScanWifi = __MaterialUI.Icons.ActionPermScanWifi;
  export default ActionPermScanWifi;
}

declare module 'material-ui/lib/svg-icons/action/pets' {
  export import ActionPets = __MaterialUI.Icons.ActionPets;
  export default ActionPets;
}

declare module 'material-ui/lib/svg-icons/action/view-array' {
  export import ActionViewArray = __MaterialUI.Icons.ActionViewArray;
  export default ActionViewArray;
}

declare module 'material-ui/lib/svg-icons/action/shop-two' {
  export import ActionShopTwo = __MaterialUI.Icons.ActionShopTwo;
  export default ActionShopTwo;
}

declare module 'material-ui/lib/svg-icons/action/line-style' {
  export import ActionLineStyle = __MaterialUI.Icons.ActionLineStyle;
  export default ActionLineStyle;
}

declare module 'material-ui/lib/svg-icons/action/lightbulb-outline' {
  export import ActionLightbulbOutline = __MaterialUI.Icons.ActionLightbulbOutline;
  export default ActionLightbulbOutline;
}

declare module 'material-ui/lib/svg-icons/action/report-problem' {
  export import ActionReportProblem = __MaterialUI.Icons.ActionReportProblem;
  export default ActionReportProblem;
}

declare module 'material-ui/lib/svg-icons/action/swap-vert' {
  export import ActionSwapVert = __MaterialUI.Icons.ActionSwapVert;
  export default ActionSwapVert;
}

declare module 'material-ui/lib/svg-icons/action/list' {
  export import ActionList = __MaterialUI.Icons.ActionList;
  export default ActionList;
}

declare module 'material-ui/lib/svg-icons/action/settings-voice' {
  export import ActionSettingsVoice = __MaterialUI.Icons.ActionSettingsVoice;
  export default ActionSettingsVoice;
}

declare module 'material-ui/lib/svg-icons/action/view-list' {
  export import ActionViewList = __MaterialUI.Icons.ActionViewList;
  export default ActionViewList;
}

declare module 'material-ui/lib/svg-icons/action/pan-tool' {
  export import ActionPanTool = __MaterialUI.Icons.ActionPanTool;
  export default ActionPanTool;
}

declare module 'material-ui/lib/svg-icons/action/important-devices' {
  export import ActionImportantDevices = __MaterialUI.Icons.ActionImportantDevices;
  export default ActionImportantDevices;
}

declare module 'material-ui/lib/svg-icons/action/redeem' {
  export import ActionRedeem = __MaterialUI.Icons.ActionRedeem;
  export default ActionRedeem;
}

declare module 'material-ui/lib/svg-icons/action/flip-to-front' {
  export import ActionFlipToFront = __MaterialUI.Icons.ActionFlipToFront;
  export default ActionFlipToFront;
}

declare module 'material-ui/lib/svg-icons/action/android' {
  export import ActionAndroid = __MaterialUI.Icons.ActionAndroid;
  export default ActionAndroid;
}

declare module 'material-ui/lib/svg-icons/action/account-circle' {
  export import ActionAccountCircle = __MaterialUI.Icons.ActionAccountCircle;
  export default ActionAccountCircle;
}

declare module 'material-ui/lib/svg-icons/action/event-seat' {
  export import ActionEventSeat = __MaterialUI.Icons.ActionEventSeat;
  export default ActionEventSeat;
}

declare module 'material-ui/lib/svg-icons/action/perm-contact-calendar' {
  export import ActionPermContactCalendar = __MaterialUI.Icons.ActionPermContactCalendar;
  export default ActionPermContactCalendar;
}

declare module 'material-ui/lib/svg-icons/action/perm-phone-msg' {
  export import ActionPermPhoneMsg = __MaterialUI.Icons.ActionPermPhoneMsg;
  export default ActionPermPhoneMsg;
}

declare module 'material-ui/lib/svg-icons/action/delete' {
  export import ActionDelete = __MaterialUI.Icons.ActionDelete;
  export default ActionDelete;
}

declare module 'material-ui/lib/svg-icons/action/card-membership' {
  export import ActionCardMembership = __MaterialUI.Icons.ActionCardMembership;
  export default ActionCardMembership;
}

declare module 'material-ui/lib/svg-icons/action/hourglass-empty' {
  export import ActionHourglassEmpty = __MaterialUI.Icons.ActionHourglassEmpty;
  export default ActionHourglassEmpty;
}

declare module 'material-ui/lib/svg-icons/action/schedule' {
  export import ActionSchedule = __MaterialUI.Icons.ActionSchedule;
  export default ActionSchedule;
}

declare module 'material-ui/lib/svg-icons/action/trending-flat' {
  export import ActionTrendingFlat = __MaterialUI.Icons.ActionTrendingFlat;
  export default ActionTrendingFlat;
}

declare module 'material-ui/lib/svg-icons/action/motorcycle' {
  export import ActionMotorcycle = __MaterialUI.Icons.ActionMotorcycle;
  export default ActionMotorcycle;
}

declare module 'material-ui/lib/svg-icons/action/view-column' {
  export import ActionViewColumn = __MaterialUI.Icons.ActionViewColumn;
  export default ActionViewColumn;
}

declare module 'material-ui/lib/svg-icons/action/settings-cell' {
  export import ActionSettingsCell = __MaterialUI.Icons.ActionSettingsCell;
  export default ActionSettingsCell;
}

declare module 'material-ui/lib/svg-icons/action/credit-card' {
  export import ActionCreditCard = __MaterialUI.Icons.ActionCreditCard;
  export default ActionCreditCard;
}

declare module 'material-ui/lib/svg-icons/action/view-module' {
  export import ActionViewModule = __MaterialUI.Icons.ActionViewModule;
  export default ActionViewModule;
}

declare module 'material-ui/lib/svg-icons/action/compare-arrows' {
  export import ActionCompareArrows = __MaterialUI.Icons.ActionCompareArrows;
  export default ActionCompareArrows;
}

declare module 'material-ui/lib/svg-icons/action/speaker-notes' {
  export import ActionSpeakerNotes = __MaterialUI.Icons.ActionSpeakerNotes;
  export default ActionSpeakerNotes;
}

declare module 'material-ui/lib/svg-icons/social/person' {
  export import SocialPerson = __MaterialUI.Icons.SocialPerson;
  export default SocialPerson;
}

declare module 'material-ui/lib/svg-icons/social/notifications-none' {
  export import SocialNotificationsNone = __MaterialUI.Icons.SocialNotificationsNone;
  export default SocialNotificationsNone;
}

declare module 'material-ui/lib/svg-icons/social/domain' {
  export import SocialDomain = __MaterialUI.Icons.SocialDomain;
  export default SocialDomain;
}

declare module 'material-ui/lib/svg-icons/social/notifications-paused' {
  export import SocialNotificationsPaused = __MaterialUI.Icons.SocialNotificationsPaused;
  export default SocialNotificationsPaused;
}

declare module 'material-ui/lib/svg-icons/social/person-outline' {
  export import SocialPersonOutline = __MaterialUI.Icons.SocialPersonOutline;
  export default SocialPersonOutline;
}

declare module 'material-ui/lib/svg-icons/social/plus-one' {
  export import SocialPlusOne = __MaterialUI.Icons.SocialPlusOne;
  export default SocialPlusOne;
}

declare module 'material-ui/lib/svg-icons/social/notifications-active' {
  export import SocialNotificationsActive = __MaterialUI.Icons.SocialNotificationsActive;
  export default SocialNotificationsActive;
}

declare module 'material-ui/lib/svg-icons/social/share' {
  export import SocialShare = __MaterialUI.Icons.SocialShare;
  export default SocialShare;
}

declare module 'material-ui/lib/svg-icons/social/whatshot' {
  export import SocialWhatshot = __MaterialUI.Icons.SocialWhatshot;
  export default SocialWhatshot;
}

declare module 'material-ui/lib/svg-icons/social/poll' {
  export import SocialPoll = __MaterialUI.Icons.SocialPoll;
  export default SocialPoll;
}

declare module 'material-ui/lib/svg-icons/social/pages' {
  export import SocialPages = __MaterialUI.Icons.SocialPages;
  export default SocialPages;
}

declare module 'material-ui/lib/svg-icons/social/notifications-off' {
  export import SocialNotificationsOff = __MaterialUI.Icons.SocialNotificationsOff;
  export default SocialNotificationsOff;
}

declare module 'material-ui/lib/svg-icons/social/notifications' {
  export import SocialNotifications = __MaterialUI.Icons.SocialNotifications;
  export default SocialNotifications;
}

declare module 'material-ui/lib/svg-icons/social/school' {
  export import SocialSchool = __MaterialUI.Icons.SocialSchool;
  export default SocialSchool;
}

declare module 'material-ui/lib/svg-icons/social/cake' {
  export import SocialCake = __MaterialUI.Icons.SocialCake;
  export default SocialCake;
}

declare module 'material-ui/lib/svg-icons/social/people-outline' {
  export import SocialPeopleOutline = __MaterialUI.Icons.SocialPeopleOutline;
  export default SocialPeopleOutline;
}

declare module 'material-ui/lib/svg-icons/social/location-city' {
  export import SocialLocationCity = __MaterialUI.Icons.SocialLocationCity;
  export default SocialLocationCity;
}

declare module 'material-ui/lib/svg-icons/social/public' {
  export import SocialPublic = __MaterialUI.Icons.SocialPublic;
  export default SocialPublic;
}

declare module 'material-ui/lib/svg-icons/social/mood-bad' {
  export import SocialMoodBad = __MaterialUI.Icons.SocialMoodBad;
  export default SocialMoodBad;
}

declare module 'material-ui/lib/svg-icons/social/people' {
  export import SocialPeople = __MaterialUI.Icons.SocialPeople;
  export default SocialPeople;
}

declare module 'material-ui/lib/svg-icons/social/mood' {
  export import SocialMood = __MaterialUI.Icons.SocialMood;
  export default SocialMood;
}

declare module 'material-ui/lib/svg-icons/social/party-mode' {
  export import SocialPartyMode = __MaterialUI.Icons.SocialPartyMode;
  export default SocialPartyMode;
}

declare module 'material-ui/lib/svg-icons/social/group' {
  export import SocialGroup = __MaterialUI.Icons.SocialGroup;
  export default SocialGroup;
}

declare module 'material-ui/lib/svg-icons/social/person-add' {
  export import SocialPersonAdd = __MaterialUI.Icons.SocialPersonAdd;
  export default SocialPersonAdd;
}

declare module 'material-ui/lib/svg-icons/social/group-add' {
  export import SocialGroupAdd = __MaterialUI.Icons.SocialGroupAdd;
  export default SocialGroupAdd;
}

declare module 'material-ui/lib/svg-icons/maps/edit-location' {
  export import MapsEditLocation = __MaterialUI.Icons.MapsEditLocation;
  export default MapsEditLocation;
}

declare module 'material-ui/lib/svg-icons/maps/local-airport' {
  export import MapsLocalAirport = __MaterialUI.Icons.MapsLocalAirport;
  export default MapsLocalAirport;
}

declare module 'material-ui/lib/svg-icons/maps/local-phone' {
  export import MapsLocalPhone = __MaterialUI.Icons.MapsLocalPhone;
  export default MapsLocalPhone;
}

declare module 'material-ui/lib/svg-icons/maps/directions-car' {
  export import MapsDirectionsCar = __MaterialUI.Icons.MapsDirectionsCar;
  export default MapsDirectionsCar;
}

declare module 'material-ui/lib/svg-icons/maps/local-drink' {
  export import MapsLocalDrink = __MaterialUI.Icons.MapsLocalDrink;
  export default MapsLocalDrink;
}

declare module 'material-ui/lib/svg-icons/maps/local-gas-station' {
  export import MapsLocalGasStation = __MaterialUI.Icons.MapsLocalGasStation;
  export default MapsLocalGasStation;
}

declare module 'material-ui/lib/svg-icons/maps/store-mall-directory' {
  export import MapsStoreMallDirectory = __MaterialUI.Icons.MapsStoreMallDirectory;
  export default MapsStoreMallDirectory;
}

declare module 'material-ui/lib/svg-icons/maps/add-location' {
  export import MapsAddLocation = __MaterialUI.Icons.MapsAddLocation;
  export default MapsAddLocation;
}

declare module 'material-ui/lib/svg-icons/maps/local-laundry-service' {
  export import MapsLocalLaundryService = __MaterialUI.Icons.MapsLocalLaundryService;
  export default MapsLocalLaundryService;
}

declare module 'material-ui/lib/svg-icons/maps/local-hotel' {
  export import MapsLocalHotel = __MaterialUI.Icons.MapsLocalHotel;
  export default MapsLocalHotel;
}

declare module 'material-ui/lib/svg-icons/maps/local-pizza' {
  export import MapsLocalPizza = __MaterialUI.Icons.MapsLocalPizza;
  export default MapsLocalPizza;
}

declare module 'material-ui/lib/svg-icons/maps/person-pin-circle' {
  export import MapsPersonPinCircle = __MaterialUI.Icons.MapsPersonPinCircle;
  export default MapsPersonPinCircle;
}

declare module 'material-ui/lib/svg-icons/maps/terrain' {
  export import MapsTerrain = __MaterialUI.Icons.MapsTerrain;
  export default MapsTerrain;
}

declare module 'material-ui/lib/svg-icons/maps/directions-subway' {
  export import MapsDirectionsSubway = __MaterialUI.Icons.MapsDirectionsSubway;
  export default MapsDirectionsSubway;
}

declare module 'material-ui/lib/svg-icons/maps/local-bar' {
  export import MapsLocalBar = __MaterialUI.Icons.MapsLocalBar;
  export default MapsLocalBar;
}

declare module 'material-ui/lib/svg-icons/maps/local-car-wash' {
  export import MapsLocalCarWash = __MaterialUI.Icons.MapsLocalCarWash;
  export default MapsLocalCarWash;
}

declare module 'material-ui/lib/svg-icons/maps/restaurant-menu' {
  export import MapsRestaurantMenu = __MaterialUI.Icons.MapsRestaurantMenu;
  export default MapsRestaurantMenu;
}

declare module 'material-ui/lib/svg-icons/maps/near-me' {
  export import MapsNearMe = __MaterialUI.Icons.MapsNearMe;
  export default MapsNearMe;
}

declare module 'material-ui/lib/svg-icons/maps/directions' {
  export import MapsDirections = __MaterialUI.Icons.MapsDirections;
  export default MapsDirections;
}

declare module 'material-ui/lib/svg-icons/maps/my-location' {
  export import MapsMyLocation = __MaterialUI.Icons.MapsMyLocation;
  export default MapsMyLocation;
}

declare module 'material-ui/lib/svg-icons/maps/local-convenience-store' {
  export import MapsLocalConvenienceStore = __MaterialUI.Icons.MapsLocalConvenienceStore;
  export default MapsLocalConvenienceStore;
}

declare module 'material-ui/lib/svg-icons/maps/local-offer' {
  export import MapsLocalOffer = __MaterialUI.Icons.MapsLocalOffer;
  export default MapsLocalOffer;
}

declare module 'material-ui/lib/svg-icons/maps/local-florist' {
  export import MapsLocalFlorist = __MaterialUI.Icons.MapsLocalFlorist;
  export default MapsLocalFlorist;
}

declare module 'material-ui/lib/svg-icons/maps/local-shipping' {
  export import MapsLocalShipping = __MaterialUI.Icons.MapsLocalShipping;
  export default MapsLocalShipping;
}

declare module 'material-ui/lib/svg-icons/maps/local-taxi' {
  export import MapsLocalTaxi = __MaterialUI.Icons.MapsLocalTaxi;
  export default MapsLocalTaxi;
}

declare module 'material-ui/lib/svg-icons/maps/directions-walk' {
  export import MapsDirectionsWalk = __MaterialUI.Icons.MapsDirectionsWalk;
  export default MapsDirectionsWalk;
}

declare module 'material-ui/lib/svg-icons/maps/local-hospital' {
  export import MapsLocalHospital = __MaterialUI.Icons.MapsLocalHospital;
  export default MapsLocalHospital;
}

declare module 'material-ui/lib/svg-icons/maps/layers' {
  export import MapsLayers = __MaterialUI.Icons.MapsLayers;
  export default MapsLayers;
}

declare module 'material-ui/lib/svg-icons/maps/directions-run' {
  export import MapsDirectionsRun = __MaterialUI.Icons.MapsDirectionsRun;
  export default MapsDirectionsRun;
}

declare module 'material-ui/lib/svg-icons/maps/rate-review' {
  export import MapsRateReview = __MaterialUI.Icons.MapsRateReview;
  export default MapsRateReview;
}

declare module 'material-ui/lib/svg-icons/maps/local-dining' {
  export import MapsLocalDining = __MaterialUI.Icons.MapsLocalDining;
  export default MapsLocalDining;
}

declare module 'material-ui/lib/svg-icons/maps/local-post-office' {
  export import MapsLocalPostOffice = __MaterialUI.Icons.MapsLocalPostOffice;
  export default MapsLocalPostOffice;
}

declare module 'material-ui/lib/svg-icons/maps/pin-drop' {
  export import MapsPinDrop = __MaterialUI.Icons.MapsPinDrop;
  export default MapsPinDrop;
}

declare module 'material-ui/lib/svg-icons/maps/directions-boat' {
  export import MapsDirectionsBoat = __MaterialUI.Icons.MapsDirectionsBoat;
  export default MapsDirectionsBoat;
}

declare module 'material-ui/lib/svg-icons/maps/local-see' {
  export import MapsLocalSee = __MaterialUI.Icons.MapsLocalSee;
  export default MapsLocalSee;
}

declare module 'material-ui/lib/svg-icons/maps/map' {
  export import MapsMap = __MaterialUI.Icons.MapsMap;
  export default MapsMap;
}

declare module 'material-ui/lib/svg-icons/maps/flight' {
  export import MapsFlight = __MaterialUI.Icons.MapsFlight;
  export default MapsFlight;
}

declare module 'material-ui/lib/svg-icons/maps/person-pin' {
  export import MapsPersonPin = __MaterialUI.Icons.MapsPersonPin;
  export default MapsPersonPin;
}

declare module 'material-ui/lib/svg-icons/maps/satellite' {
  export import MapsSatellite = __MaterialUI.Icons.MapsSatellite;
  export default MapsSatellite;
}

declare module 'material-ui/lib/svg-icons/maps/local-printshop' {
  export import MapsLocalPrintshop = __MaterialUI.Icons.MapsLocalPrintshop;
  export default MapsLocalPrintshop;
}

declare module 'material-ui/lib/svg-icons/maps/navigation' {
  export import MapsNavigation = __MaterialUI.Icons.MapsNavigation;
  export default MapsNavigation;
}

declare module 'material-ui/lib/svg-icons/maps/directions-railway' {
  export import MapsDirectionsRailway = __MaterialUI.Icons.MapsDirectionsRailway;
  export default MapsDirectionsRailway;
}

declare module 'material-ui/lib/svg-icons/maps/local-atm' {
  export import MapsLocalAtm = __MaterialUI.Icons.MapsLocalAtm;
  export default MapsLocalAtm;
}

declare module 'material-ui/lib/svg-icons/maps/directions-transit' {
  export import MapsDirectionsTransit = __MaterialUI.Icons.MapsDirectionsTransit;
  export default MapsDirectionsTransit;
}

declare module 'material-ui/lib/svg-icons/maps/local-parking' {
  export import MapsLocalParking = __MaterialUI.Icons.MapsLocalParking;
  export default MapsLocalParking;
}

declare module 'material-ui/lib/svg-icons/maps/local-cafe' {
  export import MapsLocalCafe = __MaterialUI.Icons.MapsLocalCafe;
  export default MapsLocalCafe;
}

declare module 'material-ui/lib/svg-icons/maps/local-mall' {
  export import MapsLocalMall = __MaterialUI.Icons.MapsLocalMall;
  export default MapsLocalMall;
}

declare module 'material-ui/lib/svg-icons/maps/zoom-out-map' {
  export import MapsZoomOutMap = __MaterialUI.Icons.MapsZoomOutMap;
  export default MapsZoomOutMap;
}

declare module 'material-ui/lib/svg-icons/maps/local-activity' {
  export import MapsLocalActivity = __MaterialUI.Icons.MapsLocalActivity;
  export default MapsLocalActivity;
}

declare module 'material-ui/lib/svg-icons/maps/local-grocery-store' {
  export import MapsLocalGroceryStore = __MaterialUI.Icons.MapsLocalGroceryStore;
  export default MapsLocalGroceryStore;
}

declare module 'material-ui/lib/svg-icons/maps/local-pharmacy' {
  export import MapsLocalPharmacy = __MaterialUI.Icons.MapsLocalPharmacy;
  export default MapsLocalPharmacy;
}

declare module 'material-ui/lib/svg-icons/maps/local-movies' {
  export import MapsLocalMovies = __MaterialUI.Icons.MapsLocalMovies;
  export default MapsLocalMovies;
}

declare module 'material-ui/lib/svg-icons/maps/place' {
  export import MapsPlace = __MaterialUI.Icons.MapsPlace;
  export default MapsPlace;
}

declare module 'material-ui/lib/svg-icons/maps/layers-clear' {
  export import MapsLayersClear = __MaterialUI.Icons.MapsLayersClear;
  export default MapsLayersClear;
}

declare module 'material-ui/lib/svg-icons/maps/hotel' {
  export import MapsHotel = __MaterialUI.Icons.MapsHotel;
  export default MapsHotel;
}

declare module 'material-ui/lib/svg-icons/maps/directions-bike' {
  export import MapsDirectionsBike = __MaterialUI.Icons.MapsDirectionsBike;
  export default MapsDirectionsBike;
}

declare module 'material-ui/lib/svg-icons/maps/local-library' {
  export import MapsLocalLibrary = __MaterialUI.Icons.MapsLocalLibrary;
  export default MapsLocalLibrary;
}

declare module 'material-ui/lib/svg-icons/maps/local-play' {
  export import MapsLocalPlay = __MaterialUI.Icons.MapsLocalPlay;
  export default MapsLocalPlay;
}

declare module 'material-ui/lib/svg-icons/maps/directions-bus' {
  export import MapsDirectionsBus = __MaterialUI.Icons.MapsDirectionsBus;
  export default MapsDirectionsBus;
}

declare module 'material-ui/lib/svg-icons/maps/traffic' {
  export import MapsTraffic = __MaterialUI.Icons.MapsTraffic;
  export default MapsTraffic;
}

declare module 'material-ui/lib/svg-icons/maps/beenhere' {
  export import MapsBeenhere = __MaterialUI.Icons.MapsBeenhere;
  export default MapsBeenhere;
}

declare module 'material-ui/lib/svg-icons/communication/call-received' {
  export import CommunicationCallReceived = __MaterialUI.Icons.CommunicationCallReceived;
  export default CommunicationCallReceived;
}

declare module 'material-ui/lib/svg-icons/communication/dialpad' {
  export import CommunicationDialpad = __MaterialUI.Icons.CommunicationDialpad;
  export default CommunicationDialpad;
}

declare module 'material-ui/lib/svg-icons/communication/forum' {
  export import CommunicationForum = __MaterialUI.Icons.CommunicationForum;
  export default CommunicationForum;
}

declare module 'material-ui/lib/svg-icons/communication/no-sim' {
  export import CommunicationNoSim = __MaterialUI.Icons.CommunicationNoSim;
  export default CommunicationNoSim;
}

declare module 'material-ui/lib/svg-icons/communication/chat' {
  export import CommunicationChat = __MaterialUI.Icons.CommunicationChat;
  export default CommunicationChat;
}

declare module 'material-ui/lib/svg-icons/communication/stay-primary-landscape' {
  export import CommunicationStayPrimaryLandscape = __MaterialUI.Icons.CommunicationStayPrimaryLandscape;
  export default CommunicationStayPrimaryLandscape;
}

declare module 'material-ui/lib/svg-icons/communication/phonelink-setup' {
  export import CommunicationPhonelinkSetup = __MaterialUI.Icons.CommunicationPhonelinkSetup;
  export default CommunicationPhonelinkSetup;
}

declare module 'material-ui/lib/svg-icons/communication/ring-volume' {
  export import CommunicationRingVolume = __MaterialUI.Icons.CommunicationRingVolume;
  export default CommunicationRingVolume;
}

declare module 'material-ui/lib/svg-icons/communication/phonelink-lock' {
  export import CommunicationPhonelinkLock = __MaterialUI.Icons.CommunicationPhonelinkLock;
  export default CommunicationPhonelinkLock;
}

declare module 'material-ui/lib/svg-icons/communication/contacts' {
  export import CommunicationContacts = __MaterialUI.Icons.CommunicationContacts;
  export default CommunicationContacts;
}

declare module 'material-ui/lib/svg-icons/communication/call-missed' {
  export import CommunicationCallMissed = __MaterialUI.Icons.CommunicationCallMissed;
  export default CommunicationCallMissed;
}

declare module 'material-ui/lib/svg-icons/communication/contact-mail' {
  export import CommunicationContactMail = __MaterialUI.Icons.CommunicationContactMail;
  export default CommunicationContactMail;
}

declare module 'material-ui/lib/svg-icons/communication/portable-wifi-off' {
  export import CommunicationPortableWifiOff = __MaterialUI.Icons.CommunicationPortableWifiOff;
  export default CommunicationPortableWifiOff;
}

declare module 'material-ui/lib/svg-icons/communication/call-merge' {
  export import CommunicationCallMerge = __MaterialUI.Icons.CommunicationCallMerge;
  export default CommunicationCallMerge;
}

declare module 'material-ui/lib/svg-icons/communication/tact-mail' {
  export import CommunicationTactMail = __MaterialUI.Icons.CommunicationTactMail;
  export default CommunicationTactMail;
}

declare module 'material-ui/lib/svg-icons/communication/stop-screen-share' {
  export import CommunicationStopScreenShare = __MaterialUI.Icons.CommunicationStopScreenShare;
  export default CommunicationStopScreenShare;
}

declare module 'material-ui/lib/svg-icons/communication/vpn-key' {
  export import CommunicationVpnKey = __MaterialUI.Icons.CommunicationVpnKey;
  export default CommunicationVpnKey;
}

declare module 'material-ui/lib/svg-icons/communication/swap-calls' {
  export import CommunicationSwapCalls = __MaterialUI.Icons.CommunicationSwapCalls;
  export default CommunicationSwapCalls;
}

declare module 'material-ui/lib/svg-icons/communication/dialer-sip' {
  export import CommunicationDialerSip = __MaterialUI.Icons.CommunicationDialerSip;
  export default CommunicationDialerSip;
}

declare module 'material-ui/lib/svg-icons/communication/business' {
  export import CommunicationBusiness = __MaterialUI.Icons.CommunicationBusiness;
  export default CommunicationBusiness;
}

declare module 'material-ui/lib/svg-icons/communication/phonelink-erase' {
  export import CommunicationPhonelinkErase = __MaterialUI.Icons.CommunicationPhonelinkErase;
  export default CommunicationPhonelinkErase;
}

declare module 'material-ui/lib/svg-icons/communication/call' {
  export import CommunicationCall = __MaterialUI.Icons.CommunicationCall;
  export default CommunicationCall;
}

declare module 'material-ui/lib/svg-icons/communication/screen-share' {
  export import CommunicationScreenShare = __MaterialUI.Icons.CommunicationScreenShare;
  export default CommunicationScreenShare;
}

declare module 'material-ui/lib/svg-icons/communication/clear-all' {
  export import CommunicationClearAll = __MaterialUI.Icons.CommunicationClearAll;
  export default CommunicationClearAll;
}

declare module 'material-ui/lib/svg-icons/communication/chat-bubble-outline' {
  export import CommunicationChatBubbleOutline = __MaterialUI.Icons.CommunicationChatBubbleOutline;
  export default CommunicationChatBubbleOutline;
}

declare module 'material-ui/lib/svg-icons/communication/call-missed-outgoing' {
  export import CommunicationCallMissedOutgoing = __MaterialUI.Icons.CommunicationCallMissedOutgoing;
  export default CommunicationCallMissedOutgoing;
}

declare module 'material-ui/lib/svg-icons/communication/stay-primary-portrait' {
  export import CommunicationStayPrimaryPortrait = __MaterialUI.Icons.CommunicationStayPrimaryPortrait;
  export default CommunicationStayPrimaryPortrait;
}

declare module 'material-ui/lib/svg-icons/communication/stay-current-portrait' {
  export import CommunicationStayCurrentPortrait = __MaterialUI.Icons.CommunicationStayCurrentPortrait;
  export default CommunicationStayCurrentPortrait;
}

declare module 'material-ui/lib/svg-icons/communication/voicemail' {
  export import CommunicationVoicemail = __MaterialUI.Icons.CommunicationVoicemail;
  export default CommunicationVoicemail;
}

declare module 'material-ui/lib/svg-icons/communication/speaker-phone' {
  export import CommunicationSpeakerPhone = __MaterialUI.Icons.CommunicationSpeakerPhone;
  export default CommunicationSpeakerPhone;
}

declare module 'material-ui/lib/svg-icons/communication/call-split' {
  export import CommunicationCallSplit = __MaterialUI.Icons.CommunicationCallSplit;
  export default CommunicationCallSplit;
}

declare module 'material-ui/lib/svg-icons/communication/live-help' {
  export import CommunicationLiveHelp = __MaterialUI.Icons.CommunicationLiveHelp;
  export default CommunicationLiveHelp;
}

declare module 'material-ui/lib/svg-icons/communication/call-made' {
  export import CommunicationCallMade = __MaterialUI.Icons.CommunicationCallMade;
  export default CommunicationCallMade;
}

declare module 'material-ui/lib/svg-icons/communication/phone' {
  export import CommunicationPhone = __MaterialUI.Icons.CommunicationPhone;
  export default CommunicationPhone;
}

declare module 'material-ui/lib/svg-icons/communication/textsms' {
  export import CommunicationTextsms = __MaterialUI.Icons.CommunicationTextsms;
  export default CommunicationTextsms;
}

declare module 'material-ui/lib/svg-icons/communication/message' {
  export import CommunicationMessage = __MaterialUI.Icons.CommunicationMessage;
  export default CommunicationMessage;
}

declare module 'material-ui/lib/svg-icons/communication/import-export' {
  export import CommunicationImportExport = __MaterialUI.Icons.CommunicationImportExport;
  export default CommunicationImportExport;
}

declare module 'material-ui/lib/svg-icons/communication/import-contacts' {
  export import CommunicationImportContacts = __MaterialUI.Icons.CommunicationImportContacts;
  export default CommunicationImportContacts;
}

declare module 'material-ui/lib/svg-icons/communication/phonelink-ring' {
  export import CommunicationPhonelinkRing = __MaterialUI.Icons.CommunicationPhonelinkRing;
  export default CommunicationPhonelinkRing;
}

declare module 'material-ui/lib/svg-icons/communication/present-to-all' {
  export import CommunicationPresentToAll = __MaterialUI.Icons.CommunicationPresentToAll;
  export default CommunicationPresentToAll;
}

declare module 'material-ui/lib/svg-icons/communication/contact-phone' {
  export import CommunicationContactPhone = __MaterialUI.Icons.CommunicationContactPhone;
  export default CommunicationContactPhone;
}

declare module 'material-ui/lib/svg-icons/communication/invert-colors-off' {
  export import CommunicationInvertColorsOff = __MaterialUI.Icons.CommunicationInvertColorsOff;
  export default CommunicationInvertColorsOff;
}

declare module 'material-ui/lib/svg-icons/communication/comment' {
  export import CommunicationComment = __MaterialUI.Icons.CommunicationComment;
  export default CommunicationComment;
}

declare module 'material-ui/lib/svg-icons/communication/chat-bubble' {
  export import CommunicationChatBubble = __MaterialUI.Icons.CommunicationChatBubble;
  export default CommunicationChatBubble;
}

declare module 'material-ui/lib/svg-icons/communication/mail-outline' {
  export import CommunicationMailOutline = __MaterialUI.Icons.CommunicationMailOutline;
  export default CommunicationMailOutline;
}

declare module 'material-ui/lib/svg-icons/communication/location-on' {
  export import CommunicationLocationOn = __MaterialUI.Icons.CommunicationLocationOn;
  export default CommunicationLocationOn;
}

declare module 'material-ui/lib/svg-icons/communication/stay-current-landscape' {
  export import CommunicationStayCurrentLandscape = __MaterialUI.Icons.CommunicationStayCurrentLandscape;
  export default CommunicationStayCurrentLandscape;
}

declare module 'material-ui/lib/svg-icons/communication/location-off' {
  export import CommunicationLocationOff = __MaterialUI.Icons.CommunicationLocationOff;
  export default CommunicationLocationOff;
}

declare module 'material-ui/lib/svg-icons/communication/email' {
  export import CommunicationEmail = __MaterialUI.Icons.CommunicationEmail;
  export default CommunicationEmail;
}

declare module 'material-ui/lib/svg-icons/communication/call-end' {
  export import CommunicationCallEnd = __MaterialUI.Icons.CommunicationCallEnd;
  export default CommunicationCallEnd;
}

declare module 'material-ui/lib/svg-icons/toggle/check-box' {
  export import ToggleCheckBox = __MaterialUI.Icons.ToggleCheckBox;
  export default ToggleCheckBox;
}

declare module 'material-ui/lib/svg-icons/toggle/star-half' {
  export import ToggleStarHalf = __MaterialUI.Icons.ToggleStarHalf;
  export default ToggleStarHalf;
}

declare module 'material-ui/lib/svg-icons/toggle/check-box-outline-blank' {
  export import ToggleCheckBoxOutlineBlank = __MaterialUI.Icons.ToggleCheckBoxOutlineBlank;
  export default ToggleCheckBoxOutlineBlank;
}

declare module 'material-ui/lib/svg-icons/toggle/star' {
  export import ToggleStar = __MaterialUI.Icons.ToggleStar;
  export default ToggleStar;
}

declare module 'material-ui/lib/svg-icons/toggle/star-border' {
  export import ToggleStarBorder = __MaterialUI.Icons.ToggleStarBorder;
  export default ToggleStarBorder;
}

declare module 'material-ui/lib/svg-icons/toggle/radio-button-unchecked' {
  export import ToggleRadioButtonUnchecked = __MaterialUI.Icons.ToggleRadioButtonUnchecked;
  export default ToggleRadioButtonUnchecked;
}

declare module 'material-ui/lib/svg-icons/toggle/indeterminate-check-box' {
  export import ToggleIndeterminateCheckBox = __MaterialUI.Icons.ToggleIndeterminateCheckBox;
  export default ToggleIndeterminateCheckBox;
}

declare module 'material-ui/lib/svg-icons/toggle/radio-button-checked' {
  export import ToggleRadioButtonChecked = __MaterialUI.Icons.ToggleRadioButtonChecked;
  export default ToggleRadioButtonChecked;
}

declare module 'material-ui/lib/svg-icons/index' {
  export import Index = __MaterialUI.Icons.Index;
  export default Index;
}

declare module 'material-ui/lib/svg-icons/index-generator' {
  export import IndexGenerator = __MaterialUI.Icons.IndexGenerator;
  export default IndexGenerator;
}

declare module 'material-ui/lib/svg-icons/alert/warning' {
  export import AlertWarning = __MaterialUI.Icons.AlertWarning;
  export default AlertWarning;
}

declare module 'material-ui/lib/svg-icons/alert/add-alert' {
  export import AlertAddAlert = __MaterialUI.Icons.AlertAddAlert;
  export default AlertAddAlert;
}

declare module 'material-ui/lib/svg-icons/alert/error-outline' {
  export import AlertErrorOutline = __MaterialUI.Icons.AlertErrorOutline;
  export default AlertErrorOutline;
}

declare module 'material-ui/lib/svg-icons/alert/error' {
  export import AlertError = __MaterialUI.Icons.AlertError;
  export default AlertError;
}

declare module 'material-ui/lib/svg-icons/file/file-upload' {
  export import FileFileUpload = __MaterialUI.Icons.FileFileUpload;
  export default FileFileUpload;
}

declare module 'material-ui/lib/svg-icons/file/cloud-upload' {
  export import FileCloudUpload = __MaterialUI.Icons.FileCloudUpload;
  export default FileCloudUpload;
}

declare module 'material-ui/lib/svg-icons/file/cloud-done' {
  export import FileCloudDone = __MaterialUI.Icons.FileCloudDone;
  export default FileCloudDone;
}

declare module 'material-ui/lib/svg-icons/file/folder-open' {
  export import FileFolderOpen = __MaterialUI.Icons.FileFolderOpen;
  export default FileFolderOpen;
}

declare module 'material-ui/lib/svg-icons/file/cloud-off' {
  export import FileCloudOff = __MaterialUI.Icons.FileCloudOff;
  export default FileCloudOff;
}

declare module 'material-ui/lib/svg-icons/file/cloud-queue' {
  export import FileCloudQueue = __MaterialUI.Icons.FileCloudQueue;
  export default FileCloudQueue;
}

declare module 'material-ui/lib/svg-icons/file/folder-shared' {
  export import FileFolderShared = __MaterialUI.Icons.FileFolderShared;
  export default FileFolderShared;
}

declare module 'material-ui/lib/svg-icons/file/cloud-circle' {
  export import FileCloudCircle = __MaterialUI.Icons.FileCloudCircle;
  export default FileCloudCircle;
}

declare module 'material-ui/lib/svg-icons/file/folder' {
  export import FileFolder = __MaterialUI.Icons.FileFolder;
  export default FileFolder;
}

declare module 'material-ui/lib/svg-icons/file/attachment' {
  export import FileAttachment = __MaterialUI.Icons.FileAttachment;
  export default FileAttachment;
}

declare module 'material-ui/lib/svg-icons/file/create-new-folder' {
  export import FileCreateNewFolder = __MaterialUI.Icons.FileCreateNewFolder;
  export default FileCreateNewFolder;
}

declare module 'material-ui/lib/svg-icons/file/cloud-download' {
  export import FileCloudDownload = __MaterialUI.Icons.FileCloudDownload;
  export default FileCloudDownload;
}

declare module 'material-ui/lib/svg-icons/file/cloud' {
  export import FileCloud = __MaterialUI.Icons.FileCloud;
  export default FileCloud;
}

declare module 'material-ui/lib/svg-icons/file/file-download' {
  export import FileFileDownload = __MaterialUI.Icons.FileFileDownload;
  export default FileFileDownload;
}

declare module 'material-ui/lib/svg-icons/navigation-arrow-drop-right' {
  export import NavigationArrowDropRight = __MaterialUI.Icons.NavigationArrowDropRight;
  export default NavigationArrowDropRight;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard' {
  export import HardwareKeyboard = __MaterialUI.Icons.HardwareKeyboard;
  export default HardwareKeyboard;
}

declare module 'material-ui/lib/svg-icons/hardware/toys' {
  export import HardwareToys = __MaterialUI.Icons.HardwareToys;
  export default HardwareToys;
}

declare module 'material-ui/lib/svg-icons/hardware/dock' {
  export import HardwareDock = __MaterialUI.Icons.HardwareDock;
  export default HardwareDock;
}

declare module 'material-ui/lib/svg-icons/hardware/headset' {
  export import HardwareHeadset = __MaterialUI.Icons.HardwareHeadset;
  export default HardwareHeadset;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-voice' {
  export import HardwareKeyboardVoice = __MaterialUI.Icons.HardwareKeyboardVoice;
  export default HardwareKeyboardVoice;
}

declare module 'material-ui/lib/svg-icons/hardware/phonelink-off' {
  export import HardwarePhonelinkOff = __MaterialUI.Icons.HardwarePhonelinkOff;
  export default HardwarePhonelinkOff;
}

declare module 'material-ui/lib/svg-icons/hardware/speaker-group' {
  export import HardwareSpeakerGroup = __MaterialUI.Icons.HardwareSpeakerGroup;
  export default HardwareSpeakerGroup;
}

declare module 'material-ui/lib/svg-icons/hardware/desktop-windows' {
  export import HardwareDesktopWindows = __MaterialUI.Icons.HardwareDesktopWindows;
  export default HardwareDesktopWindows;
}

declare module 'material-ui/lib/svg-icons/hardware/laptop-mac' {
  export import HardwareLaptopMac = __MaterialUI.Icons.HardwareLaptopMac;
  export default HardwareLaptopMac;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-return' {
  export import HardwareKeyboardReturn = __MaterialUI.Icons.HardwareKeyboardReturn;
  export default HardwareKeyboardReturn;
}

declare module 'material-ui/lib/svg-icons/hardware/gamepad' {
  export import HardwareGamepad = __MaterialUI.Icons.HardwareGamepad;
  export default HardwareGamepad;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-arrow-up' {
  export import HardwareKeyboardArrowUp = __MaterialUI.Icons.HardwareKeyboardArrowUp;
  export default HardwareKeyboardArrowUp;
}

declare module 'material-ui/lib/svg-icons/hardware/laptop' {
  export import HardwareLaptop = __MaterialUI.Icons.HardwareLaptop;
  export default HardwareLaptop;
}

declare module 'material-ui/lib/svg-icons/hardware/phone-iphone' {
  export import HardwarePhoneIphone = __MaterialUI.Icons.HardwarePhoneIphone;
  export default HardwarePhoneIphone;
}

declare module 'material-ui/lib/svg-icons/hardware/memory' {
  export import HardwareMemory = __MaterialUI.Icons.HardwareMemory;
  export default HardwareMemory;
}

declare module 'material-ui/lib/svg-icons/hardware/security' {
  export import HardwareSecurity = __MaterialUI.Icons.HardwareSecurity;
  export default HardwareSecurity;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-capslock' {
  export import HardwareKeyboardCapslock = __MaterialUI.Icons.HardwareKeyboardCapslock;
  export default HardwareKeyboardCapslock;
}

declare module 'material-ui/lib/svg-icons/hardware/sim-card' {
  export import HardwareSimCard = __MaterialUI.Icons.HardwareSimCard;
  export default HardwareSimCard;
}

declare module 'material-ui/lib/svg-icons/hardware/devices-other' {
  export import HardwareDevicesOther = __MaterialUI.Icons.HardwareDevicesOther;
  export default HardwareDevicesOther;
}

declare module 'material-ui/lib/svg-icons/hardware/tablet-android' {
  export import HardwareTabletAndroid = __MaterialUI.Icons.HardwareTabletAndroid;
  export default HardwareTabletAndroid;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-arrow-right' {
  export import HardwareKeyboardArrowRight = __MaterialUI.Icons.HardwareKeyboardArrowRight;
  export default HardwareKeyboardArrowRight;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-tab' {
  export import HardwareKeyboardTab = __MaterialUI.Icons.HardwareKeyboardTab;
  export default HardwareKeyboardTab;
}

declare module 'material-ui/lib/svg-icons/hardware/watch' {
  export import HardwareWatch = __MaterialUI.Icons.HardwareWatch;
  export default HardwareWatch;
}

declare module 'material-ui/lib/svg-icons/hardware/speaker' {
  export import HardwareSpeaker = __MaterialUI.Icons.HardwareSpeaker;
  export default HardwareSpeaker;
}

declare module 'material-ui/lib/svg-icons/hardware/phonelink' {
  export import HardwarePhonelink = __MaterialUI.Icons.HardwarePhonelink;
  export default HardwarePhonelink;
}

declare module 'material-ui/lib/svg-icons/hardware/laptop-windows' {
  export import HardwareLaptopWindows = __MaterialUI.Icons.HardwareLaptopWindows;
  export default HardwareLaptopWindows;
}

declare module 'material-ui/lib/svg-icons/hardware/tv' {
  export import HardwareTv = __MaterialUI.Icons.HardwareTv;
  export default HardwareTv;
}

declare module 'material-ui/lib/svg-icons/hardware/headset-mic' {
  export import HardwareHeadsetMic = __MaterialUI.Icons.HardwareHeadsetMic;
  export default HardwareHeadsetMic;
}

declare module 'material-ui/lib/svg-icons/hardware/videogame-asset' {
  export import HardwareVideogameAsset = __MaterialUI.Icons.HardwareVideogameAsset;
  export default HardwareVideogameAsset;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down' {
  export import HardwareKeyboardArrowDown = __MaterialUI.Icons.HardwareKeyboardArrowDown;
  export default HardwareKeyboardArrowDown;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-hide' {
  export import HardwareKeyboardHide = __MaterialUI.Icons.HardwareKeyboardHide;
  export default HardwareKeyboardHide;
}

declare module 'material-ui/lib/svg-icons/hardware/scanner' {
  export import HardwareScanner = __MaterialUI.Icons.HardwareScanner;
  export default HardwareScanner;
}

declare module 'material-ui/lib/svg-icons/hardware/laptop-chromebook' {
  export import HardwareLaptopChromebook = __MaterialUI.Icons.HardwareLaptopChromebook;
  export default HardwareLaptopChromebook;
}

declare module 'material-ui/lib/svg-icons/hardware/tablet-mac' {
  export import HardwareTabletMac = __MaterialUI.Icons.HardwareTabletMac;
  export default HardwareTabletMac;
}

declare module 'material-ui/lib/svg-icons/hardware/cast' {
  export import HardwareCast = __MaterialUI.Icons.HardwareCast;
  export default HardwareCast;
}

declare module 'material-ui/lib/svg-icons/hardware/cast-connected' {
  export import HardwareCastConnected = __MaterialUI.Icons.HardwareCastConnected;
  export default HardwareCastConnected;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-arrow-left' {
  export import HardwareKeyboardArrowLeft = __MaterialUI.Icons.HardwareKeyboardArrowLeft;
  export default HardwareKeyboardArrowLeft;
}

declare module 'material-ui/lib/svg-icons/hardware/phone-android' {
  export import HardwarePhoneAndroid = __MaterialUI.Icons.HardwarePhoneAndroid;
  export default HardwarePhoneAndroid;
}

declare module 'material-ui/lib/svg-icons/hardware/computer' {
  export import HardwareComputer = __MaterialUI.Icons.HardwareComputer;
  export default HardwareComputer;
}

declare module 'material-ui/lib/svg-icons/hardware/power-input' {
  export import HardwarePowerInput = __MaterialUI.Icons.HardwarePowerInput;
  export default HardwarePowerInput;
}

declare module 'material-ui/lib/svg-icons/hardware/smartphone' {
  export import HardwareSmartphone = __MaterialUI.Icons.HardwareSmartphone;
  export default HardwareSmartphone;
}

declare module 'material-ui/lib/svg-icons/hardware/router' {
  export import HardwareRouter = __MaterialUI.Icons.HardwareRouter;
  export default HardwareRouter;
}

declare module 'material-ui/lib/svg-icons/hardware/keyboard-backspace' {
  export import HardwareKeyboardBackspace = __MaterialUI.Icons.HardwareKeyboardBackspace;
  export default HardwareKeyboardBackspace;
}

declare module 'material-ui/lib/svg-icons/hardware/developer-board' {
  export import HardwareDeveloperBoard = __MaterialUI.Icons.HardwareDeveloperBoard;
  export default HardwareDeveloperBoard;
}

declare module 'material-ui/lib/svg-icons/hardware/device-hub' {
  export import HardwareDeviceHub = __MaterialUI.Icons.HardwareDeviceHub;
  export default HardwareDeviceHub;
}

declare module 'material-ui/lib/svg-icons/hardware/mouse' {
  export import HardwareMouse = __MaterialUI.Icons.HardwareMouse;
  export default HardwareMouse;
}

declare module 'material-ui/lib/svg-icons/hardware/desktop-mac' {
  export import HardwareDesktopMac = __MaterialUI.Icons.HardwareDesktopMac;
  export default HardwareDesktopMac;
}

declare module 'material-ui/lib/svg-icons/hardware/tablet' {
  export import HardwareTablet = __MaterialUI.Icons.HardwareTablet;
  export default HardwareTablet;
}

declare module 'material-ui/lib/svg-icons/content/add-box' {
  export import ContentAddBox = __MaterialUI.Icons.ContentAddBox;
  export default ContentAddBox;
}

declare module 'material-ui/lib/svg-icons/content/filter-list' {
  export import ContentFilterList = __MaterialUI.Icons.ContentFilterList;
  export default ContentFilterList;
}

declare module 'material-ui/lib/svg-icons/content/save' {
  export import ContentSave = __MaterialUI.Icons.ContentSave;
  export default ContentSave;
}

declare module 'material-ui/lib/svg-icons/content/unarchive' {
  export import ContentUnarchive = __MaterialUI.Icons.ContentUnarchive;
  export default ContentUnarchive;
}

declare module 'material-ui/lib/svg-icons/content/link' {
  export import ContentLink = __MaterialUI.Icons.ContentLink;
  export default ContentLink;
}

declare module 'material-ui/lib/svg-icons/content/sort' {
  export import ContentSort = __MaterialUI.Icons.ContentSort;
  export default ContentSort;
}

declare module 'material-ui/lib/svg-icons/content/text-format' {
  export import ContentTextFormat = __MaterialUI.Icons.ContentTextFormat;
  export default ContentTextFormat;
}

declare module 'material-ui/lib/svg-icons/content/add' {
  export import ContentAdd = __MaterialUI.Icons.ContentAdd;
  export default ContentAdd;
}

declare module 'material-ui/lib/svg-icons/content/send' {
  export import ContentSend = __MaterialUI.Icons.ContentSend;
  export default ContentSend;
}

declare module 'material-ui/lib/svg-icons/content/gesture' {
  export import ContentGesture = __MaterialUI.Icons.ContentGesture;
  export default ContentGesture;
}

declare module 'material-ui/lib/svg-icons/content/archive' {
  export import ContentArchive = __MaterialUI.Icons.ContentArchive;
  export default ContentArchive;
}

declare module 'material-ui/lib/svg-icons/content/weekend' {
  export import ContentWeekend = __MaterialUI.Icons.ContentWeekend;
  export default ContentWeekend;
}

declare module 'material-ui/lib/svg-icons/content/markunread' {
  export import ContentMarkunread = __MaterialUI.Icons.ContentMarkunread;
  export default ContentMarkunread;
}

declare module 'material-ui/lib/svg-icons/content/create' {
  export import ContentCreate = __MaterialUI.Icons.ContentCreate;
  export default ContentCreate;
}

declare module 'material-ui/lib/svg-icons/content/content-cut' {
  export import ContentContentCut = __MaterialUI.Icons.ContentContentCut;
  export default ContentContentCut;
}

declare module 'material-ui/lib/svg-icons/content/clear' {
  export import ContentClear = __MaterialUI.Icons.ContentClear;
  export default ContentClear;
}

declare module 'material-ui/lib/svg-icons/content/redo' {
  export import ContentRedo = __MaterialUI.Icons.ContentRedo;
  export default ContentRedo;
}

declare module 'material-ui/lib/svg-icons/content/block' {
  export import ContentBlock = __MaterialUI.Icons.ContentBlock;
  export default ContentBlock;
}

declare module 'material-ui/lib/svg-icons/content/forward' {
  export import ContentForward = __MaterialUI.Icons.ContentForward;
  export default ContentForward;
}

declare module 'material-ui/lib/svg-icons/content/mail' {
  export import ContentMail = __MaterialUI.Icons.ContentMail;
  export default ContentMail;
}

declare module 'material-ui/lib/svg-icons/content/inbox' {
  export import ContentInbox = __MaterialUI.Icons.ContentInbox;
  export default ContentInbox;
}

declare module 'material-ui/lib/svg-icons/content/remove-circle' {
  export import ContentRemoveCircle = __MaterialUI.Icons.ContentRemoveCircle;
  export default ContentRemoveCircle;
}

declare module 'material-ui/lib/svg-icons/content/move-to-inbox' {
  export import ContentMoveToInbox = __MaterialUI.Icons.ContentMoveToInbox;
  export default ContentMoveToInbox;
}

declare module 'material-ui/lib/svg-icons/content/flag' {
  export import ContentFlag = __MaterialUI.Icons.ContentFlag;
  export default ContentFlag;
}

declare module 'material-ui/lib/svg-icons/content/reply-all' {
  export import ContentReplyAll = __MaterialUI.Icons.ContentReplyAll;
  export default ContentReplyAll;
}

declare module 'material-ui/lib/svg-icons/content/remove' {
  export import ContentRemove = __MaterialUI.Icons.ContentRemove;
  export default ContentRemove;
}

declare module 'material-ui/lib/svg-icons/content/next-week' {
  export import ContentNextWeek = __MaterialUI.Icons.ContentNextWeek;
  export default ContentNextWeek;
}

declare module 'material-ui/lib/svg-icons/content/undo' {
  export import ContentUndo = __MaterialUI.Icons.ContentUndo;
  export default ContentUndo;
}

declare module 'material-ui/lib/svg-icons/content/font-download' {
  export import ContentFontDownload = __MaterialUI.Icons.ContentFontDownload;
  export default ContentFontDownload;
}

declare module 'material-ui/lib/svg-icons/content/remove-circle-outline' {
  export import ContentRemoveCircleOutline = __MaterialUI.Icons.ContentRemoveCircleOutline;
  export default ContentRemoveCircleOutline;
}

declare module 'material-ui/lib/svg-icons/content/backspace' {
  export import ContentBackspace = __MaterialUI.Icons.ContentBackspace;
  export default ContentBackspace;
}

declare module 'material-ui/lib/svg-icons/content/reply' {
  export import ContentReply = __MaterialUI.Icons.ContentReply;
  export default ContentReply;
}

declare module 'material-ui/lib/svg-icons/content/report' {
  export import ContentReport = __MaterialUI.Icons.ContentReport;
  export default ContentReport;
}

declare module 'material-ui/lib/svg-icons/content/add-circle' {
  export import ContentAddCircle = __MaterialUI.Icons.ContentAddCircle;
  export default ContentAddCircle;
}

declare module 'material-ui/lib/svg-icons/content/content-copy' {
  export import ContentContentCopy = __MaterialUI.Icons.ContentContentCopy;
  export default ContentContentCopy;
}

declare module 'material-ui/lib/svg-icons/content/content-paste' {
  export import ContentContentPaste = __MaterialUI.Icons.ContentContentPaste;
  export default ContentContentPaste;
}

declare module 'material-ui/lib/svg-icons/content/select-all' {
  export import ContentSelectAll = __MaterialUI.Icons.ContentSelectAll;
  export default ContentSelectAll;
}

declare module 'material-ui/lib/svg-icons/content/add-circle-outline' {
  export import ContentAddCircleOutline = __MaterialUI.Icons.ContentAddCircleOutline;
  export default ContentAddCircleOutline;
}

declare module 'material-ui/lib/svg-icons/content/drafts' {
  export import ContentDrafts = __MaterialUI.Icons.ContentDrafts;
  export default ContentDrafts;
}

declare module 'material-ui/lib/svg-icons/editor/wrap-text' {
  export import EditorWrapText = __MaterialUI.Icons.EditorWrapText;
  export default EditorWrapText;
}

declare module 'material-ui/lib/svg-icons/editor/format-size' {
  export import EditorFormatSize = __MaterialUI.Icons.EditorFormatSize;
  export default EditorFormatSize;
}

declare module 'material-ui/lib/svg-icons/editor/functions' {
  export import EditorFunctions = __MaterialUI.Icons.EditorFunctions;
  export default EditorFunctions;
}

declare module 'material-ui/lib/svg-icons/editor/format-bold' {
  export import EditorFormatBold = __MaterialUI.Icons.EditorFormatBold;
  export default EditorFormatBold;
}

declare module 'material-ui/lib/svg-icons/editor/format-align-center' {
  export import EditorFormatAlignCenter = __MaterialUI.Icons.EditorFormatAlignCenter;
  export default EditorFormatAlignCenter;
}

declare module 'material-ui/lib/svg-icons/editor/mode-comment' {
  export import EditorModeComment = __MaterialUI.Icons.EditorModeComment;
  export default EditorModeComment;
}

declare module 'material-ui/lib/svg-icons/editor/money-off' {
  export import EditorMoneyOff = __MaterialUI.Icons.EditorMoneyOff;
  export default EditorMoneyOff;
}

declare module 'material-ui/lib/svg-icons/editor/format-textdirection-r-to-l' {
  export import EditorFormatTextdirectionRToL = __MaterialUI.Icons.EditorFormatTextdirectionRToL;
  export default EditorFormatTextdirectionRToL;
}

declare module 'material-ui/lib/svg-icons/editor/insert-drive-file' {
  export import EditorInsertDriveFile = __MaterialUI.Icons.EditorInsertDriveFile;
  export default EditorInsertDriveFile;
}

declare module 'material-ui/lib/svg-icons/editor/highlight' {
  export import EditorHighlight = __MaterialUI.Icons.EditorHighlight;
  export default EditorHighlight;
}

declare module 'material-ui/lib/svg-icons/editor/format-clear' {
  export import EditorFormatClear = __MaterialUI.Icons.EditorFormatClear;
  export default EditorFormatClear;
}

declare module 'material-ui/lib/svg-icons/editor/border-style' {
  export import EditorBorderStyle = __MaterialUI.Icons.EditorBorderStyle;
  export default EditorBorderStyle;
}

declare module 'material-ui/lib/svg-icons/editor/format-shapes' {
  export import EditorFormatShapes = __MaterialUI.Icons.EditorFormatShapes;
  export default EditorFormatShapes;
}

declare module 'material-ui/lib/svg-icons/editor/format-paint' {
  export import EditorFormatPaint = __MaterialUI.Icons.EditorFormatPaint;
  export default EditorFormatPaint;
}

declare module 'material-ui/lib/svg-icons/editor/linear-scale' {
  export import EditorLinearScale = __MaterialUI.Icons.EditorLinearScale;
  export default EditorLinearScale;
}

declare module 'material-ui/lib/svg-icons/editor/insert-photo' {
  export import EditorInsertPhoto = __MaterialUI.Icons.EditorInsertPhoto;
  export default EditorInsertPhoto;
}

declare module 'material-ui/lib/svg-icons/editor/drag-handle' {
  export import EditorDragHandle = __MaterialUI.Icons.EditorDragHandle;
  export default EditorDragHandle;
}

declare module 'material-ui/lib/svg-icons/editor/merge-type' {
  export import EditorMergeType = __MaterialUI.Icons.EditorMergeType;
  export default EditorMergeType;
}

declare module 'material-ui/lib/svg-icons/editor/attach-money' {
  export import EditorAttachMoney = __MaterialUI.Icons.EditorAttachMoney;
  export default EditorAttachMoney;
}

declare module 'material-ui/lib/svg-icons/editor/border-vertical' {
  export import EditorBorderVertical = __MaterialUI.Icons.EditorBorderVertical;
  export default EditorBorderVertical;
}

declare module 'material-ui/lib/svg-icons/editor/format-indent-decrease' {
  export import EditorFormatIndentDecrease = __MaterialUI.Icons.EditorFormatIndentDecrease;
  export default EditorFormatIndentDecrease;
}

declare module 'material-ui/lib/svg-icons/editor/insert-emoticon' {
  export import EditorInsertEmoticon = __MaterialUI.Icons.EditorInsertEmoticon;
  export default EditorInsertEmoticon;
}

declare module 'material-ui/lib/svg-icons/editor/insert-invitation' {
  export import EditorInsertInvitation = __MaterialUI.Icons.EditorInsertInvitation;
  export default EditorInsertInvitation;
}

declare module 'material-ui/lib/svg-icons/editor/format-color-fill' {
  export import EditorFormatColorFill = __MaterialUI.Icons.EditorFormatColorFill;
  export default EditorFormatColorFill;
}

declare module 'material-ui/lib/svg-icons/editor/mode-edit' {
  export import EditorModeEdit = __MaterialUI.Icons.EditorModeEdit;
  export default EditorModeEdit;
}

declare module 'material-ui/lib/svg-icons/editor/vertical-align-bottom' {
  export import EditorVerticalAlignBottom = __MaterialUI.Icons.EditorVerticalAlignBottom;
  export default EditorVerticalAlignBottom;
}

declare module 'material-ui/lib/svg-icons/editor/format-align-justify' {
  export import EditorFormatAlignJustify = __MaterialUI.Icons.EditorFormatAlignJustify;
  export default EditorFormatAlignJustify;
}

declare module 'material-ui/lib/svg-icons/editor/attach-file' {
  export import EditorAttachFile = __MaterialUI.Icons.EditorAttachFile;
  export default EditorAttachFile;
}

declare module 'material-ui/lib/svg-icons/editor/space-bar' {
  export import EditorSpaceBar = __MaterialUI.Icons.EditorSpaceBar;
  export default EditorSpaceBar;
}

declare module 'material-ui/lib/svg-icons/editor/border-clear' {
  export import EditorBorderClear = __MaterialUI.Icons.EditorBorderClear;
  export default EditorBorderClear;
}

declare module 'material-ui/lib/svg-icons/editor/short-text' {
  export import EditorShortText = __MaterialUI.Icons.EditorShortText;
  export default EditorShortText;
}

declare module 'material-ui/lib/svg-icons/editor/insert-link' {
  export import EditorInsertLink = __MaterialUI.Icons.EditorInsertLink;
  export default EditorInsertLink;
}

declare module 'material-ui/lib/svg-icons/editor/format-list-numbered' {
  export import EditorFormatListNumbered = __MaterialUI.Icons.EditorFormatListNumbered;
  export default EditorFormatListNumbered;
}

declare module 'material-ui/lib/svg-icons/editor/format-quote' {
  export import EditorFormatQuote = __MaterialUI.Icons.EditorFormatQuote;
  export default EditorFormatQuote;
}

declare module 'material-ui/lib/svg-icons/editor/border-left' {
  export import EditorBorderLeft = __MaterialUI.Icons.EditorBorderLeft;
  export default EditorBorderLeft;
}

declare module 'material-ui/lib/svg-icons/editor/format-underlined' {
  export import EditorFormatUnderlined = __MaterialUI.Icons.EditorFormatUnderlined;
  export default EditorFormatUnderlined;
}

declare module 'material-ui/lib/svg-icons/editor/text-fields' {
  export import EditorTextFields = __MaterialUI.Icons.EditorTextFields;
  export default EditorTextFields;
}

declare module 'material-ui/lib/svg-icons/editor/format-italic' {
  export import EditorFormatItalic = __MaterialUI.Icons.EditorFormatItalic;
  export default EditorFormatItalic;
}

declare module 'material-ui/lib/svg-icons/editor/publish' {
  export import EditorPublish = __MaterialUI.Icons.EditorPublish;
  export default EditorPublish;
}

declare module 'material-ui/lib/svg-icons/editor/border-top' {
  export import EditorBorderTop = __MaterialUI.Icons.EditorBorderTop;
  export default EditorBorderTop;
}

declare module 'material-ui/lib/svg-icons/editor/format-indent-increase' {
  export import EditorFormatIndentIncrease = __MaterialUI.Icons.EditorFormatIndentIncrease;
  export default EditorFormatIndentIncrease;
}

declare module 'material-ui/lib/svg-icons/editor/border-bottom' {
  export import EditorBorderBottom = __MaterialUI.Icons.EditorBorderBottom;
  export default EditorBorderBottom;
}

declare module 'material-ui/lib/svg-icons/editor/format-align-right' {
  export import EditorFormatAlignRight = __MaterialUI.Icons.EditorFormatAlignRight;
  export default EditorFormatAlignRight;
}

declare module 'material-ui/lib/svg-icons/editor/border-right' {
  export import EditorBorderRight = __MaterialUI.Icons.EditorBorderRight;
  export default EditorBorderRight;
}

declare module 'material-ui/lib/svg-icons/editor/insert-comment' {
  export import EditorInsertComment = __MaterialUI.Icons.EditorInsertComment;
  export default EditorInsertComment;
}

declare module 'material-ui/lib/svg-icons/editor/strikethrough-s' {
  export import EditorStrikethroughS = __MaterialUI.Icons.EditorStrikethroughS;
  export default EditorStrikethroughS;
}

declare module 'material-ui/lib/svg-icons/editor/format-strikethrough' {
  export import EditorFormatStrikethrough = __MaterialUI.Icons.EditorFormatStrikethrough;
  export default EditorFormatStrikethrough;
}

declare module 'material-ui/lib/svg-icons/editor/insert-chart' {
  export import EditorInsertChart = __MaterialUI.Icons.EditorInsertChart;
  export default EditorInsertChart;
}

declare module 'material-ui/lib/svg-icons/editor/format-color-reset' {
  export import EditorFormatColorReset = __MaterialUI.Icons.EditorFormatColorReset;
  export default EditorFormatColorReset;
}

declare module 'material-ui/lib/svg-icons/editor/border-inner' {
  export import EditorBorderInner = __MaterialUI.Icons.EditorBorderInner;
  export default EditorBorderInner;
}

declare module 'material-ui/lib/svg-icons/editor/format-color-text' {
  export import EditorFormatColorText = __MaterialUI.Icons.EditorFormatColorText;
  export default EditorFormatColorText;
}

declare module 'material-ui/lib/svg-icons/editor/border-horizontal' {
  export import EditorBorderHorizontal = __MaterialUI.Icons.EditorBorderHorizontal;
  export default EditorBorderHorizontal;
}

declare module 'material-ui/lib/svg-icons/editor/format-list-bulleted' {
  export import EditorFormatListBulleted = __MaterialUI.Icons.EditorFormatListBulleted;
  export default EditorFormatListBulleted;
}

declare module 'material-ui/lib/svg-icons/editor/border-outer' {
  export import EditorBorderOuter = __MaterialUI.Icons.EditorBorderOuter;
  export default EditorBorderOuter;
}

declare module 'material-ui/lib/svg-icons/editor/format-align-left' {
  export import EditorFormatAlignLeft = __MaterialUI.Icons.EditorFormatAlignLeft;
  export default EditorFormatAlignLeft;
}

declare module 'material-ui/lib/svg-icons/editor/border-color' {
  export import EditorBorderColor = __MaterialUI.Icons.EditorBorderColor;
  export default EditorBorderColor;
}

declare module 'material-ui/lib/svg-icons/editor/format-textdirection-l-to-r' {
  export import EditorFormatTextdirectionLToR = __MaterialUI.Icons.EditorFormatTextdirectionLToR;
  export default EditorFormatTextdirectionLToR;
}

declare module 'material-ui/lib/svg-icons/editor/vertical-align-center' {
  export import EditorVerticalAlignCenter = __MaterialUI.Icons.EditorVerticalAlignCenter;
  export default EditorVerticalAlignCenter;
}

declare module 'material-ui/lib/svg-icons/editor/vertical-align-top' {
  export import EditorVerticalAlignTop = __MaterialUI.Icons.EditorVerticalAlignTop;
  export default EditorVerticalAlignTop;
}

declare module 'material-ui/lib/svg-icons/editor/format-line-spacing' {
  export import EditorFormatLineSpacing = __MaterialUI.Icons.EditorFormatLineSpacing;
  export default EditorFormatLineSpacing;
}

declare module 'material-ui/lib/svg-icons/editor/border-all' {
  export import EditorBorderAll = __MaterialUI.Icons.EditorBorderAll;
  export default EditorBorderAll;
}

declare module 'material-ui/lib/svg-icons/device/screen-lock-portrait' {
  export import DeviceScreenLockPortrait = __MaterialUI.Icons.DeviceScreenLockPortrait;
  export default DeviceScreenLockPortrait;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-off' {
  export import DeviceSignalCellularOff = __MaterialUI.Icons.DeviceSignalCellularOff;
  export default DeviceSignalCellularOff;
}

declare module 'material-ui/lib/svg-icons/device/bluetooth-searching' {
  export import DeviceBluetoothSearching = __MaterialUI.Icons.DeviceBluetoothSearching;
  export default DeviceBluetoothSearching;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-3-bar' {
  export import DeviceSignalCellular3Bar = __MaterialUI.Icons.DeviceSignalCellular3Bar;
  export default DeviceSignalCellular3Bar;
}

declare module 'material-ui/lib/svg-icons/device/network-cell' {
  export import DeviceNetworkCell = __MaterialUI.Icons.DeviceNetworkCell;
  export default DeviceNetworkCell;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-no-sim' {
  export import DeviceSignalCellularNoSim = __MaterialUI.Icons.DeviceSignalCellularNoSim;
  export default DeviceSignalCellularNoSim;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-2-bar' {
  export import DeviceSignalWifi2Bar = __MaterialUI.Icons.DeviceSignalWifi2Bar;
  export default DeviceSignalWifi2Bar;
}

declare module 'material-ui/lib/svg-icons/device/devices' {
  export import DeviceDevices = __MaterialUI.Icons.DeviceDevices;
  export default DeviceDevices;
}

declare module 'material-ui/lib/svg-icons/device/battery-90' {
  export import DeviceBattery90 = __MaterialUI.Icons.DeviceBattery90;
  export default DeviceBattery90;
}

declare module 'material-ui/lib/svg-icons/device/battery-charging-80' {
  export import DeviceBatteryCharging80 = __MaterialUI.Icons.DeviceBatteryCharging80;
  export default DeviceBatteryCharging80;
}

declare module 'material-ui/lib/svg-icons/device/location-searching' {
  export import DeviceLocationSearching = __MaterialUI.Icons.DeviceLocationSearching;
  export default DeviceLocationSearching;
}

declare module 'material-ui/lib/svg-icons/device/wallpaper' {
  export import DeviceWallpaper = __MaterialUI.Icons.DeviceWallpaper;
  export default DeviceWallpaper;
}

declare module 'material-ui/lib/svg-icons/device/screen-lock-rotation' {
  export import DeviceScreenLockRotation = __MaterialUI.Icons.DeviceScreenLockRotation;
  export default DeviceScreenLockRotation;
}

declare module 'material-ui/lib/svg-icons/device/screen-lock-landscape' {
  export import DeviceScreenLockLandscape = __MaterialUI.Icons.DeviceScreenLockLandscape;
  export default DeviceScreenLockLandscape;
}

declare module 'material-ui/lib/svg-icons/device/battery-charging-20' {
  export import DeviceBatteryCharging20 = __MaterialUI.Icons.DeviceBatteryCharging20;
  export default DeviceBatteryCharging20;
}

declare module 'material-ui/lib/svg-icons/device/usb' {
  export import DeviceUsb = __MaterialUI.Icons.DeviceUsb;
  export default DeviceUsb;
}

declare module 'material-ui/lib/svg-icons/device/airplanemode-active' {
  export import DeviceAirplanemodeActive = __MaterialUI.Icons.DeviceAirplanemodeActive;
  export default DeviceAirplanemodeActive;
}

declare module 'material-ui/lib/svg-icons/device/network-wifi' {
  export import DeviceNetworkWifi = __MaterialUI.Icons.DeviceNetworkWifi;
  export default DeviceNetworkWifi;
}

declare module 'material-ui/lib/svg-icons/device/graphic-eq' {
  export import DeviceGraphicEq = __MaterialUI.Icons.DeviceGraphicEq;
  export default DeviceGraphicEq;
}

declare module 'material-ui/lib/svg-icons/device/bluetooth-connected' {
  export import DeviceBluetoothConnected = __MaterialUI.Icons.DeviceBluetoothConnected;
  export default DeviceBluetoothConnected;
}

declare module 'material-ui/lib/svg-icons/device/gps-fixed' {
  export import DeviceGpsFixed = __MaterialUI.Icons.DeviceGpsFixed;
  export default DeviceGpsFixed;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-connected-no-internet-4-bar' {
  export import DeviceSignalCellularConnectedNoInternet4Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet4Bar;
  export default DeviceSignalCellularConnectedNoInternet4Bar;
}

declare module 'material-ui/lib/svg-icons/device/brightness-medium' {
  export import DeviceBrightnessMedium = __MaterialUI.Icons.DeviceBrightnessMedium;
  export default DeviceBrightnessMedium;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-connected-no-internet-3-bar' {
  export import DeviceSignalCellularConnectedNoInternet3Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet3Bar;
  export default DeviceSignalCellularConnectedNoInternet3Bar;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-3-bar-lock' {
  export import DeviceSignalWifi3BarLock = __MaterialUI.Icons.DeviceSignalWifi3BarLock;
  export default DeviceSignalWifi3BarLock;
}

declare module 'material-ui/lib/svg-icons/device/battery-80' {
  export import DeviceBattery80 = __MaterialUI.Icons.DeviceBattery80;
  export default DeviceBattery80;
}

declare module 'material-ui/lib/svg-icons/device/wifi-lock' {
  export import DeviceWifiLock = __MaterialUI.Icons.DeviceWifiLock;
  export default DeviceWifiLock;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-2-bar-lock' {
  export import DeviceSignalWifi2BarLock = __MaterialUI.Icons.DeviceSignalWifi2BarLock;
  export default DeviceSignalWifi2BarLock;
}

declare module 'material-ui/lib/svg-icons/device/bluetooth' {
  export import DeviceBluetooth = __MaterialUI.Icons.DeviceBluetooth;
  export default DeviceBluetooth;
}

declare module 'material-ui/lib/svg-icons/device/access-time' {
  export import DeviceAccessTime = __MaterialUI.Icons.DeviceAccessTime;
  export default DeviceAccessTime;
}

declare module 'material-ui/lib/svg-icons/device/battery-charging-30' {
  export import DeviceBatteryCharging30 = __MaterialUI.Icons.DeviceBatteryCharging30;
  export default DeviceBatteryCharging30;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-off' {
  export import DeviceSignalWifiOff = __MaterialUI.Icons.DeviceSignalWifiOff;
  export default DeviceSignalWifiOff;
}

declare module 'material-ui/lib/svg-icons/device/dvr' {
  export import DeviceDvr = __MaterialUI.Icons.DeviceDvr;
  export default DeviceDvr;
}

declare module 'material-ui/lib/svg-icons/device/battery-60' {
  export import DeviceBattery60 = __MaterialUI.Icons.DeviceBattery60;
  export default DeviceBattery60;
}

declare module 'material-ui/lib/svg-icons/device/access-alarm' {
  export import DeviceAccessAlarm = __MaterialUI.Icons.DeviceAccessAlarm;
  export default DeviceAccessAlarm;
}

declare module 'material-ui/lib/svg-icons/device/nfc' {
  export import DeviceNfc = __MaterialUI.Icons.DeviceNfc;
  export default DeviceNfc;
}

declare module 'material-ui/lib/svg-icons/device/data-usage' {
  export import DeviceDataUsage = __MaterialUI.Icons.DeviceDataUsage;
  export default DeviceDataUsage;
}

declare module 'material-ui/lib/svg-icons/device/access-alarms' {
  export import DeviceAccessAlarms = __MaterialUI.Icons.DeviceAccessAlarms;
  export default DeviceAccessAlarms;
}

declare module 'material-ui/lib/svg-icons/device/battery-full' {
  export import DeviceBatteryFull = __MaterialUI.Icons.DeviceBatteryFull;
  export default DeviceBatteryFull;
}

declare module 'material-ui/lib/svg-icons/device/battery-charging-full' {
  export import DeviceBatteryChargingFull = __MaterialUI.Icons.DeviceBatteryChargingFull;
  export default DeviceBatteryChargingFull;
}

declare module 'material-ui/lib/svg-icons/device/settings-system-daydream' {
  export import DeviceSettingsSystemDaydream = __MaterialUI.Icons.DeviceSettingsSystemDaydream;
  export default DeviceSettingsSystemDaydream;
}

declare module 'material-ui/lib/svg-icons/device/battery-std' {
  export import DeviceBatteryStd = __MaterialUI.Icons.DeviceBatteryStd;
  export default DeviceBatteryStd;
}

declare module 'material-ui/lib/svg-icons/device/battery-unknown' {
  export import DeviceBatteryUnknown = __MaterialUI.Icons.DeviceBatteryUnknown;
  export default DeviceBatteryUnknown;
}

declare module 'material-ui/lib/svg-icons/device/add-alarm' {
  export import DeviceAddAlarm = __MaterialUI.Icons.DeviceAddAlarm;
  export default DeviceAddAlarm;
}

declare module 'material-ui/lib/svg-icons/device/storage' {
  export import DeviceStorage = __MaterialUI.Icons.DeviceStorage;
  export default DeviceStorage;
}

declare module 'material-ui/lib/svg-icons/device/battery-charging-90' {
  export import DeviceBatteryCharging90 = __MaterialUI.Icons.DeviceBatteryCharging90;
  export default DeviceBatteryCharging90;
}

declare module 'material-ui/lib/svg-icons/device/screen-rotation' {
  export import DeviceScreenRotation = __MaterialUI.Icons.DeviceScreenRotation;
  export default DeviceScreenRotation;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-4-bar' {
  export import DeviceSignalWifi4Bar = __MaterialUI.Icons.DeviceSignalWifi4Bar;
  export default DeviceSignalWifi4Bar;
}

declare module 'material-ui/lib/svg-icons/device/battery-charging-50' {
  export import DeviceBatteryCharging50 = __MaterialUI.Icons.DeviceBatteryCharging50;
  export default DeviceBatteryCharging50;
}

declare module 'material-ui/lib/svg-icons/device/battery-30' {
  export import DeviceBattery30 = __MaterialUI.Icons.DeviceBattery30;
  export default DeviceBattery30;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-connected-no-internet-0-bar' {
  export import DeviceSignalCellularConnectedNoInternet0Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet0Bar;
  export default DeviceSignalCellularConnectedNoInternet0Bar;
}

declare module 'material-ui/lib/svg-icons/device/battery-alert' {
  export import DeviceBatteryAlert = __MaterialUI.Icons.DeviceBatteryAlert;
  export default DeviceBatteryAlert;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-1-bar' {
  export import DeviceSignalWifi1Bar = __MaterialUI.Icons.DeviceSignalWifi1Bar;
  export default DeviceSignalWifi1Bar;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-4-bar' {
  export import DeviceSignalCellular4Bar = __MaterialUI.Icons.DeviceSignalCellular4Bar;
  export default DeviceSignalCellular4Bar;
}

declare module 'material-ui/lib/svg-icons/device/wifi-tethering' {
  export import DeviceWifiTethering = __MaterialUI.Icons.DeviceWifiTethering;
  export default DeviceWifiTethering;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-0-bar' {
  export import DeviceSignalWifi0Bar = __MaterialUI.Icons.DeviceSignalWifi0Bar;
  export default DeviceSignalWifi0Bar;
}

declare module 'material-ui/lib/svg-icons/device/brightness-auto' {
  export import DeviceBrightnessAuto = __MaterialUI.Icons.DeviceBrightnessAuto;
  export default DeviceBrightnessAuto;
}

declare module 'material-ui/lib/svg-icons/device/location-disabled' {
  export import DeviceLocationDisabled = __MaterialUI.Icons.DeviceLocationDisabled;
  export default DeviceLocationDisabled;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-3-bar' {
  export import DeviceSignalWifi3Bar = __MaterialUI.Icons.DeviceSignalWifi3Bar;
  export default DeviceSignalWifi3Bar;
}

declare module 'material-ui/lib/svg-icons/device/gps-not-fixed' {
  export import DeviceGpsNotFixed = __MaterialUI.Icons.DeviceGpsNotFixed;
  export default DeviceGpsNotFixed;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-1-bar' {
  export import DeviceSignalCellular1Bar = __MaterialUI.Icons.DeviceSignalCellular1Bar;
  export default DeviceSignalCellular1Bar;
}

declare module 'material-ui/lib/svg-icons/device/battery-charging-60' {
  export import DeviceBatteryCharging60 = __MaterialUI.Icons.DeviceBatteryCharging60;
  export default DeviceBatteryCharging60;
}

declare module 'material-ui/lib/svg-icons/device/gps-off' {
  export import DeviceGpsOff = __MaterialUI.Icons.DeviceGpsOff;
  export default DeviceGpsOff;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-null' {
  export import DeviceSignalCellularNull = __MaterialUI.Icons.DeviceSignalCellularNull;
  export default DeviceSignalCellularNull;
}

declare module 'material-ui/lib/svg-icons/device/brightness-low' {
  export import DeviceBrightnessLow = __MaterialUI.Icons.DeviceBrightnessLow;
  export default DeviceBrightnessLow;
}

declare module 'material-ui/lib/svg-icons/device/sd-storage' {
  export import DeviceSdStorage = __MaterialUI.Icons.DeviceSdStorage;
  export default DeviceSdStorage;
}

declare module 'material-ui/lib/svg-icons/device/airplanemode-inactive' {
  export import DeviceAirplanemodeInactive = __MaterialUI.Icons.DeviceAirplanemodeInactive;
  export default DeviceAirplanemodeInactive;
}

declare module 'material-ui/lib/svg-icons/device/widgets' {
  export import DeviceWidgets = __MaterialUI.Icons.DeviceWidgets;
  export default DeviceWidgets;
}

declare module 'material-ui/lib/svg-icons/device/brightness-high' {
  export import DeviceBrightnessHigh = __MaterialUI.Icons.DeviceBrightnessHigh;
  export default DeviceBrightnessHigh;
}

declare module 'material-ui/lib/svg-icons/device/battery-20' {
  export import DeviceBattery20 = __MaterialUI.Icons.DeviceBattery20;
  export default DeviceBattery20;
}

declare module 'material-ui/lib/svg-icons/device/bluetooth-disabled' {
  export import DeviceBluetoothDisabled = __MaterialUI.Icons.DeviceBluetoothDisabled;
  export default DeviceBluetoothDisabled;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-4-bar-lock' {
  export import DeviceSignalWifi4BarLock = __MaterialUI.Icons.DeviceSignalWifi4BarLock;
  export default DeviceSignalWifi4BarLock;
}

declare module 'material-ui/lib/svg-icons/device/developer-mode' {
  export import DeviceDeveloperMode = __MaterialUI.Icons.DeviceDeveloperMode;
  export default DeviceDeveloperMode;
}

declare module 'material-ui/lib/svg-icons/device/battery-50' {
  export import DeviceBattery50 = __MaterialUI.Icons.DeviceBattery50;
  export default DeviceBattery50;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-connected-no-internet-1-bar' {
  export import DeviceSignalCellularConnectedNoInternet1Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet1Bar;
  export default DeviceSignalCellularConnectedNoInternet1Bar;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-2-bar' {
  export import DeviceSignalCellular2Bar = __MaterialUI.Icons.DeviceSignalCellular2Bar;
  export default DeviceSignalCellular2Bar;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-connected-no-internet-2-bar' {
  export import DeviceSignalCellularConnectedNoInternet2Bar = __MaterialUI.Icons.DeviceSignalCellularConnectedNoInternet2Bar;
  export default DeviceSignalCellularConnectedNoInternet2Bar;
}

declare module 'material-ui/lib/svg-icons/device/signal-cellular-0-bar' {
  export import DeviceSignalCellular0Bar = __MaterialUI.Icons.DeviceSignalCellular0Bar;
  export default DeviceSignalCellular0Bar;
}

declare module 'material-ui/lib/svg-icons/device/signal-wifi-1-bar-lock' {
  export import DeviceSignalWifi1BarLock = __MaterialUI.Icons.DeviceSignalWifi1BarLock;
  export default DeviceSignalWifi1BarLock;
}

declare module 'material-ui/lib/svg-icons/navigation/arrow-forward' {
  export import NavigationArrowForward = __MaterialUI.Icons.NavigationArrowForward;
  export default NavigationArrowForward;
}

declare module 'material-ui/lib/svg-icons/navigation/unfold-more' {
  export import NavigationUnfoldMore = __MaterialUI.Icons.NavigationUnfoldMore;
  export default NavigationUnfoldMore;
}

declare module 'material-ui/lib/svg-icons/navigation/arrow-drop-down' {
  export import NavigationArrowDropDown = __MaterialUI.Icons.NavigationArrowDropDown;
  export default NavigationArrowDropDown;
}

declare module 'material-ui/lib/svg-icons/navigation/arrow-back' {
  export import NavigationArrowBack = __MaterialUI.Icons.NavigationArrowBack;
  export default NavigationArrowBack;
}

declare module 'material-ui/lib/svg-icons/navigation/arrow-downward' {
  export import NavigationArrowDownward = __MaterialUI.Icons.NavigationArrowDownward;
  export default NavigationArrowDownward;
}

declare module 'material-ui/lib/svg-icons/navigation/fullscreen' {
  export import NavigationFullscreen = __MaterialUI.Icons.NavigationFullscreen;
  export default NavigationFullscreen;
}

declare module 'material-ui/lib/svg-icons/navigation/unfold-less' {
  export import NavigationUnfoldLess = __MaterialUI.Icons.NavigationUnfoldLess;
  export default NavigationUnfoldLess;
}

declare module 'material-ui/lib/svg-icons/navigation/chevron-right' {
  export import NavigationChevronRight = __MaterialUI.Icons.NavigationChevronRight;
  export default NavigationChevronRight;
}

declare module 'material-ui/lib/svg-icons/navigation/arrow-drop-down-circle' {
  export import NavigationArrowDropDownCircle = __MaterialUI.Icons.NavigationArrowDropDownCircle;
  export default NavigationArrowDropDownCircle;
}

declare module 'material-ui/lib/svg-icons/navigation/check' {
  export import NavigationCheck = __MaterialUI.Icons.NavigationCheck;
  export default NavigationCheck;
}

declare module 'material-ui/lib/svg-icons/navigation/fullscreen-exit' {
  export import NavigationFullscreenExit = __MaterialUI.Icons.NavigationFullscreenExit;
  export default NavigationFullscreenExit;
}

declare module 'material-ui/lib/svg-icons/navigation/chevron-left' {
  export import NavigationChevronLeft = __MaterialUI.Icons.NavigationChevronLeft;
  export default NavigationChevronLeft;
}

declare module 'material-ui/lib/svg-icons/navigation/menu' {
  export import NavigationMenu = __MaterialUI.Icons.NavigationMenu;
  export default NavigationMenu;
}

declare module 'material-ui/lib/svg-icons/navigation/apps' {
  export import NavigationApps = __MaterialUI.Icons.NavigationApps;
  export default NavigationApps;
}

declare module 'material-ui/lib/svg-icons/navigation/arrow-upward' {
  export import NavigationArrowUpward = __MaterialUI.Icons.NavigationArrowUpward;
  export default NavigationArrowUpward;
}

declare module 'material-ui/lib/svg-icons/navigation/close' {
  export import NavigationClose = __MaterialUI.Icons.NavigationClose;
  export default NavigationClose;
}

declare module 'material-ui/lib/svg-icons/navigation/more-horiz' {
  export import NavigationMoreHoriz = __MaterialUI.Icons.NavigationMoreHoriz;
  export default NavigationMoreHoriz;
}

declare module 'material-ui/lib/svg-icons/navigation/cancel' {
  export import NavigationCancel = __MaterialUI.Icons.NavigationCancel;
  export default NavigationCancel;
}

declare module 'material-ui/lib/svg-icons/navigation/subdirectory-arrow-right' {
  export import NavigationSubdirectoryArrowRight = __MaterialUI.Icons.NavigationSubdirectoryArrowRight;
  export default NavigationSubdirectoryArrowRight;
}

declare module 'material-ui/lib/svg-icons/navigation/expand-more' {
  export import NavigationExpandMore = __MaterialUI.Icons.NavigationExpandMore;
  export default NavigationExpandMore;
}

declare module 'material-ui/lib/svg-icons/navigation/arrow-drop-up' {
  export import NavigationArrowDropUp = __MaterialUI.Icons.NavigationArrowDropUp;
  export default NavigationArrowDropUp;
}

declare module 'material-ui/lib/svg-icons/navigation/subdirectory-arrow-left' {
  export import NavigationSubdirectoryArrowLeft = __MaterialUI.Icons.NavigationSubdirectoryArrowLeft;
  export default NavigationSubdirectoryArrowLeft;
}

declare module 'material-ui/lib/svg-icons/navigation/expand-less' {
  export import NavigationExpandLess = __MaterialUI.Icons.NavigationExpandLess;
  export default NavigationExpandLess;
}

declare module 'material-ui/lib/svg-icons/navigation/refresh' {
  export import NavigationRefresh = __MaterialUI.Icons.NavigationRefresh;
  export default NavigationRefresh;
}

declare module 'material-ui/lib/svg-icons/navigation/more-vert' {
  export import NavigationMoreVert = __MaterialUI.Icons.NavigationMoreVert;
  export default NavigationMoreVert;
}

declare module 'material-ui/lib/svg-icons/notification/rv-hookup' {
  export import NotificationRvHookup = __MaterialUI.Icons.NotificationRvHookup;
  export default NotificationRvHookup;
}

declare module 'material-ui/lib/svg-icons/notification/no-encryption' {
  export import NotificationNoEncryption = __MaterialUI.Icons.NotificationNoEncryption;
  export default NotificationNoEncryption;
}

declare module 'material-ui/lib/svg-icons/notification/phone-forwarded' {
  export import NotificationPhoneForwarded = __MaterialUI.Icons.NotificationPhoneForwarded;
  export default NotificationPhoneForwarded;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-flat-angled' {
  export import NotificationAirlineSeatFlatAngled = __MaterialUI.Icons.NotificationAirlineSeatFlatAngled;
  export default NotificationAirlineSeatFlatAngled;
}

declare module 'material-ui/lib/svg-icons/notification/time-to-leave' {
  export import NotificationTimeToLeave = __MaterialUI.Icons.NotificationTimeToLeave;
  export default NotificationTimeToLeave;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-legroom-extra' {
  export import NotificationAirlineSeatLegroomExtra = __MaterialUI.Icons.NotificationAirlineSeatLegroomExtra;
  export default NotificationAirlineSeatLegroomExtra;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-recline-extra' {
  export import NotificationAirlineSeatReclineExtra = __MaterialUI.Icons.NotificationAirlineSeatReclineExtra;
  export default NotificationAirlineSeatReclineExtra;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-individual-suite' {
  export import NotificationAirlineSeatIndividualSuite = __MaterialUI.Icons.NotificationAirlineSeatIndividualSuite;
  export default NotificationAirlineSeatIndividualSuite;
}

declare module 'material-ui/lib/svg-icons/notification/vibration' {
  export import NotificationVibration = __MaterialUI.Icons.NotificationVibration;
  export default NotificationVibration;
}

declare module 'material-ui/lib/svg-icons/notification/sim-card-alert' {
  export import NotificationSimCardAlert = __MaterialUI.Icons.NotificationSimCardAlert;
  export default NotificationSimCardAlert;
}

declare module 'material-ui/lib/svg-icons/notification/sms-failed' {
  export import NotificationSmsFailed = __MaterialUI.Icons.NotificationSmsFailed;
  export default NotificationSmsFailed;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-flat' {
  export import NotificationAirlineSeatFlat = __MaterialUI.Icons.NotificationAirlineSeatFlat;
  export default NotificationAirlineSeatFlat;
}

declare module 'material-ui/lib/svg-icons/notification/do-not-disturb' {
  export import NotificationDoNotDisturb = __MaterialUI.Icons.NotificationDoNotDisturb;
  export default NotificationDoNotDisturb;
}

declare module 'material-ui/lib/svg-icons/notification/sync-problem' {
  export import NotificationSyncProblem = __MaterialUI.Icons.NotificationSyncProblem;
  export default NotificationSyncProblem;
}

declare module 'material-ui/lib/svg-icons/notification/event-available' {
  export import NotificationEventAvailable = __MaterialUI.Icons.NotificationEventAvailable;
  export default NotificationEventAvailable;
}

declare module 'material-ui/lib/svg-icons/notification/network-check' {
  export import NotificationNetworkCheck = __MaterialUI.Icons.NotificationNetworkCheck;
  export default NotificationNetworkCheck;
}

declare module 'material-ui/lib/svg-icons/notification/sms' {
  export import NotificationSms = __MaterialUI.Icons.NotificationSms;
  export default NotificationSms;
}

declare module 'material-ui/lib/svg-icons/notification/disc-full' {
  export import NotificationDiscFull = __MaterialUI.Icons.NotificationDiscFull;
  export default NotificationDiscFull;
}

declare module 'material-ui/lib/svg-icons/notification/do-not-disturb-alt' {
  export import NotificationDoNotDisturbAlt = __MaterialUI.Icons.NotificationDoNotDisturbAlt;
  export default NotificationDoNotDisturbAlt;
}

declare module 'material-ui/lib/svg-icons/notification/system-update' {
  export import NotificationSystemUpdate = __MaterialUI.Icons.NotificationSystemUpdate;
  export default NotificationSystemUpdate;
}

declare module 'material-ui/lib/svg-icons/notification/phone-bluetooth-speaker' {
  export import NotificationPhoneBluetoothSpeaker = __MaterialUI.Icons.NotificationPhoneBluetoothSpeaker;
  export default NotificationPhoneBluetoothSpeaker;
}

declare module 'material-ui/lib/svg-icons/notification/ondemand-video' {
  export import NotificationOndemandVideo = __MaterialUI.Icons.NotificationOndemandVideo;
  export default NotificationOndemandVideo;
}

declare module 'material-ui/lib/svg-icons/notification/power' {
  export import NotificationPower = __MaterialUI.Icons.NotificationPower;
  export default NotificationPower;
}

declare module 'material-ui/lib/svg-icons/notification/phone-locked' {
  export import NotificationPhoneLocked = __MaterialUI.Icons.NotificationPhoneLocked;
  export default NotificationPhoneLocked;
}

declare module 'material-ui/lib/svg-icons/notification/sd-card' {
  export import NotificationSdCard = __MaterialUI.Icons.NotificationSdCard;
  export default NotificationSdCard;
}

declare module 'material-ui/lib/svg-icons/notification/event-busy' {
  export import NotificationEventBusy = __MaterialUI.Icons.NotificationEventBusy;
  export default NotificationEventBusy;
}

declare module 'material-ui/lib/svg-icons/notification/personal-video' {
  export import NotificationPersonalVideo = __MaterialUI.Icons.NotificationPersonalVideo;
  export default NotificationPersonalVideo;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-legroom-normal' {
  export import NotificationAirlineSeatLegroomNormal = __MaterialUI.Icons.NotificationAirlineSeatLegroomNormal;
  export default NotificationAirlineSeatLegroomNormal;
}

declare module 'material-ui/lib/svg-icons/notification/phone-in-talk' {
  export import NotificationPhoneInTalk = __MaterialUI.Icons.NotificationPhoneInTalk;
  export default NotificationPhoneInTalk;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-legroom-reduced' {
  export import NotificationAirlineSeatLegroomReduced = __MaterialUI.Icons.NotificationAirlineSeatLegroomReduced;
  export default NotificationAirlineSeatLegroomReduced;
}

declare module 'material-ui/lib/svg-icons/notification/phone-paused' {
  export import NotificationPhonePaused = __MaterialUI.Icons.NotificationPhonePaused;
  export default NotificationPhonePaused;
}

declare module 'material-ui/lib/svg-icons/notification/sync-disabled' {
  export import NotificationSyncDisabled = __MaterialUI.Icons.NotificationSyncDisabled;
  export default NotificationSyncDisabled;
}

declare module 'material-ui/lib/svg-icons/notification/enhanced-encryption' {
  export import NotificationEnhancedEncryption = __MaterialUI.Icons.NotificationEnhancedEncryption;
  export default NotificationEnhancedEncryption;
}

declare module 'material-ui/lib/svg-icons/notification/mms' {
  export import NotificationMms = __MaterialUI.Icons.NotificationMms;
  export default NotificationMms;
}

declare module 'material-ui/lib/svg-icons/notification/drive-eta' {
  export import NotificationDriveEta = __MaterialUI.Icons.NotificationDriveEta;
  export default NotificationDriveEta;
}

declare module 'material-ui/lib/svg-icons/notification/voice-chat' {
  export import NotificationVoiceChat = __MaterialUI.Icons.NotificationVoiceChat;
  export default NotificationVoiceChat;
}

declare module 'material-ui/lib/svg-icons/notification/wifi' {
  export import NotificationWifi = __MaterialUI.Icons.NotificationWifi;
  export default NotificationWifi;
}

declare module 'material-ui/lib/svg-icons/notification/airline-seat-recline-normal' {
  export import NotificationAirlineSeatReclineNormal = __MaterialUI.Icons.NotificationAirlineSeatReclineNormal;
  export default NotificationAirlineSeatReclineNormal;
}

declare module 'material-ui/lib/svg-icons/notification/more' {
  export import NotificationMore = __MaterialUI.Icons.NotificationMore;
  export default NotificationMore;
}

declare module 'material-ui/lib/svg-icons/notification/vpn-lock' {
  export import NotificationVpnLock = __MaterialUI.Icons.NotificationVpnLock;
  export default NotificationVpnLock;
}

declare module 'material-ui/lib/svg-icons/notification/event-note' {
  export import NotificationEventNote = __MaterialUI.Icons.NotificationEventNote;
  export default NotificationEventNote;
}

declare module 'material-ui/lib/svg-icons/notification/confirmation-number' {
  export import NotificationConfirmationNumber = __MaterialUI.Icons.NotificationConfirmationNumber;
  export default NotificationConfirmationNumber;
}

declare module 'material-ui/lib/svg-icons/notification/network-locked' {
  export import NotificationNetworkLocked = __MaterialUI.Icons.NotificationNetworkLocked;
  export default NotificationNetworkLocked;
}

declare module 'material-ui/lib/svg-icons/notification/adb' {
  export import NotificationAdb = __MaterialUI.Icons.NotificationAdb;
  export default NotificationAdb;
}

declare module 'material-ui/lib/svg-icons/notification/bluetooth-audio' {
  export import NotificationBluetoothAudio = __MaterialUI.Icons.NotificationBluetoothAudio;
  export default NotificationBluetoothAudio;
}

declare module 'material-ui/lib/svg-icons/notification/wc' {
  export import NotificationWc = __MaterialUI.Icons.NotificationWc;
  export default NotificationWc;
}

declare module 'material-ui/lib/svg-icons/notification/tap-and-play' {
  export import NotificationTapAndPlay = __MaterialUI.Icons.NotificationTapAndPlay;
  export default NotificationTapAndPlay;
}

declare module 'material-ui/lib/svg-icons/notification/folder-special' {
  export import NotificationFolderSpecial = __MaterialUI.Icons.NotificationFolderSpecial;
  export default NotificationFolderSpecial;
}

declare module 'material-ui/lib/svg-icons/notification/live-tv' {
  export import NotificationLiveTv = __MaterialUI.Icons.NotificationLiveTv;
  export default NotificationLiveTv;
}

declare module 'material-ui/lib/svg-icons/notification/sync' {
  export import NotificationSync = __MaterialUI.Icons.NotificationSync;
  export default NotificationSync;
}

declare module 'material-ui/lib/svg-icons/notification/phone-missed' {
  export import NotificationPhoneMissed = __MaterialUI.Icons.NotificationPhoneMissed;
  export default NotificationPhoneMissed;
}

declare module 'material-ui/lib/svg-icons/av/skip-previous' {
  export import AvSkipPrevious = __MaterialUI.Icons.AvSkipPrevious;
  export default AvSkipPrevious;
}

declare module 'material-ui/lib/svg-icons/av/volume-off' {
  export import AvVolumeOff = __MaterialUI.Icons.AvVolumeOff;
  export default AvVolumeOff;
}

declare module 'material-ui/lib/svg-icons/av/subscriptions' {
  export import AvSubscriptions = __MaterialUI.Icons.AvSubscriptions;
  export default AvSubscriptions;
}

declare module 'material-ui/lib/svg-icons/av/play-arrow' {
  export import AvPlayArrow = __MaterialUI.Icons.AvPlayArrow;
  export default AvPlayArrow;
}

declare module 'material-ui/lib/svg-icons/av/play-circle-outline' {
  export import AvPlayCircleOutline = __MaterialUI.Icons.AvPlayCircleOutline;
  export default AvPlayCircleOutline;
}

declare module 'material-ui/lib/svg-icons/av/replay-30' {
  export import AvReplay30 = __MaterialUI.Icons.AvReplay30;
  export default AvReplay30;
}

declare module 'material-ui/lib/svg-icons/av/videocam' {
  export import AvVideocam = __MaterialUI.Icons.AvVideocam;
  export default AvVideocam;
}

declare module 'material-ui/lib/svg-icons/av/replay-5' {
  export import AvReplay5 = __MaterialUI.Icons.AvReplay5;
  export default AvReplay5;
}

declare module 'material-ui/lib/svg-icons/av/forward-10' {
  export import AvForward10 = __MaterialUI.Icons.AvForward10;
  export default AvForward10;
}

declare module 'material-ui/lib/svg-icons/av/recent-actors' {
  export import AvRecentActors = __MaterialUI.Icons.AvRecentActors;
  export default AvRecentActors;
}

declare module 'material-ui/lib/svg-icons/av/replay-10' {
  export import AvReplay10 = __MaterialUI.Icons.AvReplay10;
  export default AvReplay10;
}

declare module 'material-ui/lib/svg-icons/av/repeat' {
  export import AvRepeat = __MaterialUI.Icons.AvRepeat;
  export default AvRepeat;
}

declare module 'material-ui/lib/svg-icons/av/queue-music' {
  export import AvQueueMusic = __MaterialUI.Icons.AvQueueMusic;
  export default AvQueueMusic;
}

declare module 'material-ui/lib/svg-icons/av/fiber-pin' {
  export import AvFiberPin = __MaterialUI.Icons.AvFiberPin;
  export default AvFiberPin;
}

declare module 'material-ui/lib/svg-icons/av/new-releases' {
  export import AvNewReleases = __MaterialUI.Icons.AvNewReleases;
  export default AvNewReleases;
}

declare module 'material-ui/lib/svg-icons/av/fiber-new' {
  export import AvFiberNew = __MaterialUI.Icons.AvFiberNew;
  export default AvFiberNew;
}

declare module 'material-ui/lib/svg-icons/av/fiber-manual-record' {
  export import AvFiberManualRecord = __MaterialUI.Icons.AvFiberManualRecord;
  export default AvFiberManualRecord;
}

declare module 'material-ui/lib/svg-icons/av/hearing' {
  export import AvHearing = __MaterialUI.Icons.AvHearing;
  export default AvHearing;
}

declare module 'material-ui/lib/svg-icons/av/loop' {
  export import AvLoop = __MaterialUI.Icons.AvLoop;
  export default AvLoop;
}

declare module 'material-ui/lib/svg-icons/av/volume-up' {
  export import AvVolumeUp = __MaterialUI.Icons.AvVolumeUp;
  export default AvVolumeUp;
}

declare module 'material-ui/lib/svg-icons/av/high-quality' {
  export import AvHighQuality = __MaterialUI.Icons.AvHighQuality;
  export default AvHighQuality;
}

declare module 'material-ui/lib/svg-icons/av/surround-sound' {
  export import AvSurroundSound = __MaterialUI.Icons.AvSurroundSound;
  export default AvSurroundSound;
}

declare module 'material-ui/lib/svg-icons/av/equalizer' {
  export import AvEqualizer = __MaterialUI.Icons.AvEqualizer;
  export default AvEqualizer;
}

declare module 'material-ui/lib/svg-icons/av/music-video' {
  export import AvMusicVideo = __MaterialUI.Icons.AvMusicVideo;
  export default AvMusicVideo;
}

declare module 'material-ui/lib/svg-icons/av/shuffle' {
  export import AvShuffle = __MaterialUI.Icons.AvShuffle;
  export default AvShuffle;
}

declare module 'material-ui/lib/svg-icons/av/volume-down' {
  export import AvVolumeDown = __MaterialUI.Icons.AvVolumeDown;
  export default AvVolumeDown;
}

declare module 'material-ui/lib/svg-icons/av/radio' {
  export import AvRadio = __MaterialUI.Icons.AvRadio;
  export default AvRadio;
}

declare module 'material-ui/lib/svg-icons/av/web-asset' {
  export import AvWebAsset = __MaterialUI.Icons.AvWebAsset;
  export default AvWebAsset;
}

declare module 'material-ui/lib/svg-icons/av/replay' {
  export import AvReplay = __MaterialUI.Icons.AvReplay;
  export default AvReplay;
}

declare module 'material-ui/lib/svg-icons/av/queue-play-next' {
  export import AvQueuePlayNext = __MaterialUI.Icons.AvQueuePlayNext;
  export default AvQueuePlayNext;
}

declare module 'material-ui/lib/svg-icons/av/closed-caption' {
  export import AvClosedCaption = __MaterialUI.Icons.AvClosedCaption;
  export default AvClosedCaption;
}

declare module 'material-ui/lib/svg-icons/av/fiber-dvr' {
  export import AvFiberDvr = __MaterialUI.Icons.AvFiberDvr;
  export default AvFiberDvr;
}

declare module 'material-ui/lib/svg-icons/av/explicit' {
  export import AvExplicit = __MaterialUI.Icons.AvExplicit;
  export default AvExplicit;
}

declare module 'material-ui/lib/svg-icons/av/games' {
  export import AvGames = __MaterialUI.Icons.AvGames;
  export default AvGames;
}

declare module 'material-ui/lib/svg-icons/av/videocam-off' {
  export import AvVideocamOff = __MaterialUI.Icons.AvVideocamOff;
  export default AvVideocamOff;
}

declare module 'material-ui/lib/svg-icons/av/hd' {
  export import AvHd = __MaterialUI.Icons.AvHd;
  export default AvHd;
}

declare module 'material-ui/lib/svg-icons/av/fast-rewind' {
  export import AvFastRewind = __MaterialUI.Icons.AvFastRewind;
  export default AvFastRewind;
}

declare module 'material-ui/lib/svg-icons/av/add-to-queue' {
  export import AvAddToQueue = __MaterialUI.Icons.AvAddToQueue;
  export default AvAddToQueue;
}

declare module 'material-ui/lib/svg-icons/av/movie' {
  export import AvMovie = __MaterialUI.Icons.AvMovie;
  export default AvMovie;
}

declare module 'material-ui/lib/svg-icons/av/library-books' {
  export import AvLibraryBooks = __MaterialUI.Icons.AvLibraryBooks;
  export default AvLibraryBooks;
}

declare module 'material-ui/lib/svg-icons/av/art-track' {
  export import AvArtTrack = __MaterialUI.Icons.AvArtTrack;
  export default AvArtTrack;
}

declare module 'material-ui/lib/svg-icons/av/web' {
  export import AvWeb = __MaterialUI.Icons.AvWeb;
  export default AvWeb;
}

declare module 'material-ui/lib/svg-icons/av/play-circle-filled' {
  export import AvPlayCircleFilled = __MaterialUI.Icons.AvPlayCircleFilled;
  export default AvPlayCircleFilled;
}

declare module 'material-ui/lib/svg-icons/av/snooze' {
  export import AvSnooze = __MaterialUI.Icons.AvSnooze;
  export default AvSnooze;
}

declare module 'material-ui/lib/svg-icons/av/forward-5' {
  export import AvForward5 = __MaterialUI.Icons.AvForward5;
  export default AvForward5;
}

declare module 'material-ui/lib/svg-icons/av/sort-by-alpha' {
  export import AvSortByAlpha = __MaterialUI.Icons.AvSortByAlpha;
  export default AvSortByAlpha;
}

declare module 'material-ui/lib/svg-icons/av/pause-circle-filled' {
  export import AvPauseCircleFilled = __MaterialUI.Icons.AvPauseCircleFilled;
  export default AvPauseCircleFilled;
}

declare module 'material-ui/lib/svg-icons/av/fiber-smart-record' {
  export import AvFiberSmartRecord = __MaterialUI.Icons.AvFiberSmartRecord;
  export default AvFiberSmartRecord;
}

declare module 'material-ui/lib/svg-icons/av/stop' {
  export import AvStop = __MaterialUI.Icons.AvStop;
  export default AvStop;
}

declare module 'material-ui/lib/svg-icons/av/playlist-play' {
  export import AvPlaylistPlay = __MaterialUI.Icons.AvPlaylistPlay;
  export default AvPlaylistPlay;
}

declare module 'material-ui/lib/svg-icons/av/library-add' {
  export import AvLibraryAdd = __MaterialUI.Icons.AvLibraryAdd;
  export default AvLibraryAdd;
}

declare module 'material-ui/lib/svg-icons/av/volume-mute' {
  export import AvVolumeMute = __MaterialUI.Icons.AvVolumeMute;
  export default AvVolumeMute;
}

declare module 'material-ui/lib/svg-icons/av/skip-next' {
  export import AvSkipNext = __MaterialUI.Icons.AvSkipNext;
  export default AvSkipNext;
}

declare module 'material-ui/lib/svg-icons/av/forward-30' {
  export import AvForward30 = __MaterialUI.Icons.AvForward30;
  export default AvForward30;
}

declare module 'material-ui/lib/svg-icons/av/playlist-add' {
  export import AvPlaylistAdd = __MaterialUI.Icons.AvPlaylistAdd;
  export default AvPlaylistAdd;
}

declare module 'material-ui/lib/svg-icons/av/album' {
  export import AvAlbum = __MaterialUI.Icons.AvAlbum;
  export default AvAlbum;
}

declare module 'material-ui/lib/svg-icons/av/video-library' {
  export import AvVideoLibrary = __MaterialUI.Icons.AvVideoLibrary;
  export default AvVideoLibrary;
}

declare module 'material-ui/lib/svg-icons/av/library-music' {
  export import AvLibraryMusic = __MaterialUI.Icons.AvLibraryMusic;
  export default AvLibraryMusic;
}

declare module 'material-ui/lib/svg-icons/av/not-interested' {
  export import AvNotInterested = __MaterialUI.Icons.AvNotInterested;
  export default AvNotInterested;
}

declare module 'material-ui/lib/svg-icons/av/playlist-add-check' {
  export import AvPlaylistAddCheck = __MaterialUI.Icons.AvPlaylistAddCheck;
  export default AvPlaylistAddCheck;
}

declare module 'material-ui/lib/svg-icons/av/mic-none' {
  export import AvMicNone = __MaterialUI.Icons.AvMicNone;
  export default AvMicNone;
}

declare module 'material-ui/lib/svg-icons/av/pause' {
  export import AvPause = __MaterialUI.Icons.AvPause;
  export default AvPause;
}

declare module 'material-ui/lib/svg-icons/av/remove-from-queue' {
  export import AvRemoveFromQueue = __MaterialUI.Icons.AvRemoveFromQueue;
  export default AvRemoveFromQueue;
}

declare module 'material-ui/lib/svg-icons/av/slow-motion-video' {
  export import AvSlowMotionVideo = __MaterialUI.Icons.AvSlowMotionVideo;
  export default AvSlowMotionVideo;
}

declare module 'material-ui/lib/svg-icons/av/subtitles' {
  export import AvSubtitles = __MaterialUI.Icons.AvSubtitles;
  export default AvSubtitles;
}

declare module 'material-ui/lib/svg-icons/av/mic-off' {
  export import AvMicOff = __MaterialUI.Icons.AvMicOff;
  export default AvMicOff;
}

declare module 'material-ui/lib/svg-icons/av/repeat-one' {
  export import AvRepeatOne = __MaterialUI.Icons.AvRepeatOne;
  export default AvRepeatOne;
}

declare module 'material-ui/lib/svg-icons/av/queue' {
  export import AvQueue = __MaterialUI.Icons.AvQueue;
  export default AvQueue;
}

declare module 'material-ui/lib/svg-icons/av/fast-forward' {
  export import AvFastForward = __MaterialUI.Icons.AvFastForward;
  export default AvFastForward;
}

declare module 'material-ui/lib/svg-icons/av/mic' {
  export import AvMic = __MaterialUI.Icons.AvMic;
  export default AvMic;
}

declare module 'material-ui/lib/svg-icons/av/av-timer' {
  export import AvAvTimer = __MaterialUI.Icons.AvAvTimer;
  export default AvAvTimer;
}

declare module 'material-ui/lib/svg-icons/av/pause-circle-outline' {
  export import AvPauseCircleOutline = __MaterialUI.Icons.AvPauseCircleOutline;
  export default AvPauseCircleOutline;
}

declare module 'material-ui/lib/svg-icons/av/airplay' {
  export import AvAirplay = __MaterialUI.Icons.AvAirplay;
  export default AvAirplay;
}

declare module 'material-ui/lib/svg-icons/image/camera-rear' {
  export import ImageCameraRear = __MaterialUI.Icons.ImageCameraRear;
  export default ImageCameraRear;
}

declare module 'material-ui/lib/svg-icons/image/add-a-photo' {
  export import ImageAddAPhoto = __MaterialUI.Icons.ImageAddAPhoto;
  export default ImageAddAPhoto;
}

declare module 'material-ui/lib/svg-icons/image/portrait' {
  export import ImagePortrait = __MaterialUI.Icons.ImagePortrait;
  export default ImagePortrait;
}

declare module 'material-ui/lib/svg-icons/image/looks' {
  export import ImageLooks = __MaterialUI.Icons.ImageLooks;
  export default ImageLooks;
}

declare module 'material-ui/lib/svg-icons/image/exposure-neg-2' {
  export import ImageExposureNeg2 = __MaterialUI.Icons.ImageExposureNeg2;
  export default ImageExposureNeg2;
}

declare module 'material-ui/lib/svg-icons/image/wb-cloudy' {
  export import ImageWbCloudy = __MaterialUI.Icons.ImageWbCloudy;
  export default ImageWbCloudy;
}

declare module 'material-ui/lib/svg-icons/image/switch-video' {
  export import ImageSwitchVideo = __MaterialUI.Icons.ImageSwitchVideo;
  export default ImageSwitchVideo;
}

declare module 'material-ui/lib/svg-icons/image/wb-auto' {
  export import ImageWbAuto = __MaterialUI.Icons.ImageWbAuto;
  export default ImageWbAuto;
}

declare module 'material-ui/lib/svg-icons/image/filter-center-focus' {
  export import ImageFilterCenterFocus = __MaterialUI.Icons.ImageFilterCenterFocus;
  export default ImageFilterCenterFocus;
}

declare module 'material-ui/lib/svg-icons/image/crop-7-5' {
  export import ImageCrop75 = __MaterialUI.Icons.ImageCrop75;
  export default ImageCrop75;
}

declare module 'material-ui/lib/svg-icons/image/crop-3-2' {
  export import ImageCrop32 = __MaterialUI.Icons.ImageCrop32;
  export default ImageCrop32;
}

declare module 'material-ui/lib/svg-icons/image/assistant-photo' {
  export import ImageAssistantPhoto = __MaterialUI.Icons.ImageAssistantPhoto;
  export default ImageAssistantPhoto;
}

declare module 'material-ui/lib/svg-icons/image/looks-one' {
  export import ImageLooksOne = __MaterialUI.Icons.ImageLooksOne;
  export default ImageLooksOne;
}

declare module 'material-ui/lib/svg-icons/image/collections-bookmark' {
  export import ImageCollectionsBookmark = __MaterialUI.Icons.ImageCollectionsBookmark;
  export default ImageCollectionsBookmark;
}

declare module 'material-ui/lib/svg-icons/image/image-aspect-ratio' {
  export import ImageImageAspectRatio = __MaterialUI.Icons.ImageImageAspectRatio;
  export default ImageImageAspectRatio;
}

declare module 'material-ui/lib/svg-icons/image/brush' {
  export import ImageBrush = __MaterialUI.Icons.ImageBrush;
  export default ImageBrush;
}

declare module 'material-ui/lib/svg-icons/image/linked-camera' {
  export import ImageLinkedCamera = __MaterialUI.Icons.ImageLinkedCamera;
  export default ImageLinkedCamera;
}

declare module 'material-ui/lib/svg-icons/image/filter-1' {
  export import ImageFilter1 = __MaterialUI.Icons.ImageFilter1;
  export default ImageFilter1;
}

declare module 'material-ui/lib/svg-icons/image/edit' {
  export import ImageEdit = __MaterialUI.Icons.ImageEdit;
  export default ImageEdit;
}

declare module 'material-ui/lib/svg-icons/image/timelapse' {
  export import ImageTimelapse = __MaterialUI.Icons.ImageTimelapse;
  export default ImageTimelapse;
}

declare module 'material-ui/lib/svg-icons/image/nature' {
  export import ImageNature = __MaterialUI.Icons.ImageNature;
  export default ImageNature;
}

declare module 'material-ui/lib/svg-icons/image/monochrome-photos' {
  export import ImageMonochromePhotos = __MaterialUI.Icons.ImageMonochromePhotos;
  export default ImageMonochromePhotos;
}

declare module 'material-ui/lib/svg-icons/image/brightness-6' {
  export import ImageBrightness6 = __MaterialUI.Icons.ImageBrightness6;
  export default ImageBrightness6;
}

declare module 'material-ui/lib/svg-icons/image/music-note' {
  export import ImageMusicNote = __MaterialUI.Icons.ImageMusicNote;
  export default ImageMusicNote;
}

declare module 'material-ui/lib/svg-icons/image/collections' {
  export import ImageCollections = __MaterialUI.Icons.ImageCollections;
  export default ImageCollections;
}

declare module 'material-ui/lib/svg-icons/image/wb-sunny' {
  export import ImageWbSunny = __MaterialUI.Icons.ImageWbSunny;
  export default ImageWbSunny;
}

declare module 'material-ui/lib/svg-icons/image/hdr-strong' {
  export import ImageHdrStrong = __MaterialUI.Icons.ImageHdrStrong;
  export default ImageHdrStrong;
}

declare module 'material-ui/lib/svg-icons/image/panorama-vertical' {
  export import ImagePanoramaVertical = __MaterialUI.Icons.ImagePanoramaVertical;
  export default ImagePanoramaVertical;
}

declare module 'material-ui/lib/svg-icons/image/navigate-next' {
  export import ImageNavigateNext = __MaterialUI.Icons.ImageNavigateNext;
  export default ImageNavigateNext;
}

declare module 'material-ui/lib/svg-icons/image/looks-4' {
  export import ImageLooks4 = __MaterialUI.Icons.ImageLooks4;
  export default ImageLooks4;
}

declare module 'material-ui/lib/svg-icons/image/filter-4' {
  export import ImageFilter4 = __MaterialUI.Icons.ImageFilter4;
  export default ImageFilter4;
}

declare module 'material-ui/lib/svg-icons/image/brightness-1' {
  export import ImageBrightness1 = __MaterialUI.Icons.ImageBrightness1;
  export default ImageBrightness1;
}

declare module 'material-ui/lib/svg-icons/image/exposure-plus-1' {
  export import ImageExposurePlus1 = __MaterialUI.Icons.ImageExposurePlus1;
  export default ImageExposurePlus1;
}

declare module 'material-ui/lib/svg-icons/image/timer-3' {
  export import ImageTimer3 = __MaterialUI.Icons.ImageTimer3;
  export default ImageTimer3;
}

declare module 'material-ui/lib/svg-icons/image/exposure-zero' {
  export import ImageExposureZero = __MaterialUI.Icons.ImageExposureZero;
  export default ImageExposureZero;
}

declare module 'material-ui/lib/svg-icons/image/blur-linear' {
  export import ImageBlurLinear = __MaterialUI.Icons.ImageBlurLinear;
  export default ImageBlurLinear;
}

declare module 'material-ui/lib/svg-icons/image/photo-library' {
  export import ImagePhotoLibrary = __MaterialUI.Icons.ImagePhotoLibrary;
  export default ImagePhotoLibrary;
}

declare module 'material-ui/lib/svg-icons/image/filter-drama' {
  export import ImageFilterDrama = __MaterialUI.Icons.ImageFilterDrama;
  export default ImageFilterDrama;
}

declare module 'material-ui/lib/svg-icons/image/dehaze' {
  export import ImageDehaze = __MaterialUI.Icons.ImageDehaze;
  export default ImageDehaze;
}

declare module 'material-ui/lib/svg-icons/image/control-point-duplicate' {
  export import ImageControlPointDuplicate = __MaterialUI.Icons.ImageControlPointDuplicate;
  export default ImageControlPointDuplicate;
}

declare module 'material-ui/lib/svg-icons/image/image' {
  export import ImageImage = __MaterialUI.Icons.ImageImage;
  export default ImageImage;
}

declare module 'material-ui/lib/svg-icons/image/flash-auto' {
  export import ImageFlashAuto = __MaterialUI.Icons.ImageFlashAuto;
  export default ImageFlashAuto;
}

declare module 'material-ui/lib/svg-icons/image/rotate-90-degrees-ccw' {
  export import ImageRotate90DegreesCcw = __MaterialUI.Icons.ImageRotate90DegreesCcw;
  export default ImageRotate90DegreesCcw;
}

declare module 'material-ui/lib/svg-icons/image/blur-circular' {
  export import ImageBlurCircular = __MaterialUI.Icons.ImageBlurCircular;
  export default ImageBlurCircular;
}

declare module 'material-ui/lib/svg-icons/image/filter-3' {
  export import ImageFilter3 = __MaterialUI.Icons.ImageFilter3;
  export default ImageFilter3;
}

declare module 'material-ui/lib/svg-icons/image/exposure-plus-2' {
  export import ImageExposurePlus2 = __MaterialUI.Icons.ImageExposurePlus2;
  export default ImageExposurePlus2;
}

declare module 'material-ui/lib/svg-icons/image/flash-on' {
  export import ImageFlashOn = __MaterialUI.Icons.ImageFlashOn;
  export default ImageFlashOn;
}

declare module 'material-ui/lib/svg-icons/image/view-comfy' {
  export import ImageViewComfy = __MaterialUI.Icons.ImageViewComfy;
  export default ImageViewComfy;
}

declare module 'material-ui/lib/svg-icons/image/colorize' {
  export import ImageColorize = __MaterialUI.Icons.ImageColorize;
  export default ImageColorize;
}

declare module 'material-ui/lib/svg-icons/image/brightness-4' {
  export import ImageBrightness4 = __MaterialUI.Icons.ImageBrightness4;
  export default ImageBrightness4;
}

declare module 'material-ui/lib/svg-icons/image/crop-free' {
  export import ImageCropFree = __MaterialUI.Icons.ImageCropFree;
  export default ImageCropFree;
}

declare module 'material-ui/lib/svg-icons/image/vignette' {
  export import ImageVignette = __MaterialUI.Icons.ImageVignette;
  export default ImageVignette;
}

declare module 'material-ui/lib/svg-icons/image/tag-faces' {
  export import ImageTagFaces = __MaterialUI.Icons.ImageTagFaces;
  export default ImageTagFaces;
}

declare module 'material-ui/lib/svg-icons/image/brightness-7' {
  export import ImageBrightness7 = __MaterialUI.Icons.ImageBrightness7;
  export default ImageBrightness7;
}

declare module 'material-ui/lib/svg-icons/image/healing' {
  export import ImageHealing = __MaterialUI.Icons.ImageHealing;
  export default ImageHealing;
}

declare module 'material-ui/lib/svg-icons/image/nature-people' {
  export import ImageNaturePeople = __MaterialUI.Icons.ImageNaturePeople;
  export default ImageNaturePeople;
}

declare module 'material-ui/lib/svg-icons/image/gradient' {
  export import ImageGradient = __MaterialUI.Icons.ImageGradient;
  export default ImageGradient;
}

declare module 'material-ui/lib/svg-icons/image/flash-off' {
  export import ImageFlashOff = __MaterialUI.Icons.ImageFlashOff;
  export default ImageFlashOff;
}

declare module 'material-ui/lib/svg-icons/image/movie-creation' {
  export import ImageMovieCreation = __MaterialUI.Icons.ImageMovieCreation;
  export default ImageMovieCreation;
}

declare module 'material-ui/lib/svg-icons/image/leak-add' {
  export import ImageLeakAdd = __MaterialUI.Icons.ImageLeakAdd;
  export default ImageLeakAdd;
}

declare module 'material-ui/lib/svg-icons/image/filter-5' {
  export import ImageFilter5 = __MaterialUI.Icons.ImageFilter5;
  export default ImageFilter5;
}

declare module 'material-ui/lib/svg-icons/image/photo' {
  export import ImagePhoto = __MaterialUI.Icons.ImagePhoto;
  export default ImagePhoto;
}

declare module 'material-ui/lib/svg-icons/image/color-lens' {
  export import ImageColorLens = __MaterialUI.Icons.ImageColorLens;
  export default ImageColorLens;
}

declare module 'material-ui/lib/svg-icons/image/broken-image' {
  export import ImageBrokenImage = __MaterialUI.Icons.ImageBrokenImage;
  export default ImageBrokenImage;
}

declare module 'material-ui/lib/svg-icons/image/looks-6' {
  export import ImageLooks6 = __MaterialUI.Icons.ImageLooks6;
  export default ImageLooks6;
}

declare module 'material-ui/lib/svg-icons/image/picture-as-pdf' {
  export import ImagePictureAsPdf = __MaterialUI.Icons.ImagePictureAsPdf;
  export default ImagePictureAsPdf;
}

declare module 'material-ui/lib/svg-icons/image/palette' {
  export import ImagePalette = __MaterialUI.Icons.ImagePalette;
  export default ImagePalette;
}

declare module 'material-ui/lib/svg-icons/image/crop-landscape' {
  export import ImageCropLandscape = __MaterialUI.Icons.ImageCropLandscape;
  export default ImageCropLandscape;
}

declare module 'material-ui/lib/svg-icons/image/grid-on' {
  export import ImageGridOn = __MaterialUI.Icons.ImageGridOn;
  export default ImageGridOn;
}

declare module 'material-ui/lib/svg-icons/image/slideshow' {
  export import ImageSlideshow = __MaterialUI.Icons.ImageSlideshow;
  export default ImageSlideshow;
}

declare module 'material-ui/lib/svg-icons/image/brightness-3' {
  export import ImageBrightness3 = __MaterialUI.Icons.ImageBrightness3;
  export default ImageBrightness3;
}

declare module 'material-ui/lib/svg-icons/image/style' {
  export import ImageStyle = __MaterialUI.Icons.ImageStyle;
  export default ImageStyle;
}

declare module 'material-ui/lib/svg-icons/image/filter-vintage' {
  export import ImageFilterVintage = __MaterialUI.Icons.ImageFilterVintage;
  export default ImageFilterVintage;
}

declare module 'material-ui/lib/svg-icons/image/tune' {
  export import ImageTune = __MaterialUI.Icons.ImageTune;
  export default ImageTune;
}

declare module 'material-ui/lib/svg-icons/image/camera' {
  export import ImageCamera = __MaterialUI.Icons.ImageCamera;
  export default ImageCamera;
}

declare module 'material-ui/lib/svg-icons/image/timer' {
  export import ImageTimer = __MaterialUI.Icons.ImageTimer;
  export default ImageTimer;
}

declare module 'material-ui/lib/svg-icons/image/landscape' {
  export import ImageLandscape = __MaterialUI.Icons.ImageLandscape;
  export default ImageLandscape;
}

declare module 'material-ui/lib/svg-icons/image/crop-16-9' {
  export import ImageCrop169 = __MaterialUI.Icons.ImageCrop169;
  export default ImageCrop169;
}

declare module 'material-ui/lib/svg-icons/image/add-to-photos' {
  export import ImageAddToPhotos = __MaterialUI.Icons.ImageAddToPhotos;
  export default ImageAddToPhotos;
}

declare module 'material-ui/lib/svg-icons/image/wb-incandescent' {
  export import ImageWbIncandescent = __MaterialUI.Icons.ImageWbIncandescent;
  export default ImageWbIncandescent;
}

declare module 'material-ui/lib/svg-icons/image/hdr-weak' {
  export import ImageHdrWeak = __MaterialUI.Icons.ImageHdrWeak;
  export default ImageHdrWeak;
}

declare module 'material-ui/lib/svg-icons/image/details' {
  export import ImageDetails = __MaterialUI.Icons.ImageDetails;
  export default ImageDetails;
}

declare module 'material-ui/lib/svg-icons/image/view-compact' {
  export import ImageViewCompact = __MaterialUI.Icons.ImageViewCompact;
  export default ImageViewCompact;
}

declare module 'material-ui/lib/svg-icons/image/brightness-5' {
  export import ImageBrightness5 = __MaterialUI.Icons.ImageBrightness5;
  export default ImageBrightness5;
}

declare module 'material-ui/lib/svg-icons/image/center-focus-weak' {
  export import ImageCenterFocusWeak = __MaterialUI.Icons.ImageCenterFocusWeak;
  export default ImageCenterFocusWeak;
}

declare module 'material-ui/lib/svg-icons/image/adjust' {
  export import ImageAdjust = __MaterialUI.Icons.ImageAdjust;
  export default ImageAdjust;
}

declare module 'material-ui/lib/svg-icons/image/camera-front' {
  export import ImageCameraFront = __MaterialUI.Icons.ImageCameraFront;
  export default ImageCameraFront;
}

declare module 'material-ui/lib/svg-icons/image/transform' {
  export import ImageTransform = __MaterialUI.Icons.ImageTransform;
  export default ImageTransform;
}

declare module 'material-ui/lib/svg-icons/image/filter' {
  export import ImageFilter = __MaterialUI.Icons.ImageFilter;
  export default ImageFilter;
}

declare module 'material-ui/lib/svg-icons/image/grain' {
  export import ImageGrain = __MaterialUI.Icons.ImageGrain;
  export default ImageGrain;
}

declare module 'material-ui/lib/svg-icons/image/filter-9-plus' {
  export import ImageFilter9Plus = __MaterialUI.Icons.ImageFilter9Plus;
  export default ImageFilter9Plus;
}

declare module 'material-ui/lib/svg-icons/image/looks-5' {
  export import ImageLooks5 = __MaterialUI.Icons.ImageLooks5;
  export default ImageLooks5;
}

declare module 'material-ui/lib/svg-icons/image/hdr-on' {
  export import ImageHdrOn = __MaterialUI.Icons.ImageHdrOn;
  export default ImageHdrOn;
}

declare module 'material-ui/lib/svg-icons/image/audiotrack' {
  export import ImageAudiotrack = __MaterialUI.Icons.ImageAudiotrack;
  export default ImageAudiotrack;
}

declare module 'material-ui/lib/svg-icons/image/compare' {
  export import ImageCompare = __MaterialUI.Icons.ImageCompare;
  export default ImageCompare;
}

declare module 'material-ui/lib/svg-icons/image/crop' {
  export import ImageCrop = __MaterialUI.Icons.ImageCrop;
  export default ImageCrop;
}

declare module 'material-ui/lib/svg-icons/image/texture' {
  export import ImageTexture = __MaterialUI.Icons.ImageTexture;
  export default ImageTexture;
}

declare module 'material-ui/lib/svg-icons/image/movie-filter' {
  export import ImageMovieFilter = __MaterialUI.Icons.ImageMovieFilter;
  export default ImageMovieFilter;
}

declare module 'material-ui/lib/svg-icons/image/exposure' {
  export import ImageExposure = __MaterialUI.Icons.ImageExposure;
  export default ImageExposure;
}

declare module 'material-ui/lib/svg-icons/image/filter-b-and-w' {
  export import ImageFilterBAndW = __MaterialUI.Icons.ImageFilterBAndW;
  export default ImageFilterBAndW;
}

declare module 'material-ui/lib/svg-icons/image/photo-size-select-actual' {
  export import ImagePhotoSizeSelectActual = __MaterialUI.Icons.ImagePhotoSizeSelectActual;
  export default ImagePhotoSizeSelectActual;
}

declare module 'material-ui/lib/svg-icons/image/crop-5-4' {
  export import ImageCrop54 = __MaterialUI.Icons.ImageCrop54;
  export default ImageCrop54;
}

declare module 'material-ui/lib/svg-icons/image/brightness-2' {
  export import ImageBrightness2 = __MaterialUI.Icons.ImageBrightness2;
  export default ImageBrightness2;
}

declare module 'material-ui/lib/svg-icons/image/tonality' {
  export import ImageTonality = __MaterialUI.Icons.ImageTonality;
  export default ImageTonality;
}

declare module 'material-ui/lib/svg-icons/image/panorama-wide-angle' {
  export import ImagePanoramaWideAngle = __MaterialUI.Icons.ImagePanoramaWideAngle;
  export default ImagePanoramaWideAngle;
}

declare module 'material-ui/lib/svg-icons/image/flip' {
  export import ImageFlip = __MaterialUI.Icons.ImageFlip;
  export default ImageFlip;
}

declare module 'material-ui/lib/svg-icons/image/filter-9' {
  export import ImageFilter9 = __MaterialUI.Icons.ImageFilter9;
  export default ImageFilter9;
}

declare module 'material-ui/lib/svg-icons/image/blur-on' {
  export import ImageBlurOn = __MaterialUI.Icons.ImageBlurOn;
  export default ImageBlurOn;
}

declare module 'material-ui/lib/svg-icons/image/assistant' {
  export import ImageAssistant = __MaterialUI.Icons.ImageAssistant;
  export default ImageAssistant;
}

declare module 'material-ui/lib/svg-icons/image/lens' {
  export import ImageLens = __MaterialUI.Icons.ImageLens;
  export default ImageLens;
}

declare module 'material-ui/lib/svg-icons/image/switch-camera' {
  export import ImageSwitchCamera = __MaterialUI.Icons.ImageSwitchCamera;
  export default ImageSwitchCamera;
}

declare module 'material-ui/lib/svg-icons/image/photo-filter' {
  export import ImagePhotoFilter = __MaterialUI.Icons.ImagePhotoFilter;
  export default ImagePhotoFilter;
}

declare module 'material-ui/lib/svg-icons/image/wb-iridescent' {
  export import ImageWbIridescent = __MaterialUI.Icons.ImageWbIridescent;
  export default ImageWbIridescent;
}

declare module 'material-ui/lib/svg-icons/image/crop-square' {
  export import ImageCropSquare = __MaterialUI.Icons.ImageCropSquare;
  export default ImageCropSquare;
}

declare module 'material-ui/lib/svg-icons/image/timer-10' {
  export import ImageTimer10 = __MaterialUI.Icons.ImageTimer10;
  export default ImageTimer10;
}

declare module 'material-ui/lib/svg-icons/image/rotate-right' {
  export import ImageRotateRight = __MaterialUI.Icons.ImageRotateRight;
  export default ImageRotateRight;
}

declare module 'material-ui/lib/svg-icons/image/grid-off' {
  export import ImageGridOff = __MaterialUI.Icons.ImageGridOff;
  export default ImageGridOff;
}

declare module 'material-ui/lib/svg-icons/image/filter-7' {
  export import ImageFilter7 = __MaterialUI.Icons.ImageFilter7;
  export default ImageFilter7;
}

declare module 'material-ui/lib/svg-icons/image/loupe' {
  export import ImageLoupe = __MaterialUI.Icons.ImageLoupe;
  export default ImageLoupe;
}

declare module 'material-ui/lib/svg-icons/image/filter-6' {
  export import ImageFilter6 = __MaterialUI.Icons.ImageFilter6;
  export default ImageFilter6;
}

declare module 'material-ui/lib/svg-icons/image/filter-tilt-shift' {
  export import ImageFilterTiltShift = __MaterialUI.Icons.ImageFilterTiltShift;
  export default ImageFilterTiltShift;
}

declare module 'material-ui/lib/svg-icons/image/crop-din' {
  export import ImageCropDin = __MaterialUI.Icons.ImageCropDin;
  export default ImageCropDin;
}

declare module 'material-ui/lib/svg-icons/image/center-focus-strong' {
  export import ImageCenterFocusStrong = __MaterialUI.Icons.ImageCenterFocusStrong;
  export default ImageCenterFocusStrong;
}

declare module 'material-ui/lib/svg-icons/image/rotate-left' {
  export import ImageRotateLeft = __MaterialUI.Icons.ImageRotateLeft;
  export default ImageRotateLeft;
}

declare module 'material-ui/lib/svg-icons/image/filter-hdr' {
  export import ImageFilterHdr = __MaterialUI.Icons.ImageFilterHdr;
  export default ImageFilterHdr;
}

declare module 'material-ui/lib/svg-icons/image/timer-off' {
  export import ImageTimerOff = __MaterialUI.Icons.ImageTimerOff;
  export default ImageTimerOff;
}

declare module 'material-ui/lib/svg-icons/image/straighten' {
  export import ImageStraighten = __MaterialUI.Icons.ImageStraighten;
  export default ImageStraighten;
}

declare module 'material-ui/lib/svg-icons/image/exposure-neg-1' {
  export import ImageExposureNeg1 = __MaterialUI.Icons.ImageExposureNeg1;
  export default ImageExposureNeg1;
}

declare module 'material-ui/lib/svg-icons/image/navigate-before' {
  export import ImageNavigateBefore = __MaterialUI.Icons.ImageNavigateBefore;
  export default ImageNavigateBefore;
}

declare module 'material-ui/lib/svg-icons/image/iso' {
  export import ImageIso = __MaterialUI.Icons.ImageIso;
  export default ImageIso;
}

declare module 'material-ui/lib/svg-icons/image/photo-album' {
  export import ImagePhotoAlbum = __MaterialUI.Icons.ImagePhotoAlbum;
  export default ImagePhotoAlbum;
}

declare module 'material-ui/lib/svg-icons/image/crop-rotate' {
  export import ImageCropRotate = __MaterialUI.Icons.ImageCropRotate;
  export default ImageCropRotate;
}

declare module 'material-ui/lib/svg-icons/image/remove-red-eye' {
  export import ImageRemoveRedEye = __MaterialUI.Icons.ImageRemoveRedEye;
  export default ImageRemoveRedEye;
}

declare module 'material-ui/lib/svg-icons/image/crop-portrait' {
  export import ImageCropPortrait = __MaterialUI.Icons.ImageCropPortrait;
  export default ImageCropPortrait;
}

declare module 'material-ui/lib/svg-icons/image/camera-alt' {
  export import ImageCameraAlt = __MaterialUI.Icons.ImageCameraAlt;
  export default ImageCameraAlt;
}

declare module 'material-ui/lib/svg-icons/image/control-point' {
  export import ImageControlPoint = __MaterialUI.Icons.ImageControlPoint;
  export default ImageControlPoint;
}

declare module 'material-ui/lib/svg-icons/image/panorama' {
  export import ImagePanorama = __MaterialUI.Icons.ImagePanorama;
  export default ImagePanorama;
}

declare module 'material-ui/lib/svg-icons/image/panorama-fish-eye' {
  export import ImagePanoramaFishEye = __MaterialUI.Icons.ImagePanoramaFishEye;
  export default ImagePanoramaFishEye;
}

declare module 'material-ui/lib/svg-icons/image/filter-8' {
  export import ImageFilter8 = __MaterialUI.Icons.ImageFilter8;
  export default ImageFilter8;
}

declare module 'material-ui/lib/svg-icons/image/looks-two' {
  export import ImageLooksTwo = __MaterialUI.Icons.ImageLooksTwo;
  export default ImageLooksTwo;
}

declare module 'material-ui/lib/svg-icons/image/panorama-horizontal' {
  export import ImagePanoramaHorizontal = __MaterialUI.Icons.ImagePanoramaHorizontal;
  export default ImagePanoramaHorizontal;
}

declare module 'material-ui/lib/svg-icons/image/looks-3' {
  export import ImageLooks3 = __MaterialUI.Icons.ImageLooks3;
  export default ImageLooks3;
}

declare module 'material-ui/lib/svg-icons/image/filter-none' {
  export import ImageFilterNone = __MaterialUI.Icons.ImageFilterNone;
  export default ImageFilterNone;
}

declare module 'material-ui/lib/svg-icons/image/photo-size-select-large' {
  export import ImagePhotoSizeSelectLarge = __MaterialUI.Icons.ImagePhotoSizeSelectLarge;
  export default ImagePhotoSizeSelectLarge;
}

declare module 'material-ui/lib/svg-icons/image/blur-off' {
  export import ImageBlurOff = __MaterialUI.Icons.ImageBlurOff;
  export default ImageBlurOff;
}

declare module 'material-ui/lib/svg-icons/image/camera-roll' {
  export import ImageCameraRoll = __MaterialUI.Icons.ImageCameraRoll;
  export default ImageCameraRoll;
}

declare module 'material-ui/lib/svg-icons/image/leak-remove' {
  export import ImageLeakRemove = __MaterialUI.Icons.ImageLeakRemove;
  export default ImageLeakRemove;
}

declare module 'material-ui/lib/svg-icons/image/filter-frames' {
  export import ImageFilterFrames = __MaterialUI.Icons.ImageFilterFrames;
  export default ImageFilterFrames;
}

declare module 'material-ui/lib/svg-icons/image/flare' {
  export import ImageFlare = __MaterialUI.Icons.ImageFlare;
  export default ImageFlare;
}

declare module 'material-ui/lib/svg-icons/image/photo-size-select-small' {
  export import ImagePhotoSizeSelectSmall = __MaterialUI.Icons.ImagePhotoSizeSelectSmall;
  export default ImagePhotoSizeSelectSmall;
}

declare module 'material-ui/lib/svg-icons/image/photo-camera' {
  export import ImagePhotoCamera = __MaterialUI.Icons.ImagePhotoCamera;
  export default ImagePhotoCamera;
}

declare module 'material-ui/lib/svg-icons/image/hdr-off' {
  export import ImageHdrOff = __MaterialUI.Icons.ImageHdrOff;
  export default ImageHdrOff;
}

declare module 'material-ui/lib/svg-icons/image/filter-2' {
  export import ImageFilter2 = __MaterialUI.Icons.ImageFilter2;
  export default ImageFilter2;
}

declare module 'material-ui/lib/svg-icons/image/crop-original' {
  export import ImageCropOriginal = __MaterialUI.Icons.ImageCropOriginal;
  export default ImageCropOriginal;
}

declare module 'material-ui/lib/svg-icons/places/kitchen' {
  export import PlacesKitchen = __MaterialUI.Icons.PlacesKitchen;
  export default PlacesKitchen;
}

declare module 'material-ui/lib/svg-icons/places/spa' {
  export import PlacesSpa = __MaterialUI.Icons.PlacesSpa;
  export default PlacesSpa;
}

declare module 'material-ui/lib/svg-icons/places/all-inclusive' {
  export import PlacesAllInclusive = __MaterialUI.Icons.PlacesAllInclusive;
  export default PlacesAllInclusive;
}

declare module 'material-ui/lib/svg-icons/places/ac-unit' {
  export import PlacesAcUnit = __MaterialUI.Icons.PlacesAcUnit;
  export default PlacesAcUnit;
}

declare module 'material-ui/lib/svg-icons/places/child-care' {
  export import PlacesChildCare = __MaterialUI.Icons.PlacesChildCare;
  export default PlacesChildCare;
}

declare module 'material-ui/lib/svg-icons/places/golf-course' {
  export import PlacesGolfCourse = __MaterialUI.Icons.PlacesGolfCourse;
  export default PlacesGolfCourse;
}

declare module 'material-ui/lib/svg-icons/places/business-center' {
  export import PlacesBusinessCenter = __MaterialUI.Icons.PlacesBusinessCenter;
  export default PlacesBusinessCenter;
}

declare module 'material-ui/lib/svg-icons/places/free-breakfast' {
  export import PlacesFreeBreakfast = __MaterialUI.Icons.PlacesFreeBreakfast;
  export default PlacesFreeBreakfast;
}

declare module 'material-ui/lib/svg-icons/places/fitness-center' {
  export import PlacesFitnessCenter = __MaterialUI.Icons.PlacesFitnessCenter;
  export default PlacesFitnessCenter;
}

declare module 'material-ui/lib/svg-icons/places/pool' {
  export import PlacesPool = __MaterialUI.Icons.PlacesPool;
  export default PlacesPool;
}

declare module 'material-ui/lib/svg-icons/places/child-friendly' {
  export import PlacesChildFriendly = __MaterialUI.Icons.PlacesChildFriendly;
  export default PlacesChildFriendly;
}

declare module 'material-ui/lib/svg-icons/places/casino' {
  export import PlacesCasino = __MaterialUI.Icons.PlacesCasino;
  export default PlacesCasino;
}

declare module 'material-ui/lib/svg-icons/places/hot-tub' {
  export import PlacesHotTub = __MaterialUI.Icons.PlacesHotTub;
  export default PlacesHotTub;
}

declare module 'material-ui/lib/svg-icons/places/smoke-free' {
  export import PlacesSmokeFree = __MaterialUI.Icons.PlacesSmokeFree;
  export default PlacesSmokeFree;
}

declare module 'material-ui/lib/svg-icons/places/room-service' {
  export import PlacesRoomService = __MaterialUI.Icons.PlacesRoomService;
  export default PlacesRoomService;
}

declare module 'material-ui/lib/svg-icons/places/smoking-rooms' {
  export import PlacesSmokingRooms = __MaterialUI.Icons.PlacesSmokingRooms;
  export default PlacesSmokingRooms;
}

declare module 'material-ui/lib/svg-icons/places/beach-access' {
  export import PlacesBeachAccess = __MaterialUI.Icons.PlacesBeachAccess;
  export default PlacesBeachAccess;
}

declare module 'material-ui/lib/svg-icons/places/airport-shuttle' {
  export import PlacesAirportShuttle = __MaterialUI.Icons.PlacesAirportShuttle;
  export default PlacesAirportShuttle;
}


declare module 'material-ui/lib/styles/' {
    export import AutoPrefix = __MaterialUI.Styles.AutoPrefix; // require('material-ui/lib/styles/auto-prefix');
    export import Colors = __MaterialUI.Styles.Colors; // require('material-ui/lib/styles/colors');
    export import Spacing = require('material-ui/lib/styles/spacing');
    export import ThemeManager = __MaterialUI.Styles.ThemeManager; // require('material-ui/lib/styles/theme-manager');
    export import Transitions = __MaterialUI.Styles.Transitions; // require('material-ui/lib/styles/transitions');
    export import Typography = __MaterialUI.Styles.Typography; // require('material-ui/lib/styles/typography');
    export import LightRawTheme = __MaterialUI.Styles.LightRawTheme; // require('material-ui/lib/styles/raw-themes/light-raw-theme'),
    export import DarkRawTheme = __MaterialUI.Styles.DarkRawTheme; // require('material-ui/lib/styles/raw-themes/dark-raw-theme'),
    export import ThemeDecorator = __MaterialUI.Styles.ThemeDecorator; //require('material-ui/lib/styles/theme-decorator');
}

declare module 'material-ui/lib/styles/auto-prefix' {
    export import AutoPrefix = __MaterialUI.Styles.AutoPrefix;
    export default AutoPrefix;
}

declare module 'material-ui/lib/styles/spacing' {
    type Spacing = __MaterialUI.Styles.Spacing;
    var Spacing: Spacing;
    export default Spacing;
}

declare module 'material-ui/lib/styles/theme-manager' {
    export import ThemeManager = __MaterialUI.Styles.ThemeManager;
    export default ThemeManager;
}

declare module 'material-ui/lib/styles/transitions' {
    export import Transitions = __MaterialUI.Styles.Transitions;
    export default Transitions;
}

declare module 'material-ui/lib/styles/typography' {
    export import Typography = __MaterialUI.Styles.Typography;
    export default Typography;
}

declare module 'material-ui/lib/styles/raw-themes/light-raw-theme' {
    export import LightRawTheme = __MaterialUI.Styles.LightRawTheme;
    export default LightRawTheme;
}

declare module 'material-ui/lib/styles/raw-themes/dark-raw-theme' {
    export import DarkRawTheme = __MaterialUI.Styles.DarkRawTheme;
    export default DarkRawTheme;
}

declare module 'material-ui/lib/styles/theme-decorator' {
    export import ThemeDecorator = __MaterialUI.Styles.ThemeDecorator;
    export default ThemeDecorator;
}


declare module 'material-ui/lib/snackbar' {
    export import Snackbar = __MaterialUI.Snackbar;
    export default Snackbar;
}

declare module 'material-ui/lib/tabs/tab' {
    export import Tab = __MaterialUI.Tabs.Tab;
    export default Tab;
}

declare module 'material-ui/lib/tabs/tabs' {
    export import Tabs = __MaterialUI.Tabs.Tabs;
    export default Tabs;
}

declare module 'material-ui/lib/table/table' {
    export import Table = __MaterialUI.Table.Table;
    export default Table;
}

declare module 'material-ui/lib/table/table-body' {
    export import TableBody = __MaterialUI.Table.TableBody;
    export default TableBody;
}

declare module 'material-ui/lib/table/table-footer' {
    export import TableFooter = __MaterialUI.Table.TableFooter;
    export default TableFooter;
}

declare module 'material-ui/lib/table/table-header' {
    export import TableHeader = __MaterialUI.Table.TableHeader;
    export default TableHeader;
}

declare module 'material-ui/lib/table/table-header-column' {
    export import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn;
    export default TableHeaderColumn;
}

declare module 'material-ui/lib/table/table-row' {
    export import TableRow = __MaterialUI.Table.TableRow;
    export default TableRow;
}

declare module 'material-ui/lib/table/table-row-column' {
    export import TableRowColumn = __MaterialUI.Table.TableRowColumn;
    export default TableRowColumn;
}

declare module 'material-ui/lib/theme-wrapper' {
    export import ThemeWrapper = __MaterialUI.ThemeWrapper;
    export default ThemeWrapper;
}

declare module 'material-ui/lib/toggle' {
    export import Toggle = __MaterialUI.Toggle;
    export default Toggle;
}

declare module 'material-ui/lib/time-picker' {
    export import TimePicker = __MaterialUI.TimePicker;
    export default TimePicker;
}

declare module 'material-ui/lib/text-field' {
    export import TextField = __MaterialUI.TextField;
    export default TextField;
}

declare module 'material-ui/lib/toolbar/toolbar' {
    export import Toolbar = __MaterialUI.Toolbar.Toolbar;
    export default Toolbar;
}

declare module 'material-ui/lib/toolbar/toolbar-group' {
    export import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup;
    export default ToolbarGroup;
}

declare module 'material-ui/lib/toolbar/toolbar-separator' {
    export import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator;
    export default ToolbarSeparator;
}

declare module 'material-ui/lib/toolbar/toolbar-title' {
    export import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle;
    export default ToolbarTitle;
}

declare module 'material-ui/lib/tooltip' {
    export import Tooltip = __MaterialUI.Tooltip;
    export default Tooltip;
}

declare module 'material-ui/lib/utils/' {
    export import ColorManipulator = __MaterialUI.Utils.ColorManipulator; // require('material-ui/lib/utils/color-manipulator');
    export import CssEvent = __MaterialUI.Utils.CssEvent; // require('material-ui/lib/utils/css-event');
    export import Dom = __MaterialUI.Utils.Dom; // require('material-ui/lib/utils/dom');
    export import Events = __MaterialUI.Utils.Events; // require('material-ui/lib/utils/events');
    export import Extend = __MaterialUI.Utils.Extend; // require('material-ui/lib/utils/extend');
    export import ImmutabilityHelper = __MaterialUI.Utils.ImmutabilityHelper; // require('material-ui/lib/utils/immutability-helper');
    export import KeyCode = __MaterialUI.Utils.KeyCode; // require('material-ui/lib/utils/key-code');
    export import KeyLine = __MaterialUI.Utils.KeyLine; // require('material-ui/lib/utils/key-line');
    export import UniqueId = __MaterialUI.Utils.UniqueId; // require('material-ui/lib/utils/unique-id');
    export import Styles = __MaterialUI.Utils.Styles; // require('material-ui/lib/utils/styles');
}

declare module 'material-ui/lib/utils/color-manipulator' {
    export import ColorManipulator = __MaterialUI.Utils.ColorManipulator;
    export default ColorManipulator;
}

declare module 'material-ui/lib/utils/css-event' {
    export import CssEvent = __MaterialUI.Utils.CssEvent;
    export default CssEvent;
}

declare module 'material-ui/lib/utils/dom' {
    export import Dom = __MaterialUI.Utils.Dom;
    export default Dom;
}

declare module 'material-ui/lib/utils/events' {
    export import Events = __MaterialUI.Utils.Events;
    export default Events;
}

declare module 'material-ui/lib/utils/extend' {
    export import Extend = __MaterialUI.Utils.Extend;
    export default Extend;
}

declare module 'material-ui/lib/utils/immutability-helper' {
    export import ImmutabilityHelper = __MaterialUI.Utils.ImmutabilityHelper;
    export default ImmutabilityHelper;
}

declare module 'material-ui/lib/utils/key-code' {
    export import KeyCode = __MaterialUI.Utils.KeyCode;
    export default KeyCode;
}

declare module 'material-ui/lib/utils/key-line' {
    export import KeyLine = __MaterialUI.Utils.KeyLine;
    export default KeyLine;
}

declare module 'material-ui/lib/utils/unique-id' {
    export import UniqueId = __MaterialUI.Utils.UniqueId;
    export default UniqueId;
}

declare module 'material-ui/lib/utils/styles' {
    export import Styles = __MaterialUI.Utils.Styles;
    export default Styles;
}

declare module "material-ui/lib/menus/icon-menu" {
    export import IconMenu = __MaterialUI.Menus.IconMenu;
    export default IconMenu;
}

declare module "material-ui/lib/menus/menu" {
    export import Menu = __MaterialUI.Menus.Menu;
    export default Menu;
}

declare module "material-ui/lib/menus/menu-item" {
    export import MenuItem = __MaterialUI.Menus.MenuItem;
    export default MenuItem;
}

declare module "material-ui/lib/divider" {
    export import Divider = __MaterialUI.Divider;
    export default Divider;
}

declare module "material-ui/lib/grid-list/grid-list" {
    export import GridList = __MaterialUI.GridList.GridList;
    export default GridList;
}

declare module "material-ui/lib/grid-list/grid-tile" {
    export import GridTile = __MaterialUI.GridList.GridTile;
    export default GridTile;
}

declare module "material-ui/lib/styles/colors" {
    export import Colors = __MaterialUI.Styles.Colors;
    export default Colors;
}

declare namespace __MaterialUI.Styles {
    interface Colors {
        red50: string;
        red100: string;
        red200: string;
        red300: string;
        red400: string;
        red500: string;
        red600: string;
        red700: string;
        red800: string;
        red900: string;
        redA100: string;
        redA200: string;
        redA400: string;
        redA700: string;

        pink50: string;
        pink100: string;
        pink200: string;
        pink300: string;
        pink400: string;
        pink500: string;
        pink600: string;
        pink700: string;
        pink800: string;
        pink900: string;
        pinkA100: string;
        pinkA200: string;
        pinkA400: string;
        pinkA700: string;

        purple50: string;
        purple100: string;
        purple200: string;
        purple300: string;
        purple400: string;
        purple500: string;
        purple600: string;
        purple700: string;
        purple800: string;
        purple900: string;
        purpleA100: string;
        purpleA200: string;
        purpleA400: string;
        purpleA700: string;

        deepPurple50: string;
        deepPurple100: string;
        deepPurple200: string;
        deepPurple300: string;
        deepPurple400: string;
        deepPurple500: string;
        deepPurple600: string;
        deepPurple700: string;
        deepPurple800: string;
        deepPurple900: string;
        deepPurpleA100: string;
        deepPurpleA200: string;
        deepPurpleA400: string;
        deepPurpleA700: string;

        indigo50: string;
        indigo100: string;
        indigo200: string;
        indigo300: string;
        indigo400: string;
        indigo500: string;
        indigo600: string;
        indigo700: string;
        indigo800: string;
        indigo900: string;
        indigoA100: string;
        indigoA200: string;
        indigoA400: string;
        indigoA700: string;

        blue50: string;
        blue100: string;
        blue200: string;
        blue300: string;
        blue400: string;
        blue500: string;
        blue600: string;
        blue700: string;
        blue800: string;
        blue900: string;
        blueA100: string;
        blueA200: string;
        blueA400: string;
        blueA700: string;

        lightBlue50: string;
        lightBlue100: string;
        lightBlue200: string;
        lightBlue300: string;
        lightBlue400: string;
        lightBlue500: string;
        lightBlue600: string;
        lightBlue700: string;
        lightBlue800: string;
        lightBlue900: string;
        lightBlueA100: string;
        lightBlueA200: string;
        lightBlueA400: string;
        lightBlueA700: string;

        cyan50: string;
        cyan100: string;
        cyan200: string;
        cyan300: string;
        cyan400: string;
        cyan500: string;
        cyan600: string;
        cyan700: string;
        cyan800: string;
        cyan900: string;
        cyanA100: string;
        cyanA200: string;
        cyanA400: string;
        cyanA700: string;

        teal50: string;
        teal100: string;
        teal200: string;
        teal300: string;
        teal400: string;
        teal500: string;
        teal600: string;
        teal700: string;
        teal800: string;
        teal900: string;
        tealA100: string;
        tealA200: string;
        tealA400: string;
        tealA700: string;

        green50: string;
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        green600: string;
        green700: string;
        green800: string;
        green900: string;
        greenA100: string;
        greenA200: string;
        greenA400: string;
        greenA700: string;

        lightGreen50: string;
        lightGreen100: string;
        lightGreen200: string;
        lightGreen300: string;
        lightGreen400: string;
        lightGreen500: string;
        lightGreen600: string;
        lightGreen700: string;
        lightGreen800: string;
        lightGreen900: string;
        lightGreenA100: string;
        lightGreenA200: string;
        lightGreenA400: string;
        lightGreenA700: string;

        lime50: string;
        lime100: string;
        lime200: string;
        lime300: string;
        lime400: string;
        lime500: string;
        lime600: string;
        lime700: string;
        lime800: string;
        lime900: string;
        limeA100: string;
        limeA200: string;
        limeA400: string;
        limeA700: string;

        yellow50: string;
        yellow100: string;
        yellow200: string;
        yellow300: string;
        yellow400: string;
        yellow500: string;
        yellow600: string;
        yellow700: string;
        yellow800: string;
        yellow900: string;
        yellowA100: string;
        yellowA200: string;
        yellowA400: string;
        yellowA700: string;

        amber50: string;
        amber100: string;
        amber200: string;
        amber300: string;
        amber400: string;
        amber500: string;
        amber600: string;
        amber700: string;
        amber800: string;
        amber900: string;
        amberA100: string;
        amberA200: string;
        amberA400: string;
        amberA700: string;

        orange50: string;
        orange100: string;
        orange200: string;
        orange300: string;
        orange400: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
        orangeA100: string;
        orangeA200: string;
        orangeA400: string;
        orangeA700: string;

        deepOrange50: string;
        deepOrange100: string;
        deepOrange200: string;
        deepOrange300: string;
        deepOrange400: string;
        deepOrange500: string;
        deepOrange600: string;
        deepOrange700: string;
        deepOrange800: string;
        deepOrange900: string;
        deepOrangeA100: string;
        deepOrangeA200: string;
        deepOrangeA400: string;
        deepOrangeA700: string;

        brown50: string;
        brown100: string;
        brown200: string;
        brown300: string;
        brown400: string;
        brown500: string;
        brown600: string;
        brown700: string;
        brown800: string;
        brown900: string;

        blueGrey50: string;
        blueGrey100: string;
        blueGrey200: string;
        blueGrey300: string;
        blueGrey400: string;
        blueGrey500: string;
        blueGrey600: string;
        blueGrey700: string;
        blueGrey800: string;
        blueGrey900: string;

        grey50: string;
        grey100: string;
        grey200: string;
        grey300: string;
        grey400: string;
        grey500: string;
        grey600: string;
        grey700: string;
        grey800: string;
        grey900: string;

        black: string;
        white: string;

        transparent: string;
        fullBlack: string;
        darkBlack: string;
        lightBlack: string;
        minBlack: string;
        faintBlack: string;
        fullWhite: string;
        darkWhite: string;
        lightWhite: string;
    }
    export var Colors: Colors;
}
