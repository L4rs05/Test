
function getRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}


function sortColors() {
	const colorTable = document.getElementById('colorTable');
	const rows = Array.from(colorTable.rows).slice(1);
	rows.sort(() => Math.random() - 0.5);
	rows.forEach((row, index) => {
		colorTable.appendChild(row);
	});
}


const colorTable = document.getElementById('colorTable');
for (let i = 0; i < 10; i++) {
	const row = colorTable.insertRow();
	const cell = row.insertCell();
	cell.style.backgroundColor = getRandomColor();
}
document.getElementById('sortButton').addEventListener('click', sortColors);

setTimeout(sortColors, 5000);
