import * as jwt from "jsonwebtoken"
import {Inject, Injectable, UnauthorizedException} from "@nestjs/common";
import {ConfigType} from "@nestjs/config";
import authConfig from "../../config/authConfig"


interface userInterface  {
    id: string;
    name: string;
    email: string;
}
@Injectable()
export class AuthService {

    constructor(
        @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>) {
    }

    login(user: userInterface){
        const payload = {...user}
        return jwt.sign(payload, this.config.jwtSecret, {
            expiresIn: '100d',
            audience: 'example.com',
            issuer: 'example.com'
        })
    }

    verify(jwtString: string){
        try{
            const payload = jwt.verify(jwtString, this.config.jwtSecret) as userInterface | any;
            // as tells the compiler to consider the typed object as a plain untyped JavaScript object.
            const { id, email, name } = payload
            return {
                userId: id,
                email: email,
                name: name
            }
        } catch {
            throw new UnauthorizedException('Cannot find correct jwt')
        }
    }


}
