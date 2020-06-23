declare module "react-simple-checkbox" {
  type ColorObject = {
    backgroundColor: string;
    borderColor: string;
    uncheckedBorderColor: string;
    tickColor: string;
  };

  export default function Checkbox(props: {
    backAnimationDuration?: number;
    borderThickness?: 1 | 2 | 3 | 4;
    checked?: boolean;
    className?: string;
    color?: string | ColorObject;
    delay?: number;
    id?: string;
    onChange?: Function;
    size?: 1 | 2 | 3;
    tickAnimationDuration?: number;
    tickSize?: 1 | 2 | 3;
  }): JSX.Element;
}
