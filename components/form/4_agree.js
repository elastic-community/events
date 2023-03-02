
export default function Agree({lang,person}) {
    const SetOnClick = (e) => {
        person[e.target.name] = e.target.value
      }
    return <any>

        <div className="form-group row">
            <label className="col-4">{lang.acceptMarketing}</label>
            <div className="col-8">
                <div className="custom-control custom-radio custom-control-inline">
                    <input name="acceptMarketing" id="radio6_0" type="radio" className="custom-control-input" value={1} required="required"  onClick={SetOnClick} />
                    <label htmlFor="radio6_0" className="custom-control-label">{lang.acceptMarketing_1}</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input name="acceptMarketing" id="radio6_1" type="radio" className="custom-control-input" value={2} required="required"  onClick={SetOnClick} />
                    <label htmlFor="radio6_1" className="custom-control-label">{lang.acceptMarketing_2}</label>
                </div>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-4">{lang.comercialTeam}</label>
            <div className="col-8">
                <div className="custom-control custom-radio custom-control-inline">
                    <input name="comercialTeam" id="radio7_0" type="radio" className="custom-control-input" value={1} required="required"  onClick={SetOnClick} />
                    <label htmlFor="radio7_0" className="custom-control-label">{lang.comercialTeam_1}</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input name="comercialTeam" id="radio7_1" type="radio" className="custom-control-input" value={2} required="required"  onClick={SetOnClick} />
                    <label htmlFor="radio7_1" className="custom-control-label">{lang.comercialTeam_2}</label>
                </div>
            </div>
        </div>
    </any>
}