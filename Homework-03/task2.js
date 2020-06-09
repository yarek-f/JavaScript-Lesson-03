'use strict'
function show(styles) {
	console.log(styles);
}

let styles = ['Jazz', 'Blues'];
show(styles);

styles.push('Rock & Roll');
show(styles);

styles[styles.length-2] = 'Classic';
show(styles);

show(styles.shift());
show(styles);

styles.unshift('Rep', 'Reggae');
show(styles);


