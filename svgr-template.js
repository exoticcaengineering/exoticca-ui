const defaultTemplate = (
  { imports, interfaces, componentName, props, jsx },
  { tpl },
) => {
  const formattedName = componentName.replace(/^Svg/, '');
  const componentExportedName = `${formattedName}Icon`;
  const title = componentExportedName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return tpl`
${imports};
import { WithIconWrapper } from 'src/components/WithIconWrapper';

${interfaces};

export const ${componentExportedName} = WithIconWrapper( ({ title='${title}', titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  ${jsx}
));
 
export default ${componentExportedName};


`;
};

module.exports = defaultTemplate;
