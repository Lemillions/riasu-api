-- DropForeignKey
ALTER TABLE "ChannelOnGenre" DROP CONSTRAINT "ChannelOnGenre_channelId_fkey";

-- DropForeignKey
ALTER TABLE "ChannelOnGenre" DROP CONSTRAINT "ChannelOnGenre_genreId_fkey";

-- DropForeignKey
ALTER TABLE "ChannelOnProduct" DROP CONSTRAINT "ChannelOnProduct_channelId_fkey";

-- DropForeignKey
ALTER TABLE "ChannelOnProduct" DROP CONSTRAINT "ChannelOnProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "FilmOnGenre" DROP CONSTRAINT "FilmOnGenre_filmId_fkey";

-- DropForeignKey
ALTER TABLE "FilmOnGenre" DROP CONSTRAINT "FilmOnGenre_genreId_fkey";

-- DropForeignKey
ALTER TABLE "FilmOnProduct" DROP CONSTRAINT "FilmOnProduct_filmId_fkey";

-- DropForeignKey
ALTER TABLE "FilmOnProduct" DROP CONSTRAINT "FilmOnProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "productOnUser" DROP CONSTRAINT "productOnUser_productId_fkey";

-- DropForeignKey
ALTER TABLE "productOnUser" DROP CONSTRAINT "productOnUser_userId_fkey";

-- AddForeignKey
ALTER TABLE "productOnUser" ADD CONSTRAINT "productOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productOnUser" ADD CONSTRAINT "productOnUser_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilmOnProduct" ADD CONSTRAINT "FilmOnProduct_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilmOnProduct" ADD CONSTRAINT "FilmOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelOnProduct" ADD CONSTRAINT "ChannelOnProduct_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelOnProduct" ADD CONSTRAINT "ChannelOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilmOnGenre" ADD CONSTRAINT "FilmOnGenre_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilmOnGenre" ADD CONSTRAINT "FilmOnGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelOnGenre" ADD CONSTRAINT "ChannelOnGenre_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelOnGenre" ADD CONSTRAINT "ChannelOnGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
