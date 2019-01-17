import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { EmojiReactionMixin } from './emoji-reaction-mixin.js';

/**
A Polymer component that shows one emoji reaction

@demo demo/index.html
*/
class EmojiReaction extends EmojiReactionMixin(PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: inline-block;
				font-size: var(--emoji-reaction-font-size, 32px);
				font-family: "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", Times, Symbola, Aegyptus, Code2000, Code2001, Code2002, Musica, serif, LastResort;
			}
		</style>

		[[getEmoji(value)]]`;
	}

	static get is() {
		return 'emoji-reaction';
	}

	static get properties() {
		return {
			value: String,
		}
	}
}
window.customElements.define(EmojiReaction.is, EmojiReaction);
