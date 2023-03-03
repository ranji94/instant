import React from 'react'

export interface IHelloWorld {
  text: string
}

export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text">Hello in ranji94 lib template. example text: {text}</div>
}
