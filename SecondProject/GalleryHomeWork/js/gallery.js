/*Name this external file gallery.js*/

function upDate(previewPic){

  let mainImage = document.getElementById("image");
  let altText = previewPic.alt; //identifier
  let getImageSrc = previewPic.getAttribute('src');
 
  mainImage.innerHTML = altText
  mainImage.style.backgroundImage = `url(${getImageSrc})`;
	}

	function unDo(){
  let defaultText ="Hover over an image below to display here.";
  document.getElementById("image").style.backgroundImage = `url("")`
  document.getElementById("image").innerHTML=defaultText;  		
	}