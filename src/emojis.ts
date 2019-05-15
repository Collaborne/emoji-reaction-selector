export type Emoji = 'angry' | 'happy' | 'love' | 'sad' | 'surprised';

interface EmojiDef {
	id: Emoji;
	icon: string;
}
export const EMOJIS: EmojiDef[] = [
	{ id: 'angry', icon: '😡' },
	{ id: 'happy', icon: '😆' },
	{ id: 'love', icon: '❤️' },
	{ id: 'sad', icon: '😢' },
	{ id: 'surprised', icon: '😮' },
];

export function getIcon(emoji: Emoji | undefined): string | undefined {
	const emojiDef = EMOJIS.find(aEmoji => aEmoji.id === emoji);
	return emojiDef ? emojiDef.icon : undefined;
}
