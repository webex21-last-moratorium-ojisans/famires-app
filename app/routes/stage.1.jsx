import { useState } from "react";
export default function Stage1() {
  const stage1 = {
    message: `This is Stage 1page`,
  };
  const drinkList = [
    {
      name: "赤いドリンク",
      red: 256,
      green: 0,
      blue: 0,
    },
    {
      name: "緑のドリンク",
      red: 0,
      green: 256,
      blue: 0,
    },
  ];
  const [drinkColor, setDrinkColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const [amount, setAmount] = useState(0);

  const addColor = function (color) {
    setAmount(1);
    return {
      red: drinkColor.red * amount + color.red * (1 - amount),
      green: drinkColor.green * amount + color.green * (1 - amount),
      blue: drinkColor.blue * amount + color.blue * (1 - amount),
    };
  };
  const addDrink = function (index) {
    const newDrinkColor = addColor(drinkList[index]);
    setDrinkColor(newDrinkColor);
  };
  const decreaseDrink = function () {
    setAmount(amount / 2);
  };
  const drinkBar = drinkList.map((drink, index) => {
    return (
      <div key={index}>
        <button
          onClick={() => {
            addDrink(index);
          }}
        >
          {drink.name}
        </button>
      </div>
    );
  });

  return (
    <div>
      {stage1.message}
      {drinkBar}
      <button onClick={decreaseDrink}>半分飲む</button>
      <div>
        R: {drinkColor.red}, G: {drinkColor.green}, B: {drinkColor.blue}
      </div>
      <div>量: {amount}</div>
    </div>
  );
}
