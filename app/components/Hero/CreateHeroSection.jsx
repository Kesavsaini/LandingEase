import React from "react";
import { Switch } from "@/components/ui/switch";
import { useSelector, useDispatch } from "react-redux";
import { updateHero } from "@/lib/features/landingPage/pageSlice";
import { FileInput } from "../FileInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ColorPicker from "../ColorPicker";
import ImageSizeSlider from "../ImageSizeSlider";

const CreateHeroSection = () => {
  const {
    logo: { isLogo, src: logoSrc },
    image: { isImage, src: ImageSrc,size:imgSize },
    bigText: { color: bigTextColor,content:bigTextContent },
    smallText: { color: smallTextColor,content:smallTextContent },
    backGroundImage: { isBackGroundImage, backGroundColor },
  } = useSelector((state) => state.page.hero);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 w-11/12 p-2">
      <div className="w-full flex justify-between">
        <div>Logo</div>
        <Switch
          onCheckedChange={(checked) => {
            dispatch(
              updateHero({ section: "logo", key: "isLogo", value: checked })
            );
          }}
          checked={isLogo}
        />
      </div>
      {isLogo && (
        <>
          <FileInput
            title={"Upload logo"}
            className="justify-between"
            id="logoImage"
            section="logo"
            sectionType="hero"
          />
        </>
      )}
      <Input
        type="text"
        placeholder="Enter Your Hero title here"
        className="w-full"
        onChange={(e) => {
          dispatch(
            updateHero({
              section: "bigText",
              key: "content",
              value: e.target.value,
            })
          );
        }}
        value={bigTextContent}
      />
      <ColorPicker
        label="Title Color"
        id="bigTextColor"
        defaultValue={bigTextColor}
        onChange={(e) => {
          dispatch(
            updateHero({
              section: "bigText",
              key: "color",
              value: e.target.value,
            })
          );
        }}
        onThemeSelect={()=>{
          dispatch(
            updateHero({
              section: "bigText",
              key: "color",
              value: "none",
            })
          );
        }}
      />
      <Textarea
        placeholder="Enter Hero description here..."
        onChange={(e) => {
          dispatch(
            updateHero({
              section: "smallText",
              key: "content",
              value: e.target.value,
            })
          );
        }}
        value={smallTextContent}
      />
      <ColorPicker
        label="Description Color"
        id="smallTextColor"
        defaultValue={smallTextColor}
        onChange={(e) => {
          dispatch(
            updateHero({
              section: "smallText",
              key: "color",
              value: e.target.value,
            })
          );
        }}
        onThemeSelect={()=>{
          dispatch(
            updateHero({
              section: "smallText",
              key: "color",
              value: "none",
            })
          );
        }}
      />
      <div className="w-full flex justify-between">
        <div>Side Image</div>
        <Switch
          onCheckedChange={(checked) => {
            dispatch(
              updateHero({ section: "image", key: "isImage", value: checked })
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
            id="sideImage"
            section="image"
            sectionType="hero"
          />
          <ImageSizeSlider section="image" datakey="size" sectionType="hero" defaultValue={imgSize}/>
        </>
      )}
      <ColorPicker
        label="Background Color"
        id="smallTextColor"
        defaultValue={backGroundColor}
        onChange={(e) => {
          dispatch(
            updateHero({
              section: "backGroundImage",
              key: "backGroundColor",
              value: e.target.value,
            })
          );
        }}
        onThemeSelect={()=>{
          dispatch(
            updateHero({
              section: "backGroundImage",
              key: "backGroundColor",
              value: "none",
            })
          );
        }}
      />
      <div className="w-full flex justify-between">
        <div>Background Image</div>
        <Switch
          onCheckedChange={(checked) => {
            dispatch(
              updateHero({ section: "backGroundImage", key: "isBackGroundImage", value: checked })
            );
          }}
          checked={isBackGroundImage}
        />
      </div>
      {isBackGroundImage && (
        <>
          <FileInput
            title={"Upload BG Image"}
            className="justify-between"
            id="herobackGroundImage"
            section="backGroundImage"
            sectionType="hero"
          />
        </>
      )}
    </div>
  );
};

export default CreateHeroSection;
