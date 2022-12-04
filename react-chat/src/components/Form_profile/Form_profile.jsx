import "./Form_profile.scss"

export const Form_profile = (props) => {
  return (
    <>
        <form className="form_profile" action="/">
          <span className="text_form">{props.name}</span>
          <input
            className="form-input" 
            type="text"
          />
        </form>
        <div class = "remark">{props.remark}</div>  
    </>
  );
};