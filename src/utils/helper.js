// Validate url is of image or not
function isImage(url) {
	return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

export {
	isImage
};