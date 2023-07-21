import styled from 'styled-components'

const fileUrl = 'https://drive.google.com/file/d/1l79NneJishkfTOCe_GBIjcnqc8Au-WoV/';

const HandleResumeDownload= () => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default HandleResumeDownload