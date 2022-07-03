import TimeAgo from "react-timeago";

const monthDiff = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

export const formatDateString = (timestamp) => {
  const timestampDate = new Date(timestamp);

  if (monthDiff(timestampDate, new Date()) < 1) {
    return <TimeAgo date={timestampDate} />;
  }
  return timestampDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};
