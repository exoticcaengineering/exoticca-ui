const defaultTemplate = (
  { imports, interfaces, componentName, props, jsx },
  { tpl },
) => {
  const componentExportedName = `${componentName}Icon`;
  return tpl`
${imports};
import { WithIconWrapper } from 'src/components/WithIconWrapper';

${interfaces};

export const ${componentExportedName} = WithIconWrapper((${props}) => (
  ${jsx}
));
 
export default ${componentExportedName};


`;
};

module.exports = defaultTemplate;
