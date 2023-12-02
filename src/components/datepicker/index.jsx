import "./datepicker.scss";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import { useSkin } from "@hooks/useSkin";

const CustomDatePicker = ({
  inputClassName,
  minimumDate,
  maximumDate,
  ...props
}) => {
  const { skin } = useSkin();

  return (
    <div className="custom_datepicker_wrapper">
      <DatePicker
        colorPrimary="#73bcf0"
        colorPrimaryLight="#73bcf03b"
        inputClassName={`${inputClassName}
          ${skin === "light" ? "custom_datepicker" : "custom_datepicker_dark"}
        `}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        locale={"en"}
        calendarPopperPosition="top"
        calendarClassName="responsive-calendar"
        {...props}
      />
      <AiOutlineCalendar fontSize={20} />
    </div>
  );
};
export default CustomDatePicker;
