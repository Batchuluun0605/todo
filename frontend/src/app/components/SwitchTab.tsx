const SwitchTab = () => {
  const data = [
    {
      name: "Board",
    },
    {
      name: "list",
    },
  ];
  return (
    <div>
      <header className="flex gap-4 text-xl ">
        {data.map((el, index) => (
          <p key={el.name + index} className=" font-bold">
            {el.name}
          </p>
        ))}
      </header>
    </div>
  );
};

export default SwitchTab;
