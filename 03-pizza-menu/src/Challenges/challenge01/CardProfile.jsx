import React from 'react'
import './CardProfile.css'

const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00"
    }
  ];
export default function CardProfile() {
  return (
    <>
     {/* Challenge 1 */}

     <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
      
    </>
  )
}

function SkillList() {
    return (
      <div className="skillList">
  
        {
          skills.map(mySkill => (
  
            <Skill mySkill={mySkill} />
          ))
        }
      </div>
    );
  }
  function Skill({mySkill}) {
    // let emoji;
    // switch (mySkill.level) {
    //   case 'advanced':
    //     emoji = '💪';
    //     break;
    //   case 'intermediate':
    //     emoji = '👍';
    //     break;
    //   case 'beginner':
    //     emoji = '🙂';
    //     break;
    // }
    return (
      <div className="skill" style={{ backgroundColor: mySkill.color }}>
        {/* <span>{mySkill.skill + ` ${emoji}`}</span> */}
        <span>
          {mySkill.level ===  'advanced' &&  mySkill.skill + ' 💪'}
          {mySkill.level ===  'intermediate' &&  mySkill.skill + ' 👍'}
          {mySkill.level ===  'beginner' &&  mySkill.skill + ' 🙂'}
        </span>
      </div>
    );
  }
  function Intro() {
    return (
      <div className="Intro">
        <h2>Mohamed Mounir</h2>
        <p>
          I’m currently training in ITI in Front-end & Cross Platform Mobile
          Development Track. 💬 Ask me about my experience with JavaScript, and
          ReactJS, or anything related to Front-end web development.
        </p>
      </div>
    );
  }
  
  function Avatar() {
    return <img className="avatar" src={"pizzas/mounir.jpg"} />;
  }
  function Card() {
    return <div></div>;
  }
  