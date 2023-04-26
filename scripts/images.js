const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('Src/Assets/Images')
    .filter((file) => {
      return file.endsWith('.png')
        ? file.endsWith('.png')
        : file.endsWith('.jpg');
    })
    .map((file) => {
      return file.endsWith('.png')
        ? file
            .replace('@1x.png', '.png')
            .replace('@2x.png', '.png')
            .replace('@3x.png', '.png')
        : file
            .replace('@1x.jpg', '.jpg')
            .replace('@2x.jpg', '.jpg')
            .replace('@3x.jpg', '.jpg');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = imageFileNames()
    .map((name) => {
      const filename = name.endsWith('.png')
        ? name.replace('.png', '')
        : name.replace('.jpg', '');

      return name.endsWith('.png')
        ? `${filename}: require('@/Assets/Images/${filename}.png'),`
        : `${filename}: require('@/Assets/Images/${filename}.jpg'),`;
    })
    .join('\n  ');
  const string = `const Images = {
  ${properties},
};

export default Images;
`;
  fs.writeFileSync('Src/Assets/Images/index.js', string, 'utf8');
};
generate();
