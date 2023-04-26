const alias = { '^@/(.+)': './Src/\\1' }; // @/folder will be an alias to <root>/src/folder
const extensions = ['.android.js', '.ios.js', '.js', '.json', '.native'];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module-resolver', { alias, extensions }]],
};
