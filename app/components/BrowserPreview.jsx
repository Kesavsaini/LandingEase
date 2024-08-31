import React from 'react'
import DekstopView from './DekstopView'

const BrowserPreview = () => {
  return (
    <div className="mockup-browser border-base-300 border h-full">
  <div className="mockup-browser-toolbar">
    <div className="input">https://landing.ease/yourpath</div>
  </div>
  <div className="h-[28rem] overflow-y-scroll">
    <DekstopView/>
  </div>
</div>
  )
}

export default BrowserPreview