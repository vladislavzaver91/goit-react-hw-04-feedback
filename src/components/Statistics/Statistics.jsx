import { PropTypes } from 'prop-types';

import { StatisticContainer, Title, TextContent } from "./Statistics.styled";

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <StatisticContainer>
        <Title>Statistics</Title>
        <TextContent>Good: {good}</TextContent>
        <TextContent>Neutral: {neutral}</TextContent>
        <TextContent>Bad: {bad}</TextContent>
        <TextContent>Total: {total}</TextContent>
        <TextContent>Positive feedback: {positivePercentage}%</TextContent>
    </StatisticContainer>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}