
import es from '@/components/languages/es'
import en from '@/components/languages/en'
import pr from '@/components/languages/pr'
import it from '@/components/languages/it'
import fr from '@/components/languages/fr'

export default function Language({lang, setLang}) {
    const setLanguage = (lang) => {
        console.log(lang.target.value)
        switch (lang.target.value) {
            case 'es':
                setLang(es)
                return 
            case 'en':
                setLang(en)
                return 
            case 'pr':
                setLang(pr)
                return 
            case 'fr':
                setLang(fr)
                return 
            case 'it':
                setLang(it)
                return 
            default:
                setLang(en)
                return ;
        }
    }
    return <div className="form-group row">
          <label className="col-4">{lang.lang}</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_0" type="radio" className="custom-control-input" value={"en"} defaultChecked={true} onClick={setLanguage}  /> 
              <label htmlFor="lang_0" className="custom-control-label">English</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_1" type="radio" className="custom-control-input"  value={"es"}  onClick={setLanguage}  /> 
              <label htmlFor="lang_1" className="custom-control-label">Español</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_2" type="radio" className="custom-control-input"  value={"pr"}  onClick={setLanguage} /> 
              <label htmlFor="lang_2" className="custom-control-label">Português</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_3" type="radio" className="custom-control-input"  value={"fr"}  onClick={setLanguage} /> 
              <label htmlFor="lang_3" className="custom-control-label">Français</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_4" type="radio" className="custom-control-input"  value={"it"}  onClick={setLanguage} /> 
              <label htmlFor="lang_4" className="custom-control-label">Italiano</label>
            </div>
          </div>
        </div>
}