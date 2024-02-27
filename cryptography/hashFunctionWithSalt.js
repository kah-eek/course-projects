import { scryptSync, timingSafeEqual, randomBytes } from 'crypto'

function encryptPassword(password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex')

    return `${salt}:${hashedPassword}`
}

class User {
    constructor(username, password) {
        this.username = username;
        [this.salt, this.hashedPassword] = encryptPassword(password).split(':')
    }

    authenticate(username, password) {
        const hashedPassword = scryptSync(password, this.salt, 64);
        const bufferedHash = Buffer.from(this.hashedPassword, 'hex')
        const isPasswordEqual = timingSafeEqual(bufferedHash, hashedPassword)

        if (username !== this.username || !isPasswordEqual) {
            console.log('Username or password is incorrect.');
            return false
        }

        console.log('User successfully authenticated.')
        return isPasswordEqual;
    }
}

console.clear()
const co = new User('0xc41qu3', '123456')

// Happy path.
co.authenticate('0xc41qu3', '123456')

// Sad path.
co.authenticate("xpto", "123456")
co.authenticate("0xc41qu3", "123654")