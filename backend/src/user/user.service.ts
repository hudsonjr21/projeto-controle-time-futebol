import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
