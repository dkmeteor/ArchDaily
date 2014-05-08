var body=document.getElementsByTagName("body")[0];
var content=body.innerHTML;
// alert(body.innerHTML);
//var re=/^http://\w{1,20}.archdaily.net/wp-content/uploads/\S{1,200}.jpg$/;
// var re=/^[0-9]{3}x[0-9]{3}.jpg$/;
// content.replace(/[0-9]{3}x[0-9]{3}.jpg/  ,".jpg");
content=content.replace(/-[0-9]{3}x[0-9]{3}.jpg/g,function(m,i){return ".jpg";});
body.innerHTML=content;
