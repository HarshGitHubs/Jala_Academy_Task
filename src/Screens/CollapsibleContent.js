import { Collapse, Tabs } from 'antd';
import React from 'react'

export default function CollapsibleContent() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Single Values',
      children: <SingleCollapse/> ,
    },
    {
      key: '2',
      label: 'Multiple Values',
      children: <MultipleCollapse/> ,
    }

  ];

  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

let text = [
  "What are your priorities for the day? Make a list of your priorities and plan your day. The tasks of the day must be outlined with the most important and urgent ones on top.\n\nLikewise, determine your short-term and long-term goals and evaluate your progress frequently.",
  "Are you really present physically and mentally. Try to block out all distractions so that you have",
  "There is a big difference between a mentor and a coach\n Mentoring is a long-term process based on mutual trust and respect.\n Coaching, on the other hand, is for a short period of time.The topmost priority of a mentor is to help develop skills that are not just relevant for the mentees in their present job, but also for the future. A mentor has the first-hand experience in the industry"
]

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text[0]}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text[1]}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text[2]}</p>,
  },
];



const SingleCollapse =()=>{
  return (
    <Collapse accordion items={items} />
  )
}

const MultipleCollapse =()=>{
  return <Collapse items={items} defaultActiveKey={['1']} />;
};
