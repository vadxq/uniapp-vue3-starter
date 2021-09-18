// const path = require('path');
// module.exports = {
//   parser: require('postcss-comment'),
//   plugins: [
//     require('postcss-import')({
//       resolve(id) {
//         if (id.startsWith('~@/')) {
//           return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
//         } else if (id.startsWith('@/')) {
//           return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
//         } else if (id.startsWith('/') && !id.startsWith('//')) {
//           return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
//         }
//         return id;
//       }
//     }),
//     require('autoprefixer')({
//       remove: process.env.UNI_PLATFORM !== 'h5'
//     }),
//     require('postcss-class-rename')({
//       '\\\\.': '_' // 兼容小程序，将类名带 .和/ 替换成 _
//     }),
//     require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
//   ]
// };

const path = require('path');
module.exports = {
  parser: require('postcss-comment'),
  plugins: {
    // 增加浏览器前缀
    autoprefixer: {
      remove: process.env.UNI_PLATFORM !== 'h5'
    },
    'postcss-import': {
      resolve(id) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
        }
        return id;
      }
    },
    'postcss-class-rename': {
      '\\\\.': '_' // 兼容小程序，将类名带 .和/ 替换成 _
    },
    '@dcloudio/vue-cli-plugin-uni/packages/postcss': {}
  }
};
