export default function Profile({lang}) {
    return <any>
        <div className="form-group row">
            <label htmlFor="name" className="col-4 col-form-label">{lang.name}</label>
            <div className="col-8">
                <input id="name" name="name" type="text" className="form-control" required="required" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="lastName" className="col-4 col-form-label">{lang.lastName}</label>
            <div className="col-8">
                <input id="lastName" name="lastName" type="text" className="form-control" required="required" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="email" className="col-4 col-form-label">{lang.email}</label>
            <div className="col-8">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-address-book" />
                        </div>
                    </div>
                    <input id="email" name="email" type="text" className="form-control" required="required" />
                </div>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="employeer" className="col-4 col-form-label">{lang.work}</label>
            <div className="col-8">
                <input id="employeer" name="employeer" type="text" className="form-control" />
            </div>
        </div>
    </any>
}