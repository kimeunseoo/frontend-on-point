import { Modal } from "@mui/material";
import React, { useState } from "react";
import Datetime from "react-datetime";

function AddEvent({ isOpen, onClose, onEventAdded }) {
  const [eventValue, setEventValue] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmitEvent = (e) => {
    e.preventDefault();
    onEventAdded({
      eventValue,
      start,
      end,
    });
    onClose();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <form onSubmit={onSubmitEvent}>
          <input
            placeholder="add event"
            value={eventValue}
            onChange={(e) => setEventValue(e.target.value)}
          />
          <div>
            <label>START DATE</label>
            <Datetime value={start} onChange={(date) => setStart(date)} />
          </div>
          <div>
            <label>END DATE</label>
            <Datetime value={end} onChange={(date) => setEnd(date)} />
          </div>
        </form>

        <button> ADD EVENT </button>
      </Modal>
    </div>
  );
}

export default AddEvent;
