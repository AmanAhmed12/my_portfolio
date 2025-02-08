window.downloadFile = (fileUrl) => {
    console.log('Download started for: ', fileUrl); // Debugging log
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileUrl.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};


window.onload = function () {
    console.log("site.js is loaded");
}