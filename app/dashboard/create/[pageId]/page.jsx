'use client'
import { getPageById } from '@/app/action/pageJson'
import { LoadingSpinner } from '@/app/components/Icons'
import Pageview from '@/app/components/Pageview'
import RightBar from '@/app/components/RightBar'
import { initState } from '@/lib/features/landingPage/pageSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Page = ({params}) => {
    const dispatch=useDispatch();
    const initilizeReduxState=async()=>{
      let pageData=await getPageById({id:params.pageId});
      if(pageData.done){
         const pageState=JSON.parse(pageData.data);
        dispatch(initState(pageState.state));
      }
    }  
    useEffect(()=>{
      initilizeReduxState();
    },[])

    useEffect(() => {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = '';
      };
    
      window.addEventListener("beforeunload", handleBeforeUnload);
    
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);
    
    const allSections = useSelector((state) => state.page);
    const {hero,...otherSections} =allSections;
    if(!hero){
      return (<div className='w-full h-96 flex justify-center items-center'>
        <LoadingSpinner/>
       </div>);
    }
  return (
    <div className='flex flex-col gap-10 lg:gap-0 justify-center items-center  lg:flex-row lg:justify-between w-full lg:items-stretch'>
      <Pageview/>
      <RightBar/>
    </div>
  )
}

export default Page