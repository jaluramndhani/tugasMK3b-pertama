const mongose =require('mongoose')

const UserSchema = new mongose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan Isikan'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan email valid']
    }
})

module.exports = mongose.model('user', UserSchema)