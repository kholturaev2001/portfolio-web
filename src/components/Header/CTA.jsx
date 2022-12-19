import React from 'react'
import { useSelector } from 'react-redux';
import CV from '../../assets/CV_Muhammadrasul_de.pdf'

const CTA = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.header;
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{data?.cvDownload}</a>
        <a href="#contact" className='btn btn-primary'>{data?.letsTalk}</a>
    </div>
  )
}

export default CTA