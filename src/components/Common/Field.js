import React from 'react';

class Field extends React.Component {
    render() {
        return(
            <div className="form-group">
                {this.props.elementName ==='input' ?
                    <input 
                        className={this.props.name}   
                        id={this.props.name}
                        type={this.props.type} 
                        placeholder={this.props.placeholder} 
                        data-sb-validations="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                    :
                    <textarea 
                        className={this.props.name} 
                        id={this.props.name} 
                        placeholder={this.props.placeholder} 
                        data-sb-validations="required"
                        name={this.props.name} 
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                } 
                <div className="invalid-feedback" data-sb-feedback={`${this.props.name}:required`}>
                    {(this.props.touched && this.props.errors)&&
                        <span>{this.props.errors}</span>
                        
                    }
                </div>
            </div>
        )
    }
}

export default Field;