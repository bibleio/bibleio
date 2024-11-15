export const bibleioTheme = {
	theme: {
		colors: {
			transparent: "transparent",
			// materials
			DEFAULT: "var(--bg-1)",
			"bg-1": "var(--bg-1)",
			"fg-1": "var(--fg-1)",
			"fg-2": "var(--fg-2)",
			stroke: "var(--stroke)",
			text: "var(--text)",
			"text-solid": "var(--text-solid)",
			"text-subtle": "var(--text-subtle)",
			"text-reversed": "var(--text-reversed)",
			"text-reversed-solid": "var(--text-reversed-solid)",
			"text-reversed-subtle": "var(--text-reversed-subtle)",
			// colors
			accent: "var(--accent)",
			red: "var(--red)",
			orange: "var(--orange)",
			yellow: "var(--yellow)",
			lime: "var(--lime)",
			green: "var(--green)",
			teal: "var(--teal)",
			blue: "var(--blue)",
			purple: "var(--purple)",
			pink: "var(--pink)",
			gray: "var(--gray)",
			// reversed colors
			"accent-reversed": "var(--accent-reversed)",
			"red-reversed": "var(--red-reversed)",
			"orange-reversed": "var(--orange-reversed)",
			"yellow-reversed": "var(--yellow-reversed)",
			"lime-reversed": "var(--lime-reversed)",
			"green-reversed": "var(--green-reversed)",
			"teal-reversed": "var(--teal-reversed)",
			"blue-reversed": "var(--blue-reversed)",
			"purple-reversed": "var(--purple-reversed)",
			"pink-reversed": "var(--pink-reversed)",
			"gray-reversed": "var(--gray-reversed)",
		},
		boxShadow: {
			"colored-component":
				"0px 3px 4.7px 0px var(--inner-shadow-1) inset, 0px -3px 11px 1px var(--inner-shadow-2) inset, 0px 2px 8px 0px rgba(0, 0, 0, 0.05)",
			"material-component":
				"0px -2px 12px 0px var(--inner-shadow-2) inset, 0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
			popup: "0px 4px 49.6px 0px rgba(0, 0, 0, 0.15)",
		},
		borderRadius: {
			4: "0.25rem",
			8: "0.5rem",
			12: "0.75rem",
			16: "1rem",
			24: "1.5rem",
			32: "2rem",
			full: "999rem",
		},
		spacing: {
			256: "256px",
			200: "200px",
			128: "128px",
			110: "110px",
			96: "96px",
			86: "86px",
			72: "72px",
			64: "64px",
			56: "56px",
			48: "48px",
			36: "36px",
			32: "32px",
			30: "30px",
			28: "28px",
			24: "24px",
			20: "20px",
			18: "18px",
			16: "16px",
			14: "14px",
			12: "12px",
			10: "10px",
			8: "8px",
			6: "6px",
			4: "4px",
			2: "2px",
			0: "0px",
		},
		fontFamily: {
			serif: [
				"'Lora'",
				"'Lora Variable'",
				"'Times New Roman'",
				"Times",
				"serif",
			],
			mono: [
				"'JetBrains Mono'",
				"'JetBrains Mono Variable'",
				"ui-monospace",
				"monospace",
			],
		},
		fontSize: {
			sub: "0.75rem",
			mono: "0.875rem",
			body: "0.9375rem",
			h4: "1.1875rem",
			h3: "1.5625rem",
			h2: "2rem",
			h1: "3.125rem",
		},
		extend: {
			opacity: {
				33: ".33",
			},
			keyframes: {
				"scale-in": {
					from: { opacity: "0", transform: "scale(0.95)" },
					to: { opacity: "1", transform: "scale(1)" },
				},
				"scale-out": {
					from: { opacity: "1", transform: "scale(1)" },
					to: { opacity: "0", transform: "scale(0.95)" },
				},
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				"fade-out": {
					from: { opacity: "1" },
					to: { opacity: "0" },
				},
				spin: {
					from: { rotate: "0deg" },
					to: { rotate: "360deg" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				"scale-in": "scale-in 150ms ease-out",
				"scale-out": "scale-out 150ms ease-out",
				"fade-in": "fade-in 150ms ease-out",
				"fade-out": "fade-out 150ms ease-out",
				"caret-blink": "caret-blink 1.2s ease-out infinite",
				spin: "spin 2s linear infinite",
				"spin-slow": "spin 15s linear infinite",
			},
		},
	},
};
