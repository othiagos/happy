import Image from '../models/Images'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3003/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}