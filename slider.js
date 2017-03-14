var array = ['image1.png', 'image2.png', 'image3.jpg', 'image4.jpg']
function changeSlide () {

	document.getElemmentsByClassName ("content")[0].style.background-image.url=("Array[n]");

	if (n < array.length) {
		n++;
	}
	if (n>array.length) {
		n=0;
	}
}