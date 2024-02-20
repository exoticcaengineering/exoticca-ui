module.exports = {
    icon: true,
    titleProp:true,
    typescript: true,
    template: require('./svgr-template'),
    indexTemplate:require('./svgr-index-template'),
    svgProps: { 'data-testid': '{title}' },
    replaceAttrValues: { 
      '#323232': 'currentColor', 
      '#2a2a2a': 'currentColor' ,
      '#454545': 'currentColor'
    }
  }