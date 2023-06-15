import { ReactNode } from 'react';
import styles from './FLTooltip.module.css';
import * as Tooltip from '@radix-ui/react-tooltip';

/* eslint-disable-next-line */
export interface FLTooltipProps {
  children: ReactNode;
  tooltipLabel: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  delayDuration?: number;
}

export function FLTooltip(props: FLTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={props.delayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{props.children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={props.sideOffset ?? 5}
            side={props.side ?? 'top'}
          >
            {props.tooltipLabel}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default FLTooltip;
