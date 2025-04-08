import { getMetadata } from '../../scripts/aem.js';

export default async function decorate(block) {
  const blockDiv = document.createElement('div');
  blockDiv.id = 'abstract';
  block.textContent = '';
  block.append(blockDiv);

  const surveyScript = getMetadata('surveyscript');
  function loadSurveyScript() {
    if (typeof surveyScript !== 'string' || !surveyScript.includes('sciex.siteintercept.qualtrics.com')) {
      return;
    }
    const script = document.createElement('script');
    script.innerHTML = surveyScript;
    document.head.appendChild(script);
  }
  const enableSurveyScript = getMetadata('enablesurveyscript');
  if (enableSurveyScript && enableSurveyScript === 'true') {
    loadSurveyScript();
  }
}
