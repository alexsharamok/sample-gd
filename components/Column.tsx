// import { Slot } from '@uniformdev/canvas-react';
import { getDynamicPlaceholderKey, ModelReactRenderingProps, Placeholder } from '@uniformdev/next';

import { PropsWithChildren } from 'react';

export type ColumnContainerProps = ModelReactRenderingProps & {
    containerIsFluid?: boolean;
};

function ColumnContainer({ children, containerIsFluid }: PropsWithChildren<Pick<ColumnContainerProps,'containerIsFluid'>>) {
    const containerClass = containerIsFluid ? 'container-fluid' : 'container';

    return (
        <div className={containerClass}>
            <div className="row">{children}</div>
        </div>
    );
}

export function Column_1({ 
    containerIsFluid = false,
    placeholderKey,
    rendering,
    renderingContext 
}: ColumnContainerProps) {
    return (
        <ColumnContainer containerIsFluid={containerIsFluid}>
            <div className="col-md-12">
                <Placeholder 
                    placeholderKey={`${placeholderKey}/col-huge`} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-huge" /> */}
            </div>
        </ColumnContainer>
    );
}

export function Column_3_444({ 
    containerIsFluid = false,
    placeholderKey,
    rendering,
    renderingContext 
}: ColumnContainerProps) {
    return (
        <ColumnContainer containerIsFluid={containerIsFluid}>
            <div className="col-sm-4">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-1`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-1" /> */}
            </div>
            <div className="col-sm-4">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-2`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />                
                {/* <Slot name="col-narrow-2" /> */}
            </div>
            <div className="col-sm-4">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-3`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-3" /> */}
            </div>
        </ColumnContainer>
    );
}

export function Column_3_633({ 
    containerIsFluid = false,
    placeholderKey,
    rendering,
    renderingContext 
}: ColumnContainerProps) {
    return (
        <ColumnContainer containerIsFluid={containerIsFluid}>
            <div className="col-lg-6 col-md-12">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-wide-1`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />                
                {/* <Slot name="col-wide-1" /> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-1`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-1" /> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-2`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-2" /> */}
            </div>
        </ColumnContainer>
    );
}

export function Column_4_2244({ 
    containerIsFluid = false,
    placeholderKey,
    rendering,
    renderingContext 
}: ColumnContainerProps) {
    return (
        <ColumnContainer containerIsFluid={containerIsFluid}>
            <div className="col-md-2 col-sm-6">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-1`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-1" /> */}
            </div>
            <div className="col-md-2 col-sm-6">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-2`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-2" /> */}
            </div>
            <div className="col-md-4 col-sm-6">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-3`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-3" /> */}
            </div>
            <div className="col-md-4 col-sm-6">
                <Placeholder 
                    placeholderKey={getDynamicPlaceholderKey(`${placeholderKey}/col-narrow-4`, rendering.id, 0)} 
                    renderingContext={renderingContext} 
                />
                {/* <Slot name="col-narrow-4" /> */}
            </div>
        </ColumnContainer>
    );
}
