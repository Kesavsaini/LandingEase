import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

  const alertType={
    delete:{
        title: 'Are you absolutely sure?',
        message: 'Are you sure you want to delete ',
        buttonText:"Delete"
      },
}
  

const MyAlertDialog = ({ children,type,name,onClick }) => {
  return (
    <AlertDialog className="p-4">
  <AlertDialogTrigger className=''>{children}</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>{alertType[type].title}</AlertDialogTitle>
      <AlertDialogDescription>
      {alertType[type].message}
      <span className='font-bold'>{name}?</span>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="text-white bg-red-600 hover:bg-red-800" onClick={onClick}>{alertType[type].buttonText}</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default MyAlertDialog