import { ImageField } from "@uniformdev/common-client";
import { ImgHTMLAttributes } from "react";

export type SitecoreImageProps = {
    image: Partial<ImageField>;
    useImageSize?: boolean;
} & Partial<ImgHTMLAttributes<HTMLImageElement>>;

export function SitecoreImage(props: SitecoreImageProps) {
    if (!props?.image) {
        return null;
    }

    const { image, ...overrideAttrs } = props;

    const { width, height, url: src, class: className, ...imgAttrs } = image;

    const imgProps: ImgHTMLAttributes<HTMLImageElement> = {
        ...imgAttrs,
        src,
        className,
    };

    if (props.useImageSize) {
        imgProps.width = width;
        imgProps.height = height;
    }

    return <img {...imgProps} {...overrideAttrs} />;
}
