import Image from '../models/Images'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.2.10:3003/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}