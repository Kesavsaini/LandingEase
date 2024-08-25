import { Switch } from "@/components/ui/switch";
import {
  handleSocial,
  updateFooter,
} from "@/lib/features/landingPage/pageSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "../ColorPicker";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateIcon, DeleteIcon } from "../Icons";
import SelectInputType from "../Form/SelectInputType";
import SelectSocial from "./SelectSocial";
import MyAlertDialog from "../MyAlertDialog";
import PopOver from "../PopOver";
import { ScrollArea } from "@/components/ui/scroll-area";

const CreateFooter = () => {
  const {
    meta: { isFooter },
    adress: { isLogo, content, color: addressClr },
    background: { color: bgClr },
    socials: { socialArray },
  } = useSelector((state) => state.page.footer);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 w-11/12 p-2">
      <div className="w-full flex justify-between">
        <div>Footer</div>
        <Switch
          onCheckedChange={(checked) => {
            dispatch(
              updateFooter({ section: "meta", key: "isFooter", value: checked })
            );
          }}
          checked={isFooter}
        />
      </div>
      {isFooter && (
        <div className="w-full flex flex-col gap-2">
          <ColorPicker
            label="Footer BG Color"
            id="footerBgColor"
            defaultValue={bgClr}
            onChange={(e) => {
              dispatch(
                updateFooter({
                  section: "background",
                  key: "color",
                  value: e.target.value,
                })
              );
            }}
            onThemeSelect={() => {
              dispatch(
                updateFooter({
                  section: "background",
                  key: "color",
                  value: "none",
                })
              );
            }}
          />
          <div className="w-full flex justify-between">
            <div>Adress Logo</div>
            <Switch
              onCheckedChange={(checked) => {
                dispatch(
                  updateFooter({
                    section: "adress",
                    key: "isLogo",
                    value: checked,
                  })
                );
              }}
              checked={isLogo}
            />
          </div>
          <Textarea
            placeholder="Enter Address Here"
            onChange={(e) => {
              dispatch(
                updateFooter({
                  section: "adress",
                  key: "content",
                  value: e.target.value,
                })
              );
            }}
            value={content}
          />
          <ColorPicker
            label="Adress Color"
            id="footerAdressColor"
            defaultValue={addressClr}
            onChange={(e) => {
              dispatch(
                updateFooter({
                  section: "adress",
                  key: "color",
                  value: e.target.value,
                })
              );
            }}
            onThemeSelect={() => {
              dispatch(
                updateFooter({
                  section: "adress",
                  key: "color",
                  value: "none",
                })
              );
            }}
          />
          <Button
            variant="outline"
            className="border-dashed w-full"
            onClick={() => {
              dispatch(handleSocial({ type: "add" }));
            }}
          >
            {" "}
            <CreateIcon />
            Add Social Link
          </Button>
          <ScrollArea>
          <div className="flex flex-col gap-2 h-52 p-1">
          {
            socialArray.map((social, i) => (
              <ScoialWidget
                key={i}
                index={i}
                social={social}
              />
            ))
          }
          </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

const ScoialWidget = ({ index, social }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-between items-center">
      <SelectSocial
        onValueChange={(value) => {
          dispatch(
            handleSocial({ index, type: "update", key: "type", value: value })
          );
        }}
        value={social.type}
      />
      <PopOver
        onChange={(e) => {
          dispatch(
            handleSocial({ index, type: "update", key: "link", value: e.target.value })
          );
        }}
        value={social.link}
        placeholder={"Enter Link of your social"}
      />
      <div className="flex items-center">
        <MyAlertDialog
          type="delete"
          name={social.type}
          onClick={() => {
            dispatch(handleSocial({ index, type: "delete" }));
          }}
        >
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red-800 p-1"
          >
            <DeleteIcon />
          </Button>
        </MyAlertDialog>
        <ColorPicker
            label="Soical Color"
            id={"footerSocialColor"+index}
            defaultValue={social.color}
            onChange={(e) => {
                dispatch(
                    handleSocial({ index, type: "update", key: "color", value: e.target.value })
                  );
            }}
            onThemeSelect={() => {
                dispatch(
                    handleSocial({ index, type: "update", key: "color", value: "none" })
                  );
            }}
            noLabel={true}
          />
      </div>
    </div>
  );
};

export default CreateFooter;
