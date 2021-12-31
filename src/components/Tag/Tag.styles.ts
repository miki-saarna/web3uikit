import color from "../../styles/colors";
import fonts from "../../styles/fonts";
import resetCSS from "../../styles/reset";

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    border-radius: 20px;
    font-size: 14px;
    justify-content: center;
    overflow: hidden;
    padding: 2px 20px;
    text-align: center;
    width: fit-content;
`;

const regular = `
    background: ${color.blueLight};
`;

const activeStatus = `
    svg {
        padding-right: 5px;
    }
    background: ${color.greenForestLight};
    color: ${color.green};
`;

const inactiveStatus = `
    background: ${color.blueLight};
`;

const discount = `
    border-radius: 30px;
    height: 32px;
    width: 32px;
    padding: 0px 4px;
    font-size: 12px;
    align-items: center;
    background: ${color.green};
    color: ${color.white};
`;

const coloredGreen = `
    background: ${color.greenForestLight};
    color: ${color.green}
`;

const coloredRed = `
    background: ${color.redLight};
    color: ${color.red};
`;

const coloredGray = `
    background: ${color.blueSkyLight};
    color: ${color.blueDark};
`;

const coloredYellow = `
    background: ${color.yellowLight};
    color: ${color.yellow};
`;

const coloredBlue = `
    background: ${color.blueCloud};
    color: ${color.blueSkyDark};
`;

const coloredPurple = `
    background: ${color.purpleLight};
    color: ${color.purple};
`;

const coloredPink = `
    background: ${color.pinkLight};
    color:  ${color.pink};
`;

export const tagStyles = {
	initialStyles,
	inactiveStatus,
	activeStatus,
	discount,
	regular,
	coloredGreen,
	coloredRed,
	coloredGray,
	coloredYellow,
	coloredBlue,
	coloredPurple,
	coloredPink,
};
