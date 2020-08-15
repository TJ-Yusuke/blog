import React from 'react';

type Props = {
  text: string;
  className?: string;
};

export const H1: React.FC<Props> = ({ text, className }) => {
  text = text.replace(/\\n/g, '<br>');
  return <h1 className={`text-4xl ${className}`}>{text}</h1>;
};
