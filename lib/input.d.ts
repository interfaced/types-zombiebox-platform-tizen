import AbstractInput from 'zombiebox/zb/device/abstract-input';
import Keys from 'zombiebox/zb/device/input/keys';

export default class Input extends AbstractInput {
	constructor();
	isPointingDeviceSupported(): boolean;
	enablePointingDevice(): void;
	disablePointingDevice(opt_timeout?: number): void;
	registerButton(button: TvKeyName): void;
	protected _createKeysMap(): { [key: number]: Keys };
	protected _registerDefaultButtons(): void;
}

export enum TvKeyCode {
	KEY_LEFT = 37,
	KEY_UP = 38,
	KEY_RIGHT = 39,
	KEY_DOWN = 40,
	KEY_ENTER = 13,
	KEY_BACK = 10009,

	KEY_1 = 49,
	KEY_2 = 50,
	KEY_3 = 51,
	KEY_4 = 52,
	KEY_5 = 53,
	KEY_6 = 54,
	KEY_7 = 55,
	KEY_8 = 56,
	KEY_9 = 57,
	KEY_0 = 48,

	KEY_MEDIA_PLAY = 415,
	KEY_MEDIA_PAUSE = 19,
	KEY_MEDIA_PLAY_PAUSE = 10252,
	KEY_MEDIA_STOP = 413,
	KEY_MEDIA_REWIND = 412,
	KEY_MEDIA_FAST_FORWARD = 417,

	KEY_MEDIA_TRACK_NEXT = 10233,
	KEY_MEDIA_TRACK_PREVIOUS = 10232,
	KEY_MEDIA_RECORD = 416,

	KEY_COLOR_F0_RED = 403,
	KEY_COLOR_F1_GREEN = 404,
	KEY_COLOR_F2_YELLOW = 405,
	KEY_COLOR_F3_BLUE = 406,

	KEY_CAPTION = 10221,
	KEY_CHANNEL_DOWN = 428,
	KEY_CHANNEL_LIST = 10073,
	KEY_CHANNEL_UP = 427,

	KEY_VOLUME_DOWN = 448,
	KEY_VOLUME_MUTE = 449,
	KEY_VOLUME_UP = 447,

	KEY_E_MANUAL = 10146,
	KEY_EXIT = 10182,

	KEY_MTS = 10195,
	KEY_EXTRA = 10253,
	KEY_GUIDE = 458,
	KEY_INFO = 457,

	KEY_MENU = 457,
	KEY_MINUS = 189,
	KEY_PICTURE_SIZE = 10140,

	KEY_PREVIOUS_CHANNEL = 10190,
	KEY_SEARCH = 10225,
	KEY_SOCCER = 10228,

	KEY_SOURCE = 10072,
	KEY_TELETEXT = 10200,
	KEY_TOOLS = 10135,
}

export enum TvKeyName {
	KEY_1 = '1',
	KEY_2 = '2',
	KEY_3 = '3',
	KEY_4 = '4',
	KEY_5 = '5',
	KEY_6 = '6',
	KEY_7 = '7',
	KEY_8 = '8',
	KEY_9 = '9',
	KEY_0 = '0',

	KEY_MEDIA_PLAY = 'MediaPlay',
	KEY_MEDIA_PAUSE = 'MediaPause',
	KEY_MEDIA_PLAY_PAUSE = 'MediaPlayPause',
	KEY_MEDIA_STOP = 'MediaStop',
	KEY_MEDIA_REWIND = 'MediaRewind',
	KEY_MEDIA_FAST_FORWARD = 'MediaFastForward',

	KEY_MEDIA_TRACK_NEXT = 'MediaTrackNext',
	KEY_MEDIA_TRACK_PREVIOUS = 'MediaTrackPrevious',
	KEY_MEDIA_RECORD = 'MediaRecord',

	KEY_COLOR_F0_RED = 'ColorF0Red',
	KEY_COLOR_F1_GREEN = 'ColorF1Green',
	KEY_COLOR_F2_YELLOW = 'ColorF2Yellow',
	KEY_COLOR_F3_BLUE = 'ColorF3Blue',

	KEY_CAPTION = 'Caption',
	KEY_CHANNEL_DOWN = 'ChannelDown',
	KEY_CHANNEL_LIST = 'ChannelList',
	KEY_CHANNEL_UP = 'ChannelUp',

	KEY_VOLUME_DOWN = 'VolumeDown',
	KEY_VOLUME_MUTE = 'VolumeMute',
	KEY_VOLUME_UP = 'VolumeUp',

	KEY_E_MANUAL = 'E-Manual',
	KEY_EXIT = 'Exit',

	KEY_MTS = 'MTS',
	KEY_EXTRA = 'Extra',
	KEY_GUIDE = 'Guide',
	KEY_INFO = 'Info',

	KEY_MENU = 'Menu',
	KEY_MINUS = 'Minus',
	KEY_PICTURE_SIZE = 'PictureSize',

	KEY_PREVIOUS_CHANNEL = 'PreviousChannel',
	KEY_SEARCH = 'Search',
	KEY_SOCCER = 'Soccer',

	KEY_SOURCE = 'Source',
	KEY_TELETEXT = 'Teletext',
	KEY_TOOLS = 'Tools',
}
