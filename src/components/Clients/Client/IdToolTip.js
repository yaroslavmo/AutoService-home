import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export default function ToolTip ({ tooltipContent, placement = 'bottom', children, ...props }) {
    return (<th scope='row' id={props.id}{...props}>
        {children}
        {tooltipContent && props.id &&
        <UncontrolledTooltip placement={placement} target={props.id}>
            {tooltipContent}
        </UncontrolledTooltip>
        }
    </th>);
}