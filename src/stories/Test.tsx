import React from 'react';

interface TestProps {
  title?: string;
  primary?: boolean
}
export const Test = ({ title }:TestProps) => {
  return (
    <>
    <h1>This my test componnent. { title }</h1>
    </>
  )
}