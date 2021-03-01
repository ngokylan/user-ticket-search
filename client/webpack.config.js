const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
/**
 * This webpack config builds elmo-elements for use by external applications
 */
module.exports = {
  mode: 'production',
  entry: {
    main: './src/main.ts',
    menu: './src/Menu',
    'menu-css-tms': './src/Menu/MenuCssTMS.scss',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryTarget: 'commonjs',
  },

  optimization: {
    nodeEnv: 'production',
    minimizer: [
      new TerserPlugin({
        // default JS minimiser used by webpack, need to set this if we want to use a custom CSS minimiser
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}), // minify the CSS output
    ],
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      // The loaders are chained last to first!
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'lib.tsconfig.json',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // fallback to style-loader in development
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              // sourceMap: true
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // Exclude moment locales other than 'en'
    new MomentLocalesPlugin(),
  ],

  // treat these as peerDependency, will not get included in the built JS file
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
