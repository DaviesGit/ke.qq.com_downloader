url = t._url.replace(/start=\d+/, 'start=0');
key = Array.from(t.levelkey.key).map((e) => e.toString(16)).map((e) => {
	switch (e.length) {
		case 0:
			return '00';
		case 1:
			return '0' + e;
		case 2:
			return e;
	}
}).join('');
console.log(url, key);

