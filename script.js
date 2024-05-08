const container = document.getElementById('container');
const generateButton = document.getElementById('generate');
const toggleModeButton = document.getElementById('toggleMode');

let isLightMode = true;

toggleModeButton.addEventListener('click', () => {
	isLightMode =!isLightMode;
	document.body.classList.toggle('light');
	document.body.classList.toggle('dark');
});

generateButton.addEventListener('click', () => {
	const numElements = Math.floor(Math.random() * 10) + 1;
	let html = '';

	for (let i = 0; i < numElements; i++) {
		const width = Math.floor(Math.random() * 100) + 50;
		const height = Math.floor(Math.random() * 100) + 50;
		const top = Math.floor(Math.random() * window.innerHeight);
		const left = Math.floor(Math.random() * window.innerWidth);
		const backgroundColor = `hsl(${Math.random() * 360}, 50%, ${isLightMode? '50%' : '20%'})`;

		html += `
			<div
				style="
					width: ${width}px;
					height: ${height}px;
					top: ${top}px;
					left: ${left}px;
					background-color: ${backgroundColor};
					position: absolute;
				"
			></div>
		`;
	}

	container.innerHTML = html;
});

// Generate UI on page load
generateButton.click();