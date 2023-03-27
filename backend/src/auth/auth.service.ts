import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './erros/unauthorized.error';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);

        if (user) {
            //Checar se a senha informada corresponde a hash que esta no banco.

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined,
                };
            }
        }
        // se chegar aqui, significa que não encontrou um user e/ou a senha não corresponde.
        throw new UnauthorizedError('Email address or password provided is incorrect.',);
    }
}
