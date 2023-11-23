import React from 'react';
import { useTranslation } from 'react-i18next';
import './TeamMemberSpeech.css'; // Asegúrate de que el archivo CSS existe y está en la ubicación correcta

// El componente TeamMemberSpeech toma tres props: titleKey, textKey, y imageSrc
function TeamMemberSpeech({ titleKey, textKey, imageSrc }) {
    const { t } = useTranslation();
  
    return (
      <div className="team-member-speech">
        <img src={imageSrc} alt={t(titleKey)} className="team-member-photo" />
        <div className="speech-bubble">
          <h2>{t(titleKey)}</h2>
          <p>{t(textKey)}</p>
        </div>
      </div>
    );
  }
  
export default TeamMemberSpeech; // Exporta el componente para usarlo en otras partes de tu aplicación
