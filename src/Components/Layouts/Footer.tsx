import React from 'react'
import { Button } from '../../stories/Button'

export default ():any => {
  const myStoryBtn = () => {
    console.log("myStoryBtn",1111)
  }
return (
  <div>
    <h1>Footer</h1>
    <Button primary label="I'm Storybook button." onClick={myStoryBtn} />
  </div>)
}