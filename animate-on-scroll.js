document.addEventListener("DOMContentLoaded", () => {
	const videos = document.querySelectorAll("video");
	if (!videos || !videos.length) return;

	// Pause all videos immediately
	videos.forEach((video) => {
		video.pause();
	});

	/**
	 *  Animate / Do something when element enters visible screen area
	 *  @param { array || object } els
	 */
	const animateOnEntry = (els) => {
		// Set an on scroll event
		window.onscroll = (e) => {
			// for each element
			els.forEach((el) => {
				// get the elements's distance top & bottom of the window, and
				// the screen height
				const elFromTop = el.getBoundingClientRect().top;
				const elFromBottom = el.getBoundingClientRect().bottom;
				const screenHeight = window.innerHeight;

				/**
				 * Manipulate the function based on what elements you're passing in:
				 *  - Videos,
				 *  - Images,
				 *  - SVG's,
				 *  - etc...
				 */
				// console.log("el", el.tagName);

				// If the top of the element is more than 150px from the bottom of the screen
				// AND if the bottom of the element is more than 125px from the top of the screen
				if (screenHeight - elFromTop > 150 && elFromBottom > 125) {
					if (el.tagName == "VIDEO") {
						// Start something here....
						el.play();
					}
				} else {
					if (el.tagName == "VIDEO") {
						// Stop something here....
						el.pause();
					}
				}
			});
		};
	};
}
