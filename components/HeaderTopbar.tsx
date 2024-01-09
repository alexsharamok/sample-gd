// import { Slot } from '@uniformdev/canvas-react';
import { ModelReactRenderingProps, Placeholder } from '@uniformdev/next';

export function HeaderTopbar({
    renderingContext
}: ModelReactRenderingProps) {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hidden-xs">
                        <Placeholder placeholderKey="left-header-top" renderingContext={renderingContext} />
                        {/* <Slot name="left-header-top" /> */}
                    </div>
                    <div className="col-md-6 hidden-xs">
                        <div className="pull-right">
                            <Placeholder placeholderKey="right-header-top" renderingContext={renderingContext} />
                            {/* <Slot name="right-header-top" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
