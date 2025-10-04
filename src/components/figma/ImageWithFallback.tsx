import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export const ImageWithFallback: React.FC<Props> = ({ fallbackSrc = '/vite.svg', onError, ...props }) => {
  const [errored, setErrored] = React.useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setErrored(true);
    onError?.(e);
  };

  if (errored && fallbackSrc) {
    return <img {...props} src={fallbackSrc} alt={props.alt} />;
  }

  return <img {...props} onError={handleError} />;
};

export default ImageWithFallback;

