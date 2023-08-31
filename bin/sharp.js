const sharp = require('sharp');

(async () => {
    const arguments = process.argv.slice(2);

    const svgFilePath = arguments[0];
    const format = arguments[1];

    const result = await sharp(svgFilePath)
        .resize(2048)
        .toFormat(format)
        .toBuffer()

    process.stdout.write(result)
})();
