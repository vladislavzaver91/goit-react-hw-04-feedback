import { useState } from 'react';

import { OuterWrap, InnerWrap, Title } from './Section.styled';
import {FeedbackOptions} from '../FeedbackOptions';
import {Statistics} from '../Statistics';
import { Notification } from '../Notification';

export const Section = ({ title }) => {
    const [good, SetGood] = useState(0);
    const [neutral, SetNeutral] = useState(0);
    const [bad, SetBad] = useState(0);

    const onChangeStatistic = ev => {
        const { name } = ev.currentTarget;

        switch (name) {
            case 'good':
                SetGood(good + 1);
                break;
            case 'neutral':
                SetNeutral(neutral + 1);
                break;
            case 'bad':
                SetBad(bad + 1);
                break;
            default:
                break;
        };
    };

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Number.parseInt(
        (good / (good + neutral + bad)) * 100
    );

    const message = 'There is no feedback';
    const statistic = ['good', 'neutral', 'bad'];

    return (
        <OuterWrap>
        <InnerWrap>
            <Title>{title}</Title>

            <FeedbackOptions options={statistic} onLeaveFeedback={onChangeStatistic}/>
            {countTotalFeedback > 0 ? (
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
            />
            ) : (<Notification message={message} />
            )}
        </InnerWrap>
        </OuterWrap>
        )
};
