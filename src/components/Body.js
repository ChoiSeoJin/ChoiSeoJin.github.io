import React from 'react';
import '../css/alert.css';
import '../css/dropdown.css';
import '../css/reset.css';
import '../css/layout.css';
import '../css/form.css';
import '../css/input.css';
import '../css/listTable.css';
import '../css/button.css';
import '../css/slide.css';

class Body extends React.Component {
	constructor(props){
		super(props);
		this.state={
			type :"TYPE",
			port : "",
			eth : "",
			ip : "",
		};
	}
	handleChange(e){
		port:e.target.value;
	}

    render(){
        return (
        	<div id ="content">
        		<div className="layout-center">
      			  <div className="form">
           			<div className="dropdown">
               			<input className="dropdown-toggle" type="text"></input>
                		  <div className="dropdown-text">{this.state.type}</div>
               				 <ul className="dropdown-content">
                  			  <li ><a>Master</a></li>
                  			  <li><a>Worker</a></li>
                   			 <li><a>Storage</a></li>
                			</ul>
          	 		</div> 
        			<div className="inp-wrap clear">
              		<div className="port"><input type="text" placeholder="port"  /></div>
               		<div className="eth"><input type="text" placeholder="eth"  /></div>
          		    <div className="ip"><input type="text" placeholder="0.0.0.0"  /></div>
         			</div>
           		  </div>
           	
	           	   <div className="list-table">
	          		  <div className="header">
	           		    	<div className="type">TYPE</div>
	            			<div className="ip">IP ADDRESS</div>
	        		 
	        		  		<div className="status">STATUS</div>
	        		  	 </div>		
	            			<div className="body"></div>
	            			<div className="btn install disable">
	             		 		<span>INSTALL CALEB</span>
	           		 		</div>
	       			 </div>
          		 </div>
         </div>
        );
    }
}

export default Body;