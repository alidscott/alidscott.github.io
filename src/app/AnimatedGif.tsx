import React from "react";

export const AnimatedGif = ({ src, alt }: { src: string, alt: string }) => {
    return (<img src={src} alt={alt} height={200} width={200} />);
    
}
