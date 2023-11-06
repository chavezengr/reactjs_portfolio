import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleButtonOnClick = () => {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) onChangeName(symbol, playerName);
  };

  const handleInputOnChange = (event) => {
    setPlayerName(event.target.value);
  };

  let displayedPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    displayedPlayerName = (
      <input
        type="text"
        required
        placeholder={playerName}
        value={playerName}
        onChange={handleInputOnChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {displayedPlayerName}
        <span className="player-symbol">[ {symbol} ]</span>
      </span>
      <button onClick={handleButtonOnClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
