import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
	//called automaticly by react
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		//because it's an object we can't use .map we need to use lodash for that
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={ `/posts/${post.id}`}>
						{post.title}
					</Link>
				</li>
			)
		});
	}

	render() {
    	return (
    		<div>
    			<div className="text-xs-right">
    				<Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
    			</div>
    			<h3>Posts</h3>
    			<ul className="list-group">
    				{this.renderPosts()}
    			</ul>
    		</div>
    	);
  	}
}




//when we want to display something from redux
function mapStateToProps(state) {
	return { posts: state.posts };
}

//{ fetchPosts } same as mapDispatchToProps
export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);