import React from "react";
import "./style.css";

const Candidate = ({ name, avatar, onVote }) => {
  const handleVoteClick = () => {
    onVote(name);
  };

  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <button className="btn-vote" onClick={handleVoteClick}>
        Vybrat
      </button>
    </div>
  );
};

export default Candidate;
