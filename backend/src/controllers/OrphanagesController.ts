import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'
import orphanageView from '../views/orphanages_view'

export default {
  async index(req: Request, res: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanages = await orphanageRepository.find({
      relations: ['images']
    })
    return res.json(orphanageView.renderMany(orphanages))
  },

  async show(req: Request, res: Response) {
    const { id } = req.params
    const orphanageRepository = getRepository(Orphanage)
    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ['images']
    })
    return res.json(orphanageView.render(orphanage))
  },

  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = req.body

    const orphanageRepository = getRepository(Orphanage)

    const reqImages = req.files as Express.Multer.File[]

    const images = reqImages.map(image => {
      return { path: image.filename }
    })

    const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    })

    await orphanageRepository.save(orphanage)

    return res.status(201).json(orphanage)
  }
}