export function getImageUrl(shape) {
  return "https://i.imgur.com/" + shape.imageId + ".png";
}

export function getImgUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export function getImgUrlOptionalSize(imageId, size) {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}