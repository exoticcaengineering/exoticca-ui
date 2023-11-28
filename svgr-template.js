const defaultTemplate = (
  { imports, interfaces, componentName, props, jsx },
  { tpl },
) => {
  const formattedName = componentName.replace(/^Svg/, '');
  const componentExportedName = `${formattedName}Icon`;
  return tpl`
${imports};
import { WithIconWrapper } from '../WithIconWrapper';

${interfaces};

export const ${componentExportedName} = WithIconWrapper((${props}) => (
  ${jsx}
));
 
export default ${componentExportedName};


`;
};

module.exports = defaultTemplate;
