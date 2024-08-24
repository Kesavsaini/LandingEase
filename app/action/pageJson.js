'use server'
import Page from '@/lib/db/schema/page'
import { getServerSession } from "next-auth"
import { authOptions } from '../api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';
import pageState from '../../lib/pageState.json'


export const CreatePage=async({name,subdomain})=>{
    try{  
        const session = await getServerSession(authOptions);
        if(!name) return {message: "Name is required",done:false};
        if(!subdomain) return {message:"Subdomain is required",done:false};
        if(subdomain) subdomain=subdomain.toLowerCase();
        const isSubdomainUnique = await Page.findOne({subdomain:subdomain});
        if(isSubdomainUnique){
            return {message:"New Project has been created successfully",subdomainError:true};
        }
        const newPage=await Page({
            userId:session.user.userId,
            subdomain,
            name,
            state:pageState
        });
        await newPage.save();
       return {message:"created new page",done:true};
    }catch(error){
        console.error('Error publishing page:', error);
        return {message:"There was an error creating page",done:false};
    }
}

export const getPagesByUser=async()=>{
    try{
        const session = await getServerSession(authOptions);
        const pages=await Page.find({userId:session.user.userId}).sort({updated_at:-1});
        return pages;
    }catch(e){
        return {message:e.message,done:false};
    }
}

export const getPageById=async({id})=>{
    try{
        const page=await Page.findById(id);
        if(!page) return {message:"Page not found",done:false};
        console.log("this is page",page);
        return {data:JSON.stringify(page),done:true};
    }catch(e){
        return {message:e.message,done:false};
    }
}

export const deletePageById=async({id})=>{
    try{
        const session = await getServerSession(authOptions);
        const page=await Page.findByIdAndDelete(id);
        if(!page) return {message:"Page not found",done:false};
        return {message:"Page deleted",done:true};
    }catch(e){
        return {message:e.message,done:false};
    }
}

export const updateStateByPageId=async({pageId,newState})=>{
  try{
      const page=await Page.findByIdAndUpdate(pageId,{$set:{state:newState}},{new:true});
      if(!page) return {message:"Page not found",done:false};
      return {message:"Page state updated",done:true};
  }catch(e){
    return {message:e.message,done:false};
  }
}

export const updatePageById=async({pageId,body})=>{
   try{
    const session = await getServerSession(authOptions);
    const page=await Page.findByIdAndUpdate(pageId,{$set:{...body}},{new:true});
    if(!page) return {message:"Page not found",done:false};
    return {message:"Page updated",done:true};
   }catch(err){
    return {message:err.message,done:false};
   }
}

export const getPublishedPageBySubDomain=async({subdomain})=>{
    try{
     const page=await Page.findOne({subdomain});
     if(!page || !page.published) return {message:"Page not found",done:false};
     return {data:page,done:true};
    }catch(err){
     return {message:err.message,done:false};
    }
 }
 
