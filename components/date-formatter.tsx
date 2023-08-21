import { parseISO, format } from "date-fns";

type Props = {
  dateString: number;
};

const DateFormatter = ({ dateString }: Props) => {
  return (
    <time dateTime={dateString.toString()}>
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;
