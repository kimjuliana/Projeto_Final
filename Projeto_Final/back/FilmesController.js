const { connect} = require('./FilmesRepository')
const filmesModel = require('./FilmesSchema')

connect()

const getAll = async () => {
    return filmesModel.find()
}

const getSearchGenero = async (generoID) => {
    const filmesEncontrado = await filmesModel.findOne(
        { genero: generoID.genero }
        )
        return filmesEncontrado
    }



const getById = (id)=> {
     return filmesModel.findById(id)
 }

 const add = (filme) => {
     const novoFilme = new filmesModel(filme)
     return novoFilme.save()
 }

 const remove = (id) => {
     return filmesModel.findByIdAndDelete(id)
 }

 const update = (id, filme) => {
     return filmesModel.findByIdAndUpdate(
         id,
         { $set: filme},
         { new: true },
     )
 }

 module.exports = {
     getAll, 
     getById,
     add,
     remove,
     update,
     getSearchGenero
 }