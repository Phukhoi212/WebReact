import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  label: {
    fontSize: 14,
    fontWeight: "bold"
  }
}));

function getSteps() {
  return ["Đặt hàng thành công!!!", "Giao hàng", "Nhận hàng và phản hổi"];
}

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep] = React.useState(1);
  const [skipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <div>
          <Typography className={classes.instructions}>
            {props.data !== "" ? (
              <div>
                <div><label className={classes.label}>Tên người nhận hàng:</label> {props.data.name}</div>
                <div><label className={classes.label}>Số điện thoại người nhận:</label> {props.data.phone}</div>
                <div><label className={classes.label}>Ngày đặt hàng:</label> {props.data.date_oder}</div>
                <div><label className={classes.label}>Địa chỉ giao hàng:</label> {props.data.address}</div>
                <div><label className={classes.label}>Ghi chú:</label> {props.data.note}</div>
              </div>

            ) : ""}
          </Typography>
        </div>
      </div>
    </div>
  );
}
