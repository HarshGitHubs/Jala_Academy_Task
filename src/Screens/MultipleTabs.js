import { Tabs } from 'antd';
import React from 'react'

export default function MultipleTabs() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Plan to Succeed',
      children: <PlanToSucceed/> ,
    },
    {
      key: '2',
      label: 'UnLearning',
      children: <UnLearning/> ,
    },
    {
      key: '3',
      label: 'Ways of Learning',
      children: <WaysofLearning/> ,
    }

  ];

  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

const PlanToSucceed = () => {
  return (
    <div>
      <p>Congratulations, You are in the best place to learn the technologies for JOB. Please strictly follow the plan for the first 45 days to see the unbelievable results.</p><br></br>
      <p>You must UNLEARN to LEARN new things every day as technologies are changing faster than ever and Because the old rules will no longer apply...and so your old knowledge is. It's time for us to think beyond.</p><br></br>
      <p>It's not just learning technologies, Also You learn how to use your knowledge and experience to get a job in less than 100 days.</p>
      <input style={{height:30, width:'100%', marginBottom:10}}/>

      <input style={{height:30, width:'100%'}}/>
    </div>
  )
}

const UnLearning = () => {
  return (
    <div>
      <p>Unlearning is the process of realizing that something which we learned earlier is incorrect, ineffective, or obsolete, admitting it and deciding to erase such bad conditioning and misconceptions from our mind for good. It is the process of exploring what we have stored in our system and deleting all the unnecessary data. It is the process of saying bye to an old, obsolete, and outdated paradigm and embracing a new paradigm and willingly undergoing a paradigm shift.</p><br/>
      <p>Unfortunately, we are controlled by myths which do not allow us to open our eyes to reality</p><br></br>
      <input style={{height:30, width:'100%', marginBottom:10}}/>

      <input style={{height:30, width:'100%'}}/>
    </div>
  )
}

const WaysofLearning = () => {
  return (
    <div>
      <p>The first step towards becoming an “unlearned” is not just to have a thirst for knowledge but to question our knowledge. Discussing our knowledge with those who are competent in a particular field, being challenged constantly, and being ready to be proved wrong will help us understand whether what we have learned is still relevant or obsolete. It is also important to question one’s belief system and check whether we are treating myths as scientific facts.</p><br></br>
      <p>The next important step is to take steps to develop creative and critical thinking.</p><br></br>

      <input style={{height:30, width:'100%', marginBottom:10}}/>
      <input style={{height:30, width:'100%'}}/>
    </div>
  )
}

