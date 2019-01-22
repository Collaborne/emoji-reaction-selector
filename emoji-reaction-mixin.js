const EMOJIS = {
	angry: '😡',
	happy: '😆',
	love: '❤️',
	sad: '😢',
	surprised: '😮',
};

/**
 * This mixin provides mapping of emoji names to emoji HTML characters
 */

export const EmojiReactionMixin = parent => class EmojiReactionMixinImpl extends parent {
	getEmoji(name) {
		return EMOJIS[name];
	}

	getAllEmojis() {
		return Object.keys(EMOJIS).map(name => ({
			emoji: EMOJIS[name],
			name,
		}));
	}
};
