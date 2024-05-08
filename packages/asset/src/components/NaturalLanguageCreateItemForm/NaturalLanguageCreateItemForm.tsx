export const NaturalLanguageCreateItemForm = (): JSX.Element => {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const person = data.get("person");
        const task = data.get("task");
        const time = data.get("time");

        console.log(person, task, time);

        e.currentTarget.reset();
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <select
          name="person"
          required
          style={{
            border: "none",
            borderBottom: "1px solid black",
            background: "transparent",
          }}
        >
          <option value="honey">honey can you</option>
          <option value="i">i will</option>
        </select>
        <span>do</span>
        <input
          name="task"
          required
          style={{
            border: "none",
            borderBottom: "1px solid black",
            background: "transparent",
          }}
          placeholder="something"
        />
        <select
          name="time"
          required
          style={{
            border: "none",
            borderBottom: "1px solid black",
            background: "transparent",
          }}
        >
          <option>now</option>
          <option>soon</option>
          <option>eventually</option>
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Submit</button>
      </div>
    </form>
  );
};
