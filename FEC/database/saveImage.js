const fs = require('fs');
const axios = require('axios').default;

function getImage() {
  for (let i = 1; i <= 1000; i += 1) {
    axios.get('https://picsum.photos/225/225', { responseType: 'stream' })
      .then((data) => {
        data.data.pipe(fs.createWriteStream(`../images/image${i}.jpg`, data.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

getImage();
