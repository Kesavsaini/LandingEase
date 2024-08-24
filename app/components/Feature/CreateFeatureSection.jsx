import React from "react";
import { FileInput } from "../FileInput";
import ImageSizeSlider from "../ImageSizeSlider";
import { Input } from "@/components/ui/input";
import ColorPicker from "../ColorPicker";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { deleteFeatureSection, updateFeatureSection } from "@/lib/features/landingPage/pageSlice";
import { useDispatch } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import MyAlertDialog from "../MyAlertDialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const CreateFeatureSection = ({ index, feature,featureValue }) => {
  const dispatch = useDispatch();
  const {
    image: { isImage, imageOnLeft, src: imgSrc, size:imgSize,radius:ImgRadius },
    title: { content: titleContent, color: titleClr },
    description: { content: descriptionContent, color: descriptionClr },
    background: { color: bgClr, isBgImage, src: bgSrc },
  } = feature;
  return  (
  <div className="flex flex-col gap-2 w-11/12">
  <ScrollArea>
  <div className="flex flex-col gap-2 w-full p-2 h-[24rem]">
  <div className="w-full flex justify-between">
    <div>Side Image</div>
    <Switch
      onCheckedChange={(checked) => {
        dispatch(
          updateFeatureSection({ feature:featureValue, section: "image", key: "isImage", value: checked })
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
        id={"featureSideImage"+index}
        section="image"
        upperSection={featureValue}
        sectionType="feature"
      />
      <ImageSizeSlider section="image" datakey="size" sectionType="feature" upperSection={featureValue} defaultValue={imgSize}/>
      <ImageSizeSlider section="image" datakey="radius" sectionType="feature" upperSection={featureValue} defaultValue={ImgRadius}/>
       <div className="w-full flex justify-between">
        Show Image on Right
       <Checkbox checked={!imageOnLeft} onCheckedChange={(checked)=>{
         dispatch(
           updateFeatureSection({ feature:featureValue, section: "image", key: "imageOnLeft", value:!checked})
         );
       }}/>
      </div>
    </>
  )}
  <Input
    type="text"
    placeholder="Enter Your title here"
    className="w-full"
    onChange={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "title", key: "content", value: e.target.value })
      );
    }}
    value={titleContent}
  />
  <ColorPicker
    label="Title Color"
    id={"featureTitleColor"+index}
    defaultValue={titleClr}
    onChange={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "title", key: "color", value: e.target.value })
      );
    }}
    onThemeSelect={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "title", key: "color", value: "none"})
      );
    }}
  />
  <Textarea
    placeholder="Enter description here..."
    onChange={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "description", key: "content", value: e.target.value })
      );
    }}
    value={descriptionContent}
  />
  <ColorPicker
    label="Description Color"
    id={"featureDescriptionColor"+index}
    defaultValue={descriptionClr}
    onChange={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "description", key: "color", value: e.target.value })
      );
    }}
    onThemeSelect={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "description", key: "color", value: "none" })
      );
    }}
  />
  <ColorPicker
    label="Background Color"
    id={"featureBgColor"+index}
    defaultValue={bgClr}
    onChange={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "background", key: "color", value: e.target.value })
      );
    }}

    onThemeSelect={(e) => {
      dispatch(
        updateFeatureSection({ feature:featureValue, section: "background", key: "color", value: "none"})
      );
    }}
  />
  <div className="w-full flex justify-between">
    <div>Background Image</div>
    <Switch
      onCheckedChange={(checked) => {
        dispatch(
          updateFeatureSection({ feature:featureValue, section: "background", key: "isBgImage", value: checked })
        );
      }}
      checked={isBgImage}
    />
  </div>
  {isBgImage && (
    <>
      <FileInput
        title={"Upload BG Image"}
        className="justify-between"
        id={"featureBgImage"+index}
        section="background"
        upperSection={featureValue}
        sectionType="feature"
      />
    </>
  )}
  </div>
  </ScrollArea>
  <MyAlertDialog className="w-full" type="delete" name={"Feature-"+index} onClick={()=>{
    dispatch(deleteFeatureSection(index));
  }}>
  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full">Delete section</Button>
  </MyAlertDialog>
  </div>
)
};

export default CreateFeatureSection;
