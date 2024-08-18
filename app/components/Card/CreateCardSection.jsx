import React, { useEffect, useState } from "react";
import SelectFrom from "../SelectFrom";
import { CreateIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { addCardsSection } from "@/lib/features/landingPage/pageSlice";
import EditCardsSection from "./EditCardsSection";

const buttonContent = (
  <div className="flex gap-2">
    Add Card Section
    <CreateIcon />
  </div>
);

const CreateCardSection = () => {
  const allSections = useSelector((state) => state.page);
  let cardsSectionKeysArray = Object.keys(allSections).filter((item) => {
    return item.startsWith("cards");
  });
  const [cards, setCards] = useState();
  const dispatch = useDispatch();
  const onCardsSectionChanged = (value) => {
    setCards(value);
  };
  const onButtonClick = () => {
    dispatch(addCardsSection());
  };

  useEffect(() => {
    setCards(cardsSectionKeysArray.at(-1));
  }, [cardsSectionKeysArray.at(-1)]);

  useEffect(()=>{
    if(!allSections[cards]){
      setCards(cardsSectionKeysArray.at(-1));
    }
  },[allSections[cards]])
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SelectFrom
        buttonContent={buttonContent}
        list={cardsSectionKeysArray}
        onButtonClick={onButtonClick}
        onValueChange={onCardsSectionChanged}
        value={cards}
        placeholder={"Card Section"}
      />
      {cards && allSections[cards] && <EditCardsSection key={cards} index={parseInt(cards.substring(6))} cardsSection={allSections[cards]} cardsKey={cards}/> }
    </div>
  );
};

export default CreateCardSection;
