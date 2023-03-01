if (window.Worker) {
  var worker = new Worker("./work.js");

  axios
    .get(
      "https://asset.eqxiu.cn/material/h2/2d69148b4db244b4bed305ddb88cd485/2cf15ce13f71a14f35e90e977ead051062cb",
      {
        responseType: "blob",
      }
    )
    .then((response) => {
      const blob = response.data;
      console.log(response);
      worker.postMessage(blob);
    });
}
