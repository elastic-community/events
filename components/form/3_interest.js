
export default function Interest({lang,person}) {
    const SetOnClick = (e) => {
      person[e.target.name] = e.target.value
    }
    return <any>
         <div className="form-group row">
          <label className="col-4">{lang.localGroupField}</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="localGroupField" id="radio_0" type="radio" className="custom-control-input" value={1} required="required" onClick={SetOnClick} /> 
              <label htmlFor="radio_0" className="custom-control-label">{lang.localGroupField_1}</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="localGroupField" id="radio_1" type="radio" className="custom-control-input"  value={2} required="required" onClick={SetOnClick} /> 
              <label htmlFor="radio_1" className="custom-control-label">{lang.localGroupField_2}</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="localGroupField" id="radio_2" type="radio" className="custom-control-input"  value={3} required="required" onClick={SetOnClick} /> 
              <label htmlFor="radio_2" className="custom-control-label">{lang.localGroupField_3}</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4 col-form-label">{lang.familyWithElastic}</label> 
          <div className="col-8">
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="familyWithElastic" id="radio1_0" type="radio" className="custom-control-input" value={1} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio1_0" className="custom-control-label">{lang.familyWithElastic_1}</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="familyWithElastic" id="radio1_1" type="radio" className="custom-control-input" value={2} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio1_1" className="custom-control-label">{lang.familyWithElastic_2}</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="familyWithElastic" id="radio1_2" type="radio" className="custom-control-input" value={3} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio1_2" className="custom-control-label">{lang.familyWithElastic_3}</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="familyWithElastic" id="radio1_3" type="radio" className="custom-control-input" value={4} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio1_3" className="custom-control-label">{lang.familyWithElastic_4}</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="familyWithElastic" id="radio1_4" type="radio" className="custom-control-input" value={5} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio1_4" className="custom-control-label">{lang.familyWithElastic_5}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">{lang.interestElasticCommunity}</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="interestElasticCommunity" id="radio2_0" type="radio" className="custom-control-input" value={1} required="required" onClick={SetOnClick} />  
              <label htmlFor="radio2_0" className="custom-control-label">{lang.interestElasticCommunity_1}</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="interestElasticCommunity" id="radio2_1" type="radio" className="custom-control-input" value={2} required="required" onClick={SetOnClick} />  
              <label htmlFor="radio2_1" className="custom-control-label">{lang.interestElasticCommunity_2}</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="interestElasticCommunity" id="radio2_2" type="radio" className="custom-control-input" value={3} required="required" onClick={SetOnClick} />  
              <label htmlFor="radio2_2" className="custom-control-label">{lang.interestElasticCommunity_3}</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4 col-form-label">{lang.organizerMeetup}</label> 
          <div className="col-8">
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="organizerMeetup" id="radio3_0" type="radio" className="custom-control-input" value={1} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio3_0" className="custom-control-label">{lang.organizerMeetup_1}</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="organizerMeetup" id="radio3_1" type="radio" className="custom-control-input" value={2} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio3_1" className="custom-control-label">{lang.organizerMeetup_2}</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="organizerMeetup" id="radio3_2" type="radio" className="custom-control-input" value={3} required="required" onClick={SetOnClick} />  
                <label htmlFor="radio3_2" className="custom-control-label">{lang.organizerMeetup_3}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">{lang.familyContributeProgram}</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="familyContributeProgram" id="radio5_0" type="radio" className="custom-control-input" value={1} required="required" onClick={SetOnClick} />  
              <label htmlFor="radio5_0" className="custom-control-label">{lang.familyContributeProgram_1}</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="familyContributeProgram" id="radio5_1" type="radio" className="custom-control-input" value={2} required="required" onClick={SetOnClick} />  
              <label htmlFor="radio5_1" className="custom-control-label">{lang.familyContributeProgram_2}</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="familyContributeProgram" id="radio5_2" type="radio" className="custom-control-input" value={3} required="required" onClick={SetOnClick} />  
              <label htmlFor="radio5_2" className="custom-control-label">{lang.familyContributeProgram_3}</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="familyContributeProgram" id="radio5_3" type="radio" className="custom-control-input" value={4} required="required" onClick={SetOnClick} />  
              <label htmlFor="radio5_3" className="custom-control-label">{lang.familyContributeProgram_4}</label>
            </div>
          </div>
        </div>
        </any>
}
