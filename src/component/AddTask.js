import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add a task");
      return;
    }

    onAdd({ text, day, time, reminder });
    

    setText("");
    setTime("");
    setDay("");
    setReminder("");
  };

  return (
    <form className="add-form" onSubmit={SubmitHandler}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="form-control checkbox">
        <input
          type="checkbox"
          checked = {reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label>Set Reminder</label>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
