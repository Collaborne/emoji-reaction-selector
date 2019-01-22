import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-selector/iron-selector';

import {EmojiReactionMixin} from './emoji-reaction-mixin.js';

/**
A Polymer component that allows to select between a set of predefined emojis

The available emojis to be selected are five: 'love', 'happy', 'surprised', 'sad', 'angry'

@demo demo/index.html
*/
class EmojiReactionSelector extends EmojiReactionMixin(PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: inline-block;
			}

			.selector {
				display: block;
				@apply --layout-horizontal;
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
		</style>

		<iron-selector class="selector" attr-for-selected="name" selected="{{selected}}" selected-attribute="selected">
			<template is="dom-repeat" items="[[getAllEmojis()]]" as="emoji">
				<div class="item" name="[[emoji.name]]">[[emoji.emoji]]</div>
			</template>
		</iron-selector>`;
	}

	static get is() {
		return 'emoji-reaction-selector';
	}

	static get properties() {
		return {
			selected: {
				notify: true,
				type: String,
			},
		};
	}
}
window.customElements.define(EmojiReactionSelector.is, EmojiReactionSelector);
