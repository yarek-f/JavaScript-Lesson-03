let styles = [ 'Jazz', 'Blues' ]

function find(arr, value) {
	for (let i = 0; i < arr.length; i++) {

		if (arr[i] == value) {
			console.log(i);
		} else if (arr[i] !== value) {
			console.log("-1")
		}
	}
}
find(styles, 'Jazz')
