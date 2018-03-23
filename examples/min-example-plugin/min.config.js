module.exports = {
  compilers: {
    babel: {
      sourceMaps: 'inline',
      presets: [
        'env'
      ],
      plugins: [
        'syntax-export-extensions',
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {
    autoprefixer: {
      config: {
        browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6']
      }
    },
    define: {
      config: {
        PRODUCTION: true,
        __dev__: true
      }
    },
    filemin: {
      'config': {

      }
    },
    imagemin: {
      config: {
        jpg: {},
        png: {
          quality: '5'
        }
      }
    },
    filesync: {
      cwd: 'src/assets',
      from: ['**/*.jpg', '**/*.png'],
      to: '/images'
    },
    uglifyjs: {
      config: {
        warnings: false
      }
    },
    unit2rpx: {
      config: {
        px: 2,
        rem: 1
      }
    }
  }
}