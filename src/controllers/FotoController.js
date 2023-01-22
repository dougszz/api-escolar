import multer from 'multer';
import multerC from '../config/multerC';

import Foto from '../models/Foto';

const upload = multer(multerC).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['student does not exist'],
        });
      }
    });
  }
}

export default new FotoController();
