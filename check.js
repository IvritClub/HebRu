const fs = require('fs');

const ids = [...Array(196637).keys()];

for (var i = ids.length - 1; i >= 0; i--) {
	// const res = fs.existsSync(__dirname+"/audio/"+(ids[i]+1)+".mp3");
	// if (!res) console.log((ids[i]+1))
	const res = fs.statSync(__dirname+"/audio/"+(ids[i]+1)+".mp3");
	if (!res.size < 1000) console.log((ids[i]+1))
}
