import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FilmService } from "./film.service";

@Module({
    controllers: [],
    providers: [PrismaService, FilmService],
})

export class FilmModule {}