import { Switch } from '@/components/ui/switch';
import React from 'react'
import { FileInput } from '../FileInput';
import ImageSizeSlider from '../ImageSizeSlider';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import ColorPicker from '../ColorPicker';
import { Textarea } from '@/components/ui/textarea';
import { useDispatch } from 'react-redux';
import { updateCard } from '@/lib/features/landingPage/pageSlice';

const EditCard = ({type,card,index,cardsKey}) => {
    const {
        image: { isImage, isBottom, src: imgSrc, size: imgSize },
        title: { content: titleContent, color: titleClr },
        description: { content: descriptionContent, color: descriptionClr },
        button: { isButton, content: buttonContent, color: btnClr, link: btnLink },
      } = card;
      const cardSectionIndex=parseInt(cardsKey.substring(6));
      const dispatch = useDispatch();
  return (
    <div className='w-4/5 p-2 flex flex-col gap-2'>
        <div className='w-full text-base font-bold flex justify-center items-center mb-6'>{"Editing Card Section "+cardSectionIndex+" Card "+index}</div>
       <div className="w-full flex justify-between">
    <div>Card Image</div>
    <Switch
      onCheckedChange={(checked) => {
        dispatch(
           updateCard({cardsSection:cardsKey, index, section:"image", key:"isImage", value:checked })
        );
      }}
      checked={isImage}
    />
  </div>
  {isImage && (
    <>
      <FileInput
        title={"Upload Image"}
        className="justify-between"
        id={cardsKey+"Img"+index}
        section="image"
        upperSection={cardsKey}
        sectionType="card"
        index={index}
      />
      <ImageSizeSlider section="image" datakey="size" sectionType="card" index={index} upperSection={cardsKey} defaultValue={imgSize}/>
       <div className="w-full flex justify-between">
        Show Image in Bottom
       <Checkbox checked={isBottom} onCheckedChange={(checked)=>{
         dispatch(
            updateCard({cardsSection:cardsKey,section:"image", index, key:"isBottom", value:checked })
         );
       }}/>
      </div>
    </>
  )}
   <Input
    type="text"
    placeholder="Enter Your Card title here"
    className="w-full"
    defaultValue={titleContent}
    onChange={(e) => {
    dispatch(
        updateCard({cardsSection:cardsKey,section:"title",index, key:"content", value:e.target.value })
     );
    }}
    value={titleContent}
  />
  <ColorPicker
    label="Title Color"
    id={cardsKey+"TitleClr"+index}
    defaultValue={titleClr}
    onChange={(e) => {
    dispatch(
        updateCard({cardsSection:cardsKey,section:"title",index, key:"color", value:e.target.value})
     );
    }}
    onThemeSelect={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"title",index, key:"color", value:"none"})
         );
    }}
  />
  <Textarea
    placeholder="Enter card description here..."
    onChange={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"description",index, key:"content", value:e.target.value})
         );
    }}
    defaultValue={descriptionContent}
    value={descriptionContent}
  />
  <ColorPicker
    label="Description Color"
    id={cardsKey+"DescClr"+index}
    defaultValue={descriptionClr}
    onChange={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"description",index, key:"color", value:e.target.value})
         );
    }}
    onThemeSelect={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"description",index, key:"color", value:"none"})
         );
    }}
  />

<div className="w-full flex justify-between">
    <div>Card Button</div>
    <Switch
      onCheckedChange={(checked) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"button",index, key:"isButton", value:checked})
         );
      }}
      checked={isButton}
    />
  </div>

 {isButton &&
  <Input
    type="text"
    placeholder="Enter Your Button name"
    className="w-full"
    onChange={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"button",index, key:"content", value:e.target.value})
         );
    }}
    value={buttonContent}
  />}
  {isButton && <Input
    type="text"
    placeholder="Enter Button onClick Link"
    className="w-full"
    onChange={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"button",index, key:"link", value:e.target.value})
         );
    }}
    value={btnLink}
  />}
   {isButton &&<ColorPicker
    label="Button Color"
    id={cardsKey+"BtnClr"+index}
    defaultValue={btnClr}
    onChange={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"button",index, key:"color", value:e.target.value})
         );
    }}
    onThemeSelect={(e) => {
        dispatch(
            updateCard({cardsSection:cardsKey,section:"button",index, key:"color", value:"none"})
         );
    }}
  />
  }
    </div>
  )
}

export default EditCard