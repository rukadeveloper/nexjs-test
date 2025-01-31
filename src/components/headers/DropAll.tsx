import React, { forwardRef } from 'react';

interface DropAllProps {
    ref: HTMLDivElement
    children: React.ReactNode
}

const DropAllComponent = forwardRef<HTMLDivElement, DropAllProps>(function DropAll(props, ref) {
    return (
        <div className="drop__all h-full" ref={ref} style={{marginLeft: '-1px'}} >
            { props.children }
        </div>
    );
});

export default DropAllComponent
