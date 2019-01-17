const EMOJIS = {
	love: '❤️',
	happy: '😆',
	surprised: '😮',
	sad: '😢',
	angry: '😡',
};

/**
 * This mixin provides mapping of emoji names to emoji HTML characters
 *
 * @polymer
 * @mixinFunction
 */
export const EmojiReactionMixin = parent => class EmojiReactionMixinImpl extends parent {
	getEmoji(name) {
		return EMOJIS[name];
	}

	getAllEmojis() {
		return Object.keys(EMOJIS).map(name => ({
			name,
			emoji: EMOJIS[name],
		}));
	}
};
