import { forEach, map } from "lodash";

interface calculateProps {
    subject: number;
}

export const calculateNum = (props: calculateProps[]) => {
    const numArr = props ? props: [{ subject: 0 }, { subject: 66.5 }, { subject: 33.4 }, { subject: 0 }];
    const subject = map(numArr, (num) => num.subject);
    const initialValue = 0;
    const sumWithInitial = subject.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );

    const greatestNum = Math.max.apply(null, subject);

    if (sumWithInitial < 100) {
      forEach(numArr, (arr) => {
        if (arr.subject === greatestNum) {
          arr.subject = greatestNum + 100 - sumWithInitial;
        }
      });
    }

    return numArr;
  };