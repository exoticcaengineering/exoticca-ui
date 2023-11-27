const defaultTemplate = (
  { imports, interfaces, componentName, props, jsx },
  { tpl },
) => {
  return tpl`
${imports};
import { WithIconWrapper } from 'src/components/WithIconWrapper';

${interfaces};

const ${componentName} = (${props}) => (
  ${jsx}
);
 
export default WithIconWrapper(${componentName});
`;
};

module.exports = defaultTemplate;
