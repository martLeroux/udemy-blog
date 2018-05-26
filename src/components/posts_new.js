import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


class PostsNew extends Component {
	renderTitleFIeld(field){
		return (
			<div>
				<input 
					type="text" 
					{...field.input}  />
			</div>
		);
	}


	render() {
    	return (
    		<div>
    			<form>
			        <Field 
    					name="title"
    					component={ this.renderTitleFIeld }
    				/>
    			</form>
    		</div>
    	);	
  	}
}




export default reduxForm({
  form: 'PostsNewForm' 
})(PostsNew);