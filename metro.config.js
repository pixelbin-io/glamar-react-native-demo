const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const projectRoot = __dirname;
const appNM = p => path.join(projectRoot, 'node_modules', p);

const defaultConfig = getDefaultConfig(projectRoot);

module.exports = mergeConfig(defaultConfig, {
  resolver: {
    // Keep Metro resolving strictly from the app's node_modules
    nodeModulesPaths: [path.join(projectRoot, 'node_modules')],

    // Ensure singletons come from the app
    extraNodeModules: {
      react: appNM('react'),
      'react/jsx-runtime': appNM('react/jsx-runtime'),
      'react/jsx-dev-runtime': appNM('react/jsx-dev-runtime'),
      'react-native': appNM('react-native'),
      'react-native-webview': appNM('react-native-webview'),
      scheduler: appNM('scheduler'),
      '@babel/runtime': appNM('@babel/runtime'),
    },
  },
});
