module.exports = {
    icon: true,
    titleProp:true,
    typescript: true,
    template: require('./svgr-template'),
    indexTemplate:require('./svgr-index-template'),
    svgProps: { 'data-testid': '{title}' },
    replaceAttrValues: { '#323232': 'currentColor' }
  }