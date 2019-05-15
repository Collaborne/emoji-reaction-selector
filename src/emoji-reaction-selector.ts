import { css, customElement, html, LitElement, property } from 'lit-element';

import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-selector/iron-selector';

import { Emoji, EMOJIS } from './emojis';

/**
 * A component that allows to select between a set of predefined emojis
 */
@customElement('emoji-reaction-selector')
export class EmojiReactionSelector extends LitElement {
	@property({type: String})
	public selected?: Emoji;

	static get styles() {
		return css`
			:host {
				display: inline-block;
			}

			.selector {
				display: block;
				display: flex;
				flex-direction: row;
				height: 42px;
			}

			.item {
				padding: 0 4px;
				width: 40px;
				font-size: 32px;
				cursor: pointer;
				text-align: center;
				vertical-align: middle;
				line-height: 40px;
				font-family: "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", Times, Symbola, Aegyptus, Code2000, Code2001, Code2002, Musica, serif, LastResort;
			}

			.item:hover {
				font-size: 40px;
			}

			.iron-selected {
				font-size: 40px;
			}
		`;
	}

	protected render() {
		return html`
			<iron-selector
				.selected="${this.selected}"
				attr-for-selected="emoji"
				selected-attribute="selected"
				class="selector"
				@selected-changed="${this.onSelectedChanged}">
				${EMOJIS.map(emojiDef => html`
					<div class="item" emoji="${emojiDef.id}">${emojiDef.icon}</div>
				`)}
			</iron-selector>
		`;
	}

	private onSelectedChanged(e: any) {
		this.selected = e.detail.value;

		this.dispatchEvent(new CustomEvent('selected-changed', {
			detail: {
				value: this.selected,
			},
		}));
	}
}
