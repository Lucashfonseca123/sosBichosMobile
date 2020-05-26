module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          features: './src/features',
          navigation: './src/navigation',
          store: './src/store',
        },
      },
    ],
    'optional-require',
    'react-native-paper/babel',
  ],
};
