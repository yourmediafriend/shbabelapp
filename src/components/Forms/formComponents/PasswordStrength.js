import React, { Component } from 'react';
import styles from '../forms.scss';
import zxcvbn from 'zxcvbn';
import Icon from '../../Icons';
import { Input, FormFeedback } from 'reactstrap';
import cx from "classnames";


class PasswordStrengthReveal extends Component {

  constructor(props){
    super(props);
    this.state = {
      type: 'input',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }

  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      let pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });
    }
  }

  render(){

    const {placeholder, type, id, strengthIndicator, autocomplete, touched, error, warning} = this.props;

    return(
      <div className={cx(styles.passwordWrap)}>
        <Input invalid={!!touched && error} type={this.state.type} id={id} placeholder={placeholder} onChange={strengthIndicator ? this.passwordStrength : ''} autoComplete={!autocomplete ? 'off' : 'on'}/>
        <span className={styles.passwordShowButton} onClick={this.showHide}>
          <Icon icon={this.state.type === 'input' ? 'eye_closed' : 'eye_open'} />
        </span>
        {strengthIndicator ? <span className={styles.passwordStrength} data-score={this.state.score} /> : null }
      </div>
    )
  }
}

export default PasswordStrengthReveal;