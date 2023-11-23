import React from 'react';
import './AboutUs.css';
import TeamMemberSpeech from './TeamMemberSpeech';
import { useTranslation } from 'react-i18next';
import carmelaImage from '../PhotoAboutUs/carmela.jpg';
import elenaImage from '../PhotoAboutUs/elena.jpg';
import rachelImage from '../PhotoAboutUs/rachel.jpg';
import vladImage from '../PhotoAboutUs/vlad.jpg';
import tulioImage from '../PhotoAboutUs/tulio.jpg';

function AboutUs() {
  const { t } = useTranslation();


  const teamMembers = [
    {
      titleKey: "History_or_Mission_title",
      textKey: "History_or_Mission",
      imageSrc: tulioImage,
    },
    {
      titleKey: "equipment_title",
      textKey: "equipment",
      imageSrc: elenaImage,
    },
    {
      titleKey: "Values_title",
      textKey: "Values",
      imageSrc: rachelImage,
    },
    {
      titleKey: "Future_and_Objectives_title",
      textKey: "Future_and_Objectives",
      imageSrc: carmelaImage,
    },
    {
      titleKey: "Call_to_Action_title",
      textKey: "Call_to_Action",
      imageSrc: vladImage,
    }
  ];

  return (
    <div className="aboutUs-container">
      {teamMembers.map(member => (
        <TeamMemberSpeech
          key={member.titleKey}
          titleKey={member.titleKey} 
          textKey={member.textKey} 
          imageSrc={member.imageSrc}
        />
      ))}
    </div>
  );
}

export default AboutUs;
