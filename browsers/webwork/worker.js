importScripts('./axios.min.js');

console.log('aixos', axios);

onmessage = function (event) { // 接收
	console.log('Received message:' + event.data);
  // postMessage('hahahah');

  axios.get('http://gwgp-hye6ycojwut.n.bdcloudapi.com/getIpInfo?ip=123.116.182.163').then((result) => {
    postMessage(result.data.data);
  })

  setTimeout(function () {
    postMessage('hahahah');
  }, 3000);
}
