import React from "react";
import TextField from "@material-ui/core/TextField";

class Input extends React.Component {
  render() {
    return (
      <form className="form-input" autoComplete="off">
        <TextField
          id="outlined-dense"
          label={this.props.label}
          type={this.props.type}
          name={this.props.name}
          margin="dense"
          variant="outlined"
          value={this.props.value}
          onChange={this.props.onChange}
          required={this.props.required}
          error={this.props.hasError}
          helperText={this.props.errorMessage}
          disabled={this.props.disabled}
          inputProps={this.props.inputProps}
          onInput={this.props.onInput}
          placeholder={this.props.placeholder}
          style={this.props.style}
          fullWidth
          multiline
        />
      </form>
    );
  }
}
export default Input;
