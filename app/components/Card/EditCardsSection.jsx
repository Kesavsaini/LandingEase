import React from "react";
import ColorPicker from "../ColorPicker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreateIcon, DeleteIcon, DuplicateIcon } from "../Icons";
import CardDrawer from "./CardDrawer";
import { useDispatch } from "react-redux";
import {
  addCardToTheSection,
  deleteCard,
  deleteCardsSection,
  duplicateCard,
  updateCardsSection,
} from "@/lib/features/landingPage/pageSlice";
import MyAlertDialog from "../MyAlertDialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const EditCardsSection = ({ cardsSection, index, cardsKey }) => {
  const {
    title: { content, color: titleClr },
    background: { color: bgClr },
    cards,
  } = cardsSection;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 w-11/12 p-2">
      <ColorPicker
        label="Background Color"
        id={"cardsBgColor" + index}
        defaultValue={bgClr}
        onChange={(e) => {
          dispatch(
            updateCardsSection({
              cardsSection: cardsKey,
              section: "background",
              key: "color",
              value: e.target.value,
            })
          );
        }}
        onThemeSelect={(e) => {
          dispatch(
            updateCardsSection({
              cardsSection: cardsKey,
              section: "background",
              key: "color",
              value: "none",
            })
          );
        }}
      />
      <Input
        type="text"
        placeholder="Enter Your title here"
        className="w-full"
        onChange={(e) => {
          dispatch(
            updateCardsSection({
              cardsSection: cardsKey,
              section: "title",
              key: "content",
              value: e.target.value,
            })
          );
        }}
        value={content}
      />
      <ColorPicker
        label="Title Color"
        id={"cardsTitleColor" + index}
        defaultValue={titleClr}
        onChange={(e) => {
          dispatch(
            updateCardsSection({
              cardsSection: cardsKey,
              section: "title",
              key: "color",
              value: e.target.value,
            })
          );
        }}
        onThemeSelect={(e) => {
          dispatch(
            updateCardsSection({
              cardsSection: cardsKey,
              section: "title",
              key: "color",
              value: "none",
            })
          );
        }}
      />

      <Button
        variant="outline"
        className="border-dashed"
        onClick={() => {
          dispatch(addCardToTheSection({ cardsSection: cardsKey }));
        }}
      >
        <CreateIcon />
        Create Card
      </Button>
      <ScrollArea className="h-52">
        <div className="flex flex-col gap-2 h-52">
      {cards.map((card, index) => {
        return (
          <CreateCardWidget index={index} card={card} cardsKey={cardsKey} />
        );
      })}
      </div>
     </ScrollArea>
     <MyAlertDialog type="delete" name={"CardsSection-"+index} onClick={()=>{
    dispatch(deleteCardsSection(index));
  }}>
  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full">Delete section</Button>
  </MyAlertDialog>
    </div>
  );
};

export const CreateCardWidget = ({ index, card, cardsKey }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-between">
      <CardDrawer card={card} index={index} cardsKey={cardsKey}>
        <div className="border p-2 rounded-lg"> {"Edit Card " + index}</div>
      </CardDrawer>
      <div className="flex items-center">
        <MyAlertDialog
          type="delete"
          name={"Card "+index}
          onClick={() => {
            console.log("yaha To aa gaya least")
            dispatch(deleteCard({cardsSection: cardsKey, index}));
          }}
        >
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red-800 p-1"
          >
            <DeleteIcon />
          </Button>
        </MyAlertDialog>

        <Button
          variant="ghost"
          className="p-1"
          onClick={() => {
            dispatch(duplicateCard({ cardsSection: cardsKey, index }));
          }}
        >
          <DuplicateIcon />
        </Button>
      </div>
    </div>
  );
};

export default EditCardsSection;
