import React from "react";

export type LogoProps = {
	size: number;
	subText?: string;
};

/**
 * Logo
 * @param size - the height in px
 * @param subText - any subtext of the logo, ex. Bibleio Design
 * @returns the text logo
 */
export const Logo = ({ size = 32, subText }: LogoProps) => {
	function formatSize(
		size: number,
		aspectRatio: number,
	): { width: number; height: number } {
		const heightPx = size;
		const widthPx = Math.round(heightPx * aspectRatio);

		const heightRem = Number((heightPx / 16).toFixed(3));
		const widthRem = Number((widthPx / 16).toFixed(3));

		return { width: widthRem, height: heightRem };
	}

	const svgSize = formatSize(size, 228 / 128);

	return (
		<div
			className="flex items-center"
			style={{ gap: `${svgSize.width / 64}rem` }}
		>
			<svg
				width={`${svgSize.width}rem`}
				height={`${svgSize.height}rem`}
				viewBox="0 0 228 128"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M93.1562 5.52786C92.7646 6.73292 92.7646 8.22195 92.7646 11.2V32L71.9646 32C68.9866 32 67.4976 32 66.2925 32.3915C63.857 33.1829 61.9475 35.0924 61.1562 37.5279C60.7646 38.7329 60.7646 40.2219 60.7646 43.2V44.8C60.7646 47.778 60.7646 49.2671 61.1562 50.4721C61.9475 52.9076 63.857 54.8171 66.2925 55.6085C67.4976 56 68.9866 56 71.9646 56H92.7646V116.8C92.7646 119.778 92.7646 121.267 93.1562 122.472C93.9475 124.908 95.857 126.817 98.2925 127.608C99.4976 128 100.987 128 103.965 128H105.565C108.543 128 110.032 128 111.237 127.608C113.672 126.817 115.582 124.908 116.373 122.472C116.765 121.267 116.765 119.778 116.765 116.8V56H137.565C140.543 56 142.032 56 143.237 55.6085C145.672 54.8171 147.582 52.9076 148.373 50.4721C148.765 49.2671 148.765 47.7781 148.765 44.8V43.2C148.765 40.222 148.765 38.7329 148.373 37.5279C147.582 35.0924 145.672 33.1829 143.237 32.3915C142.032 32 140.543 32 137.565 32L116.765 32V11.2C116.765 8.22195 116.765 6.73292 116.373 5.52786C115.582 3.09236 113.672 1.18289 111.237 0.391548C110.032 0 108.543 0 105.565 0H103.965C100.987 0 99.4976 0 98.2925 0.391548C95.857 1.18289 93.9475 3.09236 93.1562 5.52786Z"
					className="fill-accent"
				/>
				<path
					d="M19.584 39.816C25.2 39.816 29.52 40.824 32.544 42.84C35.568 44.856 36.912 48.024 36.576 52.344C36.432 53.832 35.904 55.32 34.992 56.808C34.128 58.296 32.832 59.616 31.104 60.768C29.424 61.92 27.288 62.736 24.696 63.216V63.36C29.832 63.552 33.6 64.872 36 67.32C38.4 69.72 39.48 72.672 39.24 76.176C39.096 79.152 38.232 81.696 36.648 83.808C35.112 85.92 33.048 87.552 30.456 88.704C27.864 89.808 24.936 90.36 21.672 90.36H0L0.144 87.408C1.776 87.36 2.952 87.024 3.672 86.4C4.44 85.728 4.92 84.768 5.112 83.52C5.352 82.272 5.52 80.736 5.616 78.912L7.2 49.32C7.248 48.024 7.32 46.872 7.416 45.864C7.512 44.856 7.608 44.04 7.704 43.416C6.888 43.464 6 43.512 5.04 43.56C4.08 43.608 3.216 43.656 2.448 43.704L2.664 39.96C5.448 39.96 8.208 39.936 10.944 39.888C13.728 39.84 16.608 39.816 19.584 39.816ZM20.376 65.808C18.984 65.808 17.736 65.832 16.632 65.88C15.528 65.88 14.424 65.904 13.32 65.952L12.528 81.072C12.48 82.368 12.384 83.52 12.24 84.528C12.144 85.488 12.048 86.28 11.952 86.904C12.768 86.952 13.68 86.976 14.688 86.976C15.696 86.976 16.632 86.976 17.496 86.976C18.408 86.976 19.08 86.976 19.512 86.976C23.016 86.928 25.824 86.016 27.936 84.24C30.096 82.416 31.272 79.824 31.464 76.464C31.608 73.776 31.152 71.664 30.096 70.128C29.088 68.544 27.72 67.44 25.992 66.816C24.312 66.144 22.44 65.808 20.376 65.808ZM19.656 42.984C18.312 42.984 17.256 43.176 16.488 43.56C15.72 43.944 15.168 44.64 14.832 45.648C14.496 46.608 14.28 47.976 14.184 49.752L13.464 62.64C14.328 62.64 15.168 62.64 15.984 62.64C16.848 62.592 17.64 62.544 18.36 62.496C20.952 62.352 23.016 61.776 24.552 60.768C26.136 59.76 27.288 58.488 28.008 56.952C28.728 55.368 29.112 53.688 29.16 51.912C29.256 49.464 28.8 47.616 27.792 46.368C26.832 45.072 25.608 44.184 24.12 43.704C22.632 43.224 21.144 42.984 19.656 42.984Z"
					className="fill-text-solid"
				/>
				<path
					d="M51.2606 53.568C53.3726 53.568 54.9326 54.264 55.9406 55.656C56.9486 57.048 57.4526 58.92 57.4526 61.272C57.4526 62.616 57.3086 64.248 57.0206 66.168C56.7806 68.04 56.4686 70.032 56.0846 72.144C55.7486 74.256 55.4366 76.344 55.1486 78.408C54.9086 80.472 54.7886 82.368 54.7886 84.096C54.7886 85.008 54.9566 85.704 55.2926 86.184C55.6286 86.616 56.1086 86.832 56.7326 86.832C57.5006 86.832 58.3166 86.328 59.1806 85.32C60.0926 84.312 60.9086 82.584 61.6286 80.136L64.0766 80.712C63.8846 81.72 63.5486 82.848 63.0686 84.096C62.5886 85.296 61.9646 86.424 61.1966 87.48C60.4286 88.536 59.4926 89.424 58.3886 90.144C57.2846 90.816 56.0366 91.152 54.6446 91.152C52.3406 91.152 50.6606 90.552 49.6046 89.352C48.5966 88.104 48.0926 86.328 48.0926 84.024C48.0926 82.104 48.2126 80.16 48.4526 78.192C48.7406 76.224 49.0526 74.256 49.3886 72.288C49.7726 70.32 50.0846 68.376 50.3246 66.456C50.6126 64.536 50.7566 62.664 50.7566 60.84C50.7566 60.168 50.6126 59.52 50.3246 58.896C50.0846 58.224 49.6286 57.888 48.9566 57.888C48.2366 57.888 47.4206 58.392 46.5086 59.4C45.6446 60.408 44.8526 62.136 44.1326 64.584L41.6846 64.008C41.8286 63.096 42.1166 62.064 42.5486 60.912C43.0286 59.712 43.6526 58.56 44.4206 57.456C45.2366 56.304 46.1966 55.368 47.3006 54.648C48.4526 53.928 49.7726 53.568 51.2606 53.568ZM54.9326 37.368C56.1806 37.368 57.1886 37.8 57.9566 38.664C58.7246 39.48 59.1086 40.584 59.1086 41.976C59.1086 43.272 58.6766 44.352 57.8126 45.216C56.9966 46.032 55.9886 46.44 54.7886 46.44C53.5886 46.44 52.5806 46.032 51.7646 45.216C50.9966 44.352 50.6126 43.272 50.6126 41.976C50.6606 40.584 51.0926 39.48 51.9086 38.664C52.7726 37.8 53.7806 37.368 54.9326 37.368Z"
					className="fill-text-solid"
				/>
				<path
					d="M78.4119 36C78.2199 37.344 78.0039 38.808 77.7639 40.392C77.5719 41.976 77.4039 43.512 77.2599 45C77.1159 46.44 76.9719 47.688 76.8279 48.744C76.6839 50.472 76.4919 52.344 76.2519 54.36C76.0599 56.376 75.8439 58.464 75.6039 60.624C75.4119 62.784 75.1959 64.992 74.9559 67.248H75.1719C76.0839 64.272 77.0679 61.872 78.1239 60.048C79.2279 58.176 80.3799 56.784 81.5799 55.872C82.7799 54.96 83.9319 54.36 85.0359 54.072C86.1879 53.736 87.2679 53.568 88.2759 53.568C90.5319 53.568 92.3319 54.192 93.6759 55.44C95.0679 56.688 96.0519 58.32 96.6279 60.336C97.2519 62.352 97.5639 64.56 97.5639 66.96C97.5639 70.224 97.1799 73.32 96.4119 76.248C95.6919 79.176 94.5399 81.768 92.9559 84.024C91.4199 86.232 89.3799 87.984 86.8359 89.28C84.3399 90.528 81.3159 91.152 77.7639 91.152C76.9959 91.152 76.0119 91.104 74.8119 91.008C73.6599 90.912 72.4599 90.744 71.2119 90.504C70.0119 90.264 68.8839 89.952 67.8279 89.568C68.1159 85.056 68.3559 81 68.5479 77.4C68.7879 73.8 69.0039 70.344 69.1959 67.032C69.3879 63.72 69.6039 60.36 69.8439 56.952C70.0839 53.544 70.3719 49.8 70.7079 45.72C70.8039 44.568 70.8759 43.728 70.9239 43.2C70.9719 42.624 71.0439 41.976 71.1399 41.256C70.3239 41.304 69.4599 41.352 68.5479 41.4C67.6839 41.4 66.8439 41.424 66.0279 41.472L66.3159 38.016C68.4759 38.016 70.1799 37.92 71.4279 37.728C72.7239 37.488 73.6839 37.224 74.3079 36.936C74.9799 36.648 75.5079 36.336 75.8919 36H78.4119ZM85.9719 57.744C84.7239 57.792 83.4999 58.416 82.2999 59.616C81.1479 60.816 80.0919 62.424 79.1319 64.44C78.1719 66.456 77.3079 68.712 76.5399 71.208C75.7719 73.704 75.1719 76.296 74.7399 78.984C74.3079 81.624 74.0679 84.192 74.0199 86.688C74.5479 87.168 75.2919 87.528 76.2519 87.768C77.2119 88.008 78.0999 88.128 78.9159 88.128C80.8839 88.08 82.5399 87.624 83.8839 86.76C85.2759 85.848 86.4039 84.648 87.2679 83.16C88.1799 81.624 88.8759 79.944 89.3559 78.12C89.8359 76.296 90.1479 74.448 90.2919 72.576C90.4839 70.704 90.5559 68.952 90.5079 67.32C90.4599 64.2 90.0519 61.8 89.2839 60.12C88.5639 58.44 87.4599 57.648 85.9719 57.744Z"
					className="fill-text-solid"
				/>
				<path
					d="M115.473 36C115.329 37.248 115.137 38.616 114.897 40.104C114.657 41.592 114.441 43.032 114.249 44.424C114.057 45.816 113.889 47.088 113.745 48.24C113.361 50.88 113.001 53.592 112.665 56.376C112.377 59.16 112.089 61.896 111.801 64.584C111.561 67.272 111.321 69.816 111.081 72.216C110.889 74.616 110.721 76.776 110.577 78.696C110.481 80.616 110.433 82.2 110.433 83.448C110.433 84.36 110.529 85.152 110.721 85.824C110.913 86.496 111.393 86.832 112.161 86.832C112.929 86.832 113.745 86.352 114.609 85.392C115.521 84.384 116.313 82.632 116.985 80.136L119.433 80.784C119.289 81.696 118.977 82.752 118.497 83.952C118.017 85.152 117.369 86.304 116.553 87.408C115.785 88.464 114.825 89.352 113.673 90.072C112.569 90.792 111.249 91.152 109.713 91.152C107.793 91.152 106.329 90.648 105.321 89.64C104.361 88.632 103.857 87.096 103.809 85.032C103.761 83.736 103.809 81.96 103.953 79.704C104.145 77.4 104.361 74.832 104.601 72C104.841 69.168 105.105 66.216 105.393 63.144C105.729 60.024 106.065 56.976 106.401 54C106.785 51.024 107.145 48.288 107.481 45.792C107.673 44.592 107.817 43.68 107.913 43.056C108.009 42.432 108.105 41.832 108.201 41.256C107.337 41.304 106.473 41.352 105.609 41.4C104.745 41.4 103.905 41.424 103.089 41.472L103.449 38.016C105.561 38.016 107.241 37.92 108.489 37.728C109.785 37.488 110.769 37.224 111.441 36.936C112.113 36.648 112.641 36.336 113.025 36H115.473Z"
					className="fill-text-solid"
				/>
				<path
					d="M139.528 53.568C141.304 53.568 142.96 53.856 144.496 54.432C146.08 54.96 147.352 55.848 148.312 57.096C149.272 58.296 149.752 59.952 149.752 62.064C149.752 64.032 149.104 65.736 147.808 67.176C146.512 68.568 144.808 69.72 142.696 70.632C140.584 71.544 138.328 72.288 135.928 72.864C133.528 73.44 131.224 73.848 129.016 74.088C129.016 77.016 129.304 79.416 129.88 81.288C130.504 83.16 131.392 84.552 132.544 85.464C133.696 86.376 135.112 86.832 136.792 86.832C138.04 86.832 139.336 86.568 140.68 86.04C142.024 85.464 143.32 84.576 144.568 83.376C145.864 82.176 147.016 80.568 148.024 78.552L150.76 80.064C149.416 82.704 147.952 84.84 146.368 86.472C144.832 88.104 143.152 89.304 141.328 90.072C139.504 90.792 137.536 91.152 135.424 91.152C130.864 91.152 127.456 89.76 125.2 86.976C122.944 84.192 121.816 80.4 121.816 75.6C121.816 72.912 122.176 70.272 122.896 67.68C123.616 65.04 124.696 62.664 126.136 60.552C127.576 58.44 129.4 56.76 131.608 55.512C133.864 54.216 136.504 53.568 139.528 53.568ZM138.52 57.36C136.456 57.36 134.752 58.056 133.408 59.448C132.112 60.84 131.104 61.872 130.384 64.08C129.712 66.288 129.28 68.592 129.088 70.992C131.68 70.656 134.032 70.056 136.144 69.192C138.256 68.328 139.96 67.248 141.256 65.952C142.552 64.656 143.2 63.168 143.2 61.488C143.2 60.048 142.541 59.36 141.976 58.728C141.16 57.816 140.008 57.36 138.52 57.36Z"
					className="fill-text-solid"
				/>
				<path
					d="M162.323 53.568C164.435 53.568 165.995 54.264 167.003 55.656C168.011 57.048 168.515 58.92 168.515 61.272C168.515 62.616 168.371 64.248 168.083 66.168C167.843 68.04 167.531 70.032 167.147 72.144C166.811 74.256 166.499 76.344 166.211 78.408C165.971 80.472 165.851 82.368 165.851 84.096C165.851 85.008 166.019 85.704 166.355 86.184C166.691 86.616 167.171 86.832 167.795 86.832C168.563 86.832 169.379 86.328 170.243 85.32C171.155 84.312 171.971 82.584 172.691 80.136L175.139 80.712C174.947 81.72 174.611 82.848 174.131 84.096C173.651 85.296 173.027 86.424 172.259 87.48C171.491 88.536 170.555 89.424 169.451 90.144C168.347 90.816 167.099 91.152 165.707 91.152C163.403 91.152 161.723 90.552 160.667 89.352C159.659 88.104 159.155 86.328 159.155 84.024C159.155 82.104 159.275 80.16 159.515 78.192C159.803 76.224 160.115 74.256 160.451 72.288C160.835 70.32 161.147 68.376 161.387 66.456C161.675 64.536 161.819 62.664 161.819 60.84C161.819 60.168 161.675 59.52 161.387 58.896C161.147 58.224 160.691 57.888 160.019 57.888C159.299 57.888 158.483 58.392 157.571 59.4C156.707 60.408 155.915 62.136 155.195 64.584L152.747 64.008C152.891 63.096 153.179 62.064 153.611 60.912C154.091 59.712 154.715 58.56 155.483 57.456C156.299 56.304 157.259 55.368 158.363 54.648C159.515 53.928 160.835 53.568 162.323 53.568ZM165.995 37.368C167.243 37.368 168.251 37.8 169.019 38.664C169.787 39.48 170.171 40.584 170.171 41.976C170.171 43.272 169.739 44.352 168.875 45.216C168.059 46.032 167.051 46.44 165.851 46.44C164.651 46.44 163.643 46.032 162.827 45.216C162.059 44.352 161.675 43.272 161.675 41.976C161.723 40.584 162.155 39.48 162.971 38.664C163.835 37.8 164.843 37.368 165.995 37.368Z"
					className="fill-text-solid"
				/>
				<path
					d="M195.379 53.568C198.019 53.568 200.371 54.192 202.435 55.44C204.547 56.64 206.203 58.44 207.403 60.84C208.651 63.192 209.275 66.048 209.275 69.408C209.275 73.248 208.555 76.824 207.115 80.136C205.723 83.448 203.707 86.112 201.067 88.128C198.475 90.144 195.307 91.152 191.563 91.152C188.347 91.152 185.707 90.432 183.643 88.992C181.579 87.552 180.043 85.608 179.035 83.16C178.027 80.664 177.523 77.928 177.523 74.952C177.523 71.112 178.243 67.56 179.683 64.296C181.123 61.032 183.163 58.44 185.803 56.52C188.491 54.552 191.683 53.568 195.379 53.568ZM194.299 56.736C192.379 56.688 190.699 57.384 189.259 58.824C187.819 60.264 186.715 62.208 185.947 64.656C185.179 67.056 184.771 69.72 184.723 72.648C184.675 74.28 184.747 75.984 184.939 77.76C185.179 79.488 185.587 81.12 186.163 82.656C186.739 84.192 187.531 85.464 188.539 86.472C189.547 87.432 190.795 87.912 192.283 87.912C194.059 87.96 195.547 87.456 196.747 86.4C197.995 85.344 198.979 83.976 199.699 82.296C200.467 80.616 201.043 78.84 201.427 76.968C201.811 75.048 202.027 73.248 202.075 71.568C202.123 69.984 202.051 68.352 201.859 66.672C201.667 64.944 201.283 63.336 200.707 61.848C200.131 60.312 199.315 59.088 198.259 58.176C197.251 57.264 195.931 56.784 194.299 56.736Z"
					className="fill-text-solid"
				/>
			</svg>

			{subText && (
				<h1
					style={{ fontSize: `${svgSize.height / 1.9}rem` }}
					className="dark:text-white whitespace-nowrap align-middle italic text-text-solid"
				>
					{subText}
				</h1>
			)}
		</div>
	);
};

type RemValue = `${number}rem`;

export type IconLogoProps = {
	size: RemValue;
	reverseColor?: boolean;
};

/**
 * Icon Logo
 * @param size, this value must be a rem string ex. "2rem"
 * @param reverseColor, this will reverse the color based on the theme you're using, ex. if you're in light, it will make the logo dark
 * @returns the icon logo
 */
export const IconLogo = ({
	size = "2rem",
	reverseColor = false,
}: IconLogoProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 96 144"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M35.6968 6.21885C35.2653 7.57454 35.2653 9.24969 35.2653 12.6V36L12.3429 36C9.06092 36 7.41996 36 6.09193 36.4405C3.40791 37.3307 1.30359 39.4789 0.431501 42.2188C0 43.5745 0 45.2497 0 48.6V50.4C0 53.7503 0 55.4255 0.431501 56.7812C1.30359 59.5211 3.40791 61.6692 6.09193 62.5595C7.41996 63 9.06092 63 12.3428 63H35.2653V131.4C35.2653 134.75 35.2653 136.425 35.6968 137.781C36.5689 140.521 38.6732 142.669 41.3572 143.56C42.6853 144 44.3262 144 47.6082 144H49.3714C52.6534 144 54.2943 144 55.6224 143.56C58.3064 142.669 60.4107 140.521 61.2828 137.781C61.7143 136.425 61.7143 134.75 61.7143 131.4V63H84.6367C87.9187 63 89.5596 63 90.8877 62.5595C93.5717 61.6693 95.676 59.5211 96.5481 56.7812C96.9796 55.4255 96.9796 53.7503 96.9796 50.4V48.6C96.9796 45.2497 96.9796 43.5745 96.5481 42.2188C95.676 39.4789 93.5717 37.3308 90.8877 36.4405C89.5596 36 87.9187 36 84.6367 36L61.7143 36V12.6C61.7143 9.24969 61.7143 7.57454 61.2828 6.21885C60.4107 3.47891 58.3064 1.33075 55.6224 0.440491C54.2943 0 52.6534 0 49.3714 0H47.6082C44.3262 0 42.6853 0 41.3572 0.440491C38.6732 1.33075 36.5689 3.47891 35.6968 6.21885Z"
				className={reverseColor ? "fill-accent-reversed" : "fill-accent"}
			/>
		</svg>
	);
};
