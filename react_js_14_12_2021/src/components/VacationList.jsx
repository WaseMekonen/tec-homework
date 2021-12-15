import React, { useState } from "react";

export default function VactionList() {
  const [location, setLocation] = useState([]);
  const [userInput, setUserinput] = useState("");
  const [activeVaction, setActiveVaction] = useState([]);
  const [copletedVaction, setCompletedVaction] = useState([]);

  const [buttons, setButtons] = useState({
    all: true,
    active: false,
    completed: false,
  });

  function addVacation() {
    const newLocation = [...location];
    newLocation.push(userInput);
    setLocation(newLocation);
  }

  const isVacationDone = (index) => {
    const completedVacations = [...location];
    completedVacations[index].isCompleted =
      !completedVacations[index].isCompleted;
    setLocation(completedVacations);
  };

  const fillActiveVaction = () => {
    const tempActiveVacation = [];
    location.map((item) => {
      if (item.isCompleted == false) {
        tempActiveVacation.push(item);
      }
    });
    setActiveVaction(tempActiveVacation);
  };

  const fillCompletedVaction = () => {
    const tempCompletedVacation = [];
    location.map((item) => {
      if (item.isCompleted == true) {
        tempCompletedVacation.push(item);
      }
    });
    setCompletedVaction(tempCompletedVacation);
  };

  const showAllMode = (
    <ul>
      {location.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              isVacationDone(index);
            }}
          >
            {item.isCompleted ? <del>{item.location}</del> : item.location}
          </li>
        );
      })}
    </ul>
  );

  const showActiveVacations = (
    <ul>
      {activeVaction.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              isVacationDone(index);
            }}
          >
            {item.isCompleted ? <del>{item.location}</del> : item.location}
          </li>
        );
      })}
    </ul>
  );

  const showCompletedVacation = (
    <ul>
      {copletedVaction.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              isVacationDone(index);
            }}
          >
            {item.isCompleted ? <del>{item.location}</del> : item.location}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <h2>Vacation Wish List</h2>
      <div className="add-vacation-location">
        <form
          onSubmit={(e) => {
            e.preventDefault(), (e.target[0].value = " ");
          }}
        >
          <div>
            <input
              type="text"
              name="userinput"
              onChange={(e) => {
                setUserinput({
                  location: e.target.value,
                  isCompleted: false,
                  id: new Date().getTime(),
                });
              }}
            />
            <input
              type="submit"
              value="Add Vacation"
              onClick={() => {
                addVacation();
              }}
            />
          </div>
        </form>
      </div>
      <div className="vacation-list">
        {buttons.all ? showAllMode : null}
        {buttons.active ? showActiveVacations : null}
        {buttons.completed ? showCompletedVacation : null}
      </div>

      <div className="select-mode">
        <button
          disabled={buttons.all}
          onClick={() => {
            setButtons({
              ...buttons,
              all: true,
              completed: false,
              active: false,
            });
          }}
        >
          All
        </button>
        <button
          disabled={buttons.active}
          onClick={() => {
            setButtons({
              ...buttons,
              active: true,
              all: false,
              completed: false,
            }),
              fillActiveVaction();
          }}
        >
          Active
        </button>
        <button
          disabled={buttons.completed}
          onClick={() => {
            setButtons({
              ...buttons,
              completed: true,
              active: false,
              all: false,
            }),
              fillCompletedVaction();
          }}
        >
          Completed
        </button>
      </div>
    </>
  );
}
