import React from 'react'
import { getPublishedPageBySubDomain } from '../action/pageJson'
import Hero from './components/Hero';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Form from './components/Form';
import Footer from './components/Footer';

const page = async({params}) => {
  const page=await getPublishedPageBySubDomain({subdomain:params.subdomain});
  if(!page.done){
    return <div className='w-full h-full flex justify-center items-center'>
      Page Do not exist
    </div>
  }
  const {hero,footer,theme,...otherSections}=page.data.state;
  return (
    <div data-theme={theme}>
     <Hero hero={hero}/>
     {
        Object.keys(otherSections).map((sectionKey)=>{
           if(sectionKey.startsWith('feature')){
             return <Feature key={sectionKey} feature={otherSections[sectionKey]}/>
           }else if(sectionKey.startsWith('cards')){
            return <Cards key={sectionKey} cardSection={otherSections[sectionKey]}/>
            }else if(sectionKey.startsWith('form')){
              return <Form key={sectionKey} formSection={otherSections[sectionKey]} subdomain={params.subdomain} formName={sectionKey}/>
            }
        })
      }
      {footer && footer.meta.isFooter && <Footer footer={footer}/>}
    </div>
  )
}

export default page