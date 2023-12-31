const showFormattedDate = (date, languange) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(languange, options);
};

export default showFormattedDate;
