import imagemin from "imagemin"
import webp from "imagemin-webp"
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'


(async () => {

  await imagemin(['src/imagesOriginal/*.{jpg,jpeg,png}'], {
    destination: 'public/images/',
    plugins: [
      imageminMozjpeg({quality: 75}),
      imageminPngquant({quality: [0.6, 0.8]}),
    ]
  });

  await imagemin(['src/imagesOriginal/*.{jpg,jpeg,png}'], {
    destination: 'public/images/',
    plugins: [
      webp({quality: 75})
    ]
  });

})();