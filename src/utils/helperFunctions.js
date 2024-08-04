import { Platform } from "react-native";
import { showMessage } from "react-native-flash-message";
import uuid from "react-native-uuid";
const showError = (message) => {
  showMessage({
    type: "danger",
    icon: "danger",
    message,
  });
};
const showInfo = (message) => {
  showMessage({
    type: "info",
    icon: "info",
    message,
  });
};
const showSuccess = (message) => {
  showMessage({
    type: "success",
    icon: "success",
    message,
  });
};


export { showError, showInfo, showSuccess };


export const isAndroid = Platform.OS == "android";

export const JSONData = (data, flag) => {
  console.log(JSON.stringify(data, null, 2), flag);
};

export const getUniqID = () => {
  return uuid.v4();
};

export function getRandomLightColor() {
  const getRandomValue = () => Math.floor(Math.random() * 156) + 100; // values between 100 and 255

  const red = getRandomValue();
  const green = getRandomValue();
  const blue = getRandomValue();

  return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

export const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function getMonthlyUserCounts(users) {
  const currentDate = new Date();
  const startDate = new Date(
    currentDate?.getFullYear(),
    currentDate?.getMonth() - 3,
    1,
  );
  const endDate = new Date(
    currentDate?.getFullYear(),
    currentDate?.getMonth() + 2,
    1,
  );
  endDate.setMonth(endDate.getMonth() + 1); // Move to the next month to cover the whole month
  endDate.setDate(0); // Move back to the last day of the current month
  // Initialize data with the relevant 6 months set to 0
  const data = [];
  for (let i = 0; i < 6; i++) {
    const monthDate = new Date(startDate);
    monthDate.setMonth(startDate.getMonth() + i);
    data.push({label: monthLabels[monthDate.getMonth()], value: 0});
  }

  users.forEach(user => {
    const date = new Date(user.createdAt);
    if (date >= startDate && date <= endDate) {
      const monthIndex = (date.getMonth() - startDate.getMonth() + 6) % 6;
      data[monthIndex].value += 1;
    }
  });
  return data;
}