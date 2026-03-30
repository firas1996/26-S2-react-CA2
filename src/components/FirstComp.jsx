const FirstComp = ({ name, getData }) => {
  const test = "World !";
  getData(test);
  return (
    <div>
      <h2>My Name is {name}</h2>
    </div>
  );
};

export default FirstComp;
