import { createDatesRange } from './create-dates-range';

export const createDefaultFilters = (): { [key: string]: string } => {
  const [startDate, endDate] = createDatesRange(30);
  return {
    type: 'card',
    currency: 'USD',
    dates: `${Math.round(startDate.getTime() / 1000)},${Math.round(endDate.getTime() / 1000)}`,
  };
};
