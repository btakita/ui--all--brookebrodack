// https://codepen.io/AllThingsSmitty/pen/VzXrgY
// https://codepen.io/lvrbrtsn/pen/QbrozK
// language=css
export default ()=>`
	.group:hover .neon-teal, .neon-teal:hover {
		color: #000;
		text-shadow:
			0 0 2px #fff,
			0 0 4px #fff,
			0 0 8px #fff,
			0 0 16px #0ff,
			0 0 32px #0ff,
			0 0 36px #0ff,
			0 0 40px #0ff,
			0 0 60px #0ff;
	}
	@media (prefers-color-scheme: dark) {
		.group:hover .neon-teal, .neon-teal:hover {
			color: #fff;
		}
	}
	@-moz-keyframes neon-blink {
		70% {
			opacity: 0.7;
		}
	}
	@-webkit-keyframes neon-blink {
		45% {
			opacity: 0.5;
		}
	}
	@-o-keyframes neon-blink {
		70% {
			opacity: 0.7;
		}
	}
	@keyframes neon-blink {
		70% {
			opacity: 0.7;
		}
	}
	@media (prefers-color-scheme: dark) {
		@-moz-keyframes neon-blink {
			70% {
				opacity: 0.9;
			}
		}
		@-webkit-keyframes neon-blink {
			45% {
				opacity: 0.75;
			}
		}
		@-o-keyframes neon-blink {
			70% {
				opacity: 0.9;
			}
		}
		@keyframes neon-blink {
			70% {
				opacity: 0.9;
			}
		}
	}
	@-moz-keyframes neon-fade {
		40% {
			opacity: 0.8;
		}
		42% {
			opacity: 0.1;
		}
		43% {
			opacity: 0.8;
		}
		45% {
			opacity: 0.1;
		}
		46% {
			opacity: 0.8;
		}
	}
	@-webkit-keyframes neon-fade {
		40% {
			opacity: 0.8;
		}
		42% {
			opacity: 0.1;
		}
		43% {
			opacity: 0.8;
		}
		45% {
			opacity: 0.1;
		}
		46% {
			opacity: 0.8;
		}
	}
	@-o-keyframes neon-fade {
		40% {
			opacity: 0.8;
		}
		42% {
			opacity: 0.1;
		}
		43% {
			opacity: 0.8;
		}
		45% {
			opacity: 0.1;
		}
		46% {
			opacity: 0.8;
		}
	}
	@keyframes neon-fade {
		40% {
			opacity: 0.8;
		}
		42% {
			opacity: 0.1;
		}
		43% {
			opacity: 0.8;
		}
		45% {
			opacity: 0.1;
		}
		46% {
			opacity: 0.8;
		}
	}
`
