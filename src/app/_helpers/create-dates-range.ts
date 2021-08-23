export const createDatesRange = (daysBack: number): [Date, Date] => {
  const upperDate = new Date();
  const lowerDate = new Date();
  lowerDate.setDate(lowerDate.getDate() - daysBack);
  return [lowerDate, upperDate];
};
