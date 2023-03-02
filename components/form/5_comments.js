
export default function Comments({lang}) {

    return <any>

        <div className="form-group row">
            <label htmlFor="textarea" className="col-4 col-form-label">{lang.comments}</label>
            <div className="col-8">
                <textarea id="textarea" name="textarea" cols={40} rows={5} className="form-control" defaultValue={""} />
            </div>
        </div>
        <div className="form-group row">
            <div className="offset-4 col-8">
                <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>

    </any>
}