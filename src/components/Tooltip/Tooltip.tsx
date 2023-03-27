import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';

import {
  StyledTooltipPanel,
  StyledTooltipTrigger,
  StyledTooltipWrapper,
} from './Tooltip.styles';
import { Props, Coords } from './Tooltip.types';
import { Typography } from 'src/components/Typography';
import { calcLeftPosition, calcTopPosition } from './Tooltip.helpers';

export const Tooltip: FC<Props> = ({
  content,
  position = 'right',
  children,
  triggerBy = 'click',
  testId,
  className,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [coords, setCoords] = useState<Coords>({
    top: 0,
    left: 0,
  });

  const tooltipTriggerRef = React.useRef<HTMLDivElement>(null);

  const openTooltip = () => {
    calcTooltipCoords();
    setIsOpened(true);
  };

  const closeTooltip = () => setIsOpened(false);

  const calcTooltipCoords = () => {
    if (!tooltipTriggerRef.current) return;
    const rect = tooltipTriggerRef.current.getBoundingClientRect();
    const top = calcTopPosition({ rect, position });
    const left = calcLeftPosition({ rect, position });
    setCoords({
      top,
      left,
    });
  };

  const handleClickTooltip = () => {
    if (isOpened) return closeTooltip();
    if (triggerBy === 'click') openTooltip();
  };

  const handleMouseEnterTooltip = () => {
    if (triggerBy === 'hover') openTooltip();
  };

  const handleMouseLeaveTooltip = () => {
    closeTooltip();
  };

  const renderTooltipContent = () => {
    if (typeof content === 'string')
      return <Typography fontSize="default">{content}</Typography>;
    return content;
  };

  return (
    <StyledTooltipWrapper
      data-testid={testId || 'tooltip-wrapper'}
      className={className}
    >
      <StyledTooltipTrigger
        onClick={handleClickTooltip}
        onMouseEnter={handleMouseEnterTooltip}
        onMouseLeave={handleMouseLeaveTooltip}
        data-testid="tooltip-trigger"
        ref={tooltipTriggerRef}
      >
        {children}
      </StyledTooltipTrigger>
      {isOpened &&
        ReactDOM.createPortal(
          <StyledTooltipPanel
            position={position}
            data-testid="tooltip-panel"
            coords={coords}
          >
            {renderTooltipContent()}
          </StyledTooltipPanel>,
          document.body,
        )}
    </StyledTooltipWrapper>
  );
};
