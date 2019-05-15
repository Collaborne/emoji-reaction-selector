import { css, customElement, html, LitElement, property } from 'lit-element';
import { Emoji, getIcon } from './emojis';

/**
 * Element that shows one emoji reaction
 */
@customElement('emoji-reaction')
export class EmojiReaction extends LitElement {
	@property({type: String})
	public value?: Emoji;

	static get styles() {
		return css`
			:host {
				display: inline-block;
				font-size: var(--emoji-reaction-font-size, 32px);
				font-family: "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", Times, Symbola, Aegyptus, Code2000, Code2001, Code2002, Musica, serif, LastResort;
			}
		`;
	}

	protected render() {
		return html`${getIcon(this.value)}`;
	}
}
