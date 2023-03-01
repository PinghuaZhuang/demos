module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        jsx: {
          injectH: false
        }
      }
    ],
    [
      '@vue/babel-preset-jsx'
    ]
  ]
}
